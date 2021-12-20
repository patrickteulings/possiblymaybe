
import ImageLoader from '../utilities/ImageLoader'

interface Config {
  imagePath: string;
}

interface Hero {
  elem: HTMLElement;
  data: DOMStringMap;
  config: Config;
  imagePath: string;
  loadBar: HTMLElement;
  loadContainer: HTMLElement;
  imageContainer: HTMLElement;
  image: HTMLImageElement;
}

class Hero {
  constructor (_elem:any) {
    console.log(_elem)
    this.elem = _elem
    this.data = _elem.dataset
    this.config = JSON.parse(this.data.config!)
    this.imagePath = this.config.imagePath
    this.loadBar = document.querySelector('.js-hero-loader__progress')!
    this.loadContainer = document.querySelector('.js-hero-loader')!
    this.imageContainer = document.querySelector('.js-hero-loader__image-wrapper')!
    this.image = this.elem.querySelector('.js-hero-loader__image')!
    this.loadImage()
  }


  handleProgress (e: any): void {
    const { received, length, loading } = e.detail
    const { scope } = e
    console.log('dd')

    scope.setProgressbarValue(e.detail)
  }


  handleLoaded (e:any): void {
    const { scope } = e

    scope.setProgressbarValue(e.detail)
    scope.hideLoader(e)
  }


  hideLoader (e:any) : void {
    setTimeout(() => {
      this.loadContainer.classList.add('is-loaded')
    }, 500)

    setTimeout(() => {
      this.imageContainer.classList.add('is-loaded')
    }, 1000)
  }


  setProgressbarValue (payload:any): void {
    const { received, length, loading } = payload
    const progress = ((received / length) * 100).toFixed(2)

    this.loadBar.style.width = `${progress}%`
  }


  async loadImage (): Promise<void> {
    const { loadImage } = new (ImageLoader as any)(this.imagePath, this.handleProgress, this.handleLoaded, this)
    const theBlob = await loadImage(this.imagePath)
    const elem = document.querySelector('.the_image')

    this.image.src = theBlob
  }
}

export { Hero }
