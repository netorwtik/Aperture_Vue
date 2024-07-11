<template>
  <div class="not">
    <div class="not-text">
      <h2>Ничего не найдено☹️</h2>
      <p>Скоро здесь что-то появиться</p>
    </div>
  </div>
</template>

<script></script>

<style>
.not {
  background-color: #252525;
  width: auto;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.not-container {
}

.not-text {
  border: 3px solid #252525;
  border-radius: 20px;
  background-color: #111111;
  padding: 20px;
  & h2 {
    color: #fff;
    margin: 0 0 15px 0;
    font-size: 30px;
    font-weight: lighter;
    line-height: 20px;
  }

  & p {
    color: #c0c0c0;
    margin: 0;
    font-size: 14px;
    font-weight: lighter;
  }
}
</style>
