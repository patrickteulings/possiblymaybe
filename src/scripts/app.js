
import './../styles/app.scss'

import NavigationToggle from './utilities/NavigationToggle'
import IntersectTest from './utilities/Intersection'
import InstaFeedExtended from './utilities/InstaExtention'

const navigationToggles = document.querySelectorAll('[data-module="NavigationToggle"]')

for (let navigationToggle of navigationToggles) {
  navigationToggle = new NavigationToggle(navigationToggle)
}

const instaFeed = document.getElementById('sb_instagram')
if (instaFeed) {
  const instaFeedExtended = new InstaFeedExtended(instaFeed)
  console.log(instaFeedExtended)
}
const el = new IntersectTest()

console.log(el)
