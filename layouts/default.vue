<template>
  <div>
    <Nuxt />
  </div>
</template>

<style lang="scss">
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 24px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

h1, h2, h3 {
  font-family: 'Inter', Arial, sans-serif;
  font-weight: 700;
}
a {
  &:link {
    border-bottom: 2px solid black;
  }
  &:visited {
    border-color: black;
  }
  &:hover {
    border-bottom: none;
  }
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
