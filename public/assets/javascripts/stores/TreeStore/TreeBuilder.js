const { Client } = require('pg')
import tree from './tree.json'

export default class TreeBuilder {
  constructor() {
    /*
    const client = new Client({
      user: 'postgres',
      database: 'frontend_steel_balls'
    })
    await client.connect()
    */
    this.tree = null
  }

  buildTree() {
    this.tree = tree
  }
}
