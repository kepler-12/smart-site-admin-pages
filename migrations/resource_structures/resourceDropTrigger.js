
'use strict'
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`CREATE TRIGGER drop_resource BEFORE UPDATE OR DELETE ON resources
        FOR EACH ROW EXECUTE PROCEDURE drop_resource(); `)
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(`DROP TRIGGER drop_resource ON resources;`)
  }

}


/*

CREATE TRIGGER register_resource BEFORE INSERT OR UPDATE ON resources
        FOR EACH ROW EXECUTE PROCEDURE register_resource();
*/