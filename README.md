custom-multi-selector
=====================

custom multi selector as an angular directive

![example] (https://dl.dropboxusercontent.com/u/6237556/selector.png "example")

The multi selector was developed as independent component (a directive).
The one are supplied with all necessary staff style/template/js. 

You should add it to your page e.g.
```
<cs-multi-selector data="Contractors"></cs-multi-selector>
```
use data to provide the componnet by list of neccessary info in format 
```
[
  {
  img: 'path to image',
  'title: 'title of the row',
  'description of the row'
  }, ...
]
```

And include module with custom components
```
angular.module('app', ['cs.comp'])
```
The directive will load necessary styles and data.

