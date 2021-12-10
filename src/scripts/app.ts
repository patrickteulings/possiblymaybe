
import './../styles/app.scss'

import { NavigationToggle } from './utilities/NavigationToggle'
import IntersectTest from './utilities/Intersection'
import InstaFeedExtended from './utilities/InstaExtention'
import ImageLoader from './utilities/ImageLoader'
import Hero from './components/Hero'
import { HomepageHero } from './components/HomepageHero'
import Italic from './utilities/Italic'

const navigationToggles:NodeList = document.querySelectorAll('[data-module="NavigationToggle"]')

for (let navigationToggle of navigationToggles) {
  navigationToggle = new NavigationToggle(navigationToggle)
}

/**
 * EXTENDS THE instafeed plugin to add Captions
 */
const instaFeed = document.getElementById('sb_instagram')

if (instaFeed) {
  const instaFeedExtended = new InstaFeedExtended(instaFeed)
  console.log(instaFeedExtended)
}

const el = new IntersectTest()

/**
 * PORTFOLIO ITEM HERO
 *
 */


const portfolioHero = (document.querySelector('[data-module="hero"]')) ? new Hero(document.querySelector('[data-module="hero"]')) : ''
console.log(document.querySelector('[data-module="hero"]'))

/**
 * Italic words in headers
 */

const italicHeaders = document.querySelectorAll('[data-module="italic"]')

for (let item of italicHeaders) {
  item = new Italic(item)
}


/**
 * HOMEPAGE ANIMATED TEXT
 */
const homepageHero = document.querySelector('.js-homepage-hero')


if (homepageHero) {
  const heroAnimation = new HomepageHero(homepageHero)
  heroAnimation.initialize()
}

