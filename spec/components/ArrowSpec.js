import React from 'react'
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme'

import Arrow from '../../public/assets/javascripts/components/App/DisplayPage/CarouselManager/Carousel/Arrow'


describe('Arrow displays and acts correctly:', function() {

  let placeHolder

  beforeEach(function() {
    placeHolder = {
      returnThree: function() {
        return 3
      }
    }


    spyOn(placeHolder, 'returnThree')

  })

  it('executes passed in callback on clicks', function() {
    const arrow = mount(<Arrow callback={placeHolder.returnThree} right={true} />)
    arrow.simulate('click')
    expect(placeHolder.returnThree).toHaveBeenCalled()
    arrow.unmount()
  })

  it('sets itself to be the correct class', function() {
    const arrow = shallow(<Arrow right={true} />)
    expect(arrow.find('.arrow').hasClass('arrow-right')).toBe(true)
    expect(arrow.find('.arrow').hasClass('arrow-left')).toBe(false)
    const arrow2 = shallow(<Arrow right={false} />)
    expect(arrow2.find('.arrow').hasClass('arrow-right')).toBe(false)
    expect(arrow2.find('.arrow').hasClass('arrow-left')).toBe(true)
  })

})
