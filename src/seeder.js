const attachToResource = require('smart-site-templates').attachToResource
const gql = require('graphql-tag')
module.exports = async function (client) {
  const template_columns = {
    'default_fields': 'json'
  }
  const result = await client.mutate({
    mutation: gql`
    mutation {
      createResource(input:{
        resource:{
          name: "admin_pages"
        }
      }) {
        clientMutationId
      }
    }`
  })
  console.log(result)
  if (result.error) {
    console.error('THERE WAS AN ERROR in CREATING ADmin PAGes')
    return
  }
  const resource = await client.query({
    query: gql`
      {
        resourceByName(name: "admin_pages"){
          id
        }
      }
    `
  })
  console.log(resource)
  return attach = await attachToResource(resource.data.id)
}
