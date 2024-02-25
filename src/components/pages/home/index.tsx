import { ComponentPropsWithoutRef } from 'react';

export function HeroSection() {
  return (
    <section className='bg-primary-color text-background sticky top-0'>
      <div className='mx-5 min-h-screen'>
        <p>Hello world</p>
        <SVGComponent />
      </div>
    </section>
  );
}

const SVGComponent = (props: ComponentPropsWithoutRef<'svg'>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='1040.000000pt'
    height='1041.000000pt'
    viewBox='0 0 1040.000000 1041.000000'
    preserveAspectRatio='xMidYMid meet'
    {...props}
  >
    <title>rocket</title>
    <g transform='translate(0.000000,1041.000000) scale(0.100000,-0.100000)' fill='#000000' stroke='none'>
      <path d='M8129 9637 c-56 -55 -103 -220 -80 -279 7 -20 18 -28 35 -28 27 0 32 10 51 90 7 30 26 90 41 133 22 58 26 81 18 94 -17 27 -28 25 -65 -10z' />
      <path d='M8342 9349 c-83 -10 -138 -37 -134 -64 2 -11 5 -21 7 -23 10 -10 216 12 263 29 46 16 43 45 -5 58 -42 12 -41 12 -131 0z' />
      <path d='M7729 9131 c-43 -30 -159 -162 -224 -256 -21 -30 -64 -131 -109 -255 -41 -113 -97 -254 -123 -315 -47 -105 -50 -110 -81 -113 -27 -3 -41 -14 -78 -64 -104 -142 -185 -327 -369 -848 -59 -168 -120 -332 -135 -365 -51 -116 -138 -186 -308 -251 -103 -39 -129 -55 -118 -73 26 -42 251 37 357 124 95 80 135 161 262 530 189 553 319 843 379 846 122 5 177 -19 408 -182 105 -74 190 -123 198 -115 12 12 -152 158 -263 234 -66 46 -139 98 -163 117 -24 19 -50 39 -59 44 -15 8 -12 19 24 97 22 49 66 157 98 239 31 83 70 182 85 222 20 54 49 98 113 175 46 57 99 116 116 132 48 46 39 8 -14 -61 -113 -145 -145 -213 -145 -305 0 -55 8 -60 31 -20 29 49 213 141 253 126 16 -6 70 -135 81 -196 4 -20 2 -44 -3 -54 -9 -16 -12 -13 -26 20 -9 21 -16 44 -16 52 0 26 -23 62 -47 73 -46 21 -158 8 -158 -19 0 -11 9 -14 33 -12 17 2 32 1 32 -2 0 -3 -42 -34 -92 -68 -82 -56 -90 -63 -66 -66 28 -3 88 24 178 82 60 38 77 35 60 -10 -16 -41 -45 -69 -122 -119 -55 -36 -69 -50 -77 -82 -6 -21 -11 -46 -11 -55 0 -29 -49 -76 -98 -94 -59 -22 -72 -32 -65 -50 12 -32 120 -4 172 46 27 26 51 79 51 113 0 23 33 60 81 91 25 16 25 15 38 -19 8 -23 21 -37 37 -41 33 -8 51 9 59 56 5 27 11 37 20 33 8 -2 26 7 41 22 25 25 26 31 21 98 -5 83 -53 211 -89 241 -31 25 -107 17 -177 -18 -28 -15 -51 -22 -51 -17 0 5 20 38 45 73 109 153 117 168 122 211 4 32 1 48 -12 60 -23 24 -46 21 -96 -12z m131 -661 c0 -22 -4 -40 -9 -40 -15 0 -23 51 -10 66 17 21 19 18 19 -26z' />
      <path d='M5684 8745 c-4 -9 4 -47 16 -86 42 -131 27 -201 -47 -215 -24 -5 -88 1 -176 15 -147 25 -204 23 -307 -5 -166 -47 -295 -166 -342 -316 -24 -81 -24 -197 2 -280 11 -34 20 -63 20 -64 0 -1 -25 -4 -55 -7 -101 -10 -212 -91 -273 -200 -93 -163 -87 -374 16 -532 141 -218 462 -372 699 -335 87 13 183 60 223 108 44 53 66 133 53 197 -10 46 -9 50 13 68 23 18 48 82 38 99 -3 5 -14 -2 -25 -15 -22 -29 -77 -57 -113 -57 -66 0 -146 78 -146 142 0 36 24 84 49 98 34 18 58 11 133 -39 122 -83 209 -90 238 -21 22 52 11 73 -107 219 -48 59 -66 112 -56 162 9 48 82 115 188 173 194 107 270 171 316 269 57 123 57 259 1 376 -38 79 -152 192 -233 231 -70 33 -116 38 -125 15z m195 -151 c102 -92 154 -222 134 -332 -6 -31 -18 -73 -27 -92 l-16 -35 6 50 c12 114 -49 268 -140 358 -29 29 -56 64 -59 79 -4 14 -10 33 -13 42 -9 24 52 -14 115 -70z' />
      <path d='M6018 7830 c65 -63 72 -74 46 -84 -44 -17 -108 -3 -166 36 -32 22 -60 14 -56 -15 2 -15 22 -31 62 -52 70 -35 155 -41 196 -12 13 9 30 17 36 17 35 0 184 -225 184 -278 0 -42 -78 -64 -167 -47 -41 7 -43 7 -43 -18 0 -19 7 -28 31 -36 44 -15 99 -14 149 4 23 8 44 15 46 15 2 0 4 -26 4 -57 0 -122 -51 -241 -144 -341 -107 -115 -222 -174 -408 -212 -136 -28 -144 -39 -70 -107 64 -60 177 -135 268 -178 78 -37 88 -54 40 -66 -62 -17 -69 -43 -32 -118 49 -96 86 -317 86 -512 0 -113 14 -176 31 -134 11 30 11 268 -1 386 -14 129 -34 218 -65 287 l-24 52 24 0 c36 0 104 30 115 50 13 24 -5 38 -131 99 -126 61 -149 80 -149 124 0 47 16 63 98 96 105 42 175 87 246 157 115 116 166 229 174 390 5 116 -8 175 -65 292 l-36 74 16 46 c22 60 21 95 0 120 -39 46 -172 98 -187 74 -3 -6 18 -24 46 -41 96 -55 111 -77 87 -122 -10 -19 -12 -18 -52 18 -72 66 -151 122 -196 138 -24 8 -46 15 -50 15 -3 -1 22 -27 57 -60z' />
      <path d='M7745 7724 c-13 -14 -56 -107 -96 -207 -172 -432 -433 -932 -609 -1166 -94 -124 -281 -298 -398 -370 -103 -63 -124 -81 -100 -81 7 -1 0 -12 -17 -26 -29 -25 -29 -25 -5 -19 153 42 416 263 590 493 144 192 358 575 501 897 83 188 189 460 189 485 0 28 -26 25 -55 -6z' />
      <path d='M8996 7127 c-14 -18 -61 -101 -105 -184 -100 -191 -183 -320 -373 -587 -224 -313 -218 -305 -268 -327 -102 -45 -483 -155 -500 -144 -6 4 -10 18 -10 33 0 41 -35 92 -63 92 -36 0 -54 -19 -90 -100 -26 -56 -42 -79 -63 -89 -52 -24 -187 -69 -289 -96 -55 -15 -122 -39 -150 -53 -48 -25 -49 -27 -22 -30 43 -5 227 26 340 58 56 16 103 27 105 25 2 -1 -19 -18 -45 -38 -52 -38 -141 -84 -215 -112 l-47 -17 -27 31 c-16 19 -35 31 -50 31 -14 0 -103 -53 -222 -134 -109 -73 -245 -157 -302 -186 -103 -52 -107 -53 -185 -51 -44 1 -105 9 -135 17 -76 22 -209 93 -305 164 -169 125 -243 172 -266 168 -49 -7 385 -323 511 -372 68 -27 82 -45 37 -47 -12 0 -31 -5 -42 -10 -42 -20 169 -1 235 21 116 38 302 135 465 244 88 58 168 106 179 106 10 0 68 -49 130 -108 134 -130 175 -163 261 -208 58 -30 125 -45 125 -28 0 22 -31 49 -101 85 -75 39 -80 44 -63 57 11 7 100 54 199 104 245 123 302 161 359 241 25 35 60 94 77 130 34 73 24 67 199 112 35 9 73 21 82 26 34 18 305 441 490 764 109 190 208 391 208 421 0 35 -34 31 -64 -9z m-1321 -1340 c-6 -104 -5 -111 10 -92 9 11 18 30 21 42 6 24 59 44 206 78 37 8 79 20 93 25 33 13 32 5 -11 -66 -69 -115 -149 -177 -388 -296 -55 -27 -123 -66 -149 -84 -26 -19 -51 -32 -56 -30 -4 3 -35 38 -69 79 l-61 74 42 19 c66 29 158 84 206 122 42 34 69 81 125 215 27 66 38 36 31 -86z' />
      <path d='M8249 6809 c-192 -19 -365 -121 -488 -288 -95 -128 -135 -258 -96 -317 21 -32 29 -23 40 46 18 109 89 227 196 323 120 109 275 167 445 167 51 0 96 4 99 10 10 16 -14 49 -38 54 -54 11 -87 12 -158 5z' />
      <path d='M6728 6629 c-27 -15 -22 -44 13 -73 17 -14 34 -26 38 -26 16 0 31 25 31 51 0 48 -41 72 -82 48z' />
      <path d='M5387 6533 c-20 -19 0 -52 81 -129 186 -179 353 -263 463 -234 33 9 39 15 39 38 0 31 -71 161 -143 262 l-17 24 0 -34 c0 -19 12 -62 25 -95 14 -33 25 -64 25 -69 0 -18 -88 2 -175 40 -74 32 -105 52 -179 121 -86 79 -104 91 -119 76z' />
      <path d='M5290 6458 c-77 -92 -286 -406 -375 -563 -457 -803 -647 -1617 -487 -2076 46 -131 172 -270 299 -332 39 -19 43 -24 38 -48 -14 -65 74 -98 280 -106 77 -2 201 -13 275 -23 122 -17 225 -26 533 -46 112 -7 111 -6 57 -94 -16 -25 -47 -90 -70 -145 -107 -254 -264 -532 -511 -905 -107 -162 -169 -265 -169 -281 0 -21 14 -34 88 -78 48 -29 144 -80 214 -114 122 -59 128 -63 123 -89 -2 -15 -47 -120 -99 -235 -51 -114 -97 -218 -101 -231 -9 -30 12 -57 31 -41 8 6 14 16 14 22 0 6 21 53 46 105 l46 94 46 -68 c56 -84 214 -249 302 -315 143 -109 271 -148 320 -99 48 48 13 126 -153 341 -141 181 -146 193 -123 265 9 30 19 54 21 54 2 0 43 -9 92 -21 102 -24 239 -29 298 -10 63 21 103 57 160 145 403 619 722 1757 588 2098 -42 109 -144 226 -275 315 -69 47 -69 48 -41 56 45 13 379 55 565 72 95 8 277 15 403 15 l230 0 63 -30 c68 -32 85 -33 25 -1 l-38 20 62 1 c84 0 344 -34 495 -65 392 -83 748 -229 861 -355 91 -101 142 -260 118 -371 -13 -60 -88 -192 -176 -309 -183 -244 -453 -492 -770 -706 -136 -92 -167 -105 -205 -84 -17 9 -14 17 36 91 182 272 280 648 245 939 -32 257 -115 450 -255 591 -91 91 -171 144 -232 153 -26 3 -49 5 -50 3 -2 -2 23 -22 55 -45 153 -108 251 -218 317 -357 163 -345 123 -781 -110 -1180 -110 -188 -317 -367 -621 -534 -170 -93 -409 -175 -765 -261 -113 -27 -256 -62 -319 -77 -63 -16 -116 -33 -118 -40 -3 -7 15 -14 49 -18 171 -21 779 140 1213 320 726 302 1332 755 1647 1233 117 179 170 312 171 432 1 54 -4 74 -28 119 -139 255 -707 493 -1379 576 -333 41 -766 39 -1120 -6 l-158 -20 -27 25 c-67 64 -232 139 -416 190 -49 14 -198 52 -330 86 -132 33 -248 63 -257 66 -15 4 -18 17 -18 70 0 35 2 64 4 64 3 0 58 -15 123 -34 166 -48 308 -70 407 -63 184 12 499 161 871 411 150 101 215 151 215 166 0 18 -40 20 -70 5 -17 -9 -108 -67 -203 -129 -289 -191 -498 -303 -689 -368 -114 -39 -192 -41 -353 -8 -233 47 -462 133 -790 298 -151 75 -274 127 -282 118 -3 -2 14 -18 38 -35 23 -17 37 -31 31 -31 -29 0 -5 -20 81 -67 111 -62 270 -134 391 -178 l89 -32 -81 -32 c-128 -49 -284 -79 -502 -96 -168 -13 -413 25 -552 87 -57 26 -70 37 -88 72 -11 23 -20 62 -20 87 0 57 78 311 145 469 126 301 303 630 509 945 135 207 189 305 166 305 -5 0 -37 -33 -70 -72z m553 -4997 c4 -4 1 -24 -8 -44 -36 -87 -11 -148 143 -344 177 -226 185 -263 37 -187 -106 54 -167 103 -326 265 l-147 148 57 113 56 113 90 -28 c50 -16 93 -32 98 -36z' />
      <path d='M8145 6494 c-60 -21 -107 -65 -143 -132 -38 -72 -50 -138 -29 -166 17 -23 37 -13 37 18 0 69 68 173 133 204 24 11 75 24 114 27 60 6 72 11 77 28 3 11 3 24 0 29 -8 13 -146 8 -189 -8z' />
      <path d='M5347 5949 c-18 -26 -12 -51 21 -84 27 -27 63 -41 87 -32 31 13 31 89 -1 121 -23 24 -89 21 -107 -5z' />
      <path d='M5822 5188 c-22 -22 -13 -59 22 -94 57 -57 106 -40 106 35 0 43 -31 71 -78 71 -21 0 -43 -5 -50 -12z' />
      <path d='M7883 3524 c-26 -11 -12 -34 36 -58 59 -30 76 -65 68 -136 -11 -95 -86 -209 -171 -261 -45 -27 -50 -24 -22 14 32 41 43 91 26 112 -7 8 -29 15 -49 15 -73 0 -71 32 9 150 23 33 40 69 38 78 -4 19 -37 22 -98 9 l-35 -7 35 29 c46 39 19 41 -41 3 -152 -98 -229 -291 -157 -399 38 -58 95 -83 189 -83 60 0 85 5 126 25 186 93 281 395 153 486 -27 19 -87 32 -107 23z' />
      <path d='M4600 3430 c-14 -4 -50 -16 -80 -25 -190 -59 -559 -272 -866 -500 l-111 -82 -42 43 c-77 79 -246 144 -479 185 -191 32 -306 22 -490 -43 -153 -54 -382 -182 -537 -301 -150 -115 -135 -172 40 -155 100 10 326 3 424 -13 222 -35 357 -132 464 -330 40 -76 83 -217 70 -230 -5 -5 -94 -41 -199 -79 -640 -238 -604 -221 -604 -274 0 -88 68 -87 566 14 137 27 256 50 265 50 13 0 18 -19 28 -100 16 -148 14 -188 -14 -249 -35 -75 -165 -202 -290 -284 -95 -61 -311 -176 -365 -192 -30 -9 -80 -45 -80 -57 0 -61 628 -99 895 -54 165 27 245 56 382 140 250 151 350 257 360 380 l5 61 -38 -63 c-105 -173 -414 -382 -644 -434 -84 -19 -125 -22 -355 -22 -143 -1 -291 3 -329 7 l-69 9 97 53 c206 114 367 236 444 338 90 118 187 192 297 226 60 19 63 19 144 0 453 -105 1235 -197 1586 -186 137 5 255 21 242 33 -2 2 -120 11 -263 19 -668 39 -1326 138 -1784 267 l-115 33 0 58 0 59 155 44 c244 70 395 123 433 152 75 56 197 246 197 307 0 52 -27 52 -271 -4 -123 -29 -269 -66 -324 -84 -88 -28 -108 -39 -164 -89 -34 -32 -67 -58 -71 -58 -5 0 -12 21 -16 48 -9 69 -34 173 -45 195 -15 26 29 77 224 257 353 326 733 593 1187 835 184 98 216 120 140 95z m-1613 -446 c58 -8 146 -26 196 -38 86 -22 323 -109 339 -124 4 -4 -49 -54 -119 -112 -70 -57 -165 -138 -211 -179 l-85 -76 -76 1 c-95 2 -177 23 -311 81 -149 65 -246 83 -485 91 l-200 7 60 44 c143 107 367 228 508 276 140 47 224 53 384 29z m836 -845 c-15 -28 -54 -79 -85 -113 -48 -53 -66 -66 -120 -83 -123 -40 -115 -42 -78 13 19 26 45 76 60 111 15 35 30 66 34 71 9 9 163 50 194 51 l23 1 -28 -51z' />
      <path d='M1125 1796 c-250 -110 -345 -162 -345 -187 0 -16 20 -10 174 55 83 35 162 67 175 71 22 7 23 5 17 -16 -4 -13 -12 -63 -18 -110 -11 -77 -10 -90 5 -113 23 -34 53 -33 127 4 167 84 475 190 554 190 62 0 74 64 13 75 -73 14 -341 -67 -518 -155 -54 -28 -103 -50 -108 -50 -13 0 -2 81 25 189 13 52 23 96 21 97 -1 2 -56 -21 -122 -50z' />
      <path d='M1905 1185 c-78 -38 -139 -54 -297 -79 -142 -24 -188 -37 -188 -56 0 -15 47 -65 89 -94 22 -16 39 -32 36 -36 -2 -4 -34 -10 -70 -13 -109 -10 -305 -85 -305 -117 0 -4 48 5 106 21 58 15 151 33 207 39 130 14 142 17 161 36 24 24 20 34 -35 85 l-51 47 74 12 c250 40 413 108 382 158 -16 25 -53 24 -109 -3z' />
    </g>
  </svg>
);
