<template>
  <header>
    <div class="header-line">
      <div class="header-logo">
        <router-link to="/">
          <img :src="logo" alt="logo" />
        </router-link>
      </div>

      <div class="nav">
        <a class="nav-item" href="#Business">Business areas</a>
        <a class="nav-item" href="#Featured">Featured images</a>
        <router-link class="nav-item" to="/gear">Gear cage</router-link>
        <a class="nav-item" href="https://vk.com/netorwtik" target="_blank">Contact</a>

        <div class="burger-menu">
          <button class="burger-btn" @click="toggleMenu">☰</button>
          <div :class="{ 'burger-menu-slide': true, show: isMenuOpen }">
            <a class="nav-item-slide" href="#Business">Business areas</a>
            <a class="nav-item-slide" href="#Featured">Featured images</a>
            <router-link class="nav-item-slide" to="/gear">Gear cage</router-link>
            <a class="nav-item-slide" href="https://vk.com/netorwtik" target="_blank">Contact</a>
          </div>
        </div>
        <div class="btn">
          <a class="button" href="#" @click.prevent="openModal">Get template</a>
        </div>

        <div :class="{ modal: true, visible: isModalVisible }" @click.self="closeModal">
          <div class="modal-content">
            <input type="text" v-model="name" placeholder="Name" class="input-field" />
            <input
              type="tel"
              v-model="phone"
              placeholder="Phone-number"
              class="input-field"
              required
              ref="phoneInput"
            />
            <input type="text" v-model="email" placeholder="E-mail" class="input-field" />
            <select v-model="gender" class="input-field">
              <option value="male">Men</option>
              <option value="female">Women</option>
              <option value="unspecified">Other</option>
            </select>

            <button class="btn-send" type="button" name="button" @click="register">Send</button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Inputmask from 'inputmask';
import logo from '@/assets/img/Logo.png';

export default {
  data() {
    return {
      logo,
      isModalVisible: false,
      isMenuOpen: false,
      name: '',
      phone: '',
      email: '',
      gender: 'unspecified',
    };
  },
  methods: {
    openModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    register() {
      const formData = {
        name: this.name,
        phone: this.phone,
        email: this.email,
        gender: this.gender,
      };

      fetch('https://api/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Successful registration:', data);
          this.closeModal();
          this.name = '';
          this.phone = '';
          this.email = '';
          this.gender = 'unspecified';
        })
        .catch((error) => {
          console.error('Error during registration:', error);
        });
    },
  },
  mounted() {
    const phoneInput = this.$refs.phoneInput;
    Inputmask({ mask: '+7 (999) 999-99-99' }).mask(phoneInput);
    phoneInput.addEventListener('click', () => {
      const pos = 4;
      if (phoneInput.setSelectionRange) {
        phoneInput.setSelectionRange(pos, pos);
      } else if (phoneInput.createTextRange) {
        const range = phoneInput.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    });
  },
};
</script>

<style>
.header-line {
  background-color: #000;
  width: auto;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.burger-menu {
  display: none;
}

.nav {
  padding-top: 20px;
  padding-bottom: 20px;
  height: 50px;
  width: 700px;
  margin-right: 140px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.nav-item {
  color: #fff;
  text-decoration: none;
  margin-top: 15px;
  margin-bottom: 15px;
  font-weight: 400;
  font-size: 14px;
  transition: 0.3s;
}

.nav-item:hover {
  color: #5e5b5b;
}

.btn {
  background-color: #fff;
  border-radius: 14px;
  padding-top: 8px;
  padding-bottom: 8px;
  transition: 0.3s;
}

.btn:hover {
  background-color: #969393;
}

.button {
  padding-left: 20px;
  padding-right: 20px;
  font-size: 16px;
  width: 400;
  line-height: 20px;
  color: #000;
  text-decoration: none;
}

.modal {
  opacity: 0;
  visibility: hidden;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  transition: opacity 0.3s ease, visibility 0s linear 0.3s;
  backdrop-filter: blur(15px);
}

.modal.visible {
  opacity: 1;
  visibility: visible;
  transition-delay: 0s;
}

.modal-content {
  width: 300px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px;
  background-color: #000;
  border-radius: 20px;
  align-items: center;
}

.modal-text {
  text-decoration: none;
  color: #fff;
  font-family: 'Poppins';
  text-align: center;
  transition: 0.3s;
}

.modal-text:hover {
  color: #5e5b5b;
}

.btn-send {
  padding: 10px 30px 10px 30px;
  font-size: 15px;
  cursor: pointer;
  border: none;
  background-color: #fff;
  color: #000;
  border-radius: 15px;
  letter-spacing: 0.4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s;
}

.btn-send:hover {
  background-color: #969393;
}

.input-field {
  border-radius: 10px;
  height: 30px;
  width: 200px;
}

@media (max-width: 1200px) {
  .header-logo {
    padding-left: 30px;
  }
  .nav {
    margin-right: 0;
  }
}

@media (max-width: 700px) {
  .nav {
    justify-content: flex-end;
  }
  .btn {
    margin-right: 10px;
  }
  .nav-item {
    display: none;
  }
  .nav-item-slide {
    color: #fff;
    text-decoration: none;
    font-weight: 400;
    font-size: 24px;
    transition: 0.3s;
  }
  .nav-item-slide:hover {
    color: #5e5b5b;
  }

  .burger-menu {
    display: block;
  }
  .burger-btn {
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    margin-right: 10px;
    font-size: 24px;
    cursor: pointer;
  }

  .burger-menu-slide {
    display: none;
    width: 200px;
    height: 300px;
    background-color: #000;
    position: absolute;
    top: 90px;
    right: 40px;
    z-index: 1;
    border-radius: 20px;
  }

  .burger-menu-slide.show {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 8px;
    justify-items: center;
    align-items: center;
  }
}

@media (max-width: 600px) {
  .header-info {
    max-width: 350px;
  }
}
</style>
