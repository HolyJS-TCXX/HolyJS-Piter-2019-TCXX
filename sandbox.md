# sandbox keyword
## motivation
синтаксический сахар для запуска кода "в песочнице" - не вызывает никаких сайд-эффектов во время исполнения.

## high-level api
### Например, исполенение кода из файла
```javascript
const result = sandbox './file.js';
```

### equivalent for this:
```javascript
function sandbox(file) {
  return new Promise((resolve, reject) => {
      const worker = new Worker(file);
      worker.onMessage(resolve);
  });
}

const result = await sandbox('./file.js');
```

> Разумеется, поддерживается также исполнение "в песочнице" функций и строк, по аналогии с `eval`.

## FAQ
### Если во время исполнения произойдет ошибка?
`try / catch` никто не отменял.

### можно ли установить ограничения на исполняемый код? по памяти, времени исполнения?
конечно
```javascript
await sandbox ["file.js", {memory, timeout}
```

### можно ли передать параметры в исполнчемый код?
конечно
```javascript
await sandbox ["file.js", {arguments}];
```

### будут ли платформозависимые  разрешения и ограничения?
это возможно. например, для node.js можно добавить ограничения на доступ к файловой системе.
```javascript
await sandbox  ["file.js", {fs: "readonly"}];
```

### как насчет запуска интерактивного кода таким образом?
конечно! можно использовать конструкцию generator sandbox!
```javascript
const cli = sandbox* "file.js";
const prompt1 = yield cli;
cli.next({...});
const prompt2 = yield cli;
cli.next({...});
```

> хотя для этого кода не помешала бы конструкция `top level yield` :)
