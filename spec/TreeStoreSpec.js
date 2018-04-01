import treeStore from '../public/assets/javascripts/stores/TreeStore'


describe('TreeStore builds a tree and tracks visible nodes:', function() {

  let treeObejct = {"unknown": "3", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0", "score": "2", "selections": [{"right": {"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0"}, "left": {"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0"}, "states": [{"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "2", "score": "1", "selections": [{"right": {"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0"}, "left": {"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "1"}, "states": [{"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "1", "normal": "2", "score": "0"}, {"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "0", "normal": "2", "score": "0"}]}]}, {"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "1", "normal": "1", "score": "1", "selections": [{"right": {"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "1"}, "left": {"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "0", "normal": "0"}, "states": [{"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "0", "normal": "2", "score": "0"}, {"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "1", "normal": "2", "score": "0"}]}]}]}]}

  it('builds and tracks a tree on initialization', function() {
    expect(treeStore.tree).toEqual(treeObejct)
    expect(treeStore.node).toEqual(treeObejct)
    expect(treeStore.children).not.toBeNull()
    expect(treeStore.children).toEqual(treeObejct['selections'])
  })

  it('always gets the correct children for teh current node', function() {
    treeStore.node = treeObejct['selections'][0]
    treeStore.children = treeStore.getChildren()
    expect(treeStore.children).toEqual(treeObejct['selections'][0]['states'])

    treeStore.node = treeObejct['selections'][0]['states'][0]
    treeStore.children = treeStore.getChildren()
    expect(treeStore.children).toEqual(treeObejct['selections'][0]['states'][0]['selections'])

    treeStore.node = treeObejct['selections'][0]['states'][0]['selections'][0]['states'][0]
    treeStore.children = treeStore.getChildren()
    expect(treeStore.children).toBeNull()

    treeStore.setNavigation(treeStore.resetNavigation)
  })

  it('updates components with expected values', function() {
    expect(treeStore.getCurrentNode().node).toEqual(treeObejct)
    treeStore.node = treeObejct['selections'][0]
    expect(treeStore.getCurrentNode().node).toEqual(treeObejct['selections'][0])

    expect(treeStore.getCurrentChildren().children).toEqual(treeObejct['selections'])
    treeStore.children = treeObejct['selections'][0]['states']
    expect(treeStore.getCurrentChildren().children).toEqual(treeObejct['selections'][0]['states'])
    treeStore.setNavigation(treeStore.resetNavigation)
  })

  it('can navigate downwards and reset', function() {
    treeStore.setNavigation(treeStore.goToNode, 0)
    expect(treeStore.node).toEqual(treeObejct['selections'][0])
    treeStore.setNavigation(treeStore.goToNode, 1)
    expect(treeStore.node).toEqual(treeObejct['selections'][0]['states'][1])
    treeStore.setNavigation(treeStore.resetNavigation)
    expect(treeStore.node).toEqual(treeObejct)
  })

})
