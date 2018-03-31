import React from 'react'
import ReactDOM from 'react-dom'
import App from '../public/assets/javascripts/components/App.js'
import { shallow, mount } from 'enzyme'

describe('App Component provides basic functionality:', function() {

  let titlePageSl = '#title-page'
  let displayPageSl = '#display-page'
  let titlePageButtonSl = '#titlepage-nav'

  it('Renders without crashing', function() {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    const wrapper = shallow(<App />)
    expect(wrapper.find('#app').exists()).toBe(true)
  })

  it('Starts on title page', function() {
    const wrapper = mount(<App />)
    expect(wrapper.find(titlePageSl).exists()).toBe(true)
    expect(wrapper.instance().state.titlePage).toBe(true)
    wrapper.unmount()
  })

  it('can navigate between pages', function() {
    const wrapper = mount(<App />)
    wrapper.setState({ titlePage: false})
    expect(wrapper.find(displayPageSl).exists()).toBe(true)
    expect(wrapper.find(titlePageButtonSl).exists()).toBe(true)
    wrapper.find(titlePageButtonSl).simulate('click')
    expect(wrapper.find(titlePageButtonSl).exists()).toBe(false)
    expect(wrapper.find(displayPageSl).exists()).toBe(false)
    expect(wrapper.find(titlePageSl).exists()).toBe(true)
  })
})

import DisplayPage from '../public/assets/javascripts/components/App/DisplayPage'

describe('DisplayPage displays correctly:', function() {
  it('Renders without crashing', function() {
    const div = document.createElement('div')
    ReactDOM.render(<DisplayPage />, div)
  })

  it('Contains navigator and Legend Components', function() {
    const wrapper = mount(<DisplayPage />)
    expect(wrapper.find('#display-page').exists()).toBe(true)
    expect(wrapper.find('#legend').exists()).toBe(true)
    expect(wrapper.find('#navigators').exists()).toBe(true)
  })
})


import Navigators from '../public/assets/javascripts/components/App/DisplayPage/Navigators'

describe('Navigators renders and acts correctly:', function() {
  let wrapper

  beforeEach(function() {
    wrapper = mount(<Navigators />)
  })

  it('Contains button components', function() {
    expect(wrapper.find('#back-nav').exists()).toBe(true)
    expect(wrapper.find('#titlepage-nav').exists()).toBe(true)
    expect(wrapper.find('ul').exists()).toBe(true)
  })

  afterEach(function() {
    wrapper.unmount()
  })

})
