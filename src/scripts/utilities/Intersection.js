
export default class IntersectTest {
  // Constructor always gets called, pass initial params here
  constructor (_elem) {
    this.elem = _elem || ''
    this.initialize()
  }

  initialize () {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        const ratio = entry.intersectionRatio
        entry.target.dataset.test = ratio

        console.log(ratio)
        if (entry.isIntersecting) {
          entry.target.classList.add('bigger')
          // entry.target.src = entry.target.dataset.src
          // observer.unobserve(entry.target)
        } else {
          entry.target.classList.remove('bigger')
        }
      })
    }, { rootMargin: '0px 0px 50px 0px' })
    const el = document.querySelector('.intersect')
    observer.observe(el)
  }
}
