/**
 * Extending the SBI Instagram feed plugin
 */

export default class InstaFeedExtended {
  constructor (_elem) {
    this.feedEl = _elem
    this.imageContainers = this.feedEl.querySelectorAll('.sbi_item')
    this.initialize()
  }

  initialize () {
    if (!this.imageContainers.length) return

    for (const el of this.imageContainers) {
      const img = el.getElementsByTagName('img')[0]
      const alt = img.getAttribute('alt')
      const captionElement = document.createElement('div')
      captionElement.className = 'sbi_caption'
      captionElement.innerHTML = alt
      el.appendChild(captionElement)
      console.log(alt, alt)
    }
  }
}
