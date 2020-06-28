const Article = require('./../models/Article')
const User = require('./../User')
const fs = require('fs')
const cloudinary = require('cloudinary')

module.exports = {
  addArticle: (req, res, next) => {
    const { text, title, claps, description } = req.body
    if (req.files.image) {
      cloudinary.uploader.upload(req.files.image.path, (result) => {
        const obj = { text, title, claps, description, feature_img: result.url != null ? result.url : '' }
        saveArticle(obj)
      })
    }
  }
}
