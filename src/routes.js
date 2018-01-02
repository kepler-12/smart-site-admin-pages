const gql = require('graphql-tag')

module.exports = async function (Vue, apolloClient) {
  const adminPages = await apolloClient.query({
    query: gql`
      {
        page{
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
      }
      `
  })
  const pageList = adminPages.data.page.nodes[0].items.nodes.map(page => {
    return {
      path: page.path,
      name: page.name,
      component: Vue.component('defaultPage')
    }
  })
  return [...pageList]
}
