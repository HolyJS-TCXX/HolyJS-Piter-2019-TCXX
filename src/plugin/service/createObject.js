const isObject = value => value !== null && Object.prototype.toString.call(value) === '[object Object]'

const createObject = (object, parent) => {
  Object.keys(object).reduce((acc, key) => {
    const value = acc[key]

    if (isObject(value)) {
      acc[key] = createObject(value, object)
    }

    return acc
  }, object)

  if (parent && object.__proto__ === Object.prototype) {
    object.__proto__ = parent
  }

  return object
}
