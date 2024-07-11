<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <router-link to="/">
          <img :src="logo" alt="logo" />
        </router-link>
        <p>Photographers & videographers capturing the world around us.</p>
      </div>
      <div class="footer-section-1">
        <h3>Business Areas</h3>
        <ul>
          <li><a class="footer-section-text" href="#">Product Photography</a></li>
          <li><a class="footer-section-text" href="#">Architecture Photography</a></li>
          <li><a class="footer-section-text" href="#">Drone Photography</a></li>
          <li><a class="footer-section-text" href="#">Wildlife Photography</a></li>
        </ul>
      </div>
      <div class="footer-section-2">
        <h3>Pages</h3>
        <ul>
          <li><a class="footer-section-text" href="#">Gear cage</a></li>
          <li><a class="footer-section-text" href="#">Featured images</a></li>
          <li><a class="footer-section-text" href="#">Contact</a></li>
          <li><a class="footer-section-text" href="#">Style guide</a></li>
          <li><a class="footer-section-text" href="#">Instructions</a></li>
          <li><a class="footer-section-text" href="#">Changelog</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-container-down">
      <div class="footer-subscribe">
        <div class="footer-subscribe-text">
          <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
          <p>Read about all the things we do.</p>
        </div>
        <div class="subscribe-input">
          <input type="text" />
          <button></button>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© Aperture Photography, Inc. All rights reserved. Licensing.</p>
        <div class="footer-social">
          <router-link to="/*">
            <img :src="twitter" alt="Twitter" />
          </router-link>
          <router-link to="/*">
            <img :src="instagram" alt="Instagram" />
          </router-link>
          <router-link to="/*">
            <img :src="facebook" alt="Facebook" />
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import twitter from '@/assets/img/Twitter.png';
import instagram from '@/assets/img/Instagram.png';
import facebook from '@/assets/img/FaceBook.png';
import logo from '@/assets/img/Logo.png';

export default {
  data() {
    return {
      twitter,
      instagram,
      facebook,
      logo,
    };
  },
};
</script>

<style>
.footer {
  background-color: #000;
  width: auto;
  color: #fff;
}

.footer-container {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 100px;
}

.footer-section {
  flex: 60%;
}

.footer-section-1 {
  flex: 20%;
}

.footer-section-2 {
  flex: 20%;
}

.footer-section img {
  width: 150px;
  margin-bottom: 20px;
}

.footer-section-text {
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  line-height: 20px;
  font-weight: lighter;
  transition: 0.3s;
}

.footer-section-text:hover {
  color: #5e5b5b;
}

.footer-section p {
  margin: 0;
}

.footer-section-1 h3,
.footer-section-2 h3 {
  margin: 0 0 10px 0;
}

.footer-section-1 ul,
.footer-section-2 ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-section ul li,
.footer-section-1 ul li,
.footer-section-2 ul li {
  margin-bottom: 10px;
}

.footer-container-down {
  max-width: 1200px;
  margin: 0 auto;
  padding-bottom: 100px;
}

.footer-subscribe {
  display: flex;
  text-align: left;
  justify-content: space-between;
  margin-top: 26px;
  border-top: 2px solid #fff;
  border-bottom: 2px solid #fff;
}

.footer-subscribe-text {
  margin: 36px 0;
  & h3 {
    color: #fff;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 2px;
    font-weight: lighter;
  }

  & p {
    color: #c0c0c0;
    font-size: 13px;
    line-height: 20px;
    font-weight: lighter;
  }
}

.subscribe-input {
  margin: 45px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px;
  border-radius: 15px;
  overflow: hidden;
  background-color: white;
  width: 400px;
  height: 52px;
}

.subscribe-input input {
  flex: 1;
  border: none;
  padding: 10px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  outline: none;
}

.subscribe-input button {
  background-color: black;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 11px;
  cursor: pointer;
  margin-right: 6px;
  width: 63px;
  height: 30px;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 56px 0 0 0;
}

.footer-bottom p {
  margin: 0;
}

.footer-social a {
  margin: 0 10px;
}

.footer-social img {
  width: 20px;
  height: 20px;
}

@media (max-width: 1230px) {
  .footer-section {
    padding-left: 20px;
  }
  .footer-subscribe {
    padding: 0 20px;
  }
  .footer-bottom {
    padding: 56px 20px 0 20px;
  }
}
</style>
