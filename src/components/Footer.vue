<template>
  <footer
    class="page-footer font-small teal py-4" >
    <div style="max-width: 950px; width: 90vw; margin: 0 auto;"
      class="d-flex justify-content-between align-items-center" > 
    <div class="footer-copyright">© {{ new Date().getFullYear() }} Arkady Fisher</div>
    <b-button variant="link" size="sm" @click="top()" id="back-to-top" >Back To Top</b-button>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    top() {
      window.scrollTo(0,0)
    }
  }
}
</script>

<style lang="scss">
footer {
  width: 100%;
  margin-top: 6rem;
  background-color: #f5f5f5;
}

#back-to-top {
  font-size: 16px;
  -webkit-user-select: auto; /* Safari */        
  -moz-user-select: auto; /* Firefox */
  -ms-user-select: auto; /* IE10+/Edge */
  user-select: auto; /* Standard */
}
</style>
