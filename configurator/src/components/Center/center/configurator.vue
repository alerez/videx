<template>
  <div class="configuratorBlock">
    <div class="configuratorBlock absolute" v-on:click="mechanismBlock('mechanismBlockNone')" style="transition:1s">
      <img class="configuratorBlock" :src="background[0].image.url" v-if="background[0].image.url" style="transition:1s">
      <div class="configuratorBlock" v-bind:style="background[0].colors" v-if="background[0].colors" style="transition:1s"></div>
    </div>
    <div class="frameBlock">
      <div v-on:click="mechanismBlock('mechanismBlockNone')" v-if="numberPostsFrame === '1'">
        <img class="frameBlockFrameHorizontal1" v-bind:src="frame['horizontal'][material][colorsFrame][numberPostsFrame].fileURL">
      </div>
      <div v-on:click="mechanismBlock('mechanismBlockNone')" v-else-if="numberPostsFrame === '2'">
        <img class="frameBlockFrameHorizontal2" v-show="frameOrientation !== 'vertical'" v-bind:src="frame[frameOrientation][material][colorsFrame][numberPostsFrame].fileURL">
        <img class="frameBlockFrameVertical2" v-show="frameOrientation !== 'horizontal'" v-bind:src="frame[frameOrientation][material][colorsFrame][numberPostsFrame].fileURL">
      </div>
      <div v-on:click="mechanismBlock('mechanismBlockNone')" v-else-if="numberPostsFrame === '3'">
        <img class="frameBlockFrameHorizontal3" v-show="frameOrientation !== 'vertical'" v-bind:src="frame[frameOrientation][material][colorsFrame][numberPostsFrame].fileURL">
        <img class="frameBlockFrameVertical3" v-show="frameOrientation !== 'horizontal'" v-bind:src="frame[frameOrientation][material][colorsFrame][numberPostsFrame].fileURL">
      </div>
      <div v-on:click="mechanismBlock('mechanismBlockNone')" v-else-if="numberPostsFrame === '4'">
        <img class="frameBlockFrameHorizontal4" v-show="frameOrientation !== 'vertical'" v-bind:src="frame[frameOrientation][material][colorsFrame][numberPostsFrame].fileURL">
        <img class="frameBlockFrameVertical4" v-show="frameOrientation !== 'horizontal'" v-bind:src="frame[frameOrientation][material][colorsFrame][numberPostsFrame].fileURL">
      </div>
      <div v-on:click="mechanismBlock('mechanismBlockNone')" v-else-if="numberPostsFrame === '5'">
        <img class="frameBlockFrameHorizontal5" v-show="frameOrientation !== 'vertical'" v-bind:src="frame[frameOrientation][material][colorsFrame][numberPostsFrame].fileURL">
        <img class="frameBlockFrameVertical5" v-show="frameOrientation !== 'horizontal'" v-bind:src="frame[frameOrientation][material][colorsFrame][numberPostsFrame].fileURL">
      </div>
      <div>
        <div v-show="frameOrientation !== 'vertical'" class="absolute" style="display:flex; flex-direction:row">
          <div class="absolute" style="display:flex" v-if="numberPostsFrame === '1'">
            <div class="configuratorBlockMechanism11 poster" v-if="mechanismBlockOne && active1 === true" v-on:click="mechanismBlock('mechanismBlockOne')">
              <div class="configuratorBlockMechanism11Hover"></div>
              <img v-bind:src="mechanismBlockOne.fileURL">
              <div v-if="mechanismBlockOne.fileURL !== urlImgBag && mechanismBlockOne.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockOne')">
              </div>
            </div>
            <div class="configuratorBlockMechanism11 poster" v-else-if="mechanismBlockOne !== {}" v-on:click="mechanismBlock('mechanismBlockOne')">
              <img v-bind:src="mechanismBlockOne.fileURL">
              <div v-if="mechanismBlockOne.fileURL !== urlImgBag && mechanismBlockOne.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockOne')">
              </div>
            </div>
          </div>
          <div class="absolute" style="display:flex" v-if="numberPostsFrame === '2'">
            <div class="configuratorBlockMechanism12 poster" v-if="mechanismBlockOne && active1 === true" v-on:click="mechanismBlock('mechanismBlockOne')">
              <img v-bind:src="mechanismBlockOne.fileURL">
              <div class="configuratorBlockMechanism12Hover"></div>
              <div v-if="mechanismBlockOne.fileURL !== urlImgBag && mechanismBlockOne.fileURL !== undefined" class="closed">
                <img  v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockOne')">
              </div>
            </div>
            <div class="configuratorBlockMechanism12 poster" v-else-if="mechanismBlockOne.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockOne')">
              <img v-bind:src="mechanismBlockOne.fileURL">
              <div v-if="mechanismBlockOne.fileURL !== urlImgBag && mechanismBlockOne.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockOne')">
              </div>
            </div>
            <div class="configuratorBlockMechanism22 poster" v-if="mechanismBlockTwo && active2 === true" v-on:click="mechanismBlock('mechanismBlockTwo')">
              <img v-bind:src="mechanismBlockTwo.fileURL">
              <div class="configuratorBlockMechanism22Hover"></div>
              <div v-if="mechanismBlockTwo.fileURL !== urlImgBag && mechanismBlockTwo.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockTwo')">
              </div>
            </div>
            <div class="configuratorBlockMechanism22 poster" v-else-if="mechanismBlockTwo.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockTwo')">
              <img v-bind:src="mechanismBlockTwo.fileURL">
              <div v-if="mechanismBlockTwo.fileURL !== urlImgBag && mechanismBlockTwo.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockTwo')">
              </div>
            </div>
          </div>
          <div class="absolute" style="display:flex" v-if="numberPostsFrame === '3'">
            <div class="configuratorBlockMechanism13 poster" v-if="mechanismBlockOne && active1 === true" v-on:click="mechanismBlock('mechanismBlockOne')">
              <img v-bind:src="mechanismBlockOne.fileURL">
              <div class="configuratorBlockMechanism13Hover"></div>
              <div v-if="mechanismBlockOne.fileURL !== urlImgBag && mechanismBlockOne.fileURL !== undefined" class="closed">
                <img  v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockOne')">
              </div>
            </div>
            <div class="configuratorBlockMechanism13 poster" v-else-if="mechanismBlockOne.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockOne')">
              <img v-bind:src="mechanismBlockOne.fileURL">
              <div v-if="mechanismBlockOne.fileURL !== urlImgBag && mechanismBlockOne.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockOne')">
              </div>
            </div>
            <div class="configuratorBlockMechanism23 poster" v-if="mechanismBlockTwo && active2 === true" v-on:click="mechanismBlock('mechanismBlockTwo')">
              <img v-bind:src="mechanismBlockTwo.fileURL">
              <div class="configuratorBlockMechanism23Hover"></div>
              <div v-if="mechanismBlockTwo.fileURL !== urlImgBag && mechanismBlockTwo.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockTwo')">
              </div>
            </div>
            <div class="configuratorBlockMechanism23 poster" v-else-if="mechanismBlockTwo.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockTwo')">
              <img v-bind:src="mechanismBlockTwo.fileURL">
              <div v-if="mechanismBlockTwo.fileURL !== urlImgBag && mechanismBlockTwo.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockTwo')">
              </div>
            </div>
            <div class="configuratorBlockMechanism33 poster" v-if="mechanismBlockThree && active3 === true" v-on:click="mechanismBlock('mechanismBlockThree')">
              <img v-bind:src="mechanismBlockThree.fileURL">
              <div class="configuratorBlockMechanism33Hover"></div>
              <div v-if="mechanismBlockThree.fileURL !== urlImgBag && mechanismBlockThree.fileURL !== undefined" class="closed">
                <img v-bind:src="close"  v-on:click="mechanismBlockClosed('mechanismBlockThree')">
              </div>
            </div>
            <div class="configuratorBlockMechanism33 poster" v-else-if="mechanismBlockThree.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockThree')">
              <img v-bind:src="mechanismBlockThree.fileURL">
              <div v-if="mechanismBlockThree.fileURL !== urlImgBag && mechanismBlockThree.fileURL !== undefined" class="closed">
                <img v-bind:src="close"  v-on:click="mechanismBlockClosed('mechanismBlockThree')">
              </div>
            </div>
          </div>
          <div class="absolute" style="display:flex" v-if="numberPostsFrame === '4'">
            <div class="configuratorBlockMechanism14 poster" v-if="mechanismBlockOne && active1 === true" v-on:click="mechanismBlock('mechanismBlockOne')">
              <img v-bind:src="mechanismBlockOne.fileURL">
              <div class="configuratorBlockMechanism14Hover"></div>
              <div v-if="mechanismBlockOne.fileURL !== urlImgBag && mechanismBlockOne.fileURL !== undefined" class="closed">
                <img v-bind:src="close"  v-on:click="mechanismBlockClosed('mechanismBlockOne')">
              </div>
            </div>
            <div class="configuratorBlockMechanism14 poster" v-else-if="mechanismBlockOne.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockOne')">
              <img v-bind:src="mechanismBlockOne.fileURL">
              <div v-if="mechanismBlockOne.fileURL !== urlImgBag && mechanismBlockOne.fileURL !== undefined" class="closed">
                <img v-bind:src="close"  v-on:click="mechanismBlockClosed('mechanismBlockOne')">
              </div>
            </div>
            <div class="configuratorBlockMechanism24 poster" v-if="mechanismBlockTwo && active2 === true" v-on:click="mechanismBlock('mechanismBlockTwo')">
              <img v-bind:src="mechanismBlockTwo.fileURL">
              <div class="configuratorBlockMechanism24Hover"></div>
              <div v-if="mechanismBlockTwo.fileURL !== urlImgBag && mechanismBlockTwo.fileURL !== undefined" class="closed">
                <img v-bind:src="close"  v-on:click="mechanismBlockClosed('mechanismBlockTwo')">
              </div>
            </div>
            <div class="configuratorBlockMechanism24 poster" v-else-if="mechanismBlockTwo.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockTwo')">
              <img v-bind:src="mechanismBlockTwo.fileURL">
              <div v-if="mechanismBlockTwo.fileURL !== urlImgBag && mechanismBlockTwo.fileURL !== undefined" class="closed">
                <img v-bind:src="close"  v-on:click="mechanismBlockClosed('mechanismBlockTwo')">
              </div>
            </div>
            <div class="configuratorBlockMechanism34 poster" v-if="mechanismBlockThree && active3 === true" v-on:click="mechanismBlock('mechanismBlockThree')">
              <img v-bind:src="mechanismBlockThree.fileURL">
              <div class="configuratorBlockMechanism34Hover"></div>
              <div v-if="mechanismBlockThree.fileURL !== urlImgBag && mechanismBlockThree.fileURL !== undefined" class="closed">
                <img v-bind:src="close"  v-on:click="mechanismBlockClosed('mechanismBlockThree')">
              </div>
            </div>
            <div class="configuratorBlockMechanism34 poster" v-else-if="mechanismBlockThree.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockThree')">
              <img v-bind:src="mechanismBlockThree.fileURL">
              <div v-if="mechanismBlockThree.fileURL !== urlImgBag && mechanismBlockThree.fileURL !== undefined" class="closed">
                <img v-bind:src="close"  v-on:click="mechanismBlockClosed('mechanismBlockThree')">
              </div>
            </div>
            <div class="configuratorBlockMechanism44 poster" v-if="mechanismBlockFour && active4 === true" v-on:click="mechanismBlock('mechanismBlockFour')">
              <img v-bind:src="mechanismBlockFour.fileURL">
              <div class="configuratorBlockMechanism44Hover"></div>
              <div v-if="mechanismBlockFour.fileURL !== urlImgBag && mechanismBlockFour.fileURL !== undefined" class="closed">
                <img v-bind:src="close"  v-on:click="mechanismBlockClosed('mechanismBlockFour')">
              </div>
            </div>
            <div class="configuratorBlockMechanism44 poster" v-else-if="mechanismBlockFour.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockFour')">
              <img v-bind:src="mechanismBlockFour.fileURL">
              <div v-if="mechanismBlockFour.fileURL !== urlImgBag && mechanismBlockFour.fileURL !== undefined" class="closed">
                <img v-bind:src="close"  v-on:click="mechanismBlockClosed('mechanismBlockFour')">
              </div>
            </div>
          </div>
          <div class="absolute" style="display:flex" v-if="numberPostsFrame === '5'">
            <div class="configuratorBlockMechanism15 poster" v-if="mechanismBlockOne && active1 === true" v-on:click="mechanismBlock('mechanismBlockOne')">
              <img v-bind:src="mechanismBlockOne.fileURL">
              <div class="configuratorBlockMechanism15Hover"></div>
              <div v-if="mechanismBlockOne.fileURL !== urlImgBag && mechanismBlockOne.fileURL !== undefined" class="closed">
                <img v-bind:src="close"  v-on:click="mechanismBlockClosed('mechanismBlockOne')">
              </div>
            </div>
            <div class="configuratorBlockMechanism15 poster" v-else-if="mechanismBlockOne.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockOne')">
              <img v-bind:src="mechanismBlockOne.fileURL">
              <div v-if="mechanismBlockOne.fileURL !== urlImgBag && mechanismBlockOne.fileURL !== undefined" class="closed">
                <img v-bind:src="close"  v-on:click="mechanismBlockClosed('mechanismBlockOne')">
              </div>
            </div>
            <div class="configuratorBlockMechanism25 poster" v-if="mechanismBlockTwo && active2 === true" v-on:click="mechanismBlock('mechanismBlockTwo')">
              <img v-bind:src="mechanismBlockTwo.fileURL">
              <div class="configuratorBlockMechanism25Hover"></div>
              <div v-if="mechanismBlockTwo.fileURL !== urlImgBag && mechanismBlockTwo.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockTwo')">
              </div>
            </div>
            <div class="configuratorBlockMechanism25 poster" v-else-if="mechanismBlockTwo.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockTwo')">
              <img v-bind:src="mechanismBlockTwo.fileURL">
              <div v-if="mechanismBlockTwo.fileURL !== urlImgBag && mechanismBlockTwo.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockTwo')">
              </div>
            </div>
            <div class="configuratorBlockMechanism35 poster" v-if="mechanismBlockThree && active3 === true" v-on:click="mechanismBlock('mechanismBlockThree')">
              <img v-bind:src="mechanismBlockThree.fileURL">
              <div class="configuratorBlockMechanism35Hover"></div>
              <div v-if="mechanismBlockThree.fileURL !== urlImgBag && mechanismBlockThree.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockThree')">
              </div>
            </div>
            <div class="configuratorBlockMechanism35 poster" v-else-if="mechanismBlockThree.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockThree')">
              <img v-bind:src="mechanismBlockThree.fileURL">
              <div v-if="mechanismBlockThree.fileURL !== urlImgBag && mechanismBlockThree.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockThree')">
              </div>
            </div>
            <div class="configuratorBlockMechanism45 poster" v-if="mechanismBlockFour && active4 === true" v-on:click="mechanismBlock('mechanismBlockFour')">
              <img v-bind:src="mechanismBlockFour.fileURL">
              <div class="configuratorBlockMechanism45Hover"></div>
              <div v-if="mechanismBlockFour.fileURL !== urlImgBag && mechanismBlockFour.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockFour')">
              </div>
            </div>
            <div class="configuratorBlockMechanism45 poster" v-else-if="mechanismBlockFour.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockFour')">
              <img v-bind:src="mechanismBlockFour.fileURL">
              <div v-if="mechanismBlockFour.fileURL !== urlImgBag && mechanismBlockFour.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockFour')">
              </div>
            </div>
            <div class="configuratorBlockMechanism55 poster" v-if="mechanismBlockFive && active5 === true" v-on:click="mechanismBlock('mechanismBlockFive')">
              <img v-bind:src="mechanismBlockFive.fileURL">
              <div class="configuratorBlockMechanism55Hover"></div>
              <div v-if="mechanismBlockFive.fileURL !== urlImgBag && mechanismBlockFive.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockFive')">
              </div>
            </div>
            <div class="configuratorBlockMechanism55 poster" v-else-if="mechanismBlockFive.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockFive')">
              <img v-bind:src="mechanismBlockFive.fileURL">
              <div v-if="mechanismBlockFive.fileURL !== urlImgBag && mechanismBlockFive.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockFive')">
              </div>
            </div>
          </div>
        </div>
        <div v-show="frameOrientation !== 'horizontal'" class="absolute" style="display:flex; flex-direction:column">
          <div class="absolute" style="display:flex; flex-direction:column" v-if="numberPostsFrame === '1'">
            <div class="configuratorBlockMechanism11 poster" v-if="mechanismBlockOne && active1 === true" v-on:click="mechanismBlock('mechanismBlockOne')">
              <div class="configuratorBlockMechanism11Hover"></div>
              <img v-bind:src="mechanismBlockOne.fileURL">
              <div v-if="mechanismBlockOne.fileURL !== urlImgBag && mechanismBlockOne.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockOne')">
              </div>
            </div>
            <div class="configuratorBlockMechanism11 poster" v-else-if="mechanismBlockOne !== {}" v-on:click="mechanismBlock('mechanismBlockOne')">
              <img v-bind:src="mechanismBlockOne.fileURL">
              <div v-if="mechanismBlockOne.fileURL !== urlImgBag && mechanismBlockOne.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockOne')">
              </div>
            </div>
          </div>
          <div class="absolute" style="display:flex; flex-direction:column" v-if="numberPostsFrame === '2'">
            <div class="configuratorBlockMechanism222 poster" v-if="mechanismBlockTwo && active2 === true" v-on:click="mechanismBlock('mechanismBlockTwo')">
              <div class="configuratorBlockMechanism222Hover"></div>
              <img v-bind:src="mechanismBlockTwo.fileURL">
              <div v-if="mechanismBlockTwo.fileURL !== urlImgBag && mechanismBlockTwo.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockTwo')">
              </div>
            </div>
            <div class="configuratorBlockMechanism222 poster" v-else-if="mechanismBlockTwo.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockTwo')">
              <img v-bind:src="mechanismBlockTwo.fileURL">
              <div v-if="mechanismBlockTwo.fileURL !== urlImgBag && mechanismBlockTwo.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockTwo')">
              </div>
            </div>
            <div class="configuratorBlockMechanism122 poster" v-if="mechanismBlockOne && active1 === true" v-on:click="mechanismBlock('mechanismBlockOne')">
              <div class="configuratorBlockMechanism122Hover"></div>
              <img v-bind:src="mechanismBlockOne.fileURL">
              <div v-if="mechanismBlockOne.fileURL !== urlImgBag && mechanismBlockOne.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockOne')">
              </div>
            </div>
            <div class="configuratorBlockMechanism122 poster" v-else-if="mechanismBlockOne.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockOne')">
              <img v-bind:src="mechanismBlockOne.fileURL">
              <div v-if="mechanismBlockOne.fileURL !== urlImgBag && mechanismBlockOne.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockOne')">
              </div>
            </div>
          </div>
          <div class="absolute" style="display:flex; flex-direction:column" v-if="numberPostsFrame === '3'">
            <div class="configuratorBlockMechanism333 poster" v-if="mechanismBlockThree && active3 === true" v-on:click="mechanismBlock('mechanismBlockThree')">
              <div class="configuratorBlockMechanism333Hover"></div>
              <img v-bind:src="mechanismBlockThree.fileURL">
              <div v-if="mechanismBlockThree.fileURL !== urlImgBag && mechanismBlockThree.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockThree')">
              </div>
            </div>
            <div class="configuratorBlockMechanism333 poster" v-else-if="mechanismBlockThree.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockThree')">
              <img v-bind:src="mechanismBlockThree.fileURL">
              <div v-if="mechanismBlockThree.fileURL !== urlImgBag && mechanismBlockThree.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockThree')">
              </div>
            </div>
            <div class="configuratorBlockMechanism233 poster" v-if="mechanismBlockTwo && active2 === true" v-on:click="mechanismBlock('mechanismBlockTwo')">
              <div class="configuratorBlockMechanism233Hover"></div>
              <img v-bind:src="mechanismBlockTwo.fileURL">
              <div v-if="mechanismBlockTwo.fileURL !== urlImgBag && mechanismBlockTwo.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockTwo')">
              </div>
            </div>
            <div class="configuratorBlockMechanism233 poster" v-else-if="mechanismBlockTwo.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockTwo')">
              <img v-bind:src="mechanismBlockTwo.fileURL">
              <div v-if="mechanismBlockTwo.fileURL !== urlImgBag && mechanismBlockTwo.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockTwo')">
              </div>
            </div>
            <div class="configuratorBlockMechanism133 poster" v-if="mechanismBlockOne && active1 === true" v-on:click="mechanismBlock('mechanismBlockOne')">
              <div class="configuratorBlockMechanism133Hover"></div>
              <img v-bind:src="mechanismBlockOne.fileURL">
              <div v-if="mechanismBlockOne.fileURL !== urlImgBag && mechanismBlockOne.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockOne')">
              </div>
            </div>
            <div class="configuratorBlockMechanism133 poster" v-else-if="mechanismBlockOne.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockOne')">
              <img v-bind:src="mechanismBlockOne.fileURL">
              <div v-if="mechanismBlockOne.fileURL !== urlImgBag && mechanismBlockOne.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockOne')">
              </div>
            </div>
          </div>
          <div class="absolute" style="display:flex; flex-direction:column" v-if="numberPostsFrame === '4'">
            <div class="configuratorBlockMechanism444 poster" v-if="mechanismBlockFour && active4 === true" v-on:click="mechanismBlock('mechanismBlockFour')">
              <div class="configuratorBlockMechanism444Hover"></div>
              <img v-bind:src="mechanismBlockFour.fileURL">
              <div v-if="mechanismBlockFour.fileURL !== urlImgBag && mechanismBlockFour.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockFour')">
              </div>
            </div>
            <div class="configuratorBlockMechanism444 poster" v-else-if="mechanismBlockFour.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockFour')">
              <img v-bind:src="mechanismBlockFour.fileURL">
              <div v-if="mechanismBlockFour.fileURL !== urlImgBag && mechanismBlockFour.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockFour')">
              </div>
            </div>

            <div class="configuratorBlockMechanism344 poster" v-if="mechanismBlockThree && active3 === true" v-on:click="mechanismBlock('mechanismBlockThree')">
              <div class="configuratorBlockMechanism344Hover"></div>
              <img v-bind:src="mechanismBlockThree.fileURL">
              <div v-if="mechanismBlockThree.fileURL !== urlImgBag && mechanismBlockThree.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockThree')">
              </div>
            </div>
            <div class="configuratorBlockMechanism344 poster" v-else-if="mechanismBlockThree.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockThree')">
              <img v-bind:src="mechanismBlockThree.fileURL">
              <div v-if="mechanismBlockThree.fileURL !== urlImgBag && mechanismBlockThree.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockThree')">
              </div>
            </div>

            <div class="configuratorBlockMechanism244 poster" v-if="mechanismBlockTwo && active2 === true" v-on:click="mechanismBlock('mechanismBlockTwo')">
              <div class="configuratorBlockMechanism244Hover"></div>
              <img v-bind:src="mechanismBlockTwo.fileURL">
              <div v-if="mechanismBlockTwo.fileURL !== urlImgBag && mechanismBlockTwo.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockTwo')">
              </div>
            </div>
            <div class="configuratorBlockMechanism244 poster" v-else-if="mechanismBlockTwo.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockTwo')">
              <img v-bind:src="mechanismBlockTwo.fileURL">
              <div v-if="mechanismBlockTwo.fileURL !== urlImgBag && mechanismBlockTwo.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockTwo')">
              </div>
            </div>

            <div class="configuratorBlockMechanism144 poster" v-if="mechanismBlockOne && active1 === true" v-on:click="mechanismBlock('mechanismBlockOne')">
              <div class="configuratorBlockMechanism144Hover"></div>
              <img v-bind:src="mechanismBlockOne.fileURL">
              <div v-if="mechanismBlockOne.fileURL !== urlImgBag && mechanismBlockOne.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockOne')">
              </div>
            </div>
            <div class="configuratorBlockMechanism144 poster" v-else-if="mechanismBlockOne.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockOne')">
              <img v-bind:src="mechanismBlockOne.fileURL">
              <div v-if="mechanismBlockOne.fileURL !== urlImgBag && mechanismBlockOne.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockOne')">
              </div>
            </div>
          </div>
          <div class="absolute" style="display:flex; flex-direction:column" v-if="numberPostsFrame === '5'">
            <div class="configuratorBlockMechanism555 poster" v-if="mechanismBlockFive && active5 === true" v-on:click="mechanismBlock('mechanismBlockFive')">
              <div class="configuratorBlockMechanism555Hover"></div>
              <img v-bind:src="mechanismBlockFive.fileURL">
              <div v-if="mechanismBlockFive.fileURL !== urlImgBag && mechanismBlockFive.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockFive')">
              </div>
            </div>
            <div class="configuratorBlockMechanism555 poster" v-else-if="mechanismBlockFive.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockFive')">
              <img v-bind:src="mechanismBlockFive.fileURL">
              <div v-if="mechanismBlockFive.fileURL !== urlImgBag && mechanismBlockFive.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockFive')">
              </div>
            </div>

            <div class="configuratorBlockMechanism455 poster" v-if="mechanismBlockFour && active4 === true" v-on:click="mechanismBlock('mechanismBlockFour')">
              <div class="configuratorBlockMechanism455Hover"></div>
              <img v-bind:src="mechanismBlockFour.fileURL">
              <div v-if="mechanismBlockFour.fileURL !== urlImgBag && mechanismBlockFour.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockFour')">
              </div>
            </div>
            <div class="configuratorBlockMechanism455 poster" v-else-if="mechanismBlockFour.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockFour')">
              <img v-bind:src="mechanismBlockFour.fileURL">
              <div v-if="mechanismBlockFour.fileURL !== urlImgBag && mechanismBlockFour.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockFour')">
              </div>
            </div>

            <div class="configuratorBlockMechanism355 poster" v-if="mechanismBlockThree && active3 === true" v-on:click="mechanismBlock('mechanismBlockThree')">
              <div class="configuratorBlockMechanism355Hover"></div>
              <img v-bind:src="mechanismBlockThree.fileURL">
              <div v-if="mechanismBlockThree.fileURL !== urlImgBag && mechanismBlockThree.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockThree')">
              </div>
            </div>
            <div class="configuratorBlockMechanism355 poster" v-else-if="mechanismBlockThree.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockThree')">
              <img v-bind:src="mechanismBlockThree.fileURL">
              <div v-if="mechanismBlockThree.fileURL !== urlImgBag && mechanismBlockThree.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockThree')">
              </div>
            </div>

            <div class="configuratorBlockMechanism255 poster" v-if="mechanismBlockTwo && active2 === true" v-on:click="mechanismBlock('mechanismBlockTwo')">
              <div class="configuratorBlockMechanism255Hover"></div>
              <img v-bind:src="mechanismBlockTwo.fileURL">
              <div v-if="mechanismBlockTwo.fileURL !== urlImgBag && mechanismBlockTwo.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockTwo')">
              </div>
            </div>
            <div class="configuratorBlockMechanism255 poster" v-else-if="mechanismBlockTwo.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockTwo')">
              <img v-bind:src="mechanismBlockTwo.fileURL">
              <div v-if="mechanismBlockTwo.fileURL !== urlImgBag && mechanismBlockTwo.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockTwo')">
              </div>
            </div>

            <div class="configuratorBlockMechanism155 poster" v-if="mechanismBlockOne && active1 === true" v-on:click="mechanismBlock('mechanismBlockOne')">
              <div class="configuratorBlockMechanism155Hover"></div>
              <img v-bind:src="mechanismBlockOne.fileURL">
              <div v-if="mechanismBlockOne.fileURL !== urlImgBag && mechanismBlockOne.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockOne')">
              </div>
            </div>
            <div class="configuratorBlockMechanism155 poster" v-else-if="mechanismBlockOne.fileURL !== {}" v-on:click="mechanismBlock('mechanismBlockOne')">
              <img v-bind:src="mechanismBlockOne.fileURL">
              <div v-if="mechanismBlockOne.fileURL !== urlImgBag && mechanismBlockOne.fileURL !== undefined" class="closed">
                <img v-bind:src="close" v-on:click="mechanismBlockClosed('mechanismBlockOne')">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-show="numberPostsFrame === '1' && frameOrientation !== 'horizontal'" v-on:click="mechanismBlock('mechanismBlockNone')" class="logoBinera1 logoBinera1Vertical">
      <img src="../../../assets/img/логобинера.png">
    </div>
    <div v-show="numberPostsFrame === '1' && frameOrientation !== 'vertical'" v-on:click="mechanismBlock('mechanismBlockNone')" class="logoBinera1 logoBinera1Horizontal">
      <img src="../../../assets/img/логобинера.png">
    </div>
    <div v-show="numberPostsFrame === '2' && frameOrientation !== 'horizontal'" v-on:click="mechanismBlock('mechanismBlockNone')" class="logoBinera2 logoBinera2Vertical">
      <img src="../../../assets/img/логобинера.png">
    </div>
    <div v-show="numberPostsFrame === '2' && frameOrientation !== 'vertical'" v-on:click="mechanismBlock('mechanismBlockNone')" class="logoBinera2 logoBinera2Horizontal">
      <img src="../../../assets/img/логобинера.png">
    </div>
    <div v-show="numberPostsFrame === '3' && frameOrientation !== 'horizontal'" v-on:click="mechanismBlock('mechanismBlockNone')" class="logoBinera3 logoBinera3Vertical">
      <img src="../../../assets/img/логобинера.png">
    </div>
    <div v-show="numberPostsFrame === '3' && frameOrientation !== 'vertical'" v-on:click="mechanismBlock('mechanismBlockNone')" class="logoBinera3 logoBinera3Horizontal">
      <img src="../../../assets/img/логобинера.png">
    </div>
    <div v-show="numberPostsFrame === '4' && frameOrientation !== 'horizontal'" v-on:click="mechanismBlock('mechanismBlockNone')" class="logoBinera4 logoBinera4Vertical">
      <img src="../../../assets/img/логобинера.png">
    </div>
    <div v-show="numberPostsFrame === '4' && frameOrientation !== 'vertical'" v-on:click="mechanismBlock('mechanismBlockNone')" class="logoBinera4 logoBinera4Horizontal">
      <img src="../../../assets/img/логобинера.png">
    </div>
    <div v-show="numberPostsFrame === '5' && frameOrientation !== 'horizontal'" v-on:click="mechanismBlock('mechanismBlockNone')" class="logoBinera5 logoBinera5Vertical">
      <img src="../../../assets/img/логобинера.png">
    </div>
    <div v-show="numberPostsFrame === '5' && frameOrientation !== 'vertical'" v-on:click="mechanismBlock('mechanismBlockNone')" class="logoBinera5 logoBinera5Horizontal">
      <img src="../../../assets/img/логобинера.png">
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';

