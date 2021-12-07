const Iets = function HomepageHero (_elem) {
  console.log(_elem)
  const containerEl = document.querySelector('.animated-text--container')
  const textElements = containerEl.getElementsByTagName('span')
  let animInterval = 0
  let count = 0

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

export { Iets }
