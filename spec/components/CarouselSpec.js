import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'

import Carousel from '../../public/assets/javascripts/components/App/DisplayPage/CarouselManager/Carousel'

describe('Carousel displays according to props:', function() {

  let treeObejct = [{"unknown": "3", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0", "score": "2", "selections": [{"right": {"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0"}, "left": {"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0"}, "states": [{"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "2", "score": "1", "selections": [{"right": {"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0"}, "left": {"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "1"}, "states": [{"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "1", "normal": "2", "score": "0"}, {"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "0", "normal": "2", "score": "0"}]}]}, {"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "1", "normal": "1", "score": "1", "selections": [{"right": {"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "1"}, "left": {"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "0", "normal": "0"}, "states": [{"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "0", "normal": "2", "score": "0"}, {"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "1", "normal": "2", "score": "0"}]}]}]}]}]

  let shallowWrapper;
  let wrapper;
  let wrapper2;

  beforeEach(function() {
    wrapper = mount(<Carousel nodes={treeObejct} stateNode={true} index={0} first={true}/>)
    wrapper2 = mount(<Carousel nodes={treeObejct[0]['selections'][0]['states']} stateNode={true} first={false}/>)
    shallowWrapper = shallow(<Carousel nodes={[treeObejct]} stateNode={true} first={true} index={0}/>).instance()
  })

  it('renders differently depending on props', function() {
    expect(wrapper.find('.state').length).toEqual(1)
    expect(wrapper.find('.selection').length).toEqual(0)
    expect(wrapper.find('.arrow').length).toEqual(0)

    const selectionWrapper = mount(<Carousel nodes={treeObejct[0]['selections'][0]['states'][0]['selections']} stateNode={false} first={false}/>)
    expect(selectionWrapper.find('.state').length).toEqual(0)
    expect(selectionWrapper.find('.selection').length).toEqual(1)
    expect(selectionWrapper.find('.arrow').length).toEqual(0)

    selectionWrapper.unmount()
  })

  it('s methods act as expected', function() {
    expect(shallowWrapper.possibleArrow()).toBeNull()
    expect(shallowWrapper.title()).toEqual('Current Balls')
    expect(shallowWrapper.allNodes().length).toEqual(1)
  })

  it('only has arrows if it is second', function() {
    expect(wrapper.find('.arrow').length).toEqual(0)
    expect(wrapper2.find('.arrow').length).toEqual(1)
  })

  it('knows if it can be selected', function() {
    expect(wrapper.instance().selectableNode()).toBe(false)
    expect(wrapper2.instance().selectableNode()).toBe(true)
  })

  it('knows when it should enable node navigation', function() {
    expect(wrapper.instance().possibleArrow()).toBe(null)
    expect(wrapper2.instance().selectableNode()).toBeTruthy()
    expect(wrapper2.find('.arrow-right').length).toEqual(1)
    expect(wrapper2.find('.arrow-left').length).toEqual(0)
  })

  it('starts on the right index and with the right reverseal', function() {
    expect(wrapper2.instance().state.index).toEqual(0)
    expect(wrapper.instance().state.index).toEqual(0)
    expect(wrapper2.instance().state.reverse).toEqual(false)
    expect(wrapper.instance().state.reverse).toEqual(false)
  })

  afterEach(function() {
    wrapper.unmount()
    wrapper2.unmount()
  })
})
