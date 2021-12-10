import anime from 'animejs/lib/anime.es.js'

export default class NavigationToggle {
  // Constructor always gets called, pass initial params here
  constructor (_elem):any {
    this.elem = _elem
    this.config = JSON.parse(_elem.dataset.config)
    this.trigger = ''
    this.target = ''
    this.activeClass = this.config.activeClass
    this.isOpen = false
    this.initialize()
  }

  initialize () {
    this.isOpen = (this.config.initialState && !this.config.initialState === 'open')
    this.trigger = this.elem.querySelector(this.config.trigger)
    this.target = this.elem.querySelector(this.config.target)
    this.addEvents()
  }

  handleHover () {
    console.log(anime)
    return false
    // anime({
    //   targets: '.hero--portfolio-item__image',
    //   translateX: 0,
    //   width: '100%',
    //   duration: 300,
    //   easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000);'
    // })
  }

  handleLeave () {
    // anime({
    //   targets: '.hero--portfolio-item__image',
    //   translateX: '100%',
    //   width: '50%',
    //   duration: 100,
    //   easing: 'cubicBezier(0.420, 0.000, 0.580, 1.000);'
    // })
  }

  addEvents () {
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
}
