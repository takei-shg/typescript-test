# Typescript Test with Testem, Mocha, Chai, Sinon

### Build

```sh
npm install
npm run tsd_install # this calls package.json:scripts:tsd_install
npm run bower_install # this calls package.json:scripts:bower_install
npm run build # this calls package.json:scripts:build
```

### Test

```sh
npm run mock_server
npm run test # Testem will launch
```

for CircleCI

```sh
npm run test_ci
```
