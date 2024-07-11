<template>
  <div class="pictures">
    <div class="pictures-container">
      <div class="pictures-text">
        <h2>Past clients</h2>
        <p>Trusted by your favourite companies</p>
      </div>
      <div class="pictures-image">
        <img class="pictures-image-hill" :src="hill" alt="Hill & Hayes" />
        <img class="pictures-image-riks" :src="riks" alt="Riksgränsen" />
        <img class="pictures-image-studio" :src="studio" alt="Studio Cai" />
        <img class="pictures-image-chill" :src="chill" alt="Chill Industries" />
        <img class="pictures-image-stock" :src="stock" alt="Stockholm" />
      </div>
    </div>
  </div>
</template>

<script>
import hill from '@/assets/img/Hill.png';
import riks from '@/assets/img/Riks.png';
import studio from '@/assets/img/Studio.png';
import chill from '@/assets/img/Chill.png';
import stock from '@/assets/img/Stock.png';

export default {
  data() {
    return {
      hill,
      riks,
      studio,
      chill,
      stock,
    };
  },
};
</script>

<style>
.pictures {
  background-color: #000;
  width: auto;
  height: 400px;
  text-align: center;
  padding-top: 120px;
}

.pictures-text {
  margin-bottom: 30px;
  & h2 {
    color: #fff;
    font-size: 40px;
    line-height: 42px;
    font-weight: 400px;
    margin: 0;
  }
  & p {
    color: #c0c0c0;
    font-size: 24px;
    line-height: 30px;
    font-weight: lighter;
    margin: 15px 0 42px 0;
  }
}

.pictures-image {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 158px;
}

.pictures-image img {
  max-height: 82px;
}

@media (min-width: 2000px) {
  .pictures-container {
    max-width: 1200px;
    margin: 0 auto;
  }
  .pictures-image-hill {
    margin: 0 109px 0 46px;
  }

  .pictures-image-riks {
    margin: 0 109px 0 0;
  }

  .pictures-image-studio {
    margin: 0 109px 0 0;
  }

  .pictures-image-chill {
    margin: 0 109px 0 0;
  }

  .pictures-image-stock {
    margin: 0 46px 0 0;
  }
}

@media (max-width: 800px) {
  .pictures-image {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, auto);
    gap: 8px;
    justify-items: center;
    align-items: center;
  }
}
</style>
