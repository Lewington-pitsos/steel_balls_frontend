import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import treeStore from '../../public/assets/javascripts/stores/TreeStore'

import CarouselManager from '../../public/assets/javascripts/components/App/DisplayPage/CarouselManager'

describe('CarouselManager:', function() {

  let wrapper;

  beforeEach(function() {
    wrapper = mount(<CarouselManager />)
  })

  it('starts with the correct state', function() {
    var shallowWrapper = shallow(<CarouselManager />)
    var state = shallowWrapper.instance().state
    expect(state.nodes[0].unknown).toEqual('3')
    expect(state.nodes[0].selections.length).toEqual(1)
    expect(state.index).toEqual(0)
    expect(state.children.length).toEqual(1)
    expect(state.atStart).toBe(true)
    expect(state.atState).toBe(true)
    expect(state.key).toBe(0)
    shallowWrapper.unmount()
  })

  it('initially renders two carousels', function() {
    expect(wrapper.find('#carousel-manager').length).toEqual(1)
    expect(wrapper.find('#carousel-manager').find('.carousel').length).toEqual(2)
  })

  it('removes listeners on unmount', function() {
    var listeners = treeStore.listeners('change').length
    wrapper.unmount()
    expect(treeStore.listeners('change').length).toEqual(listeners - 1)
  })


  afterEach(function() {
    wrapper.unmount()
  })
})
