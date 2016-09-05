const jsonServer = require('json-server');
const Chance = require('chance');
const shortid = require('shortid');

const chance = new Chance();

// Create a chance mixin for shortids
chance.mixin({ shortid: () => shortid.generate() });

// Create fake data
const data = {};

// Create fake users
data.users = [];
for (let i = 1; i <= 10; i++) {
  data.users.push({
    id: chance.shortid(),
    name: chance.name(),
  });
}

// Create fake lists
data.lists = [];
for (let i = 1; i <= 100; i++) {
  data.lists.push({
    id: chance.shortid(),
    userId: chance.pickone(data.users).id,
    title: chance.sentence({ words: 5 }).slice(0, -1),
  });
}

// Create fake item
data.items = [];
for (let i = 1; i <= 1000; i++) {
  data.items.push({
    id: chance.shortid(),
    listId: chance.pickone(data.lists).id,
    text: chance.sentence({ words: 5 }).slice(0, -1),
    completed: chance.bool({ likelihood: 20 }),
  });
}

// Create json server
const server = jsonServer.create();
server.use(jsonServer.defaults());
server.use(jsonServer.rewriter({ '/api/': '/' }));
server.use(jsonServer.router(data));
server.listen(3000, () => {
  console.log('API is listening at http://localhost:3000/');
});
