import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import carouselStore from '../../public/assets/javascripts/stores/CarouselStore'

import Carousel from '../../public/assets/javascripts/components/App/DisplayPage/CarouselManager/Carousel'

describe('Carousel displays according to props:', function() {

  let treeObejct = [{"unknown": "3", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0", "score": "2", "selections": [{"right": {"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0"}, "left": {"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0"}, "states": [{"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "2", "score": "1", "selections": [{"right": {"unknown": "1", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "0"}, "left": {"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "1"}, "states": [{"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "1", "normal": "2", "score": "0"}, {"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "0", "normal": "2", "score": "0"}]}]}, {"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "1", "normal": "1", "score": "1", "selections": [{"right": {"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "0", "normal": "1"}, "left": {"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "0", "normal": "0"}, "states": [{"unknown": "0", "possibly_lighter": "1", "possibly_heavier": "0", "normal": "2", "score": "0"}, {"unknown": "0", "possibly_lighter": "0", "possibly_heavier": "1", "normal": "2", "score": "0"}]}]}]}]}]

  let shallowWrapper;
  let wrapper;
  let wrapper2;
  let startWhisper = 'This is the innitial group of balls. Any of them could be the oddball.'
  let endWhisper = 'These are all winning states (we know where the oddball is and how much it weighs)'

  let messageMappings = {
        selection: {
          current: 'Previous Weigh',
          upcoming: 'Possible Weighs'
        },
        state: {
          current: 'Current Ball State',
          upcoming: 'Possible Outcomes'
        }
      }

  beforeEach(function() {
    wrapper = mount(<Carousel nodes={treeObejct} stateNode={true} index={0} first={true}/>)
    wrapper2 = mount(<Carousel nodes={treeObejct[0]['selections'][0]['states']} stateNode={true} first={false}/>)
    shallowWrapper = shallow(<Carousel nodes={treeObejct} stateNode={true} first={true} index={0} atStart={true}/>)
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

  it('has methods that act as expected', function() {
    expect(shallowWrapper.instance().possibleArrow()).toBeNull()
    expect(shallowWrapper.instance().allNodes().length).toEqual(1)
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

  it('retruns the right messages', function() {
    expect(shallowWrapper.instance().message()).toEqual(messageMappings.state.current)

    const sw2 = shallow(<Carousel nodes={treeObejct} stateNode={false} first={true} index={0}/>)
    expect(sw2.instance().message()).toEqual(messageMappings.selection.current)

    const sw3 = shallow(<Carousel nodes={treeObejct} stateNode={true} first={false} index={0}/>)
    expect(sw3.instance().message()).toEqual(messageMappings.state.upcoming)

    const sw4 = shallow(<Carousel nodes={treeObejct} stateNode={false} first={false} index={0}/>)
    expect(sw4.instance().message()).toEqual(messageMappings.selection.upcoming)
    sw2.unmount()
    sw3.unmount()
    sw4.unmount()
  })

  it('returns the correct whisper', function() {
    expect(shallowWrapper.instance().whisper()).toEqual(startWhisper)

    const sw2 = shallow(<Carousel nodes={treeObejct} stateNode={false} first={true} index={0}/>)
    expect(sw2.instance().message()).toEqual(messageMappings.selection.current)

    const sw3 = shallow(<Carousel nodes={treeObejct} stateNode={true} first={false} index={0} lastSelection={true}/>)
    expect(sw3.instance().whisper()).toEqual(endWhisper)
    sw2.unmount()
    sw3.unmount()
  })

  it('removes listeners on unmount', function() {
    var listeners = carouselStore.listeners('changeState').length
    wrapper.unmount()
    expect(carouselStore.listeners('changeState').length).toEqual(listeners - 1)
    wrapper2.unmount()
    expect(carouselStore.listeners('changeState').length).toEqual(listeners - 2)
  })

  afterEach(function() {
    wrapper.unmount()
    wrapper2.unmount()
    shallowWrapper.unmount()
  })
})
