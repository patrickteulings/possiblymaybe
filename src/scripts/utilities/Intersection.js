
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
          setTimeout(() => {
            entry.target.classList.add('make-visible')
          }, 1000)
          // entry.target.src = entry.target.dataset.src
          // observer.unobserve(entry.target)
        } else {
          // entry.target.classList.remove('make-visible')
        }
      })
    }, { rootMargin: '0px 0px 50px 0px' })
    const navEl = document.querySelector('.hero')

    if (!navEl.classList.contains('hero--about')) {
      navObserver.observe(navEl)
    }

    /**
     * WORK OVERVIEW PAGE
     */

    const workObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const ratio = entry.intersectionRatio
        entry.target.dataset.test = ratio

        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          // entry.target.src = entry.target.dataset.src
          // observer.unobserve(entry.target)
        } else {
          entry.target.classList.remove('in-view')
        }
      })
    }, { rootMargin: '0% 0px 0% 0px' })
    const workEl = document.querySelectorAll('.work-card--wrapper')

    workEl.forEach((item) => {
      console.log('item', item)
      workObserver.observe(item)
    })

    console.log(workObserver)

    /**
     * ABOUT PAGE
     */

    const aboutObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const ratio = entry.intersectionRatio
        entry.target.dataset.test = ratio

        if (entry.isIntersecting) {
          entry.target.classList.add('in-view')
          // entry.target.src = entry.target.dataset.src
          // observer.unobserve(entry.target)
        } else {
          entry.target.classList.remove('in-view')
        }
      })
    }, { rootMargin: '0% 0px 0% 0px' })
    const aboutEl = document.querySelectorAll('.card--about')

    aboutEl.forEach((item) => {
      aboutObserver.observe(item)
    })

    // console.log(workObserver)
  }
}
