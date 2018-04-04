import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'
import App from '../../public/assets/javascripts/components/App.js'
import pageStore from '../../public/assets/javascripts/stores/PageStore'

describe('App Component provides basic functionality:', function() {

  let wrapper
  let titlePageSl = '#title-page'
  let displayPageSl = '#display-page'
  let titlePageButtonSl = '#titlepage-nav'
  let pageAnimationWait = 1300


  beforeEach(function() {
    pageStore.toTitlePage()
    wrapper = mount(<App />)
  })

  it('Renders without crashing', function(done) {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    const wrapper2 = shallow(<App />)
    expect(wrapper2.find('#app').exists()).toBe(true)
    wrapper2.unmount()
    done()
  })

  it('Starts on title page', function() {
    expect(wrapper.find(titlePageSl).exists()).toBe(true)
    expect(wrapper.instance().state.titlePage).toBe(true)
    setTimeout(function() {
      wrapper.unmount()
    }, 400)
  })

  it('can navigate between pages', function() {
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
  })

  it('removes listeners on unmount', function() {
    var listeners = pageStore.listeners('pageChange').length
    wrapper.unmount()
    expect(pageStore.listeners('pageChange').length).toEqual(listeners - 1)
  })

  afterEach(function() {
    pageStore.toTitlePage()
    wrapper.unmount()
  })
})


import Navigators from '../../public/assets/javascripts/components/App/DisplayPage/Navigators'
import treeStore from '../../public/assets/javascripts/stores/TreeStore'

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

  it('removes listeners on unmount', function() {
    var listeners = treeStore.listeners('change').length
    wrapper.unmount()
    expect(treeStore.listeners('change').length).toEqual(listeners - 1)
  })

  afterEach(function(done) {
    wrapper.unmount()
    done()
  })

})
