<template>
  <div class="artboard">
    <div class="bb8">
      <div class="bb8-body">
        <div class="dot dot-1">
          <div class="line line-1"></div>
          <div class="line line-2"></div>
          <div class="line line-3"></div>
        </div>
        <div class="dot dot-2"></div>
        <div class="circle circle-1"></div>
        <div class="circle circle-2"></div>
        <div class="circle circle-3"></div>
      </div>
      <div class="body-shadow-crop">
        <div class="body-shadow"></div>
      </div>
      <div class="bb8-head">
        <div class="head-bottom">
          <div class="head-side-1"></div>
          <div class="head-side-2"></div>
          <div class="head-bottom-base"></div>
        </div>
        <div class="head-top-crop">
          <div class="head-top"></div>
        </div>
        <div class="lens"></div>
        <div class="freckle"></div>
      </div>
      <div class="speedlines">
        <div class="one tail"></div>
        <div class="two tail"></div>
        <div class="three"></div>
        <div class="four"></div>
        <div class="five tail"></div>
      </div>
      <div class="sparkles">
        <div class="one small pulse-1"></div>
        <div class="two blue small pulse-2"></div>
        <div class="three blue med pulse-3"></div>
        <div class="four orange pulse-2"></div>
        <div class="five orange pulse-1"></div>
        <div class="six blue small pulse"></div>
        <div class="seven blue small pulse"></div>
        <div class="eight small pulse-3"></div>
        <div class="nine pulse"></div>
        <div class="ten orange small-1 pulse"></div>
        <div class="eleven small pulse"></div>
        <div class="twelve small pulse-2"></div>
        <div class="thirteen orange small pulse"></div>
        <div class="fourteen orange med pulse-3"></div>
        <div class="fifteen small pulse-1"></div>
        <div class="sixteen small pulse"></div>
      </div>
      <div class="ground">
        <div class="one">
          <div class="bump move-1"></div>
        </div>
        <div class="two"></div>
        <div class="three">
          <div class="bump move-2"></div>
        </div>
        <div class="four">
          <div class="bump"></div>
        </div>
        <div class="five"></div>
        <div class="six">
          <div class="bump move-2"></div>
        </div>
        <div class="seven">
          <div class="bump"></div>
        </div>
        <div class="eight">
          <div class="bump move-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'callback',
    props: ['auth'],
    data () {
      this.auth.handleAuthentication()
      return {}
    }
  }
</script>

