import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'


import App from '../public/assets/javascripts/components/App'
import TitlePage from '../public/assets/javascripts/components/App/TitlePage'

describe('TitlePage displays correctly', function() {

  let wrapper;

  beforeEach(function() {
    wrapper = mount(<TitlePage />)
  })

  it('has a form and a page title', function() {
    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.find('.main-title').exists()).toBe(true)
  })

  afterEach(function() {
    wrapper.unmount()
  })

})

import TitleForm from '../public/assets/javascripts/components/App/TitlePage/TitleForm'

describe('TitleForm displays correctly', function() {

  let wrapper;

  beforeEach(function() {
    wrapper = shallow(<TitleForm />)
  })

  it('has a select input and a label', function() {
    expect(wrapper.find('select').exists()).toBe(true)
    expect(wrapper.find('label').exists()).toBe(true)
  })

  it('has a default ball number of 3', function() {
    expect(wrapper.instance().state.ballNumber).toEqual('3')
    expect(wrapper.find('select').getElement().props.defaultValue).toEqual('3')
  })

})
