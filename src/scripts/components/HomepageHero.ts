import ImageLoader from '../utilities/ImageLoader'

const HomepageHero = function (_elem) {
  console.log(_elem)
  const containerEl = document.querySelector('.animated-text--container')
  const textElements = containerEl.getElementsByTagName('span')
  let animInterval = 0
  let count = 0

  // const config = JSON.parse(this.elem.dataset.config)
  // const imagePath = this.config.imagePath
  // const loadBar = document.querySelector('.hero--portfolio-item-loader__progress')
  // const loadContainer = document.querySelector('.hero--portfolio-item-loader')
  // const imageContainer = document.querySelector('.hero--portfolio-item__image')
  // const image = this.elem.querySelector('.the_image')

  const setActiveItem = (index) => {
    console.log(index)
    containerEl.style.transform = `translateY(${index * 100}px)`
    console.log(textElements, textElements[index])

    for (const item of textElements) {
      item.classList.remove('active')
    }

    textElements[index].classList.add('active')

    count = (count > 2) ? 0 : count + 1
  }

  const initialize = () => {
    console.log('hi there', containerEl)
    animInterval = setInterval(() => {
      setActiveItem(count)
    }, 2000)
  }

  return {
    initialize
  }
}

export { HomepageHero }
