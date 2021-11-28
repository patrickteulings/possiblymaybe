
import http from './client'

export default class HeroLoaderTwo {
  constructor (_elem) {
    if (!_elem) return
    console.log(_elem)
    this.elem = _elem.querySelector('.the_image')
    this.loadedClass = 'imageIsLoaded'
    this.imageURL = this.elem.dataset.url
    this.isLoaded = false

    this.initialize()
  }

  const tryshit  = () => {

  }

  initialize () {
    const { json } = http('http://universities.hipolabs.com/')

    // Grab the DOM elements
    const progressbutton = document.getElementById('fetch-button')

    // Bind the fetch function to the button's click event
    progressbutton.addEventListener('click', async (e) => {
      const universities = await json('search?country=United+States');

      console.log(universities)
    })

    if (!this.imageURL) return
    console.log(this.elem.src)
    fetch(this.imageURL)
      .then((response) => {
        return response.blob()
      })
      .then((myBlob) => {
        const objectURL = URL.createObjectURL(myBlob)
        console.log(this.elem)
        this.elem.src = objectURL
        setTimeout(() => {
          this.elem.classList.add(this.loadedClass)
        }, 200)
        this.isLoaded = true
      })
  }
}
