# ah-poc-sapi-ca-bal

Stub SAPI PoC for current account balances

[![Build Status](https://travis-ci.com/zuhlke/ah-poc-sapi-ca-bal.svg?branch=master)](https://travis-ci.com/zuhlke/ah-poc-sapi-ca-bal)

## Run locally

`./run-locally`, `npm start` or `node index.js`

- It runs on port 3000

## Run tests

There are no tests

## Travis pipeline

- Pipeline file is `.travis.yml`.
- Travis by default runs `npm ci` and `npm test`. After that we deploy to PCF.
- Environment variables are injected by travis.