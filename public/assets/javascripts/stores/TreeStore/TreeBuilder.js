//const { Client } = require('pg')
import tree from './tree.json'
import longTree from './long_tree.json'

export default class TreeBuilder {
  constructor() {
    this.trees = {
      3: tree,
      4: longTree
    }
    this.tree = null
  }

  buildBasicTree() {
    this.tree = this.trees[3]
  }

  buildTree(num=3) {
    this.tree = null
    var self = this
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log('startiung buiolt');
        self.tree = self.trees[num]

        if (self.tree) {
          console.log('yay tree');
          resolve('tree built successfully')
        } else {
          reject('something went wrong and no tree was built')
        }
      }, 2000)
    })
  }
}
