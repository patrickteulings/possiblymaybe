/**
 * Extending the SBI Instagram feed plugin
 */


interface InstaFeedExtended {
  feedEl: HTMLElement
  imageContainers: NodeListOf<HTMLElement>
}

class InstaFeedExtended {
  constructor (_elem: HTMLElement) {
    this.feedEl = _elem!
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
      captionElement.innerHTML = (alt) ? alt : ''
      el.appendChild(captionElement)
    }
  }
}

export { InstaFeedExtended }
