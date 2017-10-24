module.export = (field, resource) => {
  return sequelize => require('./query')(sequelize)(`
    CREATE OR REPLACE FUNCTION ${resource.name}_${field.name} (item ${resource.name}) RETURNS ${field.type} AS $$
    SELECT content.value::${field.type} from content, "itemVersions" WHERE content.version = "itemVersions".id AND "itemVersions".id = (select max(id) from "itemVersions") AND content.name = '${field.name}'   
    $$ language sql stable
  `)
}

/*
CREATE OR REPLACE FUNCTION people_dob (item people) RETURNS INTEGER AS $$
    SELECT content.value::INTEGER from content, "itemVersions" WHERE content.version = "itemVersions".id AND "itemVersions".id = (select max(id) from "itemVersions") AND content.name = 'dob'
$$ language sql stable;
*/