__path = process.cwd()

var express = require('express');
var router = express.Router();

router.get('/docs', (req, res) => {
    res.sendFile(__path + '/views/docs.html')
})
router.get('/', (req, res) => {
    res.sendFile(__path + '/views/index.html')
})
router.get('/about', (req, res) => {
    res.sendFile(__path + '/views/about.html')
})
router.get('/docs/downloader', (req, res) => {
    res.sendFile(__path + '/views/downloader.html')
})
router.get('/docs/random', (req, res) => {
    res.sendFile(__path + '/views/random.html')
})

module.exports = router
