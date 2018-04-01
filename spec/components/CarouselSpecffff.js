import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'

import DisplayPage from '../../public/assets/javascripts/components/App/DisplayPage/CarouselManager'

describe('DisplayPage displays correctly:', function() {

  let wrapper;

  beforeEach(function() {
    wrapper = mount(<DisplayPage />)
  })

  it('Renders without crashing', function(done) {
    const div = document.createElement('div')
    ReactDOM.render(<DisplayPage />, div)
    done()
  })

  it('Contains navigator and Legend Components', function(done) {

    expect(wrapper.find('#display-page').exists()).toBe(true)
    expect(wrapper.find('#legend').exists()).toBe(true)
    expect(wrapper.find('#navigators').exists()).toBe(true)
    done()
  })

  it('initially renders two carousels', function() {

    expect(wrapper.find('#carousel-manager').length).toEqual(1)
    expect(wrapper.find('#carousel-manager').find('.carousel').length).toEqual(2)
  })

  afterEach(function() {
    wrapper.unmount()
  })
})
