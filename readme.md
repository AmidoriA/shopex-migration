Firstly, install knex and MySQL driver for Node.js:
```bash
npm install knex mysql
```

Then, initialize a new knex project:
```bash
npx knex init
```

To create a new migration, run:
```bash
npx knex migrate:make create_users_table
```

To run the migrations:
```bash
npx knex migrate:latest
```

To rollback the migrations:
```bash
npx knex migrate:rollback
```

Seeding Data
```bash
npx knex seed:make initial_users
```

```javascript
// Seeds file
exports.seed = function(knex) {
  // Deletes all existing entries
  return knex('users').del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'John', email: 'john@example.com', age: 30},
        {username: 'Doe', email: 'doe@example.com', age: 25}
      ]);
    });
};
```