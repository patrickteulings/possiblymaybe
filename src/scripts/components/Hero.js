
import ImageLoader from './../utilities/ImageLoader'

export default class Hero {
  constructor (_elem) {
    this.elem = _elem
    this.config = JSON.parse(this.elem.dataset.config)
    this.imagePath = this.config.imagePath
    this.loadBar = document.querySelector('.hero--portfolio-item-loader__progress')
    this.loadContainer = document.querySelector('.hero--portfolio-item-loader')
    this.imageContainer = document.querySelector('.hero--portfolio-item__image')
    this.image = this.elem.querySelector('.the_image')
    this.loadImage()
  }


  handleProgress (e) {
    const { received, length, loading } = e.detail
    const { scope } = e

    scope.setProgressbarValue(e.detail)
  }


  handleLoaded (e) {
    const { scope } = e

    scope.setProgressbarValue(e.detail)
    scope.hideLoader(e)
  }


  hideLoader (e) {
    setTimeout(() => {
      this.loadContainer.classList.add('is-loaded')
    }, 500)

    setTimeout(() => {
      this.imageContainer.classList.add('is-loaded')
    }, 1000)
  }


  setProgressbarValue (payload) {
    const { received, length, loading } = payload
    const progress = ((received / length) * 100).toFixed(2)

    this.loadBar.style.width = `${progress}%`
  }


  async loadImage () {
    const { loadImage } = new ImageLoader(this.imagePath, this.handleProgress, this.handleLoaded, this)
    const theBlob = await loadImage(this.imagePath)
    const elem = document.querySelector('.the_image')

    this.image.src = theBlob
  }
}
