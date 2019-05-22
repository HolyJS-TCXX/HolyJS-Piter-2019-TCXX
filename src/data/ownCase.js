const someObject = {
  propA: 'A1',
}

someObject.propB = {
  propB1: {
    propB11: 'B11',
    propB12: 'B12',
  }
}

someObject.propC = 'C1'

console.log('------------------------------ OWN CASE')
console.log('someObject =', someObject)
console.log('someObject[propA] =', someObject['propA'])
console.log('someObject[./propA] =', someObject['./propA'])
console.log('someObject.propB[\'../\'] =', someObject.propB['../'])
console.log('someObject.propB[\'../propA\'] =', someObject.propB['../propA'])
console.log('someObject.propB.propB1[\'../../\'] =', someObject.propB.propB1['../../'])
console.log('someObject.propB.propB1[\'../../propC\'] =', someObject.propB.propB1['../../propC'])
console.log('someObject.propB[\'../propB/propB1/propB11\'] =', someObject.propB['../propB/propB1/propB11'])
console.log('----------------------------------------')
