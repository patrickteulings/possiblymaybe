import splt from 'spltjs';
import anime from 'animejs';

const HomepageHero = (_elem: HTMLElement) => {
  const containerEl: HTMLElement = document.querySelector('.animated-text--container')!
  const docEl: HTMLElement = document.querySelector('.animated-text--container')!
  const textElements:HTMLCollectionOf<HTMLSpanElement> = containerEl.getElementsByTagName('div')!
  let animInterval: any
  let count = 0
  splt({})

  if(!containerEl) return


  const setActiveItem = (index: number) => {
    // containerEl.style.transform = `translateY(${index * 100}px)`

    for (const item of textElements) {
      item.classList.remove('active')
    }

    const targets = textElements[index].querySelectorAll('.char')

    anime({
      targets: targets,
      translateX: [200, 0],
      opacity: [0, 1],
      // direction: 'alternate',
      loop: 1,
      delay: anime.stagger(30),
      easing: 'easeOutExpo'
    });


    textElements[index].classList.add('active')

    if (count >= 3) return

    setTimeout(() => {
      setActiveItem(count)
    }, 3000)

    count = (count > 2) ? 0 : count + 1
  }

  const initialize = () => {
    // animInterval = setInterval(() => {
    //   setActiveItem(count)
    // }, 2000)
    setActiveItem(count)
  }

  return {
    initialize
  }
}

export { HomepageHero }
