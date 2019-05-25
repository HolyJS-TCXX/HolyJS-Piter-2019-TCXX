# try stackoverflow

## motivation
многие проблемы уже решены другими разработчиками, позволяет использовать чужие наработки.

## high-level api
Есть несколько возможностей использования SO в вашем коде.


### import code
```javascript
import {"exit vim" as exitVim} from "stackoverflow";
```

### dynamic import
```javascript
const exitVim = await import("exit vim", "stackoverflow")
```

### try catch extensions
```javascript
try {
  ... code
} catch (error) untill {
  const resolve = await import(error, "stackoverflow");
  resolve(error);
}
```
