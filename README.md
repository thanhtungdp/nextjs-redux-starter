# Next.JS + Redux + Redux Await Starter
A simple starter kit with Next.js

Feature from next.js:
* Support server rendering
* Best for pageSpeed google
* Support hot loading

## Installation
```nginx
git clone https://github.com/tungtung-dev/nextjs-redux-starter.git
cd nextjs-redux-starter && yarn install (or npm install)
npm run dev # dev => open http://localhost:6789
npm run build # build product
npm run start # start production after build
npm run restart # rebuild and restart production
```

### Structure
```nginx
Root
├── api
├── components
├── pages
|	├── index.js (Movie lists)
|	├── index.js (View movie)
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