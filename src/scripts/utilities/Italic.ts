export default class Italic {
  constructor (_elem) {
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
