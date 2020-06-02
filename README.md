# bootstrap-parcel-bytesize-icons

> Bootstrap 4.x Template with Parcel Bundler and Bytesize Icons

Use one of the following commands:

* `npm run serve`: Starts a server and watches for changes
* `npm run build`: Creates a production build with minification
* `npm run clear`: Removes the `dist` folder

**Version 1: Pure Parcel**

```bash
$ npm run build

dist/main.ad4e9dd6.js                              169.32 KB    4.46s
├── node_modules/jquery/dist/jquery.js              87.31 KB    2.04s
├── node_modules/bootstrap/dist/js/bootstrap.js     58.28 KB    2.76s
├── node_modules/popper.js/dist/esm/popper.js       20.65 KB    923ms
├── node_modules/process/browser.js                  1.67 KB    1.07s
└── src/main.js                                        345 B    150ms

dist/main.efbf3977.css                              15.33 KB    4.30s
dist/index.html                                      1.01 KB    446ms
```

**Version 2: With `purgecss`**

```bash
$ npm run build

dist/main.ad4e9dd6.js                              169.32 KB    26ms
├── node_modules/jquery/dist/jquery.js              87.31 KB     2ms
├── node_modules/bootstrap/dist/js/bootstrap.js     58.28 KB     2ms
├── node_modules/popper.js/dist/esm/popper.js       20.65 KB     2ms
├── node_modules/process/browser.js                  1.67 KB     1ms
└── src/main.js                                        345 B     1ms

dist/index.html                                      1.01 KB     8ms
dist/main.efbf3977.css                                 575 B    39ms
```

**Version 3: With `popover` example and individual Bootstrap plugins**

```bash
$ npm run build

dist/main.348f24c3.js                            130.31 KB    255ms
├── node_modules/jquery/dist/jquery.js            87.31 KB      3ms
├── node_modules/popper.js/dist/esm/popper.js     20.65 KB      1ms
├── node_modules/bootstrap/js/dist/tooltip.js     13.13 KB      1ms
├── node_modules/bootstrap/js/dist/popover.js      3.59 KB      2ms
├── node_modules/bootstrap/js/dist/util.js         2.46 KB      1ms
├── node_modules/process/browser.js                1.67 KB      1ms
└── src/main.js                                      426 B    197ms

dist/main.9fa4ac0b.css                             2.77 KB     73ms
dist/index.html                                    1.21 KB     30ms
```
