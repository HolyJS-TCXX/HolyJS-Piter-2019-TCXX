const falafel = require('falafel')

const wrap = (source, parentName) => {
  let start = `createObject(${source}`

  if (parentName) {
    start += `, ${parentName}`
  }

  return `${start})`
}

module.exports = src => falafel(src, ({ type, parent, object, property, source, update }) => {
  if (type === 'ObjectExpression' && parent.type === 'VariableDeclarator') {
    update(wrap(source()))
  }

  if (type === 'ObjectExpression' && parent.type === 'AssignmentExpression') {
    update(wrap(source(), parent.left.object.source()))
  }

  if (type === 'MemberExpression' && object && property && property.type === 'Literal') {
    update(`getFromObject(${object.source()}, '${property.value}')`)
  }
})
