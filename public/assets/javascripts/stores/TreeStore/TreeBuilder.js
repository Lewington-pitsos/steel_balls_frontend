//const { Client } = require('pg')
import tree from './tree.json'
import longTree from './long_tree.json'

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest

export default class TreeBuilder {
  constructor() {
    this.trees = {
      3: tree,
      4: longTree
    }
    this.tree = null
  }

  buildTree(num=3) {
    this.tree = this.trees[num]
  }
}
