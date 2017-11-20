const gql = require('graphql-tag')

module.exports = async function (Vue) {
  const apolloClient = Vue.prototype.$apolloClient
  const adminPages = await apolloClient.query({
    query: gql`
      {
        adminPages{
          nodes{
            items{
              nodes{
                name
                path
                template
              }
            }
          }
        }
      }`
  })
  console.log(adminPages)
  return adminPages.data.adminPages.nodes[0].items.nodes.map(page => {
    return {
      path: page.path,
      name: page.name,
      component: Vue.component(page.template)
    }
  })
}