export default {
  data() {
    return {
      close: 'https://b68757abe9f1.ngrok.io/images/frameColors/close.jpg',
      urlImgBag: 'https://online-fotoshop.ru/wp-content/uploads/bfi_thumb/dummy-transparent-o62bcwfxu7zofs36kb0sbh4wom52bbxxszhrx8zw4y.png',
      active1: false,
      active2: false,
      active3: false,
      active4: false,
      active5: false,
    }
  },
  created() {
    this.SET_FRAMES();
  },
  computed: {
    ...mapGetters(
        [
            'frame',
            'material',
            'closedImg',
            'colorsFrame',
            'frameOrientation',
            'numberPostsFrame',
            'mechanismBlockOne',
            'mechanismBlockTwo',
            'mechanismBlockThree',
            'mechanismBlockFour',
            'mechanismBlockFive',
            'selectedMechanismBlock',
            'background'
        ]
    ),
  },
  methods: {
    ...mapActions(
        [
            'SET_FRAMES',
            'EMIT_selectedMechanismBlock',
            'EMIT_closedMechanismBlock'
        ]),
    mechanismBlock: function mechanismBlock(data){
      if(data === 'mechanismBlockOne'){
        this.active1 = true;
        this.active2 = false;
        this.active3 = false;
        this.active4 = false;
        this.active5 = false;

      }
      if(data === 'mechanismBlockTwo'){
        this.active1 = false;
        this.active2 = true;
        this.active3 = false;
        this.active4 = false;
        this.active5 = false;
      }
      if(data === 'mechanismBlockThree'){
        this.active1 = false;
        this.active2 = false;
        this.active3 = true;
        this.active4 = false;
        this.active5 = false;
      }
      if(data === 'mechanismBlockFour'){
        this.active1 = false;
        this.active2 = false;
        this.active3 = false;
        this.active4 = true;
        this.active5 = false;
      }
      if(data === 'mechanismBlockFive'){
        this.active1 = false;
        this.active2 = false;
        this.active3 = false;
        this.active4 = false;
        this.active5 = true;
      }
      if(data === 'mechanismBlockNone'){
        this.active1 = false;
        this.active2 = false;
        this.active3 = false;
        this.active4 = false;
        this.active5 = false;
      }
      this.EMIT_selectedMechanismBlock(data);
    },
    mechanismBlockClosed: function mechanismBlockClosed(data){
      this.EMIT_closedMechanismBlock(data);
      setTimeout(function(){
        this.active1 = false;
        this.active2 = false;
        this.active3 = false;
        this.active4 = false;
        this.active5 = false;
      }, 2000);
    }
  },
};
</script>

