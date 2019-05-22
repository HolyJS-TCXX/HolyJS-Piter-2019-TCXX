const getFromObject = (object, path) => {
  if (typeof path !== 'string' || !path.includes('/')|| !path.includes('.')) {
    return object[path]
  }

  const newPath = (path[0] === '.' && path[1] === '/') ? path.substr(2, path.length) : path
  const levels = newPath.split('/')

  return levels.reduce((acc, item, index) => {
    if (typeof acc === 'undefined') {
      throw new Error('undefined is not an object')
    }

    if (!item) {
      return acc
    }

    if (levels.length - 1 !== index && item === '..' && acc.__proto__) {
      return acc.__proto__
    }

    return acc[item]
  }, object)
}
