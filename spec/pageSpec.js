import React from 'react'
import ReactDOM from 'react-dom'
import App from '../public/assets/javascripts/components/App.js'
import { shallow, mount } from 'enzyme'

describe('App Component provides basic functionality', function() {
  it('renders without crashing', function() {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    const wrapper = shallow(<App />)
    expect(wrapper.find('#app').exists()).toBe(true)
  })

  it('starts on title page', function() {
    const wrapper = mount(<App />)
    expect(wrapper.find('#title-page').exists()).toBe(true)
    expect(wrapper.instance().state.titlePage).toBe(true)
  })
})
