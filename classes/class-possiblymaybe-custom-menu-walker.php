<?php

class POSSIBLYMAYBE_Menu_Walker extends Walker_Nav_Menu {
  function start_el(&$output, $item, $depth=0, $args=[], $id=0) {
		$output .= "<li class='" .  implode(" ", $item->classes) . "'>";

		if ($item->url && $item->url != '#') {
			$output .= '<span class="item__inner"><a href="' . $item->url . '">';
		} else {
			$output .= '<span>';
		}

		$output .= $item->title;

		if ($item->url && $item->url != '#') {
			$output .= '</span></a>';
		} else {
			$output .= '</span>';
		}
	}
}

?>