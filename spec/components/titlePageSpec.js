import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'


import App from '../../public/assets/javascripts/components/App'
import TitlePage from '../../public/assets/javascripts/components/App/TitlePage'

describe('TitlePage displays correctly', function() {

  let wrapper;

  beforeEach(function(done) {
    wrapper = mount(<TitlePage />)
    done()
  })

  it('has a form and a page title', function(done) {
    expect(wrapper.find('form').exists()).toBe(true)
    expect(wrapper.find('.main-title').exists()).toBe(true)
    done()
  })

  afterEach(function(done) {
    wrapper.unmount()
    done()
  })

})

import TitleForm from '../../public/assets/javascripts/components/App/TitlePage/TitleForm'

describe('TitleForm displays correctly', function() {

  let wrapper;

  beforeEach(function(done) {
    wrapper = shallow(<TitleForm />)
    done()
  })

  it('has a select input and a label', function(done) {
    expect(wrapper.find('select').exists()).toBe(true)
    expect(wrapper.find('label').exists()).toBe(true)
    done()
  })

  it('has a default ball number of 3', function(done) {
    expect(wrapper.instance().state.ballNumber).toEqual('3')
    expect(wrapper.find('select').getElement().props.defaultValue).toEqual('3')
    done()
  })

})