<style>
.absolute{
  position:absolute;
}
.logoBinera1{
  margin-top:702px;
  z-index:10;
  user-select: none;
}
.logoBinera2{
  margin-top:752px;
  z-index:10;
  user-select: none;
}
.logoBinera3{
  margin-top:702px;
  z-index:10;
  user-select: none;
}
.logoBinera4{
  margin-top:762px;
  z-index:10;
  user-select: none;
}
.logoBinera4 > img{
  width:203px;
}
.logoBinera5{
  margin-top:792px;
  z-index:10;
  user-select: none;
}
.logoBinera5 > img{
  width:170px;
}
.configuratorBlock{
  width:851px;
  height:851px;
  user-select: none;
  transition:1s;
}
.frameBlock{
  position:absolute;
}
.frameBlockFrameHorizontal1{
  display:block;
  width:361px;
  height:360px;
}
.frameBlockFrameHorizontal2{
  display:block;
  width:669px;
  height:367px;
}
.frameBlockFrameVertical2{
  display:block;
  width:357px;
  height:641px;
  margin-top:25px;
}
.frameBlockFrameHorizontal3{
  display:block;
  width:650px;
  height:249px;
}
.frameBlockFrameVertical3{
  margin-top:-70px;
  display:block;
  width:249.5px;
  height:649.5px;
}
.frameBlockFrameHorizontal4{
  display:block;
  width:728.4px;
  height:213px;
}
.frameBlockFrameVertical4{
  margin-top:-50px;
  display:block;
  width:213px;
  height:728.4px;
}
.frameBlockFrameHorizontal5{
  display:block;
  width:764px;
  height:180px;
}
.frameBlockFrameVertical5{
  margin-top:-40px;
  display:block;
  width:180px;
  height:764px;
}


.poster{
  position:relative;
}
.closed{
  display:none;
}
.poster:hover .closed{
  display:flex;
  align-items: center;
  z-index:100;
  cursor:pointer;
  margin: 0 auto;
  filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.15));
  transition:0.6s;
}
.closed > img{
  display:flex;
  margin:0 auto;
  margin-top:-102.5%;
  padding-left:0.5%;
  width:40px;
  height:40px;
}








.configuratorBlockMechanism11 > img{
  width:215px;
  height:215px;
  border-radius:3px;
}
.configuratorBlockMechanism11Hover{
  width:212px;
  height:212px;
  border:rgba(255,122,0, 1) solid 4px;
  border-radius:8px;
  margin-top:-2px;
  margin-left:-2px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}

