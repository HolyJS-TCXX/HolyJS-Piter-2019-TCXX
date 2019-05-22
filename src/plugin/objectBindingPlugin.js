const gutil = require('gulp-util')
const through = require('through2')
const parse = require('./parse')

module.exports = () => through.obj(function (file, enc, cb) {
  if (file.isNull()) {
    cb(null, file)

    return
  }

  if (file.isStream()) {
    cb(new gutil.PluginError('gulp-example-plugin', 'Streaming not supported'))

    return
  }

  try {
    const data = file.contents.toString()

    file.contents = new Buffer(parse(data).toString())
  } catch (err) {
    this.emit('error', new gutil.PluginError('gulp-example-plugin', err))
  }

  this.push(file)
  cb()
})
