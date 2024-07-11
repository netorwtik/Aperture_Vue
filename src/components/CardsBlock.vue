<template>
  <div class="cards">
    <div class="container">
      <div class="cards-info">
        <div id="Business" class="cards-text">What we do.</div>
        <div class="cards-subtext">The areas that we're specialized in.</div>
      </div>
      <div class="grid-container">
        <div class="grid-item">
          <img :src="phone" alt="phone" />
          <div class="overlay">
            <h1>PRODUCT PHOTOGRAPHY</h1>
            <p>
              Cras commodo consequat orci, in convallis risus egestas non. Nulla efficitur auctor
              hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.
            </p>
            <router-link to="/*">
              <button class="read-more">
                <span class="black-block"></span>
                Read more
              </button>
            </router-link>
          </div>
        </div>
        <div class="grid-item">
          <img :src="house" alt="house" />
          <div class="overlay">
            <h1>ARCHITECTURE PHOTOGRAPHY</h1>
            <p>
              Aenean porta neque eget consequat fringilla. Vestibulum ultrices, orci nec egestas
              pharetra, ligula est semper enim, nec auctor sapien leo nec purus. Fusce tincidunt
              aliquet sapien, sit amet rhoncus leo imperdiet nec.
            </p>
            <router-link to="/*">
              <button class="read-more">
                <span class="black-block"></span>
                Read more
              </button>
            </router-link>
          </div>
        </div>
        <div class="grid-item">
          <img :src="forest" alt="forest" />
          <div class="overlay">
            <h1>DRONE PHOTOGRAPHY</h1>
            <p>
              Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt. Duis tristique sed
              lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non. Nulla
              efficitur auctor hendrerit. Etiam ut orci varius, faucibus libero ac, cursus quam.
            </p>
            <router-link to="/*">
              <button class="read-more">
                <span class="black-block"></span>
                Read more
              </button>
            </router-link>
          </div>
        </div>
        <div class="grid-item">
          <img :src="elk" alt="elk" />
          <div class="overlay">
            <h1>WILDLIFE PHOTOGRAPHY</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam
              odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex,
              condimentum dapibus congue et, vulputate ut ligula. Vestibulum sit amet urna turpis.
            </p>
            <router-link to="/*">
              <button class="read-more">
                <span class="black-block"></span>
                Read more
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import phone from '@/assets/img/phone.jpg';
import house from '@/assets/img/house.jpg';
import forest from '@/assets/img/forest.jpg';
import elk from '@/assets/img/elk.jpg';

export default {
  data() {
    return {
      phone,
      house,
      forest,
      elk,
    };
  },
};
</script>

<style>
.cards {
  background-color: #000;
  height: 1460px;
  width: auto;
  display: flex;
  justify-content: center;
  padding-top: 100px;
}

.cards-info {
  justify-content: center;
  align-items: center;
}

.cards-text {
  color: #fff;
  font-weight: 400;
  font-size: 40px;
  text-align: center;
}

.cards-subtext {
  color: #c0c0c0;
  font-weight: 400;
  font-size: 23px;
  text-align: center;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  padding: 40px 16px 100px 16px;
}

.grid-item {
  position: relative;
  width: 100%;
}

.grid-item img {
  width: 100%;
  height: auto;
  display: block;
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  letter-spacing: 2px;
  text-align: start;
  padding: 10px;
  box-sizing: border-box;
  font-family: 'Poppins';
}

.overlay h1 {
  font-size: 14px;
  margin-left: 30px;
  color: #fff;
}

.overlay p {
  font-size: 14px;
  margin-left: 30px;
  color: #c0c0c0;
}

.read-more {
  margin-top: 10px;
  margin-left: 30px;
  padding: 10px 10px 13px 6px;
  font-size: 15px;
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

.read-more:hover {
  background-color: #969393;
}

.black-block {
  width: 32px;
  height: 32px;
  background-color: black;
  margin-right: 6px;
  display: inline-block;
  border-radius: 14px;
}
@media (max-width: 800px) {
  .cards {
    height: 1000px;
  }
}

@media (max-width: 600px) {
  .cards {
    height: auto;
  }
  .grid-container {
    grid-template-columns: repeat(1, 1fr);
    gap: 16px;
    padding: 40px 16px 100px 16px;
  }
}
</style>
