<template>
  <div id="app">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<script>
import DashboardLayout from './layout/DashboardLayout'
import LoginLayout from './layout/LoginLayout'

export default {
  name: 'App',
  components: {
    DashboardLayout,
    LoginLayout
  },
  computed: {
    layout () {
      console.log(this.$route.meta)
      return 'login-layout'
    }
  }
}
</script>
<style>
@import '~@fortawesome/fontawesome-free/css/all.min.css';
</style>
