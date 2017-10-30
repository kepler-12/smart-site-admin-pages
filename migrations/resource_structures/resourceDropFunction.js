
'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`
    CREATE OR REPLACE FUNCTION drop_resource() RETURNS TRIGGER AS $drop_resource$
    BEGIN
        EXECUTE format('DROP FUNCTION %I', OLD.name);
        EXECUTE format('DROP FUNCTION %I_resource', OLD.name);
        EXECUTE format('DROP TYPE %I', OLD.name);
   IF TG_OP = 'DELETE' THEN
   RETURN OLD;
   END IF;
   
   RETURN NEW;
    END
   $drop_resource$ LANGUAGE plpgsql;   
    `)
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`DROP FUNCTION drop_resource`)
  }

}
