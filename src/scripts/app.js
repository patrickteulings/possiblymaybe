
import './../styles/app.scss';

import NavigationToggle from './utilities/NavigationToggle';

const navigationToggles = document.querySelectorAll('[data-module="NavigationToggle"]');

for (let navigationToggle of navigationToggles) {
  navigationToggle = new NavigationToggle(navigationToggle);
}