
import './../styles/app.scss'

import NavigationToggle from './utilities/NavigationToggle'
import IntersectTest from './utilities/Intersection'
import InstaFeedExtended from './utilities/InstaExtention'
import ImageLoader from './utilities/ImageLoader'

const navigationToggles = document.querySelectorAll('[data-module="NavigationToggle"]')

for (let navigationToggle of navigationToggles) {
  navigationToggle = new NavigationToggle(navigationToggle)
}

/**
 * EXTEND THE instafeed plugin to add Captions
 */
const instaFeed = document.getElementById('sb_instagram')

if (instaFeed) {
  const instaFeedExtended = new InstaFeedExtended(instaFeed)
  console.log(instaFeedExtended)
}

const el = new IntersectTest()

/**
 * IMAGELOADER
 */

const imageProgress = (e) => {
  const { received, length, loading } = e.detail
  setProgressbarValue(e.detail)
}

const imageLoaded = (e) => {
  setProgressbarValue(e.detail)
  console.log('ImageLoaded', e)
}

const { json } = new ImageLoader('afb1', imageProgress, imageLoaded)

const addActions = () => {
  const progressbutton = document.getElementById('fetch-button')

  if (!progressbutton) return

  // Bind the fetch function to the button's click event
  progressbutton.addEventListener('click', async () => {
    const theBlob = await json('http://possiblymaybe.local/wp-content/uploads/2021/11/minemark-portfolio-header-image.jpg')
    const elem = document.querySelector('.the_image')
    elem.src = theBlob
    elem.dataset.src = theBlob
  })
}

addActions()

const setProgressbarValue = (payload) => {
  const { received, length, loading } = payload
  const value = ((received / length) * 100).toFixed(2)
  const loadBar = document.querySelector('.hero--portfolio-item__image-progress')
  loadBar.style.width = `${value}%`
  console.log(loading)
  console.log(value)
}

console.log(el)
