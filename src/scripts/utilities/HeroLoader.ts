
interface HeroLoader {
  elem: HTMLImageElement
  loadedClass: string
  imageURL: string
  isLoaded: Boolean
}

class HeroLoader {
  constructor (_elem: HTMLElement) {
    if (!_elem) return
    console.log(_elem)
    this.elem = _elem.querySelector('.the_image')!
    this.loadedClass = 'imageIsLoaded'
    this.imageURL = this.elem.dataset.url as string
    this.isLoaded = false

    this.initialize()
  }

  initialize () {
    if (!this.imageURL) return
    console.log(this.elem.src)
    fetch(this.imageURL)
      .then((response) => {
        return response.blob()
      })
      .then((myBlob) => {
        const objectURL = URL.createObjectURL(myBlob)
        console.log(objectURL)
        // this.elem.src = objectURL
        setTimeout(() => {
          this.elem.classList.add(this.loadedClass)
        }, 200)
        this.isLoaded = true
      })
  }
}

export { HeroLoader }
