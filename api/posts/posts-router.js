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
    res.json(stuff)
}
catch (err) {
    res.status(404).json({ message: "The post with the specified ID does not exist" })
}
})


// POST ENDPOINT
router.post('/', (req, res) => {

})

//PUT ENDPOINT
router.put('/:id', (req, res) => {

})

//DELETE END POINT
router.delete('/:id', (req, res) => {

})

//GET ENDPOINT
router.get('/:id/messages', (req, res) => {

})




module. exports = router