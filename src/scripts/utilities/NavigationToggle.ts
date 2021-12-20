
interface Config {
  activeClass: string;
  trigger: string;
  target: string;
  initialState: string;
}

interface NavigationToggle {
  elem: HTMLElement;
  config: Config;
  trigger: HTMLElement | undefined;
  target: HTMLElement | '';
  activeClass: HTMLElement | '';
  isOpen: Boolean;
  test: DOMStringMap;
  nogiets: DOMStringMap
}


const NavigationToggle = ((_elem: HTMLElement) => {
  // Constructor always gets called, pass initial params here
  console.log(_elem)

  let elem = _elem
  //let test = (_elem.dataset instanceof HTMLElement) ? (JSON.parse(_elem.dataset)) ? _elem.dataset.config : {config: {}} : {config: {}}
  let test = _elem.dataset
  let nogiets = (test.config) ? test.config : ''
  let config = JSON.parse(nogiets) as Config
  let trigger: HTMLElement
  let target: HTMLElement
  let activeClass = (config.activeClass) ? config.activeClass : ''
  let isOpen = false




  const initialize = () => {
    isOpen = false
    trigger = elem.querySelector(config.trigger)!
    target = elem.querySelector(config.target)!
    console.log(config.trigger)
    addEvents()
  }

  const addEvents = () => {
    // const image = document.querySelector('.hero--portfolio-item__image')
    trigger.onclick = (e) => toggleElement(e)

    window.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'escape') {
        closeElement()
      }
    })
  }

  const toggleElement = (e: MouseEvent) => {
    if (isOpen) {
      closeElement()
    } else {
      openElement()
    }
  }

  const openElement = () => {
    console.log('hmm', trigger)
    trigger.classList.add('is-open')
    target.classList.add('is-open')
    trigger.ariaExpanded = 'true'
    isOpen = true
  }

  const closeElement = () => {
    trigger.classList.remove('is-open')
    target.classList.remove('is-open')
    trigger.ariaExpanded = 'false'
    isOpen = false
  }

  initialize()
})

export { NavigationToggle }
