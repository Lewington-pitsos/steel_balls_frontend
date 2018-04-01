import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import App from '../../public/assets/javascripts/components/App.js'

describe('App Component provides basic functionality:', function() {

  let titlePageSl = '#title-page'
  let displayPageSl = '#display-page'
  let titlePageButtonSl = '#titlepage-nav'
  let pageAnimationWait = 1100

  it('Renders without crashing', function(done) {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    const wrapper = shallow(<App />)
    expect(wrapper.find('#app').exists()).toBe(true)
    done()
  })

  it('Starts on title page', function(done) {
    const wrapper = mount(<App />)
    setTimeout(function() {
      expect(wrapper.find(titlePageSl).exists()).toBe(true)
      expect(wrapper.instance().state.titlePage).toBe(true)
    }, 200)
    wrapper.unmount()
    done()
  })

  it('can navigate between pages', function(done) {
    const wrapper = mount(<App />)
    expect(wrapper.find(titlePageSl).exists()).toBe(true)
    wrapper.find('form').find('button').simulate('submit')
    expect(wrapper.find(titlePageSl).exists()).toBe(true)
    setTimeout(function() {
      expect(wrapper.find(titlePageSl).exists()).toBe(false)
      expect(wrapper.find(displayPageSl).exists()).toBe(true)
      expect(wrapper.find(titlePageButtonSl).exists()).toBe(true)
      wrapper.find(titlePageButtonSl).simulate('click')
      expect(wrapper.find(displayPageSl).exists()).toBe(true)
      setTimeout(function () {
        expect(wrapper.find(titlePageButtonSl).exists()).toBe(false)
        expect(wrapper.find(displayPageSl).exists()).toBe(false)
        expect(wrapper.find(titlePageSl).exists()).toBe(true)
      }, pageAnimationWait)
    }, pageAnimationWait)
    wrapper.unmount()
    done()
  })
})


import Navigators from '../../public/assets/javascripts/components/App/DisplayPage/Navigators'

describe('Navigators renders and acts correctly:', function() {
  let wrapper

  beforeEach(function(done) {
    wrapper = mount(<Navigators />)
    done()
  })

  it('Contains button components', function(done) {
    expect(wrapper.find('#back-nav').exists()).toBe(true)
    expect(wrapper.find('#titlepage-nav').exists()).toBe(true)
    expect(wrapper.find('ul').exists()).toBe(true)
    done()
  })

  afterEach(function(done) {
    wrapper.unmount()
    done()
  })

})
