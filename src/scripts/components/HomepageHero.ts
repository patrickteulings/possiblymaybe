const HomepageHero = (_elem: HTMLElement) => {
  const containerEl: HTMLElement = document.querySelector('.animated-text--container')!
  const textElements:HTMLCollectionOf<HTMLSpanElement> = containerEl.getElementsByTagName('span')!
  let animInterval: any
  let count = 0

  if(!containerEl) return

  // const config = JSON.parse(this.elem.dataset.config);
  // const imagePath = this.config.imagePath
  // const loadBar = document.querySelector('.hero--portfolio-item-loader__progress')
  // const loadContainer = document.querySelector('.hero--portfolio-item-loader')
  // const imageContainer = document.querySelector('.hero--portfolio-item__image')
  // const image = this.elem.querySelector('.the_image'

  const setActiveItem = (index: number) => {
    containerEl.style.transform = `translateY(${index * 100}px)`

    for (const item of textElements) {
      item.classList.remove('active')
    }

    textElements[index].classList.add('active')

    count = (count > 2) ? 0 : count + 1
  }

  const initialize = () => {
    console.log('hii there', containerEl)
    animInterval = setInterval(() => {
      setActiveItem(count)
    }, 2000)
  }

  return {
    initialize
  }
}

export { HomepageHero }
