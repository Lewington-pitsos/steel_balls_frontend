import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'

import CarouselManager from '../../public/assets/javascripts/components/App/DisplayPage/CarouselManager'

describe('CarouselManager:', function() {

  let wrapper;

  beforeEach(function() {
    wrapper = mount(<CarouselManager />)
  })

  it('starts with the correct state', function() {
    var shallowWrapper = shallow(<CarouselManager />)
    var state = shallowWrapper.instance().state
    expect(state.node[0].unknown).toEqual('3')
    expect(state.node[0].selections.length).toEqual(1)
    expect(state.children.length).toEqual(1)
    expect(state.atStart).toBe(true)
    expect(state.atState).toBe(true)
    expect(state.key).toBe(0)
  })

  it('initially renders two carousels', function() {

    expect(wrapper.find('#carousel-manager').length).toEqual(1)
    expect(wrapper.find('#carousel-manager').find('.carousel').length).toEqual(2)
  })

  afterEach(function() {
    wrapper.unmount()
  })
})
