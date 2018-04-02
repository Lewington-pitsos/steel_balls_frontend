import treeStore from '../public/assets/javascripts/stores/TreeStore'


describe('TreeStore builds a tree and tracks visible nodes:', function() {

  let treeObject = [{"unknown": "3", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0", "score": "2", "selections": [{"right": {"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0"}, "left": {"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0"}, "states": [{"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "2", "score": "1", "selections": [{"right": {"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0"}, "left": {"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "1"}, "states": [{"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "1", "normal": "2", "score": "0"}, {"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "0", "normal": "2", "score": "0"}]}]}, {"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "1", "normal": "1", "score": "1", "selections": [{"right": {"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "1"}, "left": {"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "0", "normal": "0"}, "states": [{"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "0", "normal": "2", "score": "0"}, {"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "1", "normal": "2", "score": "0"}]}]}]}]}]

  beforeEach(function() {
    treeStore.setNavigation(treeStore.resetNavigation)
    treeStore.back = false
  })

  it('builds and tracks a tree on initialization', function() {
    expect(treeStore.tree).toEqual(treeObject)
    expect(treeStore.nodes).toEqual(treeObject)
    expect(treeStore.children).not.toBeNull()
    expect(treeStore.children).toEqual(treeObject[0]['selections'])
  })

  it('always gets the correct children for the current node', function() {

    treeStore.nodes = treeObject[0]['selections']
    treeStore.index = 0
    treeStore.children = treeStore.getChildren()
    expect(treeStore.children).toEqual(treeObject[0]['selections'][0]['states'])

    treeStore.nodes = treeObject[0]['selections'][0]['states']
    treeStore.index = 0
    treeStore.children = treeStore.getChildren()
    expect(treeStore.children).toEqual(treeObject[0]['selections'][0]['states'][0]['selections'])

    treeStore.nodes = treeObject[0]['selections'][0]['states'][0]['selections'][0]['states']
    treeStore.index = 0
    treeStore.children = treeStore.getChildren()
    expect(treeStore.children).toBeNull()
  })

  it('updates components with expected values', function() {

    expect(treeStore.getInfo().atStart).toBe(true)
    expect(treeStore.getInfo().back).toBe(false)
    expect(treeStore.getInfo().nodes).toEqual(treeObject)
    expect(treeStore.getInfo().index).toEqual(0)
    treeStore.nodes = treeObject[0]['selections']
    expect(treeStore.getInfo().nodes).toEqual(treeObject[0]['selections'])

    expect(treeStore.getInfo().children).toEqual(treeObject[0]['selections'])
    treeStore.children = treeObject[0]['selections'][0]['states']
    expect(treeStore.getInfo().children).toEqual(treeObject[0]['selections'][0]['states'])

    treeStore.index = 1
    expect(treeStore.getInfo().index).toEqual(1)

    treeStore.setNavigation(treeStore.resetNavigation)
    expect(treeStore.getInfo().index).toEqual(0)
    expect(treeStore.getInfo().atStart).toBe(true)
    expect(treeStore.getInfo().atState).toBe(true)
    expect(treeStore.getInfo().key).toEqual(0)
    treeStore.setNavigation(treeStore.goToNode, 0)
    expect(treeStore.getInfo().key).toEqual(1)
    expect(treeStore.getInfo().atState).toBe(false)
    expect(treeStore.getInfo().atStart).toBe(false)
    expect(treeStore.getInfo().lastSelection).toBe(false)
  })

  it('can navigate downwards and reset', function() {

    treeStore.setNavigation(treeStore.goToNode, 0)
    expect(treeStore.nodes).toEqual(treeObject[0]['selections'])
    expect(treeStore.index).toEqual(0)
    treeStore.setNavigation(treeStore.goToNode, 1)
    expect(treeStore.nodes).toEqual(treeObject[0]['selections'][0]['states'])
    expect(treeStore.index).toEqual(1)
    treeStore.setNavigation(treeStore.resetNavigation)
    expect(treeStore.nodes).toEqual(treeObject)
    expect(treeStore.index).toEqual(0)
  })

  it('maintans breadcrumbs and can navigate upwards', function() {

    expect(treeStore.breadcrumbs.length).toEqual(0)
    treeStore.setNavigation(treeStore.goToNode, 0)
    expect(treeStore.breadcrumbs.length).toEqual(1)
    expect(treeStore.breadcrumbs[0].nodes).toEqual(treeObject)
    expect(treeStore.breadcrumbs[0].index).toEqual(0)
    treeStore.setNavigation(treeStore.goToNode, 1)
    expect(treeStore.breadcrumbs.length).toEqual(2)
    expect(treeStore.breadcrumbs[1].nodes).toEqual(treeObject[0]['selections'])
    expect(treeStore.breadcrumbs[1].index).toEqual(0)
    treeStore.setNavigation(treeStore.goToNode, 0)
    expect(treeStore.breadcrumbs.length).toEqual(3)
    expect(treeStore.breadcrumbs[2].nodes).toEqual(treeObject[0]['selections'][0]['states'])
    expect(treeStore.breadcrumbs[2].index).toEqual(1)

    treeStore.setNavigation(treeStore.backOneNode)
    expect(treeStore.breadcrumbs.length).toEqual(2)
    expect(treeStore.breadcrumbs[1].nodes).toEqual(treeObject[0]['selections'])
    expect(treeStore.breadcrumbs[1].index).toEqual(0)
    expect(treeStore.nodes).toEqual(treeObject[0]['selections'][0]['states'])
    expect(treeStore.index).toEqual(1)

    treeStore.setNavigation(treeStore.backOneNode)
    expect(treeStore.breadcrumbs.length).toEqual(1)
    expect(treeStore.index).toEqual(0)
    expect(treeStore.nodes).toEqual(treeObject[0]['selections'])
  })

  it('correctly identifies the end of the tree', function() {
    treeStore.setNavigation(treeStore.goToNode, 0)
    expect(treeStore.finalSelection()).toBe(false)
    treeStore.setNavigation(treeStore.goToNode, 0)
    expect(treeStore.finalSelection()).toBe(false)
    treeStore.setNavigation(treeStore.goToNode, 0)
    expect(treeStore.finalSelection()).toBe(true)
  })

  it('correctly wiorks out if its at a state', function() {
    expect(treeStore.atState()).toBe(true)
    treeStore.setNavigation(treeStore.goToNode, 0)
    expect(treeStore.atState()).toBe(false)
    treeStore.setNavigation(treeStore.goToNode, 0)
    expect(treeStore.atState()).toBe(true)
  })

  it('knows whether the carousel is navigation backwards', function() {
    expect(treeStore.back).toBe(false)

    treeStore.setNavigation(treeStore.goToNode, 0)
    expect(treeStore.back).toBe(false)

    treeStore.setNavigation(treeStore.backOneNode)
    expect(treeStore.back).toBe(true)

    treeStore.setNavigation(treeStore.goToNode, 0)
    expect(treeStore.back).toBe(false)

    treeStore.setNavigation(treeStore.goToNode, 0)
    expect(treeStore.back).toBe(false)

    treeStore.setNavigation(treeStore.backOneNode)
    expect(treeStore.back).toBe(true)

    treeStore.setNavigation(treeStore.backOneNode)
    expect(treeStore.back).toBe(true)
  })

  afterEach(function() {
    treeStore.setNavigation(treeStore.resetNavigation)
  })
})
