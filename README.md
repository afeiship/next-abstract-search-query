# next-abstract-search-query
> Abstract search query for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-abstract-search-query
```

## apis
| api  | params | description               |
| ---- | ------ | ------------------------- |
| get  | -      | Get qs like string.       |
| set  | -      | Set key/value.            |
| sets | -      | Set key/value use object. |

## usage
```js
import NxAbstractSearchQuery from '@jswork/next-abstract-search-query';

const initialState = {
  pageNo: 1,
  pageSize: 10,
  keyword: '',
  types: [],
  labels: []
};

const nxsq = new NxAbstractSearchQuery(initialState, {
  set: function(data,key,value){
    nx.set(data, key, value);
    if (!key.includes('page')) {
      data.pageNo = 1;
    }
  },
  onChange: function(inEvent){
    console.log(inEvent.target.value);
  }
});

// set/get

nxsq.set('pageNo', 2);
nxsq.get()
// 'pageNo=2&pageSize=10'

nxsq.set('labels', ['lb1', 'lb2']);
nxsq.get();
// 'pageNo=1&pageSize=10&labels=lb1,lb2'

// sets
nxsq.sets({ pageNo:2, pageSize:20 });

// get inner data
console.log(nxsq.data);

{
  pageNo: 2,
  pageSize: 10,
  keyword: '',
  types: [],
  labels: ['lb1', 'lb2']
}
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-abstract-search-query/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-abstract-search-query
[version-url]: https://npmjs.org/package/@jswork/next-abstract-search-query

[license-image]: https://img.shields.io/npm/l/@jswork/next-abstract-search-query
[license-url]: https://github.com/afeiship/next-abstract-search-query/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-abstract-search-query
[size-url]: https://github.com/afeiship/next-abstract-search-query/blob/master/dist/next-abstract-search-query.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-abstract-search-query
[download-url]: https://www.npmjs.com/package/@jswork/next-abstract-search-query
