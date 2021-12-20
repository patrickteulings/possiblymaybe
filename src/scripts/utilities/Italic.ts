interface Italic {
  elem: HTMLElement,
  italicElements: HTMLCollectionOf<HTMLSpanElement>
}

class Italic {
  constructor (_elem: HTMLElement) {
    this.elem = _elem
    this.italicElements = this.elem.getElementsByTagName('span')
    this.setItalic()
  }

  setItalic () {
    for (const item of this.italicElements) {
      item.style.fontStyle = 'italic'
    }
  }
}

export { Italic }
