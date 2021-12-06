<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

?>
			</main><!-- #main -->
		</div><!-- #primary -->
	</div><!-- #content -->

  <?php get_template_part( 'template-parts/footer/footer-cta' ); ?>
	<footer id="colophon" class="site-footer" role="contentinfo">
    <div class="footer-navigation-container">
      <div class="footer-branding">
        <svg width="275" height="40" viewBox="0 0 275 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M185.438 25.7579H186.21L185.194 28.7284C184.219 31.5226 182.283 32.9196 179.384 32.9196C177.57 32.9196 176.31 32.3499 175.606 31.2106C175.254 30.5866 175.078 29.8813 175.078 29.0946C175.078 28.1994 175.281 27.1414 175.687 25.9207L179.181 15.3815C179.371 14.8389 179.466 14.4049 179.466 14.0793C179.466 13.7538 179.357 13.591 179.141 13.591C178.301 13.591 177.245 14.6083 175.972 16.6429C174.698 18.6775 173.344 21.9871 171.909 26.5717L170.243 32.3499H163.011L167.886 15.3815C167.94 15.2187 168.008 14.9881 168.089 14.6897C168.171 14.3913 168.211 14.1607 168.211 13.998C168.211 13.7267 168.076 13.591 167.805 13.591C166.83 13.591 165.733 14.7033 164.514 16.9278C163.322 19.1251 162.076 22.2177 160.776 26.2055L159.191 32.3499H152L156.957 14.6897C157.065 14.2828 157.119 13.9437 157.119 13.6724C157.119 13.4283 157.065 13.2519 156.957 13.1434C156.876 13.0349 156.727 12.9807 156.51 12.9807C155.724 12.9807 155.007 13.8352 154.357 15.5443L153.422 18.0265H152.65L153.788 14.8525C154.302 13.4147 155.074 12.3567 156.104 11.6785C157.133 11.0003 158.311 10.6612 159.638 10.6612C161.047 10.6612 162.063 11.0003 162.686 11.6785C163.309 12.3567 163.62 13.2519 163.62 14.3642C163.62 14.8796 163.525 15.5443 163.336 16.3581L162.848 18.1892C164.013 15.5307 165.286 13.6182 166.667 12.4517C168.049 11.2581 169.701 10.6612 171.624 10.6612C174.008 10.6612 175.2 11.7464 175.2 13.9166C175.2 14.7304 175.037 15.6935 174.712 16.8057L174.509 17.5788C175.701 14.9746 176.96 13.1706 178.287 12.1668C179.642 11.1631 181.172 10.6612 182.879 10.6612C185.316 10.6612 186.535 11.7328 186.535 13.8759C186.535 14.6897 186.346 15.6663 185.966 16.8057L181.944 28.8911C181.809 29.3523 181.741 29.6779 181.741 29.8678C181.741 30.3561 181.971 30.6002 182.432 30.6002C183.217 30.6002 183.935 29.7457 184.585 28.0366L185.438 25.7579Z" fill="#DB72DD"/>
          <path d="M209.073 25.7579H209.845L208.829 28.7284C207.854 31.5226 205.918 32.9196 203.019 32.9196C201.367 32.9196 200.189 32.4449 199.485 31.4954C199.024 30.8172 198.794 29.9898 198.794 29.0132C198.794 28.7148 198.808 28.4842 198.835 28.3215C198.185 29.9763 197.345 31.1563 196.316 31.8616C195.286 32.567 194.067 32.9196 192.659 32.9196C190.98 32.9196 189.72 32.4856 188.88 31.6175C188.041 30.7494 187.621 29.488 187.621 27.8332C187.621 25.2831 188.298 22.6653 189.652 19.9797C191.034 17.294 192.74 15.0695 194.772 13.3062C196.83 11.5429 198.794 10.6612 200.663 10.6612C202.207 10.6612 203.047 11.4344 203.182 12.9807L203.71 11.2716C206.338 11.2445 208.789 11.041 211.064 10.6612L205.579 28.8911C205.471 29.2438 205.417 29.5693 205.417 29.8678C205.417 30.3561 205.633 30.6002 206.067 30.6002C206.852 30.6002 207.57 29.7457 208.22 28.0366L209.073 25.7579ZM196.194 30.1526C196.762 30.1526 197.331 29.7185 197.9 28.8505C198.469 27.9824 199.119 26.4225 199.85 24.1709L202.776 14.4049C202.803 14.2692 202.816 14.0658 202.816 13.7945C202.816 13.0349 202.559 12.6551 202.044 12.6551C201.286 12.6551 200.351 13.4418 199.241 15.0153C198.157 16.5887 197.223 18.569 196.437 20.9563C195.652 23.3435 195.259 25.6901 195.259 27.9959C195.259 28.7826 195.327 29.3388 195.462 29.6643C195.598 29.9898 195.842 30.1526 196.194 30.1526Z" fill="#DB72DD"/>
          <path d="M227.764 10.6612C229.823 10.6612 230.852 11.9769 230.852 14.6083C230.852 16.9685 230.067 19.8305 228.496 23.1943C226.952 26.531 225.069 29.5287 222.848 32.1872C221.142 34.2218 219.354 35.863 217.485 37.1109C215.643 38.3859 213.801 39.2404 211.959 39.6745C211.038 39.8915 210.239 40 209.562 40C208.479 40 207.652 39.7559 207.084 39.2675C206.488 38.8064 206.19 38.1553 206.19 37.3143C206.19 36.5005 206.488 35.7952 207.084 35.1984C207.68 34.6287 208.465 34.3438 209.44 34.3438C211.39 34.3438 213.056 35.5375 214.438 37.9247C216.198 37.138 217.769 36.1207 219.151 34.8728L215.86 14.7304C215.724 14.0251 215.602 13.5639 215.494 13.3469C215.413 13.1027 215.25 12.9807 215.006 12.9807C214.736 12.9807 214.492 13.1434 214.275 13.469C214.086 13.7945 213.788 14.4863 213.381 15.5443L212.528 17.823H211.756L212.772 14.8525C213.314 13.3062 214.004 12.2211 214.844 11.5972C215.711 10.9732 216.767 10.6612 218.013 10.6612C219.367 10.6612 220.437 11.0275 221.223 11.7599C222.008 12.4652 222.536 13.7131 222.807 15.5036L224.554 28.5249C226.342 25.9207 227.764 23.1265 228.821 20.1424C227.548 19.4371 226.518 18.5419 225.733 17.4568C224.974 16.3717 224.595 15.2187 224.595 13.998C224.595 12.9671 224.866 12.1533 225.408 11.5565C225.976 10.9596 226.762 10.6612 227.764 10.6612Z" fill="#DB72DD"/>
          <path d="M248.055 10.6612C249.924 10.6612 251.318 11.2309 252.239 12.3703C253.16 13.5097 253.621 15.1509 253.621 17.294C253.621 19.5185 253.079 21.8515 251.996 24.293C250.939 26.7345 249.409 28.7826 247.405 30.4374C245.4 32.0922 243.098 32.9196 240.497 32.9196C239.847 32.9196 239.238 32.8383 238.669 32.6755C238.1 32.5127 237.626 32.2957 237.247 32.0244C236.705 31.8888 236.177 31.821 235.663 31.821C234.254 31.821 232.534 32.2143 230.503 33.001L229.893 32.7162C230.218 32.0651 230.516 31.2648 230.787 30.3154L238.263 5.20854C238.398 4.72024 238.466 4.34045 238.466 4.06918C238.466 3.52662 238.249 3.13327 237.816 2.88911C237.41 2.64496 236.705 2.52289 235.703 2.52289L235.988 1.66836C238.127 1.64123 240.064 1.49203 241.798 1.22075C243.531 0.949474 245.224 0.542556 246.876 0L242.529 14.7711C243.314 13.3605 244.154 12.3296 245.048 11.6785C245.942 11.0003 246.944 10.6612 248.055 10.6612ZM238.669 31.5768C239.834 31.5768 240.985 30.7358 242.123 29.0539C243.287 27.3449 244.235 25.2425 244.967 22.7467C245.698 20.2509 246.064 17.9044 246.064 15.707C246.064 14.8118 245.982 14.2014 245.82 13.8759C245.685 13.5504 245.441 13.3876 245.089 13.3876C244.574 13.3876 244.032 13.7267 243.463 14.4049C242.895 15.056 242.339 15.9783 241.798 17.1719L237.613 31.414C238.046 31.5226 238.398 31.5768 238.669 31.5768Z" fill="#DB72DD"/>
          <path d="M275 14.2421C275 16.5209 273.727 18.5148 271.181 20.2238C268.662 21.9057 265.655 23.1536 262.161 23.9674C262.08 24.6999 262.039 25.3917 262.039 26.0427C262.039 27.5348 262.324 28.5656 262.892 29.1353C263.461 29.705 264.301 29.9898 265.411 29.9898C266.089 29.9898 266.955 29.7592 268.012 29.2981C269.095 28.8369 270.124 28.118 271.1 27.1414L271.75 27.4669C270.72 29.0132 269.325 30.3154 267.565 31.3733C265.804 32.4042 263.773 32.9196 261.47 32.9196C259.466 32.9196 257.787 32.4178 256.432 31.414C255.105 30.4103 254.441 28.9997 254.441 27.1821C254.441 24.5236 255.119 21.9193 256.473 19.3693C257.854 16.7921 259.723 14.7033 262.08 13.1027C264.463 11.4751 267.091 10.6612 269.962 10.6612C271.479 10.6612 272.698 10.9732 273.619 11.5972C274.54 12.194 275 13.0756 275 14.2421ZM269.068 11.4344C268.31 11.4344 267.456 12.0176 266.508 13.1841C265.587 14.3506 264.734 15.8562 263.949 17.7009C263.163 19.5456 262.608 21.3903 262.283 23.235C263.718 22.394 264.964 21.4717 266.021 20.468C267.158 19.3557 268.052 18.1214 268.702 16.765C269.38 15.4086 269.718 13.9708 269.718 12.4517C269.718 11.7735 269.501 11.4344 269.068 11.4344Z" fill="#DB72DD"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M90.4253 0.690344C91.828 0.690344 92.907 0.987063 93.6623 1.5805C94.4445 2.17394 94.8357 3.03713 94.8357 4.17005C94.8357 5.30298 94.4445 6.16617 93.6623 6.75961C92.907 7.35304 91.828 7.64976 90.4253 7.64976C88.9957 7.64976 87.9032 7.35304 87.1479 6.75961C86.3926 6.16617 86.015 5.30298 86.015 4.17005C86.015 3.03713 86.3926 2.17394 87.1479 1.5805C87.9032 0.987063 88.9957 0.690344 90.4253 0.690344ZM94.3097 28.5685C94.3097 29.6744 94.4715 30.4432 94.7952 30.8748C95.1459 31.2794 95.7393 31.4817 96.5755 31.4817V32.3314C93.6623 32.2235 91.7471 32.1696 90.83 32.1696C89.9128 32.1696 87.8897 32.2235 84.7607 32.3314V31.4817C85.5969 31.4817 86.1768 31.2794 86.5005 30.8748C86.8512 30.4432 87.0266 29.6744 87.0266 28.5685V15.7421C87.0266 14.5013 86.8512 13.5976 86.5005 13.0312C86.1768 12.4647 85.5969 12.1815 84.7607 12.1815V11.3318C85.6239 11.4127 86.4601 11.4532 87.2693 11.4532C90.0747 11.4532 92.4214 11.2643 94.3097 10.8867V28.5685ZM20.7973 13.3549C19.5026 11.6285 17.8032 10.7653 15.6992 10.7653C12.8399 10.7653 10.7898 11.7769 9.54897 13.7999V10.9272C7.66075 11.3048 5.31397 11.4936 2.50863 11.4936C1.67242 11.4936 0.836209 11.4532 0 11.3722V12.2219C0.836209 12.2219 1.41616 12.5052 1.73985 13.0716C2.09052 13.6381 2.26586 14.5417 2.26586 15.7826V35.8921C2.26586 36.998 2.09052 37.7533 1.73985 38.1579C1.41616 38.5895 0.836209 38.8053 0 38.8053V39.655C2.91324 39.5471 4.77448 39.4932 5.58372 39.4932C6.52783 39.4932 8.61835 39.5336 11.8553 39.6145L13.0287 39.655V38.8053C11.8688 38.8053 10.9921 38.5625 10.3987 38.077C9.8322 37.5914 9.54897 36.7283 9.54897 35.4874V32.1291C10.4931 32.6416 11.7474 32.8979 13.3119 32.8979C16.1442 32.8979 18.4236 31.9808 20.1499 30.1465C21.8763 28.2852 22.7395 25.2102 22.7395 20.9212C22.7395 17.6033 22.0921 15.0812 20.7973 13.3549ZM14.1616 29.2968C13.5142 30.8883 12.4487 31.684 10.9651 31.684C10.3717 31.684 9.89964 31.5761 9.54897 31.3603V15.7826C9.54897 14.9464 9.8322 14.2585 10.3987 13.719C10.9921 13.1526 11.68 12.8693 12.4622 12.8693C13.2984 12.8693 13.9593 13.5437 14.4448 14.8924C14.9304 16.2142 15.1731 18.534 15.1731 21.8518C15.1731 25.1967 14.836 27.6783 14.1616 29.2968ZM42.9827 13.3953C41.1754 11.642 38.6128 10.7653 35.295 10.7653C31.9771 10.7653 29.4145 11.642 27.6072 13.3953C25.7999 15.1217 24.8963 17.9405 24.8963 21.8518C24.8963 25.7631 25.7999 28.582 27.6072 30.3083C29.4145 32.0347 31.9771 32.8979 35.295 32.8979C38.6128 32.8979 41.1754 32.0347 42.9827 30.3083C44.79 28.582 45.6936 25.7631 45.6936 21.8518C45.6936 17.9405 44.79 15.1217 42.9827 13.3953ZM33.2314 14.1236C33.7439 12.4242 34.4318 11.5746 35.295 11.5746C36.1581 11.5746 36.846 12.4242 37.3585 14.1236C37.871 15.823 38.1273 18.3991 38.1273 21.8518C38.1273 25.3046 37.871 27.8806 37.3585 29.58C36.846 31.2524 36.1581 32.0887 35.295 32.0887C34.4318 32.0887 33.7439 31.2524 33.2314 29.58C32.7189 27.8806 32.4626 25.3046 32.4626 21.8518C32.4626 18.3991 32.7189 15.823 33.2314 14.1236ZM55.8969 10.7653C56.9489 10.7653 57.9335 10.8867 58.8506 11.1295C59.7947 11.3453 60.5096 11.588 60.9951 11.8578C61.2918 12.0196 61.5346 12.1006 61.7234 12.1006C62.2899 12.1006 62.6271 11.669 62.735 10.8058H63.5442C63.4363 12.2085 63.3824 14.6362 63.3824 18.0889H62.5731C62.3573 16.3086 61.8448 14.8115 61.0356 13.5976C60.2533 12.3568 59.1069 11.7364 57.5963 11.7364C56.922 11.7364 56.3555 11.9387 55.8969 12.3433C55.4384 12.7479 55.2091 13.3009 55.2091 14.0023C55.2091 14.8924 55.5058 15.6882 56.0992 16.3895C56.6927 17.0639 57.6233 17.9001 58.8911 18.8981C58.9451 18.9251 59.3362 19.2353 60.0645 19.8287C61.5751 21.0696 62.681 22.1755 63.3824 23.1466C64.0837 24.0907 64.4344 25.2641 64.4344 26.6668C64.4344 27.8537 64.0702 28.9326 63.3419 29.9037C62.6136 30.8478 61.6155 31.5896 60.3477 32.1291C59.1069 32.6416 57.7447 32.8979 56.2611 32.8979C54.5617 32.8979 53.1725 32.5607 52.0935 31.8863C51.635 31.6436 51.2573 31.4682 50.9606 31.3603C50.6639 31.2524 50.3672 31.1985 50.0704 31.1985C49.5579 31.1985 49.1803 31.6705 48.9375 32.6147H48.1283C48.2362 31.0771 48.2901 28.3797 48.2901 24.5223H49.0994C49.3421 26.7342 49.9356 28.5145 50.8797 29.8633C51.8238 31.212 53.0107 31.8863 54.4403 31.8863C55.1147 31.8863 55.6677 31.6975 56.0992 31.3199C56.5578 30.9422 56.7871 30.3893 56.7871 29.6609C56.7871 28.9057 56.6252 28.2313 56.3016 27.6379C56.0048 27.0444 55.6272 26.5184 55.1686 26.0599C54.737 25.5743 54.0222 24.8865 53.0242 23.9963C51.8912 22.9443 51.028 22.1081 50.4346 21.4877C49.8412 20.8673 49.3286 20.1524 48.8971 19.3432C48.4924 18.507 48.2901 17.5899 48.2901 16.5918C48.2901 15.4319 48.6408 14.4069 49.3421 13.5167C50.0435 12.6266 50.9741 11.9522 52.134 11.4936C53.2939 11.0081 54.5482 10.7653 55.8969 10.7653ZM77.531 11.1295C76.6139 10.8867 75.6293 10.7653 74.5773 10.7653C73.2286 10.7653 71.9743 11.0081 70.8144 11.4936C69.6545 11.9522 68.7238 12.6266 68.0225 13.5167C67.3212 14.4069 66.9705 15.4319 66.9705 16.5918C66.9705 17.5899 67.1728 18.507 67.5774 19.3432C68.009 20.1524 68.5215 20.8673 69.115 21.4877C69.7084 22.1081 70.5716 22.9443 71.7045 23.9963C72.7026 24.8865 73.4174 25.5743 73.849 26.0599C74.3075 26.5184 74.6852 27.0444 74.9819 27.6379C75.3056 28.2313 75.4675 28.9057 75.4675 29.6609C75.4675 30.3893 75.2382 30.9422 74.7796 31.3199C74.348 31.6975 73.795 31.8863 73.1207 31.8863C71.691 31.8863 70.5042 31.212 69.56 29.8633C68.6159 28.5145 68.0225 26.7342 67.7797 24.5223H66.9705C66.9705 28.3797 66.9165 31.0771 66.8086 32.6147H67.6179C67.8606 31.6705 68.2383 31.1985 68.7508 31.1985C69.0475 31.1985 69.3442 31.2524 69.641 31.3603C69.9377 31.4682 70.3153 31.6436 70.7739 31.8863C71.8529 32.5607 73.2421 32.8979 74.9415 32.8979C76.425 32.8979 77.7873 32.6416 79.0281 32.1291C80.2959 31.5896 81.2939 30.8478 82.0223 29.9037C82.7506 28.9326 83.1147 27.8537 83.1147 26.6668C83.1147 25.2641 82.7641 24.0907 82.0627 23.1466C81.3614 22.1755 80.2554 21.0696 78.7449 19.8287C78.0165 19.2353 77.6254 18.9251 77.5715 18.8981C76.3037 17.9001 75.373 17.0639 74.7796 16.3895C74.1862 15.6882 73.8894 14.8924 73.8894 14.0023C73.8894 13.3009 74.1187 12.7479 74.5773 12.3433C75.0359 11.9387 75.6023 11.7364 76.2767 11.7364C77.7873 11.7364 78.9337 12.3568 79.7159 13.5976C80.5252 14.8115 81.0377 16.3086 81.2535 18.0889H82.0627C82.0627 14.6362 82.1167 12.2085 82.2246 10.8058H81.4153C81.3074 11.669 80.9702 12.1006 80.4038 12.1006C80.215 12.1006 79.9722 12.0196 79.6755 11.8578C79.1899 11.588 78.4751 11.3453 77.531 11.1295ZM117.942 13.3549C116.648 11.6285 114.948 10.7653 112.844 10.7653C109.985 10.7653 107.935 11.7769 106.694 13.7999V0.690344C104.806 1.06799 102.459 1.25681 99.6538 1.25681C98.8176 1.25681 97.9814 1.21635 97.1451 1.13542V1.98512C97.9814 1.98512 98.5613 2.26835 98.885 2.83482C99.2357 3.40128 99.411 4.30493 99.411 5.54575V30.3488C99.411 31.2659 99.3166 32.0077 99.1278 32.5742L99.6942 32.9788C100.072 32.6281 100.611 32.3449 101.313 32.1291C102.014 31.9133 102.769 31.8054 103.579 31.8054C104.658 31.8054 105.696 32.0077 106.694 32.4123C107.18 32.6281 107.706 32.763 108.272 32.817C108.866 32.8709 109.594 32.8979 110.457 32.8979C113.289 32.8979 115.569 31.9808 117.295 30.1465C119.021 28.2852 119.885 25.2102 119.885 20.9212C119.885 17.6033 119.237 15.0812 117.942 13.3549ZM112.318 21.8518C112.318 28.6764 111.077 32.0887 108.596 32.0887C107.948 32.0887 107.315 31.9268 106.694 31.6031V15.7826C106.694 14.9464 106.977 14.2585 107.544 13.719C108.137 13.1526 108.825 12.8693 109.607 12.8693C110.444 12.8693 111.104 13.5437 111.59 14.8924C112.076 16.2142 112.318 18.534 112.318 21.8518ZM130.64 28.5685C130.64 29.6744 130.802 30.4432 131.126 30.8748C131.476 31.2794 132.07 31.4817 132.906 31.4817V32.3314C129.993 32.2235 128.078 32.1696 127.16 32.1696C126.243 32.1696 124.22 32.2235 121.091 32.3314V31.4817C121.927 31.4817 122.507 31.2794 122.831 30.8748C123.182 30.4432 123.357 29.6744 123.357 28.5685V5.54575C123.357 4.30493 123.182 3.40128 122.831 2.83482C122.507 2.26835 121.927 1.98512 121.091 1.98512V1.13542C121.927 1.21635 122.764 1.25681 123.6 1.25681C126.405 1.25681 128.752 1.06799 130.64 0.690344V28.5685ZM148.02 26.7725L145.661 20.9658V20.9592L142.622 13.719C142.514 13.5032 142.46 13.2874 142.46 13.0716C142.46 12.694 142.662 12.4512 143.067 12.3433C143.499 12.2354 144.105 12.1815 144.888 12.1815V11.3318C142.73 11.4936 140.774 11.5746 139.021 11.5746C136.782 11.5746 134.584 11.4936 132.426 11.3318V12.1815C132.803 12.1815 133.181 12.3298 133.558 12.6266C133.963 12.9233 134.368 13.5302 134.772 14.4473L144.2 35.2851L143.998 35.973C143.296 38.1309 142.015 39.2099 140.154 39.2099C139.506 39.2099 139.048 39.1829 138.778 39.129C139.641 38.8593 140.289 38.4277 140.72 37.8342C141.179 37.2678 141.408 36.6608 141.408 36.0134C141.408 35.0424 141.084 34.3006 140.437 33.788C139.79 33.2755 138.899 33.0193 137.766 33.0193C136.58 33.0193 135.622 33.3025 134.894 33.869C134.165 34.4354 133.801 35.1907 133.801 36.1348C133.801 37.4026 134.381 38.3467 135.541 38.9671C136.701 39.6145 137.955 39.9382 139.304 39.9382C140.976 39.9382 142.231 39.6145 143.067 38.9671C143.768 38.4277 144.362 37.4566 144.847 36.0539L146.547 31.158L148.02 26.7725Z" fill="white"/>
        </svg>
      </div>
      <?php if ( has_nav_menu( 'footer' ) ) : ?>
        <nav aria-label="<?php esc_attr_e( 'Secondary menu', 'possiblymaybe' ); ?>" class="footer-navigation">
          <ul class="footer-navigation-wrapper">
            <?php
            wp_nav_menu(
              array(
                'theme_location' => 'footer',
                'items_wrap'     => '%3$s',
                'container'      => false,
                'depth'          => 1,
                'link_before'    => '<span>',
                'link_after'     => '</span>',
                'fallback_cb'    => false,
              )
            );
            ?>
          </ul><!-- .footer-navigation-wrapper -->
        </nav><!-- .footer-navigation -->
		  <?php endif; ?>
		</div>
    <div class="site-footer__inner">
      <div class="footer-flex-wrapper">
        <div class="footer-column cta">
          <h4 class="cta__title">Let's talk</h4>
          <p class="cta__content">We zijn altijd op zoek naar nieuwe klanten die, net als wij, het beste voor hebben met de wereld. Bel gerust om te kijken wat we samen kunnen doen!</p>
        </div>
        <div class="footer-column contact-details">
          <h4 class="contact-details__title">The details</h4>
          <ul class="contact-details__content">
              <li class="email"><i class="icon"><?php include(get_stylesheet_directory() .'/assets/icons/feather-icons/send.svg') ?></i><a href="mailto:patrickteulings@gmail.com">patrickteulings@gmail.com<a></li>
              <li class="phone"><i class="icon"><?php possiblymaybe_get_icon('smartphone'); ?></i><a href="tel:0031614479205">0031 (0)6 144 79 205</a></li>
              <li class="kvk"><i class="icon"><?php possiblymaybe_get_icon('hash'); ?></i>840 60 999</li>
          </ul>
        </div>
      </div>
      <div class="site-footer__terms">
        <a href="">voorwaarden</a>
      </div>
    </div>
	</footer><!-- #colophon -->
</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>
