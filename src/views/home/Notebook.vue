<template>
<div class="pt-12">
<div class="canvas ma-auto">
 
  <div class="notepad ma-auto">
    <div class="cover">
       <div class="holes ma-auto">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="spiral">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Auth />
    </div>
    <div class="page one">
      <p>Smart<br />Book!</p>
    </div>
    <div class="page two"></div>
    <div class="page three"></div>
    <div class="page four"></div>
  </div>
  
</div>
</div>
</template>

<script>
import Auth from './Auth'
export default {
  components:{
    Auth
  }

}
</script>

<style scoped>

/* css for notebook */

@import url('https://fonts.googleapis.com/css?family=Indie+Flower');


.canvas {
  width: 100vw;
  height: 100vw;
  max-width: 1260pxpx;
  max-height: 1200px;
}

.notepad {
  position: relative;
  width: 400px;
  height: 550px;
  perspective: 1000px;
  box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, .12), 0 2px 4px -1px rgba(0, 0, 0, .2);
}

.notepad .cover,
.notepad .page {
  position: absolute;
  width: 100%;
  height: 100%;
  text-align: center;
}

.notepad .cover {
  transform-origin: left center;
  transition: 2s;
  z-index: 20;
  animation: flip 6s 2 ease-in-out;
}


.notepad .page {
  background: #eee;
  border-right: 1px solid #ccc;
  box-sizing: border-box;
}

.notepad .page:after {
  content: '';
  position: absolute;
  top: 0;
  left: 5%;
  width: 90%;
  height: 100%;
  background: linear-gradient( #eee 0%, #eee 10%, #dfdfdf 10%, #dfdfdf 11%, #eee 11%, #eee 20%, #dfdfdf 20%, #dfdfdf 21%, #eee 21%, #eee 30%, #dfdfdf 30%, #dfdfdf 31%, #eee 31%, #eee 40%, #dfdfdf 40%, #dfdfdf 41%, #eee 41%, #eee 50%, #dfdfdf 50%, #dfdfdf 51%, #eee 51%, #eee 60%, #dfdfdf 60%, #dfdfdf 61%, #eee 61%, #eee 70%, #dfdfdf 70%, #dfdfdf 71%, #eee 71%, #eee 80%, #dfdfdf 80%, #dfdfdf 81%, #eee 81%, #eee 90%, #dfdfdf 90%, #dfdfdf 91%, #eee 91%, #eee 100%);
}

.page p {
  position: absolute;
  top: 18%;
  left: 28%;
  z-index: 2;
   font-family: Georgia;
  line-height: 1.4;
  font-weight: normal;
  font-stretch: normal;
  font-variant: small-caps;
  width: 0;
  height: 135px;
  margin: 0;
  font-size: 40px;
  text-align: left;
  overflow: hidden;
  animation: write 6s 2 linear;
}

.page.one {
  z-index: 4;
  animation: one 6s infinite ease-in-out;
}

.page.one:before {
  position: absolute;
}

.page.two {
  z-index: 3;
  animation: two 6s infinite ease-in-out;
}

.page.three {
  z-index: 2;
  animation: three 6s infinite ease-in-out;
}

.page.four {
  z-index: 1;
  border-right-width: 0;
}

.page:before {
  content: '';
  position: absolute;
  right: -7%;
  width: 7%;
  height: 10%;
  border-radius: 0 0 20% 0;
}

.page.one:before {
  top: 10%;
  background-color: #cc881b;
}

.page.two:before {
  top: 20%;
  background-color: #49a84d;
}

.page.three:before {
  top: 30%;
  background-color: #bf351f;
}

.page.four:before {
  top: 40%;
  background-color: #d68384;
}


 .spiral {
    position: absolute;
    width: 20%;
    height: 100%;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
 }
  .spiral div {
      position: relative;
      z-index: 21;
      width: 30px;
      height: 20px;
      left: -14%;
      background-color: transparent;
      border-left: 7px solid red;
      border-top: 7px solid red;
      border-bottom: 7px solid transparent;
      border-right: 7px solid red;
      border-radius: 50%;
      transform: rotate(-30deg) skew(25deg);
    }
  .holes {
    position: absolute;
    width: 20%;
    height: 100%;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
    .holes div {
      position: relative;
      z-index: 21;
      width: 28%;
      height: 4%;
      left: 3%;
      top: -1%;
      background-color:grey;
      border-radius: 50%;
    }

@keyframes flip {
  0%,
  30%,
  100% {
    transform: rotateY(0deg);
  }
  50%,
  80% {
    transform: rotateY(-150deg);
  }
  80% {
    background: linear-gradient(to right, #1a2938 15%, #1a2938 15%);
  }
}

@keyframes title {
  0%,
  40%,
  90% {
    background-color: #455d75;
  }
  41%,
  89% {
    background-color: transparent;
  }
}

@keyframes draw {
  0%,
  40%,
  88% {
    transform: translate(0, 0) rotate(0deg);
  }
  50% {
    transform: translate(-180px, -180px) rotate(20deg);
  }
  55% {
    transform: translate(-160px, -80px) rotate(20deg);
  }
  60% {
    transform: translate(-140px, -180px) rotate(20deg);
  }
  65% {
    transform: translate(-120px, -80px) rotate(20deg);
  }
  70% {
    transform: translate(-100px, -180px) rotate(20deg);
  }
  75% {
    transform: translate(-80px, -80px) rotate(20deg);
  }
  80% {
    transform: translate(-60px, -180px) rotate(20deg);
  }
}

@keyframes write {
  0%,
  52% {
    width: 0;
  }
  57% {
    width: 20px;
  }
  62% {
    width: 40px;
  }
  68% {
    width: 60px;
  }
  72% {
    width: 80px;
  }
  78%,
  100% {
    width: 120px;
  }
}

@keyframes one {
  0%,
  30%,
  100% {
    width: 100%;
  }
  50%,
  80% {
    width: 97%;
  }
}

@keyframes two {
  0%,
  30%,
  100% {
    width: 100%;
  }
  50%,
  80% {
    width: 98%;
  }
}

@keyframes three {
  0%,
  30%,
  100% {
    width: 100%;
  }
  50%,
  80% {
    width: 99%;
  }
}

</style>