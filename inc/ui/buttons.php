<?php

function possiblymaybe_button($link, $text= 'tell me more', $class ='') {
  return '<a href="' . $link . '" class="btn ' . $class . '"><i class="icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></i><span class="text">' . $text . '</span></a>';
}

?>