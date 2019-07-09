
const uuidv4 = require('uuid/v4')

exports.seed = (knex, Promise) => {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: uuidv4(),
          name: 'Winston',
          age: 22,
          type: 'Domestic Bunny'
        },
        {
          id: uuidv4(),
          name: 'Pancake',
          age: 1,
          type: 'White Bunny'
        },

      ]);
    });
};
