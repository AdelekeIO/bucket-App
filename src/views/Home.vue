<template>

  <div class="home">
    <!-- <Header /> -->
    <Login msg="Login Page"/>
    <!-- <Footer />   -->
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '../components/layout/Header.vue'
import Footer from '../components/layout/Footer.vue'
import Login from '@/components/Login.vue'

export default {
  name: 'home',
  components: {
    Login,
    Header,
    Footer
  }
}
</script>
