
import './../styles/app.scss'

import NavigationToggle from './utilities/NavigationToggle'
import IntersectTest from './utilities/Intersection'

const navigationToggles = document.querySelectorAll('[data-module="NavigationToggle"]')

for (let navigationToggle of navigationToggles) {
  navigationToggle = new NavigationToggle(navigationToggle)
}

const el = new IntersectTest()
console.log(el)
