<template>
  <div class="help">
    <div class="help-container">
      <div class="help-text">
        <h2>Need help with photography or videography?</h2>
        <p>We're here for you!</p>
      </div>
      <router-link to="/*">
        <button class="help-btn">
          <span class="black-block"></span>
          Get in touch
        </button>
      </router-link>
    </div>
  </div>
</template>

<script></script>

<style>
.help {
  background-color: #000;
  width: auto;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.help-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.help-text {
  margin-bottom: 0px;
  & h2 {
    color: #fff;
    font-size: 40px;
    line-height: 42px;
    font-weight: lighter;
    width: 480px;
    margin: 0 0 15px 0;
  }
  & p {
    color: #c0c0c0;
    font-size: 24px;
    line-height: 30px;
    font-weight: lighter;
    margin: 0 0 12px 0;
  }
}

.help-btn {
  padding: 5px 10px 6px 6px;
  font-size: 16px;
  line-height: 20px;
  cursor: pointer;
  border: none;
  background-color: #fff;
  color: #000;
  border-radius: 15px;
  letter-spacing: 0.4px;
  font-family: 'Poppins';
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.3s;
}

.help-btn:hover {
  background-color: #969393;
}

.help-btn .black-block {
  width: 32px;
  height: 32px;
  background-color: black;
  margin-right: 6px;
  display: inline-block;
  border-radius: 14px;
}

@media (max-width: 600px) {
  .help-text {
    max-width: 400px;
  }
  .help-text h2 {
    width: 400px;
  }
}
</style>