.configuratorBlockMechanism11{
  width:213px;
  height:213px;
  margin-left:66px;
  margin-top:-293.5px
}






.configuratorBlockMechanism12{
  width:222px;
  height:222px;
  margin-left:69px;
  margin-top:-300px
}
.configuratorBlockMechanism12 > img{
  width:222px;
  height:222px;
  border-radius:3px;
}
.configuratorBlockMechanism12Hover{
  width:217px;
  height:217px;
  border:#FF7A00 solid 4px;
  border-radius:8px;
  margin-top:-228px;
  margin-left:-3px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}
.configuratorBlockMechanism22{
  width:222px;
  height:222px;
  margin-left:75px;
  margin-top:-300px
}
.configuratorBlockMechanism22 > img{
  width:222px;
  height:222px;
  border-radius:3px;
}
.configuratorBlockMechanism22Hover{
  width:217px;
  height:217px;
  border:#FF7A00 solid 4px;
  border-radius:8px;
  margin-top:-228px;
  margin-left:-1.5px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}



.configuratorBlockMechanism122{
  margin-left:67px;
  margin-top:-500.5px;
  width:217px;
  height:217px;
}
.configuratorBlockMechanism122 > img{
  width:213px;
  height:214px;
  border-radius:3px;
}
.configuratorBlockMechanism122Hover{
  width:212px;
  height:212px;
  border:#FF7A00 solid 4px;
  border-radius:8px;
  margin-top:-2px;
  margin-left:-4px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}
.configuratorBlockMechanism222{
  margin-left:67px;
  margin-top:-291px;
  width:217px;
  height:217px;
}
.configuratorBlockMechanism222 > img{
  width:213px;
  height:214px;
  border-radius:3px;
}
.configuratorBlockMechanism222Hover{
  width:212px;
  height:212px;
  border:#FF7A00 solid 4px;
  border-radius:8px;
  margin-top:-4px;
  margin-left:-4px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}



.configuratorBlockMechanism13{
  width:148px;
  height:148px;
  margin-left:46px;
  margin-top:-203px;
}
.configuratorBlockMechanism13 > img{
  width:148px;
  height:148px;
  border-radius:3px;
}
.configuratorBlockMechanism13Hover{
  width:145px;
  height:145px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-154px;
  margin-left:-2.5px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}
.configuratorBlockMechanism23{
  width:148px;
  height:148px;
  margin-left:51.5px;
  margin-top:-203px;
}
.configuratorBlockMechanism23 > img{
  width:148px;
  height:148px;
  border-radius:3px;
}
.configuratorBlockMechanism23Hover{
  width:145px;
  height:145px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-154px;
  margin-left:-2.5px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}
.configuratorBlockMechanism33{
  width:148px;
  height:148px;
  margin-left:50.5px;
  margin-top:-203px;
}
.configuratorBlockMechanism33 > img{
  width:148px;
  height:148px;
  border-radius:3px;
}
.configuratorBlockMechanism33Hover{
  width:145px;
  height:145px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-154px;
  margin-left:-2.5px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}






.configuratorBlockMechanism133{
  width:150px;
  height:150px;
  margin-left:46px;
  margin-top:-347px
}
.configuratorBlockMechanism133 > img{
  width:150px;
  height:150px;
  border-radius:3px;
}
.configuratorBlockMechanism133Hover{
  width:146px;
  height:147px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-2px;
  margin-left:-2px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}
.configuratorBlockMechanism233{
  width:150px;
  height:150px;
  margin-left:46px;
  margin-top:-348.5px
}
.configuratorBlockMechanism233 > img{
  width:150px;
  height:150px;
  border-radius:3px;
}
.configuratorBlockMechanism233Hover{
  width:146px;
  height:147px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-2px;
  margin-left:-2px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}
.configuratorBlockMechanism333{
  width:150px;
  height:150px;
  margin-left:46px;
  margin-top:-208.5px
}
.configuratorBlockMechanism333 > img{
  width:150px;
  height:150px;
  border-radius:3px;
}
.configuratorBlockMechanism333Hover{
  width:146px;
  height:147px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-2px;
  margin-left:-2px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}









.configuratorBlockMechanism14{
  margin-left:39px;
  margin-top:-174px
}
.configuratorBlockMechanism14 > img{
  width:128px;
  height:128px;
  border-radius:3px;
}
.configuratorBlockMechanism14Hover{
  width:124px;
  height:124px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-134px;
  margin-left:-2px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}
.configuratorBlockMechanism24{
  margin-left:44px;
  margin-top:-174px
}
.configuratorBlockMechanism24 > img{
  width:128px;
  height:128px;
  border-radius:3px;
}
.configuratorBlockMechanism24Hover{
  width:124px;
  height:124px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-134px;
  margin-left:-2.25px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}
.configuratorBlockMechanism34{
  margin-left:43px;
  margin-top:-174px
}
.configuratorBlockMechanism34 > img{
  width:128px;
  height:128px;
  border-radius:3px;
}
.configuratorBlockMechanism34Hover{
  width:124px;
  height:124px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-134px;
  margin-left:-2.5px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}
.configuratorBlockMechanism44{
  margin-left:43.5px;
  margin-top:-174px
}
.configuratorBlockMechanism44 > img{
  width:128px;
  height:128px;
  border-radius:3px;
}
.configuratorBlockMechanism44Hover{
  width:124px;
  height:124px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-134px;
  margin-left:-2.5px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}








.configuratorBlockMechanism144{
  width:128.5px;
  height:128.5px;
  margin-left:39px;
  margin-top:-297.5px
}
.configuratorBlockMechanism144 > img{
  width:128.5px;
  height:128.5px;
  border-radius:3px;
}
.configuratorBlockMechanism144Hover{
  width:124px;
  height:124px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-2px;
  margin-left:-2px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}
.configuratorBlockMechanism244{
  width:128.5px;
  height:128.5px;
  margin-left:39px;
  margin-top:-298px
}
.configuratorBlockMechanism244 > img{
  width:128.5px;
  height:128.5px;
  border-radius:3px;
}
.configuratorBlockMechanism244Hover{
  width:124px;
  height:124px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-2px;
  margin-left:-2px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}
.configuratorBlockMechanism344{
  width:128.5px;
  height:128.5px;
  margin-left:39px;
  margin-top:-300px
}
.configuratorBlockMechanism344 > img{
  width:128.5px;
  height:128.5px;
  border-radius:3px;
}
.configuratorBlockMechanism344Hover{
  width:124px;
  height:124px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-2px;
  margin-left:-2px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}
.configuratorBlockMechanism444{
  width:128.5px;
  height:128.5px;
  margin-left:39px;
  margin-top:-180.5px
}
.configuratorBlockMechanism444 > img{
  width:128.5px;
  height:128.5px;
  border-radius:3px;
}
.configuratorBlockMechanism444Hover{
  width:124px;
  height:124px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-2px;
  margin-left:-2px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}







.configuratorBlockMechanism15{
  margin-left:34px;
  margin-top:-146.5px;
}
.configuratorBlockMechanism15 > img{
  width:108.5px;
  height:108.5px;
  border-radius:3px;
}
.configuratorBlockMechanism15Hover{
  width:104px;
  height:104px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-114px;
  margin-left:-2.5px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}
.configuratorBlockMechanism25{
  margin-left:37.5px;
  margin-top:-146.5px;
}
.configuratorBlockMechanism25 > img{
  width:108.5px;
  height:108.5px;
  border-radius:3px;
}
.configuratorBlockMechanism25Hover{
  width:104px;
  height:104px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-114px;
  margin-left:-2.5px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}
.configuratorBlockMechanism35{
  margin-left:36.5px;
  margin-top:-146.5px;
}
.configuratorBlockMechanism35 > img{
  width:108.5px;
  height:108.5px;
  border-radius:3px;
}
.configuratorBlockMechanism35Hover{
  width:104px;
  height:104px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-114px;
  margin-left:-2.5px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}
.configuratorBlockMechanism45{
  margin-left:37.5px;
  margin-top:-146.5px;
}
.configuratorBlockMechanism45 > img{
  width:108.5px;
  height:108.5px;
  border-radius:3px;
}
.configuratorBlockMechanism45Hover{
  width:104px;
  height:104px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-114px;
  margin-left:-2.5px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}
.configuratorBlockMechanism55{
  margin-left:36.5px;
  margin-top:-146.5px;
}
.configuratorBlockMechanism55 > img{
  width:108.5px;
  height:108.5px;
  border-radius:3px;
}
.configuratorBlockMechanism55Hover{
  width:104px;
  height:104px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-114px;
  margin-left:-2.5px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}






.configuratorBlockMechanism155{
  width:109px;
  height:109px;
  margin-left:33px;
  margin-top:-252.5px;
}
.configuratorBlockMechanism155 > img{
  width:109px;
  height:109px;
  border-radius:3px;
}
.configuratorBlockMechanism155Hover{
  width:104px;
  height:104px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-2px;
  margin-left:-2px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}
.configuratorBlockMechanism255{
  width:109px;
  height:109px;
  margin-left:33px;
  margin-top:-254px;
}
.configuratorBlockMechanism255 > img{
  width:109px;
  height:109px;
  border-radius:3px;
}
.configuratorBlockMechanism255Hover{
  width:104px;
  height:104px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-2px;
  margin-left:-2px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}
.configuratorBlockMechanism355{
  width:109px;
  height:109px;
  margin-left:33px;
  margin-top:-255px;
}
.configuratorBlockMechanism355 > img{
  width:109px;
  height:109px;
  border-radius:3px;
}
.configuratorBlockMechanism355Hover{
  width:104px;
  height:104px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-2px;
  margin-left:-2px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}
.configuratorBlockMechanism455{
  width:109px;
  height:109px;
  margin-left:33px;
  margin-top:-254px;
}
.configuratorBlockMechanism455 > img{
  width:109px;
  height:109px;
  border-radius:3px;
}
.configuratorBlockMechanism455Hover{
  width:104px;
  height:104px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-2px;
  margin-left:-2px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}
.configuratorBlockMechanism555{
  width:109px;
  height:109px;
  margin-left:33px;
  margin-top:-151px;
}
.configuratorBlockMechanism555 > img{
  width:109px;
  height:109px;
  border-radius:3px;
}
.configuratorBlockMechanism555Hover{
  width:104px;
  height:104px;
  border:#FF7A00 solid 4px;
  border-radius:3px;
  margin-top:-2px;
  margin-left:-2px;
  position:absolute;
  filter: drop-shadow(2px 2px 5px rgba(255, 122, 0, 1));
}





