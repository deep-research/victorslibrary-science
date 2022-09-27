<template>
  <div class="layout">
    <div id="content-wrapper">
      <Header class="mb-4" />
      <slot/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Header from '../components/Header'

export default {
  components: {
    Footer,
    Header
  }
}
</script>


<style lang="scss">
body, html {
  height: 100%;
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif !important;
  margin:0;
  padding:0;
  line-height: 1.5;
}

h1:not(.carousel-caption h1) {
  font-size: 25px !important;
}
h2:not(.carousel-caption h2) {
  font-size: 25px !important;
}
h3:not(.carousel-caption h3) {
  font-size: 21px !important;
  font-weight: 500 !important;
}
h4:not(.carousel-caption h4) {
  font-size: 17px !important;
  font-weight: 500 !important;
}
h5:not(.carousel-caption h5) {
  font-size: 17px !important;
  font-weight: normal !important;
}
h6:not(.carousel-caption h6) {
  display: none
}

.carousel-caption h1 {
  font-size: 25px !important;
}
.carousel-caption h2 {
  font-size: 25px !important;
}
.carousel-caption h3 {
  font-size: 21px !important;
  font-weight: 500 !important;
}
.carousel-caption h4{
  font-size: 17px !important;
  font-weight: 500 !important;
}
.carousel-caption h5 {
  font-size: 17px !important;
  font-weight: normal !important;
}
.carousel-caption h6 {
  display: none
}
.carousel-caption p {
  font-size: 17px !important;
}

p, ol, ul, li {
  font-size: 17px !important;
}

.article-text h2:not(#contents):not(.carousel-caption h2),
.article-text h3:not(#contents):not(.carousel-caption h3),
.article-text h4:not(#contents):not(.carousel-caption h4),
.article-text h5:not(#contents):not(.carousel-caption h5),
.article-text h6:not(#contents):not(.carousel-caption h6),
.footnotes {
  padding-top: 32px;
}

// #contents, #contents + ol {
//   border-left: 5px solid #224c98;
// }
// #contents {
//   margin-bottom: 0;
//   padding-bottom: 16px;
//   padding-left: 25px;
// }

@media (hover: hover) and (pointer: fine) {
  a {
    -o-transition:.5s;
    -ms-transition:.5s;
    -moz-transition:.5s;
    -webkit-transition:.5s;
    transition:.5s;
  }
}

#app {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#content-wrapper {
  flex: 1 0 auto;
  max-width: 950px;
  width: 90vw;
  margin: 0 auto;
}

::selection {
  background: #a8d1ff; /* WebKit/Blink Browsers */
}
::-moz-selection {
  background: #a8d1ff; /* Gecko Browsers */
}

.breadcrumb {
  display: inline-flex !important;
  margin-bottom: 0  !important;
}
</style>
