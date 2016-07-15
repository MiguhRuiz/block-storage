# block-storage

This module connects to the Digital Ocean's API and allow you to operate over volumes.

  > Block Storage is currently in Beta. Some things may not be as you spect. See documentation before using this module.

  > [See Digital Ocean Volumes API Documentation](https://developers.digitalocean.com/documentation/v2/block-storage-beta/)

<center>[![NPM](https://nodei.co/npm/block-storage.png)](https://nodei.co/npm/block-storage/)</center>

## Table of Concepts

- [Installation](#installation)
- [Authentication: Bearer Token](#authentication-bearer-token)
- [Available resources and methods(API)](#available-resources-and-methodsapi)
  - [volumes.get()](#volumesget)
  - [volumes.list()](#volumeslist)
  - [volumes.create()](#volumescreate)
  - [volumes.actions()](#volumesactions)
  - [volumes.attach()](#volumesattach)
  - [volumes.detach()](#volumesdetach)
  - [volumes.delete()](#volumesdelete)
  - [volumes.resize()](#volumesresize)
- [Ussage](#ussage)
  - [Using callbacks](#using-callbacks)
  - [Using `async` functions(ES7/ES2016)](#using-async-functionses7es2016)
- [License MIT](#license-mit)

## Installation

To download the Block Storage API Client that I've made simply download it via NPM. NPM is always going to have the latest stable version of it. Be free to add any flag after the command such as `--save` or `--save-dev`

```bash

$ npm install block-storage

```

## Authentication: Bearer Token

To use the module you have to give it a token. This token allows you to use the entire Digital Ocean API.  [Click here to generate a Digital Ocean token using your account](https://cloud.digitalocean.com/settings/api/tokens/new)

```js

const Volumes = require('block-storage')
const volumes = new Volumes({
  token: '0X0X0X0X0X0X0X0X0X'
})

```

## Available resources and methods(API)

`volumes` means the variable that has the client to connect to the Digital Ocean Volumes API correctly configured. See authentication again to see more about that variable.

#### volumes.get()

Brings a single volume using its id.

```js

volumes.get(volumeId, (err, volume) => {
  if (err) console.log(err)
  console.log(volume)
})

```
#### volumes.list()

Brings a list of all volumes on your Digital Ocean's account.

```js

volumes.list( (err, volumes) => {
  if (err) console.log(err)
  console.log(volumes)
})

```

#### volumes.create()

Creates a volume.

```js

volumes.create({
    "size_gigabytes": 10,
    "name": "example",
    "description": "An awesome Block Storage unit",
    "region": "nyc1"
}, (err, volume) => {
    if (err) console.log(err)
    console.log(volume)
})

```

#### volumes.actions()

Retrieves all actions that have been executed on a volume.

```js

volumes.actions(volumeId, (err, actions) => {
  if (err) console.log(err)
  console.log(actions)
})

```

#### volumes.attach()

Attaches a volume into a droplet.

```js

volumes.attach(volumeId, dropletId, (err, res) => {
  if (err) console.log(err)
  console.log(res)
})

```

#### volumes.detach()

Detaches a volume out of a droplet.

```js

volumes.detach(volumeId, dropletId, (err, res) => {
  if (err) console.log(err)
  console.log(res)
})

```

#### volumes.delete()

Deletes a single volume.

```js

volumes.delete(volumeId)

```

#### volumes.resize()

Resizes a single volume.

```js

volumes.resize(volumeId, gigabytes, (err, obj) => {
  if (err) console.log(err)
  console.log(obj)
})

```

## Ussage

#### Using callbacks

```js

volumes.get(volumeId, (err, volume) => {
  if (err) console.log(err)
  console.log(volume)
})

```

#### Using `async` functions(ES7/ES2016)

```js

async function getVolume() {
  try {
    let volume = await volumes.get(volumeId)
    console.log(volume)
  }
  catch (e) {
    console.log(e)
  }
}

```

## License MIT

Copyright (c) 2016 - Miguel Ruiz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