<style>
  @import url(https://fonts.googleapis.com/css?family=Roboto+Mono);
  * {
    box-sizing: border-box;
  }

  body {
    background: #eee;
  }

  .artboard {
    width: 800px;
    height: 600px;
    background: #F5FAFC;
    box-shadow: 0px 3px 20px rgba(0, 0, 0, 0.2);
    border-radius: 3px;
    margin: 50px auto;
    border: 20px white solid;
    position: relative;
  }

  .bb8 {
    width: 220px;
    height: 220px;
    position: absolute;
    top: 222px;
    left: 180px;
  }

  .bb8-body {
    width: 220px;
    height: 220px;
    background: #EBF2FA;
    position: absolute;
    border-radius: 50%;
    border: solid 8px #244356;
    overflow: hidden;
    -webkit-animation: spin 1s linear infinite;
    animation: spin 1s linear infinite;
  }

  .circle {
    width: 120px;
    height: 120px;
    border: 8px solid #244356;
    background-color: #FDC23E;
    border-radius: 50%;
    position: absolute;
  }
  .circle:after {
    content: "";
    display: block;
    border: 8px solid #244356;
    background: #EBF2FA;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    height: 35%;
    width: 35%;
  }

  .circle-1 {
    top: 10px;
    left: -30px;
  }

  .circle-2 {
    top: 123px;
    left: 80px;
  }

  .circle-3 {
    height: 300px;
    width: 300px;
    left: 120px;
    top: -180px;
  }

  .dot {
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: #244356;
    position: absolute;
  }

  .dot-1 {
    top: 79px;
    left: 113px;
  }

  .dot-2 {
    top: 145px;
    left: 40px;
  }

  .line {
    position: absolute;
    height: 8px;
    width: 100px;
    background: #244356;
  }

  .line-1 {
    -webkit-transform: rotate(40deg);
    transform: rotate(40deg);
    top: 40px;
    left: -70px;
  }

  .line-2 {
    -webkit-transform: rotate(160deg);
    transform: rotate(160deg);
    top: -45px;
    left: -60px;
  }

  .line-3 {
    -webkit-transform: rotate(-60deg);
    transform: rotate(-60deg);
    top: 25px;
    left: 10px;
  }

  .body-shadow-crop {
    width: 220px;
    height: 220px;
    position: absolute;
    border-radius: 50%;
    border: solid 8px #244356;
    overflow: hidden;
    -webkit-transform: translate3d(0, 0, 0);
  }

  .body-shadow {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    position: absolute;
    box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.4);
    left: -50px;
    top: -20px;
  }

  .bb8-head {
    width: 160px;
    height: 160px;
    position: absolute;
    top: -60px;
    left: -30px;
    -webkit-transform: rotate(-30deg);
    transform: rotate(-30deg);
  }

  .head-top {
    width: 160px;
    height: 160px;
    background: #EBF2FA;
    border: solid 8px #244356;
    position: absolute;
    border-radius: 50%;
    box-shadow: -10px 0px 0px 5px rgba(0, 0, 0, 0.2) inset;
  }

  .lens {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    border: solid 8px #244356;
    background: #295A6D;
    position: absolute;
    top: 20px;
    left: 50%;
    margin-left: -28px;
    overflow: hidden;
  }
  .lens:before, .lens:after {
    content: "";
    display: block;
    width: 6px;
    height: 70px;
    background: #2A6B80;
    position: absolute;
    left: 10px;
    top: -20px;
    -webkit-transform: rotate(40deg);
    transform: rotate(40deg);
  }
  .lens:after {
    width: 10px;
    left: 25px;
    top: -10px;
  }

  .freckle {
    height: 13px;
    width: 13px;
    border-radius: 50%;
    background: #244356;
    top: 60px;
    left: 120px;
    position: absolute;
  }

  .head-top-crop {
    height: 50%;
    overflow: hidden;
    position: relative;
  }

  .head-bottom {
    position: absolute;
    width: 100%;
    top: 80px;
  }

  .head-bottom-base,
  .head-side-1,
  .head-side-2 {
    border-bottom: 8px solid #244356;
    background: #A7D0E0;
    height: 20px;
    position: absolute;
  }

  .head-bottom-base {
    width: 78%;
    left: 11%;
  }

  .head-side-1 {
    width: 30px;
    -webkit-transform: rotate(40deg);
    transform: rotate(40deg);
    -webkit-transform-origin: bottom left;
    transform-origin: bottom left;
    top: -16px;
    left: -3px;
    border-radius: 0px 0px 8px 8px;
  }

  .head-side-2 {
    width: 30px;
    -webkit-transform: rotate(-40deg);
    transform: rotate(-40deg);
    -webkit-transform-origin: bottom right;
    transform-origin: bottom right;
    top: -16px;
    right: -3px;
    border-radius: 0px 0px 8px 8px;
  }

  .speedlines > div {
    height: 8px;
    width: 55px;
    background: #244356;
    border-radius: 8px;
    position: absolute;
    left: 120px;
  }
  .speedlines > div.tail:after {
    content: "";
    display: block;
    height: 8px;
    width: 20px;
    border-radius: 8px;
    background: #244356;
    position: absolute;
    left: 100%;
    margin-left: 5px;
  }
  .speedlines > div.one {
    top: -60px;
    left: 53px;
  }
  .speedlines > div.two {
    top: -21px;
    left: 113px;
  }
  .speedlines > div.three {
    top: -10px;
    left: 103px;
    width: 30px;
  }
  .speedlines > div.four {
    top: 121px;
    left: 203px;
    width: 30px;
  }
  .speedlines > div.five {
    top: 141px;
    left: 218px;
    width: 50px;
  }

  .sparkles > div {
    width: 30px;
    height: 30px;
    position: absolute;
  }
  .sparkles > div:before, .sparkles > div:after {
    content: "";
    display: block;
    width: 40%;
    height: 100%;
    border-radius: 20px;
    background: #FF7761;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
  .sparkles > div:after {
    -webkit-transform: translate(-50%, -50%) rotate(90deg);
    transform: translate(-50%, -50%) rotate(90deg);
  }
  .sparkles > div.blue:before, .sparkles > div.blue:after {
    background: #449BAA;
  }
  .sparkles > div.orange:before, .sparkles > div.orange:after {
    background: #FDC23E;
  }
  .sparkles > div.med {
    -webkit-transform: scale(0.6);
    transform: scale(0.6);
  }
  .sparkles > div.small {
    -webkit-transform: scale(0.4);
    transform: scale(0.4);
  }
  .sparkles > div.one {
    top: -53px;
    left: 140px;
  }
  .sparkles > div.two {
    top: -46px;
    left: 210px;
  }
  .sparkles > div.three {
    top: -6px;
    left: 186px;
  }
  .sparkles > div.four {
    top: -16px;
    left: 280px;
  }
  .sparkles > div.five {
    top: 44px;
    left: 230px;
  }
  .sparkles > div.six {
    top: 94px;
    left: 240px;
  }
  .sparkles > div.seven {
    top: 154px;
    left: 216px;
  }
  .sparkles > div.eight {
    top: 187px;
    left: 185px;
  }
  .sparkles > div.nine {
    top: 63px;
    left: 325px;
  }
  .sparkles > div.ten {
    top: 124px;
    left: 315px;
  }
  .sparkles > div.eleven {
    top: 161px;
    left: 294px;
  }
  .sparkles > div.twelve {
    top: 27px;
    left: 366px;
  }
  .sparkles > div.thirteen {
    top: 37px;
    left: 415px;
  }
  .sparkles > div.fourteen {
    top: 87px;
    left: 385px;
  }
  .sparkles > div.fifteen {
    top: 137px;
    left: 378px;
  }
  .sparkles > div.sixteen {
    top: 97px;
    left: 455px;
  }
  .sparkles > div.pulse {
    -webkit-animation: pulse 1s linear infinite;
    animation: pulse 1s linear infinite;
  }
  .sparkles > div.pulse-1 {
    -webkit-animation: pulse 1s 300ms linear infinite;
    animation: pulse 1s 300ms linear infinite;
  }
  .sparkles > div.pulse-2 {
    -webkit-animation: pulse 1s 600ms linear infinite;
    animation: pulse 1s 600ms linear infinite;
  }
  .sparkles > div.pulse-3 {
    -webkit-animation: pulse 1s 900ms linear infinite;
    animation: pulse 1s 900ms linear infinite;
  }

  .ground > div {
    height: 8px;
    width: 80px;
    background: #244356;
    position: absolute;
    top: 212px;
    left: -90px;
    border-radius: 8px;
  }
  .ground > div.one .bump {
    left: 40px;
  }
  .ground > div.two {
    width: 25px;
    left: -1px;
  }
  .ground > div.three {
    width: 300px;
    left: 34px;
  }
  .ground > div.four {
    width: 90px;
    left: 346px;
  }
  .ground > div.four .bump {
    left: 10px;
  }
  .ground > div.five {
    width: 20px;
    left: 450px;
  }
  .ground > div.six {
    width: 80px;
    left: 11px;
    top: 255px;
  }
  .ground > div.six .bump {
    left: 10px;
  }
  .ground > div.seven {
    width: 127px;
    left: 171px;
    top: 255px;
  }
  .ground > div.seven .bump {
    left: 60px;
  }
  .ground > div.eight {
    width: 87px;
    left: 71px;
    top: 295px;
  }
  .ground > div.eight .bump {
    left: 30px;
  }
  .ground > div .bump {
    height: 15px;
    width: 30px;
    position: absolute;
    top: -7px;
    overflow: hidden;
    -webkit-animation: move 0.5s linear infinite;
    animation: move 0.5s linear infinite;
  }
  .ground > div .bump.move-1 {
    -webkit-animation: move 0.5s 350ms linear infinite;
    animation: move 0.5s 350ms linear infinite;
  }
  .ground > div .bump.move-2 {
    -webkit-animation: move 0.5s 700ms linear infinite;
    animation: move 0.5s 700ms linear infinite;
  }
  .ground > div .bump:after {
    content: "";
    display: block;
    height: 30px;
    width: 30px;
    border: 8px solid #244356;
    border-radius: 50%;
    background: #F5FAFC;
    box-sizing: border-box;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }

  @keyframes spin {
    0% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
    100% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
  }
  @-webkit-keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    90% {
      -webkit-transform: scale(0.3);
      transform: scale(0.3);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @keyframes pulse {
    0% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    90% {
      -webkit-transform: scale(0.3);
      transform: scale(0.3);
    }
    100% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }
  @-webkit-keyframes move {
    0% {
      left: 5%;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    10% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    90% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      left: 55%;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
  }
  @keyframes move {
    0% {
      left: 5%;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    10% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    90% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
    100% {
      left: 55%;
      -webkit-transform: scale(0);
      transform: scale(0);
    }
  }
  .credit {
    text-align: center;
    color: #999;
    font-family: "Roboto Mono";
  }

  a {
    color: #333;
  }

  h1, h2 {
    font-family: "Roboto Mono";
    text-align: center;
    margin: 50px;
  }

  h2 {
    color: #666;
  }

  iframe {
    margin: 50px auto;
    display: block;
  }

  hr {
    height: 0px;
    border: none;
    border-top: 2px solid #ccc;
    margin: 100px auto 50px;
    width: 80px;
  }

</style>
