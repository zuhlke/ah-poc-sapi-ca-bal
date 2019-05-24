// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({
  'readOnly': true
});

const port = process.env.PORT || 3000;



// Add custom routes before JSON Server router
server.get('/actuator/health', (req, res) => {
  res.jsonp([{'status':'UP'}])
});

server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`Aimless Hammer PoC SAPI Customer Accounts Balances is running on 'http://localhost:${port}'`)
});
