## motivation
Описывает набор инструкций, которые будут выполняться только тогда, когда внешнему коду потоебуется результат исполнения этих инструкций.

## примеры из других языков
LINQ в .NET

## high-level api
```javascript
const result = linq array.map(...).filter(...).reduce(...);
...

console.log(result[0]) // resul
```

### Принудительное исполнение
```javascript
const result = linq array.map(...).filter(...);
// result не будет вычислен
...
(fuzzy result).reduce(...);
// вычисляется значение на момент вызова fuzzy, а затем в очередь вычислений добавляется новый вызов

console.log(result[0])
```
