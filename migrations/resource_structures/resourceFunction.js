
'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`
    CREATE OR REPLACE FUNCTION register_resource() RETURNS TRIGGER AS $register_resource$
    BEGIN
        -- Check that empname and salary are given
        IF NEW.name IS NULL THEN
            RAISE EXCEPTION 'empname cannot be null';
        END IF;
        
        EXECUTE format('CREATE TYPE %I AS (
          id integer,
          resourceId integer,
          name text,
          createdAt timestamptz,
          updatedAt timestamptz
        )', NEW.name);
        
        
        EXECUTE format('CREATE FUNCTION %I () returns setof %I as $$
        SELECT items.id, items."resourceId", items.name, items."createdAt", items."updatedAt" FROM items, resources WHERE resources.name = %L AND resources.id = items."resourceId"
        $$ LANGUAGE SQL stable;', NEW.name, NEW.name, NEW.name);

        EXECUTE format('CREATE OR REPLACE FUNCTION %I_resource (item %I) returns setof resources as $$
        SELECT * from resources where name = %L
        $$language sql stable;', NEW.name, NEW.name, NEW.name);
    
        RETURN NEW;
    END;
$register_resource$ LANGUAGE plpgsql;
    `)
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`DROP FUNCTION register_resources`)
  }

}
