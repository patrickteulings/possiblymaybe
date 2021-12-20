
import './../styles/app.scss'

import { NavigationToggle } from './utilities/NavigationToggle'
import { IntersectTest } from './utilities/Intersection'
import { InstaFeedExtended } from './utilities/InstaExtention'
import { Hero } from './components/Hero'
import { HomepageHero } from './components/HomepageHero'
import { Italic } from './utilities/Italic'

const navigationToggles:NodeListOf<HTMLElement> = document.querySelectorAll('[data-module="NavigationToggle"]')

for (let navigationToggle of navigationToggles) {
  let item = NavigationToggle(navigationToggle)
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
 * Italic words in headerss
 */

const italicHeaders: NodeListOf<HTMLElement> = document.querySelectorAll('[data-module="italic"]')

for (let item of italicHeaders) {
  let italicItem = new Italic(item)
}


/**
 * HOMEPAGE ANIMATED TEXTT
 */
const homepageHero: HTMLElement = document.querySelector('.js-homepage-hero')!


if (homepageHero) {
  const heroAnimation = (HomepageHero as any)(homepageHero)
  heroAnimation.initialize()
}

