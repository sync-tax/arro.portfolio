<script setup>
import { ref, onMounted } from "vue";

const nyanCat = ref(null);

const htmlElement = document.documentElement;

const currentTheme = ref(localStorage.getItem("theme") || "dark");

const applyLightmode = () => {
  htmlElement.classList.add("lightmode");
  htmlElement.classList.remove("darkmode");
  localStorage.setItem("theme", "light");
  currentTheme.value = "light";
};

const applyDarkmode = () => {
  htmlElement.classList.add("darkmode");
  htmlElement.classList.remove("lightmode");
  localStorage.setItem("theme", "dark");
  currentTheme.value = "dark";
};

const toggleTheme = () => {
  if (currentTheme.value === "dark") {
    applyLightmode();
  } else {
    applyDarkmode();
  }
};

onMounted(() => {
  const nyanButton = document.getElementById("nyan");
  if (nyanButton) {
    nyanButton.addEventListener("click", () => {
      if (nyanCat.value) {
        nyanCat.value.classList.add("flyAnim");
        // Optionally remove the class after the animation completes
        nyanCat.value.addEventListener(
          "animationend",
          () => {
            nyanCat.value.classList.remove("flyAnim");
          },
          { once: true } // remove listener after 1 execution
        );
      }
    });
  }
});

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.documentElement.classList.add("lightmode");
  } else {
    document.documentElement.classList.add("darkmode");
  }
});
</script>

<template>
  <nav class="mainNavigation">
    <div class="flyingCat" style="z-index: 5000" ref="nyanCat">
      <img
        src="../assets/images/flying_nyan.gif"
        alt="Nyan Cat flying over screen"
        width="270px"
      />
    </div>

    <RouterLink to="/" class="navLink">
      <img
        src="../assets/images/logo2.svg"
        alt="A monochrome logo resembling the initials AR."
        id="logoImage"
      />
    </RouterLink>

    <ul>
      <img
        src="../assets/images/nyan_button.png"
        alt="A moon icon - used to switch to darkmode."
        id="nyan"
      />
      <RouterLink to="/" class="navLink">
        <li>PROJΞCTS</li>
      </RouterLink>
      <RouterLink to="/About" class="navLink">
        <li>ΛBOUT</li>
      </RouterLink>
      <RouterLink to="/LinkTree" class="navLink">
        <li id="lastNavLink">LIΠKS</li>
      </RouterLink>

      <img
        src="../assets/images/darkmode_icon.svg"
        alt="A moon icon - used to switch to darkmode."
        style="fill: white"
        class="modeSwitch dark"
        @click="toggleTheme"
      />
      <img
        title="Wait. This is illegal."
        src="../assets/images/lightmode_icon.svg"
        alt="A sun icon - used to switch to lightmode."
        class="modeSwitch light"
        @click="toggleTheme"
      />
    </ul>
  </nav>
</template>

<style scoped>
.router-link-active {
  opacity: 100%;
}

</style>