const gql = require('graphql-tag')

module.exports = async function (Vue) {
  const apolloClient = Vue.prototype.$apolloClient
  const adminPages = apolloClient.query({
    query: gql`
      {
        adminPages{
          nodes{
            path
            name
            template
          }
        }
      }`
  })
  return adminPages.data.adminPages.nodes.map(page => {
    return {
      path: page.path,
      name: page.name,
      component: Vue.component(page.template)
    }
  })
}
