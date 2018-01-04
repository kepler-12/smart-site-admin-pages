const gql = require('graphql-tag')

module.exports = async function (Vue, apolloClient) {
let pageList = []
  try {
    apolloClient.query({
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
    pageList = adminPages.data.page.nodes[0].items.nodes.map(page => {
      return {
        path: page.path,
        name: page.name,
        component: Vue.component('defaultPage')
      }
    })
  } catch(e){
    console.warn("!!THERE WAS AN ERROR IN RETRIEVING PAGES FROM THE SPECIFIED GRAPHQL CONNECTION", e)
  } finally{
    return [...pageList]
  }
}
