const { version } = require('./package.json')

const constructClientAgents = (clientAgents = []) => {
  const vuepressAgents = `Meilisearch Vuepress (v${version})`

  return clientAgents.concat(vuepressAgents)
}

module.exports = {
  constructClientAgents
}