@media screen and (max-width:1590px){
  .logoBinera1{
    margin-top:420px;
  }
  .logoBinera1 > img{
    width:186.2px;
    margin:0;
  }

  .logoBinera2{
    margin-top:470px;
  }
  .logoBinera2 > img{
    width:186.2px;
    margin:0;
  }
  .logoBinera3{
    margin-top:420px;
  }
  .logoBinera3 > img{
    width:186.2px;
    margin:0;
  }
  .logoBinera4{
    margin-top:490px;
  }
  .logoBinera4 > img{
    width:140.2px;
    margin:0;
  }
  .logoBinera5{
    margin-top:470px;
  }
  .logoBinera5 > img{
    width:109px;
    margin:0;
  }


  .poster{
    position:relative;
  }
  .closed{
    display:none;
  }
  .poster:hover .closed{
    display:flex;
    align-items: center;
    z-index:100;
    cursor:pointer;
    margin: 0 auto;
    filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.15));
    transition:0.6s;
  }
  .closed > img{
    display:flex;
    margin:0 auto;
    margin-top:-102.5%;
    padding-left:0.5%;
    width:40px;
    height:40px;
  }


  .frameBlockFrameHorizontal1{
    display:block;
    width:256.2px;
    height:256.2px;
  }
  .frameBlockFrameHorizontal2{
    display:block;
    width:447.6px;
    height:245.2px;
  }
  .frameBlockFrameVertical2{
    display:block;
    width:255.2px;
    height:447.6px;
    margin-top:-30px;
  }
  .frameBlockFrameHorizontal3{
    display:block;
    width:369.6px;
    height:146px;
  }
  .frameBlockFrameVertical3{
    margin-top:-80px;
    display:block;
    width:146px;
    height:369.6px;
  }
  .frameBlockFrameHorizontal4{
    display:block;
    width:485.6px;
    height:146.4px;
  }
  .frameBlockFrameVertical4{
    display:block;
    width:146.4px;
    height:485.6px;
    margin-top:-20px;
  }
  .frameBlockFrameHorizontal5{
    display:block;
    width:460px;
    height:109px;
  }
  .frameBlockFrameVertical5{
    display:block;
    width:109px;
    height:460px;
  }



  .configuratorBlockMechanism11 > img{
    width:152px;
    height:152px;
    border-radius:3px;
  }

  .configuratorBlockMechanism11{
    width:152px;
    height:152px;
    margin-left:46px;
    margin-top:-209px;
    border-radius:3px;
  }
  .configuratorBlockMechanism11Hover{
    width:150px;
    height:150px;
    border:#ff7a00 solid 3px;
  }



  /*
    Frame 2 horizontal
  */

  .configuratorBlockMechanism12{
    width:150px;
    height:150px;
    margin-left:44.5px;
    margin-top:-202px
  }
  .configuratorBlockMechanism22{
    width:150px;
    height:150px;
    margin-left:48px;
    margin-top:-202px
  }

  .configuratorBlockMechanism12 > img{
    width:150px;
    height:150px;
  }
  .configuratorBlockMechanism22 > img{
    width:150px;
    height:150px;
  }
  .configuratorBlockMechanism12Hover{
    width:145px;
    height:145px;
    border:3px solid #ff7a00;
    margin-left:-1px;
    margin-top:-156px;
  }
  .configuratorBlockMechanism22Hover{
    width:145px;
    height:145px;
    border:3px solid #ff7a00;
    margin-left:1px;
    margin-top:-156px;
  }

  /*
  Frame 2 vertical
*/

  .configuratorBlockMechanism122{
    width:150px;
    height:150px;
    margin-left:48px;
    margin-top:-350px
  }
  .configuratorBlockMechanism222{
    width:150px;
    height:150px;
    margin-left:48px;
    margin-top:-202px
  }
  .configuratorBlockMechanism122 > img{
    width:150px;
    height:150px;
  }
  .configuratorBlockMechanism222 > img{
    width:150px;
    height:150px;
  }
  .configuratorBlockMechanism122Hover{
    width:145px;
    height:145px;
    border:3px solid #ff7a00;
    margin-top:-2px;
    margin-left:-2px;
  }
  .configuratorBlockMechanism222Hover{
    width:145px;
    height:145px;
    border:3px solid #ff7a00;
    margin-top:-1.5px;
    margin-left:-2px;
  }


  /*
    Frame 3
  */

  .configuratorBlockMechanism13{
    width:88px;
    height:89px;
    margin-top:-120px;
    margin-left:24px;
  }
  .configuratorBlockMechanism23{
    width:88px;
    height:89px;
    margin-top:-120px;
    margin-left:26px;
  }
  .configuratorBlockMechanism33{
    width:88px;
    height:89px;
    margin-top:-120px;
    margin-left:25px;
  }
  .configuratorBlockMechanism13 > img{
    width:88px;
    height:89px;
  }
  .configuratorBlockMechanism23 > img{
    width:88px;
    height:89px;
  }
  .configuratorBlockMechanism33 > img{
    width:88px;
    height:89px;
  }
  .configuratorBlockMechanism13Hover{
    width:84px;
    height:85px;
    margin-top:-96px;
  }
  .configuratorBlockMechanism23Hover{
    width:84px;
    height:85px;
    margin-top:-96px;
  }
  .configuratorBlockMechanism33Hover{
    width:84px;
    height:85px;
    margin-top:-96px;
  }







  .configuratorBlockMechanism133{
    width:86px;
    height:86px;
    margin-left:27px;
    margin-top:-198px
  }
  .configuratorBlockMechanism133 > img{
    width:86px;
    height:86px;
    border-radius:3px;
  }
  .configuratorBlockMechanism233{
    width:86px;
    height:86px;
    margin-left:27px;
    margin-top:-198px
  }
  .configuratorBlockMechanism233 > img{
    width:86px;
    height:86px;
    border-radius:3px;
  }
  .configuratorBlockMechanism333{
    width:86px;
    height:86px;
    margin-left:27px;
    margin-top:-119px
  }
  .configuratorBlockMechanism333 > img{
    width:86px;
    height:86px;
    border-radius:3px;
  }









  .configuratorBlockMechanism14{
    width:88px;
    height:89px;
    margin-top:-120px;
    margin-left:25px;
  }
  .configuratorBlockMechanism14 > img{
    width:88px;
    height:89px;
  }
  .configuratorBlockMechanism24{
    width:88px;
    height:89px;
    margin-top:-120px;
    margin-left:26px;
  }
  .configuratorBlockMechanism24 > img{
    width:88px;
    height:89px;
  }
  .configuratorBlockMechanism34{
    width:88px;
    height:89px;
    margin-top:-120px;
    margin-left:26px;
  }
  .configuratorBlockMechanism34 > img{
    width:88px;
    height:89px;
  }
  .configuratorBlockMechanism44{
    width:88px;
    height:89px;
    margin-top:-120px;
    margin-left:27px;
  }
  .configuratorBlockMechanism44 > img{
    width:88px;
    height:89px;
  }
  .configuratorBlockMechanism14Hover{
    width:83px;
    height:84px;
    margin-top:-95px;
  }
  .configuratorBlockMechanism24Hover{
    width:83px;
    height:84px;
    margin-top:-95px;
  }
  .configuratorBlockMechanism34Hover{
    width:83px;
    height:84px;
    margin-top:-95px;
  }
  .configuratorBlockMechanism44Hover{
    width:83px;
    height:84px;
    margin-top:-95px;
  }







  .configuratorBlockMechanism144{
    width:88px;
    height:87px;
    margin-top:-199px;
    margin-left:27px;
  }
  .configuratorBlockMechanism144 > img{
    width:88px;
    height:87px;
  }
  .configuratorBlockMechanism244{
    width:88px;
    height:87px;
    margin-top:-200px;
    margin-left:27px;
  }
  .configuratorBlockMechanism244 > img{
    width:88px;
    height:87px;
  }
  .configuratorBlockMechanism344{
    width:88px;
    height:87px;
    margin-top:-201.5px;
    margin-left:27px;
  }
  .configuratorBlockMechanism344 > img{
    width:88px;
    height:87px;
  }
  .configuratorBlockMechanism444{
    width:88px;
    height:87px;
    margin-top:-121px;
    margin-left:27px;
  }
  .configuratorBlockMechanism444 > img{
    width:88px;
    height:87px;
  }
  .configuratorBlockMechanism144Hover{
    width:83px;
    height:84px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism244Hover{
    width:83px;
    height:84px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism344Hover{
    width:83px;
    height:84px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism444Hover{
    width:83px;
    height:84px;
    margin-top:-2px;
  }




  .configuratorBlockMechanism15{
    width:65px;
    height:65px;
    margin-top:-89px;
    margin-left:20px;
  }
  .configuratorBlockMechanism15 > img{
    width:65px;
    height:65px;
  }
  .configuratorBlockMechanism25{
    width:65px;
    height:65px;
    margin-top:-89px;
    margin-left:24px;
  }
  .configuratorBlockMechanism25 > img{
    width:65px;
    height:65px;
  }
  .configuratorBlockMechanism35{
    width:65px;
    height:65px;
    margin-top:-89px;
    margin-left:22px;
  }
  .configuratorBlockMechanism35 > img{
    width:65px;
    height:65px;
  }
  .configuratorBlockMechanism45{
    width:65px;
    height:65px;
    margin-top:-89px;
    margin-left:23px;
  }
  .configuratorBlockMechanism45 > img{
    width:65px;
    height:65px;
  }
  .configuratorBlockMechanism55{
    width:65px;
    height:65px;
    margin-top:-89px;
    margin-left:22px;
  }
  .configuratorBlockMechanism55 > img{
    width:65px;
    height:65px;
  }
  .configuratorBlockMechanism44 > img{
    width:88px;
    height:89px;
  }
  .configuratorBlockMechanism15Hover{
    width:61px;
    height:61px;
    margin-top:-71px;
  }
  .configuratorBlockMechanism25Hover{
    width:61px;
    height:61px;
    margin-top:-71px;
  }
  .configuratorBlockMechanism35Hover{
    width:61px;
    height:61px;
    margin-top:-71px;
  }
  .configuratorBlockMechanism45Hover{
    width:61px;
    height:61px;
    margin-top:-71px;
  }
  .configuratorBlockMechanism55Hover{
    width:61px;
    height:61px;
    margin-top:-71px;
  }







  .configuratorBlockMechanism155{
    width:65px;
    height:66px;
    margin-top:-152px;
    margin-left:20.5px;
  }
  .configuratorBlockMechanism155 > img{
    width:65px;
    height:66px;
  }
  .configuratorBlockMechanism255{
    width:65px;
    height:66px;
    margin-top:-154px;
    margin-left:20.5px;
  }
  .configuratorBlockMechanism255 > img{
    width:65px;
    height:66px;
  }
  .configuratorBlockMechanism355{
    width:65px;
    height:66px;
    margin-top:-154px;
    margin-left:20.5px;
  }
  .configuratorBlockMechanism355 > img{
    width:65px;
    height:66px;
  }
  .configuratorBlockMechanism455{
    width:65px;
    height:66px;
    margin-top:-153px;
    margin-left:20.5px;
  }
  .configuratorBlockMechanism455 > img{
    width:65px;
    height:66px;
  }
  .configuratorBlockMechanism555{
    width:65px;
    height:66px;
    margin-top:-90.5px;
    margin-left:20.5px;
  }
  .configuratorBlockMechanism555 > img{
    width:65px;
    height:66px;
  }
  .configuratorBlockMechanism155Hover{
    width:61px;
    height:61px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism255Hover{
    width:61px;
    height:61px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism355Hover{
    width:61px;
    height:61px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism455Hover{
    width:61px;
    height:61px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism555Hover{
    width:61px;
    height:61px;
    margin-top:-2px;
  }

}

@media screen and (max-width:1023px){
  .logoBinera1{
    margin-top:420px;
  }
  .logoBinera1 > img{
    width:186.2px;
    margin:0;
  }

  .logoBinera2{
    margin-top:470px;
  }
  .logoBinera2 > img{
    width:186.2px;
    margin:0;
  }
  .logoBinera3{
    margin-top:420px;
  }
  .logoBinera3 > img{
    width:186.2px;
    margin:0;
  }
  .logoBinera4{
    margin-top:490px;
  }
  .logoBinera4 > img{
    width:140.2px;
    margin:0;
  }
  .logoBinera5{
    margin-top:470px;
  }
  .logoBinera5 > img{
    width:109px;
    margin:0;
  }


  .poster{
    position:relative;
  }
  .closed{
    display:none;
  }
  .poster:hover .closed{
    display:flex;
    align-items: center;
    z-index:100;
    cursor:pointer;
    margin: 0 auto;
    filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.15));
    transition:0.6s;
  }
  .closed > img{
    display:flex;
    margin:0 auto;
    margin-top:-102.5%;
    padding-left:0.5%;
    width:40px;
    height:40px;
  }


  .frameBlockFrameHorizontal1{
    display:block;
    width:256.2px;
    height:256.2px;
  }
  .frameBlockFrameHorizontal2{
    display:block;
    width:447.6px;
    height:245.2px;
  }
  .frameBlockFrameVertical2{
    display:block;
    width:255.2px;
    height:447.6px;
    margin-top:-30px;
  }
  .frameBlockFrameHorizontal3{
    display:block;
    width:369.6px;
    height:146px;
  }
  .frameBlockFrameVertical3{
    margin-top:-80px;
    display:block;
    width:146px;
    height:369.6px;
  }
  .frameBlockFrameHorizontal4{
    display:block;
    width:485.6px;
    height:146.4px;
  }
  .frameBlockFrameVertical4{
    display:block;
    width:146.4px;
    height:485.6px;
    margin-top:-20px;
  }
  .frameBlockFrameHorizontal5{
    display:block;
    width:460px;
    height:109px;
  }
  .frameBlockFrameVertical5{
    display:block;
    width:109px;
    height:460px;
  }



  .configuratorBlockMechanism11 > img{
    width:152px;
    height:152px;
    border-radius:3px;
  }

  .configuratorBlockMechanism11{
    width:152px;
    height:152px;
    margin-left:46px;
    margin-top:-209px;
    border-radius:3px;
  }
  .configuratorBlockMechanism11Hover{
    width:150px;
    height:150px;
    border:#ff7a00 solid 3px;
  }



  /*
    Frame 2 horizontal
  */

  .configuratorBlockMechanism12{
    width:150px;
    height:150px;
    margin-left:44.5px;
    margin-top:-202px
  }
  .configuratorBlockMechanism22{
    width:150px;
    height:150px;
    margin-left:48px;
    margin-top:-202px
  }

  .configuratorBlockMechanism12 > img{
    width:150px;
    height:150px;
  }
  .configuratorBlockMechanism22 > img{
    width:150px;
    height:150px;
  }
  .configuratorBlockMechanism12Hover{
    width:145px;
    height:145px;
    border:3px solid #ff7a00;
    margin-left:-1px;
    margin-top:-156px;
  }
  .configuratorBlockMechanism22Hover{
    width:145px;
    height:145px;
    border:3px solid #ff7a00;
    margin-left:1px;
    margin-top:-156px;
  }

  /*
  Frame 2 vertical
*/

  .configuratorBlockMechanism122{
    width:150px;
    height:150px;
    margin-left:48px;
    margin-top:-350px
  }
  .configuratorBlockMechanism222{
    width:150px;
    height:150px;
    margin-left:48px;
    margin-top:-202px
  }
  .configuratorBlockMechanism122 > img{
    width:150px;
    height:150px;
  }
  .configuratorBlockMechanism222 > img{
    width:150px;
    height:150px;
  }
  .configuratorBlockMechanism122Hover{
    width:145px;
    height:145px;
    border:3px solid #ff7a00;
    margin-top:-2px;
    margin-left:-2px;
  }
  .configuratorBlockMechanism222Hover{
    width:145px;
    height:145px;
    border:3px solid #ff7a00;
    margin-top:-1.5px;
    margin-left:-2px;
  }


  /*
    Frame 3
  */

  .configuratorBlockMechanism13{
    width:88px;
    height:89px;
    margin-top:-120px;
    margin-left:24px;
  }
  .configuratorBlockMechanism23{
    width:88px;
    height:89px;
    margin-top:-120px;
    margin-left:26px;
  }
  .configuratorBlockMechanism33{
    width:88px;
    height:89px;
    margin-top:-120px;
    margin-left:25px;
  }
  .configuratorBlockMechanism13 > img{
    width:88px;
    height:89px;
  }
  .configuratorBlockMechanism23 > img{
    width:88px;
    height:89px;
  }
  .configuratorBlockMechanism33 > img{
    width:88px;
    height:89px;
  }
  .configuratorBlockMechanism13Hover{
    width:84px;
    height:85px;
    margin-top:-96px;
  }
  .configuratorBlockMechanism23Hover{
    width:84px;
    height:85px;
    margin-top:-96px;
  }
  .configuratorBlockMechanism33Hover{
    width:84px;
    height:85px;
    margin-top:-96px;
  }







  .configuratorBlockMechanism133{
    width:86px;
    height:86px;
    margin-left:27px;
    margin-top:-198px
  }
  .configuratorBlockMechanism133 > img{
    width:86px;
    height:86px;
    border-radius:3px;
  }
  .configuratorBlockMechanism233{
    width:86px;
    height:86px;
    margin-left:27px;
    margin-top:-198px
  }
  .configuratorBlockMechanism233 > img{
    width:86px;
    height:86px;
    border-radius:3px;
  }
  .configuratorBlockMechanism333{
    width:86px;
    height:86px;
    margin-left:27px;
    margin-top:-119px
  }
  .configuratorBlockMechanism333 > img{
    width:86px;
    height:86px;
    border-radius:3px;
  }









  .configuratorBlockMechanism14{
    width:88px;
    height:89px;
    margin-top:-120px;
    margin-left:25px;
  }
  .configuratorBlockMechanism14 > img{
    width:88px;
    height:89px;
  }
  .configuratorBlockMechanism24{
    width:88px;
    height:89px;
    margin-top:-120px;
    margin-left:26px;
  }
  .configuratorBlockMechanism24 > img{
    width:88px;
    height:89px;
  }
  .configuratorBlockMechanism34{
    width:88px;
    height:89px;
    margin-top:-120px;
    margin-left:26px;
  }
  .configuratorBlockMechanism34 > img{
    width:88px;
    height:89px;
  }
  .configuratorBlockMechanism44{
    width:88px;
    height:89px;
    margin-top:-120px;
    margin-left:27px;
  }
  .configuratorBlockMechanism44 > img{
    width:88px;
    height:89px;
  }
  .configuratorBlockMechanism14Hover{
    width:83px;
    height:84px;
    margin-top:-95px;
  }
  .configuratorBlockMechanism24Hover{
    width:83px;
    height:84px;
    margin-top:-95px;
  }
  .configuratorBlockMechanism34Hover{
    width:83px;
    height:84px;
    margin-top:-95px;
  }
  .configuratorBlockMechanism44Hover{
    width:83px;
    height:84px;
    margin-top:-95px;
  }







  .configuratorBlockMechanism144{
    width:88px;
    height:87px;
    margin-top:-199px;
    margin-left:27px;
  }
  .configuratorBlockMechanism144 > img{
    width:88px;
    height:87px;
  }
  .configuratorBlockMechanism244{
    width:88px;
    height:87px;
    margin-top:-200px;
    margin-left:27px;
  }
  .configuratorBlockMechanism244 > img{
    width:88px;
    height:87px;
  }
  .configuratorBlockMechanism344{
    width:88px;
    height:87px;
    margin-top:-201.5px;
    margin-left:27px;
  }
  .configuratorBlockMechanism344 > img{
    width:88px;
    height:87px;
  }
  .configuratorBlockMechanism444{
    width:88px;
    height:87px;
    margin-top:-121px;
    margin-left:27px;
  }
  .configuratorBlockMechanism444 > img{
    width:88px;
    height:87px;
  }
  .configuratorBlockMechanism144Hover{
    width:83px;
    height:84px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism244Hover{
    width:83px;
    height:84px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism344Hover{
    width:83px;
    height:84px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism444Hover{
    width:83px;
    height:84px;
    margin-top:-2px;
  }




  .configuratorBlockMechanism15{
    width:65px;
    height:65px;
    margin-top:-89px;
    margin-left:20px;
  }
  .configuratorBlockMechanism15 > img{
    width:65px;
    height:65px;
  }
  .configuratorBlockMechanism25{
    width:65px;
    height:65px;
    margin-top:-89px;
    margin-left:24px;
  }
  .configuratorBlockMechanism25 > img{
    width:65px;
    height:65px;
  }
  .configuratorBlockMechanism35{
    width:65px;
    height:65px;
    margin-top:-89px;
    margin-left:22px;
  }
  .configuratorBlockMechanism35 > img{
    width:65px;
    height:65px;
  }
  .configuratorBlockMechanism45{
    width:65px;
    height:65px;
    margin-top:-89px;
    margin-left:23px;
  }
  .configuratorBlockMechanism45 > img{
    width:65px;
    height:65px;
  }
  .configuratorBlockMechanism55{
    width:65px;
    height:65px;
    margin-top:-89px;
    margin-left:22px;
  }
  .configuratorBlockMechanism55 > img{
    width:65px;
    height:65px;
  }
  .configuratorBlockMechanism44 > img{
    width:88px;
    height:89px;
  }
  .configuratorBlockMechanism15Hover{
    width:61px;
    height:61px;
    margin-top:-71px;
  }
  .configuratorBlockMechanism25Hover{
    width:61px;
    height:61px;
    margin-top:-71px;
  }
  .configuratorBlockMechanism35Hover{
    width:61px;
    height:61px;
    margin-top:-71px;
  }
  .configuratorBlockMechanism45Hover{
    width:61px;
    height:61px;
    margin-top:-71px;
  }
  .configuratorBlockMechanism55Hover{
    width:61px;
    height:61px;
    margin-top:-71px;
  }







  .configuratorBlockMechanism155{
    width:65px;
    height:66px;
    margin-top:-152px;
    margin-left:20.5px;
  }
  .configuratorBlockMechanism155 > img{
    width:65px;
    height:66px;
  }
  .configuratorBlockMechanism255{
    width:65px;
    height:66px;
    margin-top:-154px;
    margin-left:20.5px;
  }
  .configuratorBlockMechanism255 > img{
    width:65px;
    height:66px;
  }
  .configuratorBlockMechanism355{
    width:65px;
    height:66px;
    margin-top:-154px;
    margin-left:20.5px;
  }
  .configuratorBlockMechanism355 > img{
    width:65px;
    height:66px;
  }
  .configuratorBlockMechanism455{
    width:65px;
    height:66px;
    margin-top:-153px;
    margin-left:20.5px;
  }
  .configuratorBlockMechanism455 > img{
    width:65px;
    height:66px;
  }
  .configuratorBlockMechanism555{
    width:65px;
    height:66px;
    margin-top:-90.5px;
    margin-left:20.5px;
  }
  .configuratorBlockMechanism555 > img{
    width:65px;
    height:66px;
  }
  .configuratorBlockMechanism155Hover{
    width:61px;
    height:61px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism255Hover{
    width:61px;
    height:61px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism355Hover{
    width:61px;
    height:61px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism455Hover{
    width:61px;
    height:61px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism555Hover{
    width:61px;
    height:61px;
    margin-top:-2px;
  }

}

@media screen and (max-width:648px){
  .logoBinera1{
    margin-top:420px;
  }
  .logoBinera1 > img{
    width:186.2px;
    margin:0;
  }

  .logoBinera2{
    margin-top:470px;
  }
  .logoBinera2 > img{
    width:186.2px;
    margin:0;
  }
  .logoBinera3{
    margin-top:420px;
  }
  .logoBinera3 > img{
    width:186.2px;
    margin:0;
  }
  .logoBinera4{
    margin-top:490px;
  }
  .logoBinera4 > img{
    width:140.2px;
    margin:0;
  }
  .logoBinera5{
    margin-top:470px;
  }
  .logoBinera5 > img{
    width:109px;
    margin:0;
  }


  .poster{
    position:relative;
  }
  .closed{
    display:none;
  }
  .poster:hover .closed{
    display:flex;
    align-items: center;
    z-index:100;
    cursor:pointer;
    margin: 0 auto;
    filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.15));
    transition:0.6s;
  }
  .closed > img{
    display:flex;
    margin:0 auto;
    margin-top:-102.5%;
    padding-left:0.5%;
    width:40px;
    height:40px;
  }


  .frameBlockFrameHorizontal1{
    display:block;
    width:245.2px;
    height:245.2px;
  }
  .frameBlockFrameHorizontal2{
    display:block;
    width:341px;
    height:189px;
  }
  .frameBlockFrameVertical2{
    display:block;
    width:189px;
    height:339px;
    margin-top:-10px;
  }
  .frameBlockFrameHorizontal3{
    display:block;
    width:314px;
    height:120px;
  }
  .frameBlockFrameVertical3{
    margin-top:-20px;
    display:block;
    width:119px;
    height:310px;
  }
  .frameBlockFrameHorizontal4{
    display:block;
    width:337px;
    height:99px;
  }
  .frameBlockFrameVertical4{
    display:block;
    width:101px;
    height:335px;
    margin-top:-20px;
  }
  .frameBlockFrameHorizontal5{
    display:block;
    width:350px;
    height:83px;
  }
  .frameBlockFrameVertical5{
    display:block;
    width:83px;
    height:347px;
    margin-top:-15px;
  }



  .configuratorBlockMechanism11 > img{
    width:145px;
    height:147px;
    border-radius:3px;
  }

  .configuratorBlockMechanism11{
    width:145px;
    height:147px;
    margin-left:45px;
    margin-top:-200.5px;
    border-radius:3px;
  }
  .configuratorBlockMechanism11Hover{
    width:146px;
    height:149px;
    margin-left:-5px;
    margin-top:-6px;
    border:#ff7a00 solid 4.5px;
    border-radius:3px;
    filter:none;
  }



  /*
    Frame 2 horizontal
  */

  .configuratorBlockMechanism12{
    width:114px;
    height:114px;
    margin-left:34px;
    margin-top:-155px
  }
  .configuratorBlockMechanism22{
    width:114px;
    height:114px;
    margin-left:38px;
    margin-top:-155px
  }

  .configuratorBlockMechanism12 > img{
    width:114px;
    height:114px;
  }
  .configuratorBlockMechanism22 > img{
    width:114px;
    height:114px;
  }
  .configuratorBlockMechanism12Hover{
    width:111px;
    height:114.5px;
    border:3px solid #ff7a00;
    margin-left:-2px;
    margin-top:-122px;
    filter:none;
    border-radius:3px;
  }
  .configuratorBlockMechanism22Hover{
    width:111px;
    height:114.5px;
    border:3px solid #ff7a00;
    margin-left:0;
    margin-top:-122px;
    margin-left:-2px;
    filter:none;
    border-radius:3px;
  }

  /*
  Frame 2 vertical
*/

  .configuratorBlockMechanism122{
    width:114px;
    height:114px;
    margin-left:35px;
    margin-top:-263px
  }
  .configuratorBlockMechanism222{
    width:114px;
    height:114px;
    margin-left:35px;
    margin-top:-155px
  }
  .configuratorBlockMechanism122 > img{
    width:114px;
    height:114px;
  }
  .configuratorBlockMechanism222 > img{
    width:114px;
    height:114px;
  }
  .configuratorBlockMechanism122Hover{
    width:145px;
    height:145px;
    border:3px solid #ff7a00;
    margin-top:-2px;
    margin-left:-2px;
    filter:none;
  }
  .configuratorBlockMechanism222Hover{
    width:145px;
    height:145px;
    border:3px solid #ff7a00;
    margin-top:-1.5px;
    margin-left:-2px;
    filter:none;
  }


  /*
    Frame 3
  */

  .configuratorBlockMechanism13{
    width:72px;
    height:72px;
    margin-top:-98px;
    margin-left:22px;
  }
  .configuratorBlockMechanism23{
    width:71.5px;
    height:72px;
    margin-top:-98px;
    margin-left:25px;
  }
  .configuratorBlockMechanism33{
    width:71.5px;
    height:72px;
    margin-top:-98px;
    margin-left:24px;
  }
  .configuratorBlockMechanism13 > img{
    width:72px;
    height:72px;
  }
  .configuratorBlockMechanism23 > img{
    width:71.5px;
    height:72px;
  }
  .configuratorBlockMechanism33 > img{
    width:71.5px;
    height:72px;
  }
  .configuratorBlockMechanism13Hover{
    width:72px;
    height:72px;
    margin-top:-79px;
    border-radius:3px;
    border:#ff7a00 solid 2px;
    filter:none;
    margin-left:-1px;
  }
  .configuratorBlockMechanism23Hover{
    width:72px;
    height:72px;
    margin-top:-79px;
    border-radius:3px;
    border:#ff7a00 solid 2px;
    filter:none;
    margin-left:-1.5px;
  }
  .configuratorBlockMechanism33Hover{
    width:72px;
    height:72px;
    margin-top:-79px;
    border-radius:3px;
    border:#ff7a00 solid 2px;
    filter:none;
    margin-left:-1px;
  }







  .configuratorBlockMechanism133{
    width:71.5px;
    height:72px;
    margin-left:22px;
    margin-top:-166px
  }
  .configuratorBlockMechanism133 > img{
    width:71.5px;
    height:72px;
    border-radius:3px;
  }
  .configuratorBlockMechanism233{
    width:71.5px;
    height:72px;
    margin-left:22px;
    margin-top:-167px
  }
  .configuratorBlockMechanism233 > img{
    width:71.5px;
    height:72px;
    border-radius:3px;
  }
  .configuratorBlockMechanism333{
    width:71.5px;
    height:72px;
    margin-left:22px;
    margin-top:-99.5px
  }
  .configuratorBlockMechanism333 > img{
    width:71.5px;
    height:72px;
    border-radius:3px;
  }









  .configuratorBlockMechanism14{
    width:59.5px;
    height:59.5px;
    margin-top:-81px;
    margin-left:18px;
  }
  .configuratorBlockMechanism14 > img{
    width:59.5px;
    height:60px;
  }
  .configuratorBlockMechanism24{
    width:59.5px;
    height:59.5px;
    margin-top:-81px;
    margin-left:20px;
  }
  .configuratorBlockMechanism24 > img{
    width:59.5px;
    height:60px;
  }
  .configuratorBlockMechanism34{
    width:59.5px;
    height:59.5px;
    margin-top:-81px;
    margin-left:19.5px;
  }
  .configuratorBlockMechanism34 > img{
    width:59.5px;
    height:60px;
  }
  .configuratorBlockMechanism44{
    width:59.5px;
    height:59.5px;
    margin-top:-81px;
    margin-left:20px;
  }
  .configuratorBlockMechanism44 > img{
    width:59.5px;
    height:60px;
  }
  .configuratorBlockMechanism14Hover{
    width:58px;
    height:58px;
    margin-top:-66px;
    margin-left:0;
    filter:none;
    border-radius:3px;
    border:2px solid #ff7a00;
  }
  .configuratorBlockMechanism24Hover{
    width:58px;
    height:58px;
    margin-top:-66px;
    margin-left:0;
    filter:none;
    border-radius:3px;
    border:2px solid #ff7a00;
  }
  .configuratorBlockMechanism34Hover{
    width:58px;
    height:58px;
    margin-top:-66px;
    margin-left:0;
    filter:none;
    border-radius:3px;
    border:2px solid #ff7a00;
  }
  .configuratorBlockMechanism44Hover{
    width:58px;
    height:58px;
    margin-top:-66px;
    margin-left:0;
    filter:none;
    border-radius:3px;
    border:2px solid #ff7a00;
  }







  .configuratorBlockMechanism144{
    width:59.5px;
    height:59px;
    margin-top:-136px;
    margin-left:19px;
  }
  .configuratorBlockMechanism144 > img{
    width:59.5px;
    height:59px;
  }
  .configuratorBlockMechanism244{
    width:59.5px;
    height:59px;
    margin-top:-137px;
    margin-left:19px;
  }
  .configuratorBlockMechanism244 > img{
    width:59.5px;
    height:59px;
  }
  .configuratorBlockMechanism344{
    width:59.5px;
    height:59px;
    margin-top:-137.5px;
    margin-left:19px;
  }
  .configuratorBlockMechanism344 > img{
    width:59.5px;
    height:59px;
  }
  .configuratorBlockMechanism444{
    width:59.5px;
    height:59px;
    margin-top:-83px;
    margin-left:19px;
  }
  .configuratorBlockMechanism444 > img{
    width:59.5px;
    height:59px;
  }
  .configuratorBlockMechanism144Hover{
    width:83px;
    height:84px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism244Hover{
    width:83px;
    height:84px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism344Hover{
    width:83px;
    height:84px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism444Hover{
    width:83px;
    height:84px;
    margin-top:-2px;
  }




  .configuratorBlockMechanism15{
    width:50px;
    height:50px;
    margin-top:-68px;
    margin-left:15px;
  }
  .configuratorBlockMechanism15 > img{
    width:50px;
    height:50px;
  }
  .configuratorBlockMechanism25{
    width:50px;
    height:50px;
    margin-top:-68px;
    margin-left:17px;
  }
  .configuratorBlockMechanism25 > img{
    width:50px;
    height:50px;
  }
  .configuratorBlockMechanism35{
    width:50px;
    height:50px;
    margin-top:-68px;
    margin-left:17px;
  }
  .configuratorBlockMechanism35 > img{
    width:50px;
    height:50px;
  }
  .configuratorBlockMechanism45{
    width:50px;
    height:50px;
    margin-top:-68px;
    margin-left:17px;
  }
  .configuratorBlockMechanism45 > img{
    width:50px;
    height:50px;
  }
  .configuratorBlockMechanism55{
    width:50px;
    height:50px;
    margin-top:-68px;
    margin-left:16px;
  }
  .configuratorBlockMechanism55 > img{
    width:50px;
    height:50px;
  }
  .configuratorBlockMechanism15Hover{
    width:49px;
    height:49px;
    margin-top:-55px;
    margin-left:-1px;
    filter:none;
    border-radius:1px;
    border:2px solid #ff7a00;
  }
  .configuratorBlockMechanism25Hover{
    width:49px;
    height:49px;
    margin-top:-55px;
    margin-left:-1px;
    filter:none;
    border-radius:1px;
    border:2px solid #ff7a00;
  }
  .configuratorBlockMechanism35Hover{
    width:49px;
    height:49px;
    margin-top:-55px;
    margin-left:-2px;
    filter:none;
    border-radius:1px;
    border:2px solid #ff7a00;
  }
  .configuratorBlockMechanism45Hover{
    width:49px;
    height:49px;
    margin-top:-55px;
    margin-left:-2px;
    filter:none;
    border-radius:1px;
    border:2px solid #ff7a00;
  }
  .configuratorBlockMechanism55Hover{
    width:49px;
    height:49px;
    margin-top:-55px;
    margin-left:-1.5px;
    filter:none;
    border-radius:1px;
    border:2px solid #ff7a00;
  }







  .configuratorBlockMechanism155{
    width:50px;
    height:50px;
    margin-top:-115px;
    margin-left:15px;
  }
  .configuratorBlockMechanism155 > img{
    width:50px;
    height:50px;
  }
  .configuratorBlockMechanism255{
    width:50px;
    height:50px;
    margin-top:-116px;
    margin-left:15px;
  }
  .configuratorBlockMechanism255 > img{
    width:50px;
    height:50px;
  }
  .configuratorBlockMechanism355{
    width:50px;
    height:50px;
    margin-top:-117px;
    margin-left:15px;
  }
  .configuratorBlockMechanism355 > img{
    width:50px;
    height:50px;
  }
  .configuratorBlockMechanism455{
    width:50px;
    height:50px;
    margin-top:-115px;
    margin-left:15px;
  }
  .configuratorBlockMechanism455 > img{
    width:50px;
    height:50px;
  }
  .configuratorBlockMechanism555{
    width:50px;
    height:50px;
    margin-top:-69px;
    margin-left:15px;
  }
  .configuratorBlockMechanism555 > img{
    width:50px;
    height:50px;
  }
  .configuratorBlockMechanism155Hover{
    width:61px;
    height:61px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism255Hover{
    width:61px;
    height:61px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism355Hover{
    width:61px;
    height:61px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism455Hover{
    width:61px;
    height:61px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism555Hover{
    width:61px;
    height:61px;
    margin-top:-2px;
  }

}

@media screen and (max-width:380px){
  .logoBinera1{
    margin-top:420px;
  }
  .logoBinera1 > img{
    width:186.2px;
    margin:0;
  }

  .logoBinera2{
    margin-top:470px;
  }
  .logoBinera2 > img{
    width:186.2px;
    margin:0;
  }
  .logoBinera3{
    margin-top:420px;
  }
  .logoBinera3 > img{
    width:186.2px;
    margin:0;
  }
  .logoBinera4{
    margin-top:490px;
  }
  .logoBinera4 > img{
    width:140.2px;
    margin:0;
  }
  .logoBinera5{
    margin-top:470px;
  }
  .logoBinera5 > img{
    width:109px;
    margin:0;
  }


  .poster{
    position:relative;
  }
  .closed{
    display:none;
  }
  .poster:hover .closed{
    display:flex;
    align-items: center;
    z-index:100;
    cursor:pointer;
    margin: 0 auto;
    filter: drop-shadow(0px 3px 4px rgba(0, 0, 0, 0.15));
    transition:0.6s;
  }
  .closed > img{
    display:flex;
    margin:0 auto;
    margin-top:-102.5%;
    padding-left:0.5%;
    width:40px;
    height:40px;
  }


  .frameBlockFrameHorizontal1{
    display:block;
    width:208px;
    height:208px;
  }
  .frameBlockFrameHorizontal2{
    display:block;
    width:257px;
    height:142px;
  }
  .frameBlockFrameVertical2{
    display:block;
    width:146px;
    height:257px;
  }
  .frameBlockFrameHorizontal3{
    display:block;
    width:255px;
    height:96px;
  }
  .frameBlockFrameVertical3{
    margin-top:-80px;
    display:block;
    width:99px;
    height:251px;
  }
  .frameBlockFrameHorizontal4{
    display:block;
    width:244px;
    height:71px;
  }
  .frameBlockFrameVertical4{
    display:block;
    width:77px;
    height:255px;
    margin-top:-20px;
  }
  .frameBlockFrameHorizontal5{
    display:block;
    width:266px;
    height:63px;
  }
  .frameBlockFrameVertical5{
    display:block;
    width:63px;
    height:266px;
  }



  .configuratorBlockMechanism11 > img{
    width:123px;
    height:125px;
    border-radius:3px;
  }

  .configuratorBlockMechanism11{
    width:123px;
    height:125px;
    margin-left:38px;
    margin-top:-169.5px;
    border-radius:3px;
  }
  .configuratorBlockMechanism11Hover{
    width:126px;
    height:129px;
    margin-left:-5px;
    margin-top:-6px;
    border:#ff7a00 solid 4.5px;
    border-radius:3px;
    filter:none;
  }



  /*
    Frame 2 horizontal
  */

  .configuratorBlockMechanism12{
    width:85px;
    height:85px;
    margin-left:26px;
    margin-top:-116px
  }
  .configuratorBlockMechanism22{
    width:85px;
    height:85px;
    margin-left:29.5px;
    margin-top:-116px
  }

  .configuratorBlockMechanism12 > img{
    width:85px;
    height:85px;
  }
  .configuratorBlockMechanism22 > img{
    width:85px;
    height:85px;
  }
  .configuratorBlockMechanism12Hover{
    width:85px;
    height:85px;
    border:3px solid #ff7a00;
    margin-left:-2px;
    margin-top:-122px;
    filter:none;
    border-radius:3px;
  }
  .configuratorBlockMechanism22Hover{
    width:85px;
    height:85px;
    border:3px solid #ff7a00;
    margin-left:0;
    margin-top:-122px;
    margin-left:-2px;
    filter:none;
    border-radius:3px;
  }

  /*
  Frame 2 vertical
*/

  .configuratorBlockMechanism122{
    width:114px;
    height:114px;
    margin-left:35px;
    margin-top:-263px
  }
  .configuratorBlockMechanism222{
    width:114px;
    height:114px;
    margin-left:35px;
    margin-top:-155px
  }
  .configuratorBlockMechanism122 > img{
    width:114px;
    height:114px;
  }
  .configuratorBlockMechanism222 > img{
    width:114px;
    height:114px;
  }
  .configuratorBlockMechanism122Hover{
    width:145px;
    height:145px;
    border:3px solid #ff7a00;
    margin-top:-2px;
    margin-left:-2px;
    filter:none;
  }
  .configuratorBlockMechanism222Hover{
    width:145px;
    height:145px;
    border:3px solid #ff7a00;
    margin-top:-1.5px;
    margin-left:-2px;
    filter:none;
  }


  /*
    Frame 3
  */

  .configuratorBlockMechanism13{
    width:58px;
    height:57px;
    margin-top:-78px;
    margin-left:18px;
  }
  .configuratorBlockMechanism23{
    width:57px;
    height:57px;
    margin-top:-78px;
    margin-left:20px;
  }
  .configuratorBlockMechanism33{
    width:58.5px;
    height:57px;
    margin-top:-78px;
    margin-left:20px;
  }
  .configuratorBlockMechanism13 > img{
    width:58px;
    height:57px;
  }
  .configuratorBlockMechanism23 > img{
    width:57px;
    height:57px;
  }
  .configuratorBlockMechanism33 > img{
    width:58.5px;
    height:57px;
  }
  .configuratorBlockMechanism13Hover{
    width:57px;
    height:57px;
    margin-top:-79px;
    border-radius:3px;
    border:#ff7a00 solid 2px;
    filter:none;
    margin-left:-1px;
  }
  .configuratorBlockMechanism23Hover{
    width:57px;
    height:57px;
    margin-top:-79px;
    border-radius:3px;
    border:#ff7a00 solid 2px;
    filter:none;
    margin-left:-1.5px;
  }
  .configuratorBlockMechanism33Hover{
    width:57px;
    height:57px;
    margin-top:-79px;
    border-radius:3px;
    border:#ff7a00 solid 2px;
    filter:none;
    margin-left:-1px;
  }







  .configuratorBlockMechanism133{
    width:71.5px;
    height:72px;
    margin-left:22px;
    margin-top:-166px
  }
  .configuratorBlockMechanism133 > img{
    width:71.5px;
    height:72px;
    border-radius:3px;
  }
  .configuratorBlockMechanism233{
    width:71.5px;
    height:72px;
    margin-left:22px;
    margin-top:-167px
  }
  .configuratorBlockMechanism233 > img{
    width:71.5px;
    height:72px;
    border-radius:3px;
  }
  .configuratorBlockMechanism333{
    width:71.5px;
    height:72px;
    margin-left:22px;
    margin-top:-99.5px
  }
  .configuratorBlockMechanism333 > img{
    width:71.5px;
    height:72px;
    border-radius:3px;
  }









  .configuratorBlockMechanism14{
    width:43px;
    height:43px;
    margin-top:-58px;
    margin-left:13px;
  }
  .configuratorBlockMechanism14 > img{
    width:43px;
    height:43px;
  }
  .configuratorBlockMechanism24{
    width:43px;
    height:43px;
    margin-top:-58px;
    margin-left:15px;
  }
  .configuratorBlockMechanism24 > img{
    width:43px;
    height:43px;
  }
  .configuratorBlockMechanism34{
    width:42.5px;
    height:43px;
    margin-top:-58px;
    margin-left:14px;
  }
  .configuratorBlockMechanism34 > img{
    width:42.5px;
    height:43px;
  }
  .configuratorBlockMechanism44{
    width:43.5px;
    height:43px;
    margin-top:-58px;
    margin-left:14px;
  }
  .configuratorBlockMechanism44 > img{
    width:43px;
    height:43px;
  }
  .configuratorBlockMechanism14Hover{
    width:58px;
    height:58px;
    margin-top:-66px;
    margin-left:0;
    filter:none;
    border-radius:3px;
    border:2px solid #ff7a00;
  }
  .configuratorBlockMechanism24Hover{
    width:58px;
    height:58px;
    margin-top:-66px;
    margin-left:0;
    filter:none;
    border-radius:3px;
    border:2px solid #ff7a00;
  }
  .configuratorBlockMechanism34Hover{
    width:58px;
    height:58px;
    margin-top:-66px;
    margin-left:0;
    filter:none;
    border-radius:3px;
    border:2px solid #ff7a00;
  }
  .configuratorBlockMechanism44Hover{
    width:58px;
    height:58px;
    margin-top:-66px;
    margin-left:0;
    filter:none;
    border-radius:3px;
    border:2px solid #ff7a00;
  }







  .configuratorBlockMechanism144{
    width:59.5px;
    height:59px;
    margin-top:-136px;
    margin-left:19px;
  }
  .configuratorBlockMechanism144 > img{
    width:59.5px;
    height:59px;
  }
  .configuratorBlockMechanism244{
    width:59.5px;
    height:59px;
    margin-top:-137px;
    margin-left:19px;
  }
  .configuratorBlockMechanism244 > img{
    width:59.5px;
    height:59px;
  }
  .configuratorBlockMechanism344{
    width:59.5px;
    height:59px;
    margin-top:-137.5px;
    margin-left:19px;
  }
  .configuratorBlockMechanism344 > img{
    width:59.5px;
    height:59px;
  }
  .configuratorBlockMechanism444{
    width:59.5px;
    height:59px;
    margin-top:-83px;
    margin-left:19px;
  }
  .configuratorBlockMechanism444 > img{
    width:59.5px;
    height:59px;
  }
  .configuratorBlockMechanism144Hover{
    width:83px;
    height:84px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism244Hover{
    width:83px;
    height:84px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism344Hover{
    width:83px;
    height:84px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism444Hover{
    width:83px;
    height:84px;
    margin-top:-2px;
  }




  .configuratorBlockMechanism15{
    width:37px;
    height:37px;
    margin-top:-51px;
    margin-left:12px;
  }
  .configuratorBlockMechanism15 > img{
    width:37px;
    height:37px;
  }
  .configuratorBlockMechanism25{
    width:37px;
    height:37px;
    margin-top:-51px;
    margin-left:14px;
  }
  .configuratorBlockMechanism25 > img{
    width:37px;
    height:37px;
  }
  .configuratorBlockMechanism35{
    width:37.5px;
    height:37px;
    margin-top:-51px;
    margin-left:13px;
  }
  .configuratorBlockMechanism35 > img{
    width:37.5px;
    height:37px;
  }
  .configuratorBlockMechanism45{
    width:38px;
    height:37px;
    margin-top:-51px;
    margin-left:13px;
  }
  .configuratorBlockMechanism45 > img{
    width:38px;
    height:37px;
  }
  .configuratorBlockMechanism55{
    width:37px;
    height:37px;
    margin-top:-51px;
    margin-left:13px;
  }
  .configuratorBlockMechanism55 > img{
    width:37px;
    height:37px;
  }
  .configuratorBlockMechanism15Hover{
    width:49px;
    height:49px;
    margin-top:-55px;
    margin-left:-1px;
    filter:none;
    border-radius:1px;
    border:2px solid #ff7a00;
  }
  .configuratorBlockMechanism25Hover{
    width:49px;
    height:49px;
    margin-top:-55px;
    margin-left:-1px;
    filter:none;
    border-radius:1px;
    border:2px solid #ff7a00;
  }
  .configuratorBlockMechanism35Hover{
    width:49px;
    height:49px;
    margin-top:-55px;
    margin-left:-2px;
    filter:none;
    border-radius:1px;
    border:2px solid #ff7a00;
  }
  .configuratorBlockMechanism45Hover{
    width:49px;
    height:49px;
    margin-top:-55px;
    margin-left:-2px;
    filter:none;
    border-radius:1px;
    border:2px solid #ff7a00;
  }
  .configuratorBlockMechanism55Hover{
    width:49px;
    height:49px;
    margin-top:-55px;
    margin-left:-1.5px;
    filter:none;
    border-radius:1px;
    border:2px solid #ff7a00;
  }







  .configuratorBlockMechanism155{
    width:50px;
    height:50px;
    margin-top:-115px;
    margin-left:15px;
  }
  .configuratorBlockMechanism155 > img{
    width:50px;
    height:50px;
  }
  .configuratorBlockMechanism255{
    width:50px;
    height:50px;
    margin-top:-116px;
    margin-left:15px;
  }
  .configuratorBlockMechanism255 > img{
    width:50px;
    height:50px;
  }
  .configuratorBlockMechanism355{
    width:50px;
    height:50px;
    margin-top:-117px;
    margin-left:15px;
  }
  .configuratorBlockMechanism355 > img{
    width:50px;
    height:50px;
  }
  .configuratorBlockMechanism455{
    width:50px;
    height:50px;
    margin-top:-115px;
    margin-left:15px;
  }
  .configuratorBlockMechanism455 > img{
    width:50px;
    height:50px;
  }
  .configuratorBlockMechanism555{
    width:50px;
    height:50px;
    margin-top:-69px;
    margin-left:15px;
  }
  .configuratorBlockMechanism555 > img{
    width:50px;
    height:50px;
  }
  .configuratorBlockMechanism155Hover{
    width:61px;
    height:61px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism255Hover{
    width:61px;
    height:61px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism355Hover{
    width:61px;
    height:61px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism455Hover{
    width:61px;
    height:61px;
    margin-top:-2px;
  }
  .configuratorBlockMechanism555Hover{
    width:61px;
    height:61px;
    margin-top:-2px;
  }

}
</style>
