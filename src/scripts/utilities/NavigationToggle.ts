
interface gvd {
  config: DOMStringMap | ''
}

interface NavigationToggle {
  elem: HTMLElement {
    dataset: DOMStringMap
  },
  config: any,
  trigger: HTMLElement | '',
  target: HTMLElement | '',
  activeClass: HTMLElement | '',
  isOpen: Boolean,
  test: any
}

interface MyObj {
  config: String {
    iets: String
  };
  myNumber: number;
}

const NavigationToggle = (_elem: HTMLElement) => {
  // Constructor always gets called, pass initial params here

  let elem = _elem
  let test = (_elem.dataset instanceof HTMLElement)
  let config = JSON.parse(test.config)
  let trigger = ''
  let target = ''
  let activeClass = (config.activeClass) ? config.activeClass : ''
  let isOpen = false




  const initialize = () => {
    isOpen = (this.config.initialState && !this.config.initialState === 'open')
    trigger = this.elem.querySelector(this.config.trigger)
    this.target = this.elem.querySelector(this.config.target)
    this.addEvents()
  }

  const addEvents = () => {
    // const image = document.querySelector('.hero--portfolio-item__image')
    this.trigger.onclick = (e) => this.toggleElement(e)

    window.addEventListener('keydown', (e) => {
      if (e.key.toLowerCase() === 'escape') {
        this.closeElement()
      }
    })

    // image.addEventListener('mouseover', () => {
    //   this.handleHover()
    // })

    // image.addEventListener('mouseleave', () => {
    //   this.handleLeave()
    // })
  }

  toggleElement () {
    if (this.isOpen) {
      this.closeElement()
    } else {
      this.openElement()
    }
  }

  openElement () {
    this.trigger.classList.add('is-open')
    this.target.classList.add('is-open')
    this.trigger.ariaExpanded = true
    this.isOpen = true
  }

  closeElement () {
    this.trigger.classList.remove('is-open')
    this.target.classList.remove('is-open')
    this.trigger.ariaExpanded = false
    this.isOpen = false
  }

  initialize()
}

export { NavigationToggle }
