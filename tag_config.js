
module.exports = [{
  name: 'Categories',
  properties: [
    {
      name: 'id',
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: 'INTEGER'
    },
    {
      name: 'name',
      type: 'STRING'
    },
    {
      name: 'type',
      type: 'STRING'
    },
    {
      name: 'content',
      type: 'JSON'
    }
  ]
},
{
  name: 'Sizes',
  properties: [
    {
      name: 'id',
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: 'INTEGER'
    },
    {
      name: 'name',
      type: 'STRING'
    },
    {
      name: 'type',
      type: 'STRING'
    },
    {
      name: 'content',
      type: 'JSON'
    }
  ]
}]
