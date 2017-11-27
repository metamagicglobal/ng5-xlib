<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/metamagicglobal/ng5-xlib/master/demo/src/assets/logo.svg">
</p>

# ng5-xlib - Angular library built with ❤.

[![npm version](https://badge.fury.io/js/ng5-xlib.svg)](https://badge.fury.io/js/ng5-xlib)
[![Build Status](https://travis-ci.org/metamagicglobal/ng5-xlib.svg?branch=master)](https://travis-ci.org/metamagicglobal/ng5-xlib)
[![Coverage Status](https://coveralls.io/repos/github/metamagicglobal/ng5-xlib/badge.svg?branch=master)](https://coveralls.io/github/metamagicglobal/ng5-xlib?branch=master)
[![dependency Status](https://david-dm.org/metamagicglobal/ng5-xlib/status.svg)](https://david-dm.org/metamagicglobal/ng5-xlib)
[![devDependency Status](https://david-dm.org/metamagicglobal/ng5-xlib/dev-status.svg?branch=master)](https://david-dm.org/metamagicglobal/ng5-xlib#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/metamagicglobal/ng5-xlib.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://metamagicglobal.github.io/ng5-xlib

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `ng5-xlib` via:
```shell
npm install --save ng5-xlib
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ng5-xlib`:
```js
map: {
  'ng5-xlib': 'node_modules/ng5-xlib/bundles/ng5-xlib.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'ng5-xlib';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'ng5-xlib';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'ng5-xlib';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2017 meta-magic-global. Licensed under the MIT License (MIT)

