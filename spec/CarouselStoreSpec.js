import carouselStore from '../public/assets/javascripts/stores/CarouselStore'

describe('Carousel Store tracks the state of second carousel', function() {

  it('resets to expected deafault values', function() {
    expect(carouselStore.index).toEqual(0)
    expect(carouselStore.reverse).toBe(false)
  })
})
