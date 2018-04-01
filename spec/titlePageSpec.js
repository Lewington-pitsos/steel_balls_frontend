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

})
