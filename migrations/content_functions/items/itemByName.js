module.export = resource => {
  return sequelize => require('./query')(sequelize)(
    `
    DROP TYPE IF EXISTS ${resource.name};
    CREATE TYPE ${resource.name} AS
    (
        id integer,
        resourceId integer,
        name text,
        createdAt timestamptz,
        updatedAt timestamptz
    );

    CREATE OR REPLACE FUNCTION ${resource.name} () returns setof ${resource.name} as $$
      SELECT items.id, items."resourceId", items.name, items."createdAt", items."updatedAt" FROM items, resources WHERE resources.name = '${resource.name}'
    $$ language sql stable;

    CREATE OR REPLACE FUNCTION ${resource.name}_resource (item ${resource.name}) returns setof resources as $$
      SELECT * from resources where name = '${resource.name}'
    $$language sql stable`
  )
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
