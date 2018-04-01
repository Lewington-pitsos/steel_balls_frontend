import TreeBuilder from '../public/assets/javascripts/stores/TreeStore/TreeBuilder'


describe('TreeBuilder gathers and returns the correct tree', function() {

  let treeObejct = {"unknown": "3", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0", "score": "2", "selections": [{"right": {"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0"}, "left": {"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0"}, "states": [{"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "2", "score": "1", "selections": [{"right": {"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0"}, "left": {"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "1"}, "states": [{"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "1", "normal": "2", "score": "0"}, {"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "0", "normal": "2", "score": "0"}]}]}, {"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "1", "normal": "1", "score": "1", "selections": [{"right": {"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "1"}, "left": {"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "0", "normal": "0"}, "states": [{"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "0", "normal": "2", "score": "0"}, {"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "1", "normal": "2", "score": "0"}]}]}]}]}

  it('connects without crashing', function() {
    const treeBuilder = new TreeBuilder
    treeBuilder.buildTree()
    expect(treeBuilder.tree).toEqual(treeObejct)
  })

})
