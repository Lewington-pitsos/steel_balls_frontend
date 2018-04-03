import TreeBuilder from '../public/assets/javascripts/stores/TreeStore/TreeBuilder'

import longTree from '../public/assets/javascripts/stores/TreeStore/long_tree.json'
import treeObject from '../public/assets/javascripts/stores/TreeStore/tree.json'
describe('TreeBuilder gathers and returns the correct tree:', function() {
  let treeBuilder;

  beforeEach(function() {
    treeBuilder = new TreeBuilder
  })

  it('can return single tree', function() {
    treeBuilder.buildTree().then(function() {
      expect(treeBuilder.tree).toEqual(treeObject)
    })
  })

  it('returns different trees depending on passed in key', function() {
    treeBuilder.buildTree(3).then(function() {
      expect(treeBuilder.tree).toEqual(treeObject)
    })

    treeBuilder.buildTree(4).then(function() {
      expect(treeBuilder.tree).toEqual(longTree)
    })
  })

})
