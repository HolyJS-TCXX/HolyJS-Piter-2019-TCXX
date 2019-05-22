const a = {
  value: 2,
  foo: {
    name: 'cat'
  }
}

const foo = a.foo

const b = {
  value: 3,
  foo
}

console.log('------------------------- BSTUFF\'S CASE')
console.log('foo[\'../value\'] =', foo['../value'])
console.log('a.foo[\'../value\'] =', a.foo['../value'])
console.log('b.foo[\'../value\'] =', b.foo['../value'], '| here also 2 because object \'b\' was created by object \'foo\', which refers to the object \'a\'')
console.log('foo[\'../../\'] =', foo['../../'])
try {
  const some = foo['../../../']
} catch (e) {
  console.log('foo[\'../../../\'] =', `Exception thrown - '${e.message}'`)
}
