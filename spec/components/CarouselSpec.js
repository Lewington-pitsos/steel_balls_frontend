import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'

import Carousel from '../../public/assets/javascripts/components/App/DisplayPage/CarouselManager/Carousel'

describe('Carousel displays according to props:', function() {

  let treeObejct = {"unknown": "3", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0", "score": "2", "selections": [{"right": {"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0"}, "left": {"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0"}, "states": [{"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "2", "score": "1", "selections": [{"right": {"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0"}, "left": {"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "1"}, "states": [{"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "1", "normal": "2", "score": "0"}, {"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "0", "normal": "2", "score": "0"}]}]}, {"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "1", "normal": "1", "score": "1", "selections": [{"right": {"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "1"}, "left": {"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "0", "normal": "0"}, "states": [{"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "0", "normal": "2", "score": "0"}, {"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "1", "normal": "2", "score": "0"}]}]}]}]}

  let shallowWrapper;
  let wrapper;

  beforeEach(function() {
    wrapper = mount(<Carousel nodes={[treeObejct]} stateNode={true} first={true}/>)
    shallowWrapper = shallow(<Carousel nodes={[treeObejct]} stateNode={true} first={true}/>).instance()
  })

  it('renders differently depending on props', function() {
    expect(wrapper.find('.state').length).toEqual(1)
    expect(wrapper.find('.col-11').length).toEqual(1)
    expect(wrapper.find('.selection').length).toEqual(0)
    expect(wrapper.find('.arrow').length).toEqual(0)

    const selectionWrapper = mount(<Carousel nodes={treeObejct['selections'][0]['states'][0]['selections']} stateNode={false} first={false}/>)
    expect(selectionWrapper.find('.state').length).toEqual(0)
    expect(selectionWrapper.find('.col-11').length).toEqual(0)
    expect(selectionWrapper.find('.selection').length).toEqual(1)
    expect(selectionWrapper.find('.arrow').length).toEqual(0)

    selectionWrapper.unmount()
  })

  it('s methods act as expected', function() {
    expect(shallowWrapper.possibleArrow()).toBeNull()
    expect(shallowWrapper.title()).toEqual('Current Balls')
    expect(shallowWrapper.allNodes().length).toEqual(1)
  })

  afterEach(function() {
    wrapper.unmount()
  })
})
