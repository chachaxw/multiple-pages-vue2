# multiple-pages-vue2
> Vue2 multiple pages front-end project by webpack and cooking

## Development

```shell
npm i cooking-cli -g
npm run dev
```

## Mock server
```
npm run server
```

## Production
```
npm run dist
```
## Screen Shot
![screen shot](http://7xqacx.com1.z0.glb.clouddn.com/multiple-pages-vue2.jpg)

## Docs
[cooking doc](http://elemefe.github.io/cooking/)
[vue2 doc](https://cn.vuejs.org)
[axios doc](https://github.com/mzabriskie/axios)
[koa doc](http://koa.bootcss.com)

## TroubleShooting

When running npm run dev Encountered error:
```
MSBUILD : error MSB4132: The tools version "2.0" is unrecognized. Available tools versions are "4.0".
```
you can try:
open up a new cmd as administrator and run this command:
```
npm install --global --production windows-build-tools
```
then
```
npm config set msvs_version 2015 --global
```
close all instances of shell/cmd, reopen a cmd (regular this time, non-administrator) return to your directory where you are trying to run npm install and run it again
-----From [This article](https://github.com/chjj/pty.js/issues/60)
