import carouselStore from '../public/assets/javascripts/stores/CarouselStore'

describe('Carousel Store tracks the state of second carousel:', function() {

  beforeEach(function() {
    carouselStore.resetState()
  })

  it('resets to expected deafault values', function() {
    expect(carouselStore.index).toEqual(0)
    expect(carouselStore.reverse).toBe(false)
  })

  it('updates index and reverse on navigation', function() {
    expect(carouselStore.index).toEqual(0)
    expect(carouselStore.reverse).toBe(false)

    carouselStore.toNextNode()
    expect(carouselStore.index).toEqual(1)
    expect(carouselStore.reverse).toBe(false)

    carouselStore.toNextNode()
    expect(carouselStore.index).toEqual(2)
    expect(carouselStore.reverse).toBe(false)

    carouselStore.toPreviousNode()
    expect(carouselStore.index).toEqual(1)
    expect(carouselStore.reverse).toBe(true)

    carouselStore.toNextNode()
    expect(carouselStore.index).toEqual(2)
    expect(carouselStore.reverse).toBe(false)

    carouselStore.resetState()
    expect(carouselStore.index).toEqual(0)
    expect(carouselStore.reverse).toBe(false)
  })

  afterEach(function() {
    carouselStore.resetState()
  })
})
