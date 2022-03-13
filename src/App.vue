<template>
  <div id="app">
    <img src="./assets/background-alt.svg" class="background" alt="">
    <div class="container px-4">
      <nav class="d-flex justify-content-between py-5">
        <img class="logo" alt="Vue logo" src="./assets/bantra.svg" />
        <div class="d-flex nav-options">
          <a href="http://facebook.com">Facebook</a>
          <a href="http://twitter.com">Twitter</a>
        </div>
      </nav>
    </div>
    <div class="container py-2 py-sm-5 px-4">
      <div class="row">
        <div class="col col-12 col-lg-6">
          <h1 class="main-title">PropTech Experts</h1>
          <h3 class="subtitle mt-2">Web development & innovation</h3>
          <p class="main-text mt-5 w-75">
            We are a team of experienced developers and designers who are
            passionate about creating innovative solutions for our clients.
          </p>
          <!-- <input class="input-info me-4" type="email" placeholder="Your Email.."> -->
          <button class="button-info">Give me more info</button>
        </div>
      </div>
    </div>
    <div class="boxes">
      <div class="first-line-boxes">
        <div class="box">
          <h3>123'456</h3>
          <span>Lines of code written</span>
        </div>
      </div>
      <div class="second-line-boxes">
        <div class="box box-green">
          <h3>1'789</h3>
          <span>Analytics Markets KPIs</span>
        </div>
      </div>
      <div class="third-line-boxes">
        <div class="box">
          <h3>#1</h3>
          <span>Data Science in Mexico</span>
        </div>
        <div class="box">
          <h3>+3'000</h3>
          <span>Active Users</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

  .background {
    position: absolute;
    top: 28%;
    left: -20px;
    right: 0;
    width: 150%;
    z-index: -1;
    opacity: 0.8;
  }
  .logo {
    width: 146px;
  }
  .nav-options {
    a {
      color: white;
      font-size: 14px;
      font-weight: 600;
      text-transform: uppercase;
      text-decoration: none;
      margin-right: 20px;
      &:hover {
        color: #ffc107;
      }
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
  .input-info {
    width: 240px;
    height: 36px;
    border-radius: 24px;
    border: 2px solid #ffffff;
    background: transparent;
    color: white;
    padding: 0 20px;
    font-size: 1.3rem;
    font-weight: 500;
    margin-top: 20px;
    &::placeholder {
      color: #ffffff;
    }
  }
  .button-info {
    width: 180px;
    height: 36px;
    border-radius: 24px;
    border: none;
    background: #7500d9;
    color: rgb(255, 255, 255);
    transition: 0.2s ease-in-out;
    padding: 0 20px;
    font-size: 1rem;
    font-weight: 700;
    margin-top: 20px;
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
}
</style>