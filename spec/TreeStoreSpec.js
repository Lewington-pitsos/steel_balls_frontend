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
  })

  it('updates components with expected values', function() {

    expect(treeStore.getInfo().atStart).toBe(true)
    expect(treeStore.getInfo().node[0]).toEqual(treeObejct)
    treeStore.node = treeObejct['selections'][0]
    expect(treeStore.getInfo().node[0]).toEqual(treeObejct['selections'][0])

    expect(treeStore.getInfo().children).toEqual(treeObejct['selections'])
    treeStore.children = treeObejct['selections'][0]['states']
    expect(treeStore.getInfo().children).toEqual(treeObejct['selections'][0]['states'])

    expect(treeStore.getInfo().atStart).toBe(true)
    expect(treeStore.getInfo().atState).toBe(true)
    expect(treeStore.getInfo().key).toEqual(0)
    treeStore.setNavigation(treeStore.goToNode, 0)
    expect(treeStore.getInfo().key).toEqual(1)
    expect(treeStore.getInfo().atState).toBe(false)
    expect(treeStore.getInfo().atStart).toBe(false)
  })

  it('can navigate downwards and reset', function() {

    treeStore.setNavigation(treeStore.goToNode, 0)
    expect(treeStore.node).toEqual(treeObejct['selections'][0])
    treeStore.setNavigation(treeStore.goToNode, 1)
    expect(treeStore.node).toEqual(treeObejct['selections'][0]['states'][1])
    treeStore.setNavigation(treeStore.resetNavigation)
    expect(treeStore.node).toEqual(treeObejct)
  })

  it('maintans breadcrumbs and can navigate upwards', function() {

    expect(treeStore.breadcrumbs.length).toEqual(0)
    treeStore.setNavigation(treeStore.goToNode, 0)
    expect(treeStore.breadcrumbs.length).toEqual(1)
    expect(treeStore.breadcrumbs[0]).toEqual(treeObejct)
    treeStore.setNavigation(treeStore.goToNode, 0)
    expect(treeStore.breadcrumbs.length).toEqual(2)
    expect(treeStore.breadcrumbs[1]).toEqual(treeObejct['selections'][0])

    treeStore.setNavigation(treeStore.backOneNode)
    expect(treeStore.breadcrumbs.length).toEqual(1)
    expect(treeStore.breadcrumbs[0]).toEqual(treeObejct)
    expect(treeStore.node).toEqual(treeObejct['selections'][0])

    treeStore.setNavigation(treeStore.backOneNode)
    expect(treeStore.breadcrumbs.length).toEqual(0)
    expect(treeStore.node).toEqual(treeObejct)
  })

  afterEach(function() {
    treeStore.setNavigation(treeStore.resetNavigation)
  })
})
