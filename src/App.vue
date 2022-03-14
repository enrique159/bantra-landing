<template>
  <div id="app">
    <img src="./assets/background-alt-2.svg" class="background" alt="">
    <div class="container px-4">
      <nav class="d-flex justify-content-between py-5">
        <img class="logo" alt="Vue logo" src="./assets/bantra.svg"/>
        <div class="nav-options" data-aos="fade-left">
          <a href="https://www.facebook.com/Bantra-Technologies-105101005008104/" target="_blank">Facebook</a>
          <a href="mailto:hello@bantra.tech" target="_blank">hello@bantra.tech</a>
        </div>
        <div class="nav-options-min" data-aos="fade-left">
          <a href="https://www.facebook.com/Bantra-Technologies-105101005008104/" target="_blank">
            <img class="social-icon" alt="Facebook" src="./assets/facebook.svg"/>
          </a>
          <a href="mailto:hello@bantra.tech" target="_blank">
            <img class="social-icon" alt="Mail" src="./assets/mail.svg"/>
          </a>
        </div>
      </nav>
    </div>
    <div class="container py-2 py-sm-5 px-4">
      <div class="row">
        <div class="col col-12 col-lg-6">
          <h1 class="main-title" data-aos="fade-up">PropTech Experts</h1>
          <h3 class="subtitle mt-2" data-aos="fade-up" data-aos-delay="100">Web development & innovation</h3>
          <p class="main-text mt-5 w-75" data-aos="fade-up" data-aos-delay="200">
            We are a team of experienced developers and designers who are
            passionate about creating innovative solutions for our clients.
          </p>
          <div class="mt-5" data-aos="fade-up" data-aos-delay="300">
            <a class="button-info" :href="mailto">Give me more info</a>
          </div>
        </div>
      </div>
    </div>
    <div class="boxes">
      <div class="first-line-boxes">
        <div class="box" data-aos="fade-left" data-aos-delay="300">
          <h3 id="value1">123'456</h3>
          <span>Lines of code written</span>
        </div>
      </div>
      <div class="second-line-boxes">
        <div class="box box-green" data-aos="fade-left" data-aos-delay="500">
          <h3 id="value2">1'789</h3>
          <span>Analytics Markets KPIs</span>
        </div>
      </div>
      <div class="third-line-boxes">
        <div class="box" data-aos="fade-left" data-aos-delay="700">
          <h3 id="value3">#1</h3>
          <span>Data Science in Mexico</span>
        </div>
        <div class="box" data-aos="fade-left" data-aos-delay="800">
          <h3 id="value4">+3'000</h3>
          <span>Active Users</span>
        </div>
      </div>
    </div>
    <div class="boxes-min">
      <div>
        <h3 id="value1">123'456</h3>
        <span>Lines of code written</span>
      </div>
      <div>
        <h3 id="value2">1'789</h3>
        <span>Analytics Markets KPIs</span>
      </div>
      <div>
        <h3 id="value3">#1</h3>
        <span>Data Science in Mexico</span>
      </div>
      <div>
        <h3 id="value4">+3'000</h3>
        <span>Active Users</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mailto: 'mailto:hello@bantra.tech?subject=Hi!%20I%20would%20like%20to%20know%20more%20about%20you..&body=Hi!%20My%20name%20is..'
    }
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Barlow:wght@100;200;300;400;500;600;700;800;900&display=swap');
body {
  margin: 0;
  background-color: #08090a;
  font-family: 'Barlow', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //background-image: url('./assets/background.jpg');
  // background-size: cover;
  // background-repeat: no-repeat;
  // background-position: bottom;
  overflow: hidden;
}

#app {
  position: relative;
  width: 100%;
  height: 100vh;
  color: white;
  overflow-y: hidden;
  overflow-x: hidden; 

  .background {
    position: absolute;
    top: 28%;
    left: -20px;
    right: 0;
    width: 150%;
    z-index: -1;
    opacity: 1;
  }
  .logo {
    width: 146px;
  }
  .nav-options {
    display: flex;
    a {
      color: white;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      text-decoration: none;
      margin-left: 20px;
      &:hover {
        color: #ffc107;
      }
    }
  }
  .nav-options-min {
    display: none;
    img {
      margin-left: 24px;
    }
  }
  .main-title  {
    margin: 0;
    font-size: 4.5rem;
    font-weight: 700;
  }
  .main-text {
    font-size: 1.3rem;
    line-height: 1.3;
    font-weight: 500;
  }
  .subtitle {
    font-size: 3rem;
    font-weight: 300;
  }
  .button-info {
    width: 180px;
    height: 36px;
    border-radius: 24px;
    border: none;
    background: #7500d9;
    color: rgb(255, 255, 255);
    padding: 10px 20px;
    font-size: 1rem;
    font-weight: 700;
    margin-top: 48px;
    text-decoration: none;
    transition: 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      background-color: #1ff288;
      color: black;
    }
  }
  .boxes {
    width: 50%;
    height: 500px;
    position: absolute;
    bottom: 0;
    right: 16%;
    .first-line-boxes, 
    .second-line-boxes,
    .third-line-boxes {
      display: flex;
      width: 100%;
      height: 33.3%;
    }
    .first-line-boxes {
      justify-content: flex-end;
    }
    .second-line-boxes {
      justify-content: center;
    }
    .third-line-boxes {
      justify-content: space-between;
    }
    .box {
      width: 33%;
      height: 100%;
      background: rgba(86, 86, 86, 0.3);
      backdrop-filter: blur( 20px );
      -webkit-backdrop-filter: blur( 20px );
      text-align: center;
      display: grid;
      place-content: center;
      h3 {
        font-size: 3rem;
        font-weight: 700;
        margin: 0;
        padding: 0;
      }
    }
    .box-green {
      background-color: #1ff288;
      color: black;
    }
  }
  .boxes-min {
    display: none;
    width: 100%;
    height: 20%;
    margin-top: 12px;
    background: transparent;
    div {
      width: 25%;
      height: 100%;
      backdrop-filter: blur( 20px );
      -webkit-backdrop-filter: blur( 20px );
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h3 {
        font-size: 1.2rem;
        font-weight: 700;
        color: #1ff288;
        margin: 0;
        padding: 0;
      }
      span {
        font-size: 0.8rem;
        font-weight: 300;
        margin: 0;
        padding: 0;
      }
    }
  }
}
@media only screen and (max-width: 1194px) {
  #app {
    .main-title  {
      margin: 0;
      font-size: 3.5rem;
    }
    .main-text {
      font-size: 1.1rem;
      line-height: 1.3;
    }
    .subtitle {
      font-size: 2.5rem;
    }
    .boxes {
      right: 12px;
      .box {
        padding: 0 12px;
        h3 {
          font-size: 2.3rem;
        }
      }
    }
  }
}
@media only screen and (max-width: 890px){
  #app {
    overflow-y: auto;
    .background {
      position: absolute;
      top: 28%;
      left: -50%;
      right: 0;
      width: 300%;
      z-index: -1;
      opacity: 1;
    }
    .nav-options {
      display: none;
    }
    .nav-options-min {
      display: flex;
    }
    .main-title  {
      margin: 0;
      font-size: 3rem;
    }
    .main-text {
      font-size: 1.1rem;
      line-height: 1.3;
    }
    .subtitle {
      font-size: 2.5rem;
    }
    .boxes {
      display: none;
    }
    .boxes-min {
      display: flex;
    }
  }
}
</style>