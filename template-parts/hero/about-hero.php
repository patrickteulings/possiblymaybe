<div class="hero hero--about">
  <div class="hero--about__inner">
    <div class="hero--about__content">
      <div class="hero--about__subtitle">
        <?php the_field('main_subtitle'); ?>
      </div>
      <div class="hero--about__title">
        <h1><?php the_field('main_title'); ?></h1>
      </div>
      <div class="hero--about__content">
        <?php the_field('intro_content'); ?>
      </div>
      <div class="hero--about__actions">
        <? $link = get_field('website_url'); ?>
        <?=

          possiblymaybe_button('mailto:patrickteulings@gmail.com', 'Drop me a line', 'btn--small'); ?>
      </div>
    </div>
  </div>
</div>
<div class="llogo-detail--xl llogo-detail-about--xl" role="presentation">
<svg width="1440" height="750" viewBox="0 0 1440 750" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="mask0_0_3" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="1440" height="750">
<rect width="1440" height="750" fill="#C4C4C4"/>
</mask>
<g mask="url(#mask0_0_3)">
<path d="M1988.12 535.059H2019.86L1978.1 657.194C1938 772.078 1858.38 829.521 1739.21 829.521C1664.6 829.521 1612.81 806.098 1583.85 759.251C1569.38 733.597 1562.14 704.598 1562.14 672.251C1562.14 635.444 1570.49 591.944 1587.19 541.751L1730.86 108.424C1738.66 86.116 1742.55 68.2698 1742.55 54.8852C1742.55 41.5006 1738.1 34.8083 1729.19 34.8083C1694.66 34.8083 1651.23 76.6352 1598.89 160.289C1546.55 243.943 1490.86 380.02 1431.84 568.52L1363.34 806.098H1065.99L1266.45 108.424C1268.68 101.731 1271.47 92.2506 1274.81 79.9814C1278.15 67.7121 1279.82 58.2314 1279.82 51.5391C1279.82 40.3852 1274.25 34.8083 1263.11 34.8083C1223.02 34.8083 1177.92 80.5391 1127.8 172.001C1078.8 262.347 1027.57 389.501 974.111 553.463L908.961 806.098H613.278L817.082 79.9814C821.537 63.2506 823.764 49.3083 823.764 38.1544C823.764 28.1159 821.537 20.8659 817.082 16.4044C813.741 11.9428 807.616 9.7121 798.706 9.7121C766.41 9.7121 736.897 44.8468 710.168 115.116L671.746 217.174H650.007L686.781 86.6738C707.941 27.5583 739.681 -15.9417 782.001 -43.8264C824.321 -71.7111 872.766 -85.6534 927.337 -85.6534C985.248 -85.6534 1027.01 -71.7111 1052.63 -43.8264C1078.24 -15.9417 1091.05 20.8659 1091.05 66.5967C1091.05 87.7891 1087.15 115.116 1079.35 148.578L1059.31 223.866C1107.2 114.558 1159.54 35.9237 1216.34 -12.0379C1273.14 -61.1149 1341.07 -85.6534 1420.14 -85.6534C1518.15 -85.6534 1567.15 -41.0379 1567.15 48.193C1567.15 81.6546 1560.47 121.251 1547.1 166.982L1538.75 198.77C1587.75 91.693 1639.54 17.5198 1694.11 -23.7495C1749.79 -65.0188 1812.72 -85.6534 1882.88 -85.6534C1983.11 -85.6534 2033.22 -41.5957 2033.22 46.5198C2033.22 79.9814 2025.43 120.135 2009.84 166.982L1844.46 663.886C1838.89 682.848 1836.1 696.232 1836.1 704.04C1836.1 724.117 1845.57 734.155 1864.5 734.155C1896.8 734.155 1926.31 699.021 1953.04 628.751L1988.12 535.059Z" fill="#EEB6EF"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M548.99 576.776L451.998 338.028V337.764L327.028 40.0711C322.591 31.1984 320.374 22.3258 320.374 13.4532C320.374 -2.07397 328.692 -12.0557 345.328 -16.492C363.073 -20.9284 388.027 -23.1465 420.191 -23.1465V-58.0826C331.464 -51.4281 251.056 -48.1008 178.966 -48.1008C86.9121 -48.1008 -3.47754 -51.4281 -92.2041 -58.0826V-23.1465C-76.6768 -23.1465 -61.1504 -17.0466 -45.623 -4.84668C-28.9868 7.35322 -12.3506 32.3075 4.28564 70.0162L391.91 926.781L383.591 955.063C354.755 1043.79 302.074 1088.15 225.547 1088.15C198.929 1088.15 180.075 1087.04 168.984 1084.83C204.475 1073.73 231.093 1055.99 248.838 1031.59C267.693 1008.3 277.12 983.344 277.12 956.726C277.12 916.799 263.811 886.3 237.192 865.227C210.575 844.155 173.975 833.618 127.394 833.618C78.5942 833.618 39.2222 845.264 9.27686 868.554C-20.6685 891.845 -35.6406 922.899 -35.6406 961.717C-35.6406 1013.84 -11.7954 1052.66 35.895 1078.17C83.5854 1104.79 135.157 1118.1 190.611 1118.1C259.375 1118.1 310.947 1104.79 345.328 1078.17C374.164 1055.99 398.564 1016.06 418.527 958.39L488.4 757.092L548.99 576.776Z" fill="#303535"/>
<rect x="598" y="8" width="834" height="734" stroke="white" stroke-width="16"/>
</g>
</svg>
</div>
