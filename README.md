# Next.JS + Redux + Redux Await Starter
A simple starter kit with Next.js

Feature from next.js:
* Support server rendering
* Best for pageSpeed google
* Support hot loading

## View [demo](https://nextjs-mwmkkomeno.now.sh/)

## Installation
```
git clone https://github.com/tungtung-dev/nextjs-redux-starter.git
cd nextjs-redux-starter && yarn install (or npm install)

npm run dev 
# open http://localhost:6789

npm run build
# build product

npm run start 
# start production after build

npm run restart 
# rebuild and restart production
```

### Structure
```
├── api
├── components
├── pages
|	├── index.js (Movie lists)
|	├── movie.js (View movie)
├── utils
├── redux
|	├── actions
|	├── reducers
|	├── actions
|	├── connect.js (custom connect wrapper)
|	├── createStore.js (create store)
├── package.json
├── server.js
└── config.js
```

## Documents
* [Next.js](https://github.com/zeit/next.js)
* [Learn Next.js](http://learnnextjs.com)
* [Redux offical docs](http://redux.js.org/)
* [Redux example es6](https://github.com/yildizberkay/redux-example) 