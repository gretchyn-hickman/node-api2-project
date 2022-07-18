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
router.put('/:id', async (req, res) => {
    const {title, contents} = req.body
    try{
        const stuff = await Post.findById(req.params.id)
        if (!stuff) {
            res.status(404).json({ message: "The post with the specified ID does not exist" })
        } else {
            if (!title || !contents) {
                res.status(400).json({ message: "Please provide title and contents for the post" })
            } else{
                
            }

        }

    }
    catch{
        res.status(500).json({message: "The post information could not be modified"})
    }
})

//DELETE END POINT
router.delete('/:id', (req, res) => {

})

//GET ENDPOINT
router.get('/:id/messages', (req, res) => {

})




module. exports = router