My electron boilerplate
======
* live reload (electron-connect)
* React.js and flux
* Javascript on babel
* css on stylus
* task on gulp

Get started
======
1. `npm i`
2. `npm start` or `gulp`



Application distribution
======

### Pre-requisites for distribution
##### Mac OS X
```
$ brew install wine makensis
```

##### Windows
Download [nullsoft scriptable installer](http://nsis.sourceforge.net/Download) and include NSIS in your PATH.
```
set PATH=%PATH%;C:\Program Files (x86)\NSIS
```

### distribution
How to generate installer packages are follows.
```
$ npm run dist

# for Windows
target/dist/win/sample Setup.exe

# for Mac OS X
target/dist/osx/sample.dmg
```
