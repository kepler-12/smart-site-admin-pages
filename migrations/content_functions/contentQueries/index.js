const query = require('../query')
module.exports = sequelize => {
  return (field, resource) => {
    query(sequelize)(`
      CREATE OR REPLACE FUNCTION ${resource.name}_${field.name} (item ${resource.name}) RETURNS ${field.type} AS $$
      SELECT content.value::${field.type} from content, "itemVersions" WHERE content.version = "itemVersions".id AND "itemVersions".id = (select max(id) from "itemVersions") AND content.name = '${field.name}'   
      $$ language sql stable
    `)
  }
}