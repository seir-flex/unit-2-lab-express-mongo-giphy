const express = require('express')
const Gif = require('../db/schema')

const router = express.Router()

router.get('/', (req, res) => {
  Gif.find({}).then(gifs => {
    res.json(gifs)
  })
})

router.get('/:id', (req, res) => {
  Gif.findById(req.params.id).then(gif => {
    res.json(gif)
  })
})

router.post('/', (req, res) => {
  Gif.create(req.body).then(gif => {
    Gif.find({}).then(gifs => {
      res.json(gifs)
    })
  })
})

router.put('/:id', (req, res) => {
  Gif.findOneAndUpdate({ _id: req.params.id }, req.body).then(gif =>
      Gif.find({}).then(gifs => {
        res.json(gifs)
      })
    )
})

router.delete('/:id', (req, res) => {
  Gif.findOneAndRemove({ _id: req.params.id }, req.body).then(gif =>
    Gif.find({}).then(gifs => {
      res.json(gifs)
    })
  )
})

module.exports = router
