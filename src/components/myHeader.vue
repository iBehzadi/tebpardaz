<template>
  <header ref="myNav" class="myNav transition-all duration-200 h-18 mx-auto fixed w-full top-0 z-10 bg-[#F1F9FF] ">
    <nav class=" p-4 max-w-[1200px] w-[85%] items-center mx-auto justify-between hidden lg:flex">
      <a href=""><img class="max-h-[70px]" src="/src/assets/logo.jpg" alt=""></a>
      <div class="mx-auto">
        <ul class="desktop-nav-links flex items-center justify-between">
          <router-link to="/">
            <li>صفحه اصلی</li>
          </router-link>
          <router-link to="/clinics">
            <li>درمانگاه ها</li>
          </router-link>
          <router-link to="/doctors">
            <li>پزشکان</li>
          </router-link>
          <router-link to="/">
            <li>مطالب آموزشی</li>
          </router-link>
          <router-link to="/" href="">
            <li>اخبار</li>
          </router-link>
          <router-link to="/turns">
            <li>نوبت دهی</li>
          </router-link>
          <router-link to="/answers">
            <li>جواب دهی</li>
          </router-link>
          <router-link class="dropDown  " to="/">
            <li>تماس باما </li>
            <div
              class="dropdown-content absolute -bottom-2 shadow-gray-500 z-10 hidden  shadow-lg px-20 bg-[#F1F9FF] border-r-2 border-blue-600 py-3 rounded-md ">
              <router-link class=" " to="/">
                درباره ما
              </router-link>
            </div>
          </router-link>
          <a href="">
            <li>امروز</li>
          </a>
        </ul>
      </div>
    </nav>

    <!-- mobile header -->
    <nav class=" lg:hidden bg-blue-800 overflow-scroll h-auto w-full ">
      <div class="flex text-white justify-between items-center ">
        <a href="#" class="hover:text-white p-4 text-lg">درمانگاه</a>
        <span @click="toggleMenu" class="text-4xl p-4 cursor-pointer">
          <font-awesome-icon v-if="!xButton" ref="menuBtn" icon="fa-bars" />
          <font-awesome-icon v-else ref="menuBtn" icon="fa-xmark" />
        </span>
      </div>

      <ul @click="toggleMenu" ref="mobileMenu"
        class="mobile-nav-links  w-full overflow-scroll bg-[#fff] flex flex-col items-start ">
        <router-link to="/">
          <li>صفحه اصلی</li>
        </router-link>
        <router-link to="/clinics">
          <li>درمانگاه ها</li>
        </router-link>
        <router-link to="/doctors">
          <li>پزشکان</li>
        </router-link>
        <router-link to="/">
          <li>مطالب آموزشی</li>
        </router-link>
        <router-link to="/" href="">
          <li>اخبار</li>
        </router-link>
        <router-link to="/turns">
          <li>نوبت دهی</li>
        </router-link>
        <router-link to="/answers">
          <li>جواب دهی</li>
        </router-link>
        <a @click.stop="dropDown = !dropDown" class="cursor-pointer">
          <div class="flex items-center justify-between">
            <li>تماس با ما</li> <span class="text-lg font-extrabold">+</span>
          </div>
          <transition>
            <ul class="border-t mt-2" v-show="dropDown">
              <li @click="()=>{$router.push('/');toggleMenu()}" class="pt-3 mr-10">درباره ما</li>
            </ul>
          </transition>
        </a>
        <a href="">
          <li>امروز</li>
        </a>
      </ul>
    </nav>


  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const mobileMenu = ref<HTMLElement>()
const myNav = ref<HTMLElement>()
const menuBtn = ref<HTMLElement>()
const dropDown = ref(false)
const xButton = ref(false)
function toggleMenu() {
  mobileMenu.value?.classList.toggle('show-menu')
  xButton.value = !xButton.value
}


window.onscroll = function () {
  if (window.scrollY > 16) {
    myNav.value?.classList.add("scrolled");
  } else {
    myNav.value?.classList.remove("scrolled");
  }
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.dropDown:hover .dropdown-content {
  @apply block
}

.desktop-nav-links li {
  @apply px-1.5
}

.mobile-nav-links {
  transition: all 0.3s linear;
  height: 0;
}

.show-menu {

  @apply h-[300px]
}

.mobile-nav-links a {
  @apply p-3 border-b-gray-300 border-b w-full
}

.myNav.scrolled {
  @apply shadow-lg
}
</style>