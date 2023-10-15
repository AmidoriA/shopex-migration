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
npx knex migrate:make create_users_table --env developmentStoreFrontApi
```

To run the migrations:
```bash
npx knex migrate:latest --env developmentStoreFrontApi
```

To rollback the migrations:
```bash
npx knex migrate:rollback --env developmentStoreFrontApi
```

Seeding Data
```bash
npx knex seed:make initial_users --env developmentStoreFrontApi
```

Env List
* developmentStoreFrontApi
* developmentGoogleAuth

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

Chaining
```javascript
exports.up = function(knex) {
  return knex.schema
    .createTable('users', function(table) {
      table.increments('id').primary();
      table.string('username').notNullable();
      table.string('email').unique().notNullable();
      table.string('password').notNullable();
    })
    .then(() => {
      return knex.schema.createTable('posts', function(table) {
        table.increments('id').primary();
        table.string('title').notNullable();
        table.string('content').notNullable();
        table.integer('user_id').unsigned().references('id').inTable('users');
      });
    });
};
```


```yaml
name: On Release

on:
  release:
    types:
      - published

jobs:
  take-action:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2

      - name: Run action based on release version
        run: |
          VERSION=${{ github.event.release.tag_name }}
          PUBLISH_SERVICE="${VERSION%%-*}"

          if [[ $VERSION == core-* ]]; then
            echo "Running core action"
            # Insert actions for core releases here, e.g.:
            # sh ./scripts/core-release.sh
          elif [[ $VERSION == auth-* ]]; then
            echo "Running auth action"
            # Insert actions for auth releases here, e.g.:
            # sh ./scripts/auth-release.sh
          else
            echo "Unrecognized version pattern, skipping."
          fi
```