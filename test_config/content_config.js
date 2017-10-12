
module.exports = [{
  name: 'Books',
  properties: [
    {
      name: 'id',
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: 'INTEGER'
    },
    {
      name: 'SomethingNew',
      type: 'JSON'
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
  name: 'Author',
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
