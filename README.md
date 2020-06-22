# dexplore

### common library for dfuse blockchain explorers

To develop locally, use yarn link:

1. clone this repo
2. `yarn install`
3. `yarn build`
4. Link the package to use in your explorer project
```
yarn link
```
5. Link react, since we need to use the same react instance or react will break
```
cd node_modules/react
yarn link
```
6. Link react-dom, since we need to use the same react-dom instance or react will break
```
cd ../../node_modules/react-dom
yarn link
```
7. Use the linked packages in your explorer
```
cd ../../../YOUR_EXPLORER
yarn link dexplore
yarn link react
yarn link react-dom
```