const baseQuery = require('../query')

// Create a New Resouce and add basic functions
module.exports = sequelize => {
  const query = baseQuery(sequelize)
  return async resource => {
    const select = await query(`SELECT * FROM resources WHERE name = '${resource.name}'`)
    console.log(select[0][0])
    if (select && select[0] && typeof select[0][0] === 'undefined') {
      await query(`DROP TYPE IF EXISTS ${resource.name} CASCADE`).then(() => {})
      
      await query(`CREATE TYPE ${resource.name} AS
      (
          id integer,
          resourceId integer,
          name text,
          createdAt timestamptz,
          updatedAt timestamptz
      );`)

      // We set the entry point for this resource to a list of items
      await query(`CREATE OR REPLACE FUNCTION ${resource.name} () returns setof ${resource.name} as $$
        SELECT items.id, items."resourceId", items.name, items."createdAt", items."updatedAt" FROM items, resources WHERE resources.name = '${resource.name}'
        $$ language sql stable;`)

      // Creates a resource function on the named resource   
      await query(`CREATE OR REPLACE FUNCTION ${resource.name}_resource (item ${resource.name}) returns setof resources as $$
        SELECT * from resources where name = '${resource.name}'
        $$language sql stable;`)
      await query(`INSERT INTO resources (name, "createdAt", "updatedAt") VALUES ('${resource.name}', 'now', 'now')`)
      
      return ({error: false})
    } else {
      return ({error: 'Resource already exists'})
    }
  }
}

/*
    DROP TYPE IF EXISTS people CASCADE;
    CREATE TYPE people AS
    (
        id integer,
        resourceId integer,
        name text,
        createdAt timestamptz,
        updatedAt timestamptz
    );

    CREATE OR REPLACE FUNCTION people () returns setof people as $$
      SELECT items.id, items."resourceId", items.name, items."createdAt", items."updatedAt" FROM items, resources WHERE resources.id = items."resourceId" AND resources.name = 'people'
    $$ language sql stable;

    CREATE OR REPLACE FUNCTION people_resource (item people) returns setof resources as $$
      SELECT * from resources where name = 'people'
    $$language sql stable;`
*/
