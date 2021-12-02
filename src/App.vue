<template>
  <div id="app">

    <router-view/>
  </div>
</template>

<style lang="scss">
@font-face {
  font-family: "Roboto";
  src: local("Roboto-Medium"),
  url("~@/assets/fonts/Roboto/Roboto-Medium.ttf") format("ttf"),
  url("~@/assets/fonts/Roboto/Roboto-Medium.woff") format("woff"),
  url("~@/assets/fonts/Roboto/Roboto-Medium.woff2") format("woff2");
}
@font-face {
  font-family: "Vourla";
  src: local("Vourla-Display"),
  url("~@/assets/fonts/Vourla/Vourla-Display.otf") format("otf"),
  url("~@/assets/fonts/Vourla/Vourla-Display.woff") format("woff"),
  url("~@/assets/fonts/Vourla/Vourla-Display.woff2") format("woff2");
}
@font-face {
  font-family: "Archivo";
  src: url("~@/assets/fonts/Archivo/Archivo.ttf") format("ttf"),
  url("~@/assets/fonts/Archivo/Archivo.woff2") format("woff2"),
  url("~@/assets/fonts/Archivo/Archivo.woff") format("woff");
}
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role="list"],
ol[role="list"] {
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}
button {
  cursor: pointer;
}
/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
</style>
