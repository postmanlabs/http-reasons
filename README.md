# http-reasons

A simple module that allows one to lookup extended information pertaining to a HTTP response code.

## Usage

```terminal
npm install http-reasons --save-dev;
```

```javascript
var httpReasons = require('http-reasons');

console.log(httpReasons.lookup(122));
// outputs
// {
//   "name": "Request-URI too long",
//   "detail": "This is a non-standard IE7-only code which means the URI is longer than a maximum of 2083 characters."
// }
```
