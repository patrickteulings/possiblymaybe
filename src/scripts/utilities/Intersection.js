
export default class IntersectTest {
  // Constructor always gets called, pass initial params here
  constructor (_elem) {
    this.elem = _elem || ''
    this.initialize()
  }

  initialize () {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        // const ratio = entry.intersectionRatio
        // entry.target.dataset.test = ratio

        // console.log(ratio)
        if (entry.isIntersecting) {
          entry.target.classList.add('is-intersected')
        } else {
          // entry.target.classList.remove('is-intersected')
        }
      })
    }, { rootMargin: '-20px 0px 50px 0px' })

    const el = document.querySelectorAll('.portfolio-item__image')

    el.forEach((item) => {
      observer.observe(item)
    })

    const navObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const ratio = entry.intersectionRatio
        entry.target.dataset.test = ratio

        if (entry.isIntersecting) {
          entry.target.classList.add('make-visible')
          // entry.target.src = entry.target.dataset.src
          // observer.unobserve(entry.target)
        } else {
          entry.target.classList.remove('make-visible')
        }
      })
    }, { rootMargin: '0px 0px 50px 0px' })
    const navEl = document.querySelector('.hero')

    if (navEl.classList.contains('hero--about')) return

    navObserver.observe(navEl)
  }
}
