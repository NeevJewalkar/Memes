// index.js

// change the value of the path to the path for where you want your memes
let path = '~/Your/Path/Here'

// modules
const fetch = require('node-fetch')
const download = require('image-downloader')

// URL
let url = 'https://www.reddit.com/r/dankmemes/.json'

// fetching
fetch(url)
.then(res => res.json()
.then(result => {
    const options = {
        url: result.data.children[Math.floor(Math.random()*(result.data.children.length-1+1)+1)].data.url_overridden_by_dest,
        dest: path                // will be saved to /path/to/dest/image.jpg
    }
    download.image(options)
}))