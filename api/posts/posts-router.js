// implement your posts router here
const express = require('express')
const Post = require('./posts-model')
const router = express.Router()


// GET ENDPOINTS (1, 2)
router.get('/', (req, res) => {
Post.find()
.then(found => {
    res.json(found)
})

.catch(err => {
    res.status(500).json({ message: "The posts information could not be retrieved" })
})
})

router.get('/:id', async (req, res) => {
try {
    const stuff = await Post.findById(req.params.id)
if (!stuff){
    res.status(404).json({ message: "The post with the specified ID does not exist" })
}else res.json(stuff)
}
catch (err) {
    res.status(404).json({ message: "The post with the specified ID does not exist" })
}
})


// POST ENDPOINT
router.post('/', (req, res) => {
    const {title, contents} = req.body
if (!title || !contents) {
    res.status(400).json({ message: "Please provide title and contents for the post" })
} else {
Post.insert({title, contents})
.then(({id}) => {
    return Post.findById(id)
})
.then(post => {
    res.status(201).json(post)
})
.catch(err => {
    res.status(500).json({ message: "There was an error while saving the post to the database" })
})
}
})

//PUT ENDPOINT
router.put('/:id', (req, res) => {
    if(!req.body.title || !req.body.contents) return res.status(400).json({ message: "Please provide title and contents for the post" });
    postModel.update(req.params.id, req.body)
    .then(post => {
        console.log(post)
        if(!post) return res.status(404).json({ message: "The post with the specified ID does not exist" });
        res.status(200).json({...req.body, id: post})
    }).catch(() => res.status(500).json({ message: "The post information could not be modified" }))
})

router.delete('/:id', (req, res) => {
    let postObj;
    postModel.findById(req.params.id).then(post => {
        postObj = post;
        return postModel.remove(req.params.id)
    }).then(() => {
        if(!postObj) return res.status(404).json({ message: "The post with the specified ID does not exist" });
        res.json(postObj)
    }).catch(() => res.status(500).json({ message: "The post could not be removed" }))
})

router.get('/:id/comments', (req, res) => {
    postModel.findPostComments(req.params.id)
        .then(post => {
            if(post.length===0) return res.status(404).json({ message: "does not exist" })
            res.json(post)
        }).catch(() => res.status(500).json({ message: "The comments information could not be retrieved" }))
})

module. exports = router