# Dutch

[![Build Status](https://travis-ci.org/davidhazeland/dutch.svg?branch=master)](https://travis-ci.org/davidhazeland/dutch)

### Installation

To install dependency packages:

```
npm install && bower install
```

To build project:

```
npm dist
```

To test project:

```
npm test
```

To run project:

```
npm start
```

### Configuration

- Activate Google Analytics Real Time Reporting and Google AdSense Management API

- Go to `src/config/dist.js` to setup your config


### Note

If require `semantic-ui` module error, try to fix line 12 in `bower_components/semantic/bower.json` follow:

```json
"main": [
  "dist/semantic.css",
  "dist/semantic.js"
]
```
