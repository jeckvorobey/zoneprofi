<template>
  <div>
    <app-header></app-header>

    <!-- Left side column. contains the sidebar -->
    <app-sidebar></app-sidebar>

    <!-- Content Wrapper. Contains page content -->
    <router-view></router-view>
    <!-- /.content-wrapper -->

    <app-footer></app-footer>

    <control-sidebar></control-sidebar>
  </div>
</template>

<script>
  import Sidebar from './main/Sidebar.vue'
  import Header from './main/Header.vue'
  import Footer from './main/Footer.vue'
  import ControlSidebar from './main/ControlSidebar.vue'

  export default {
    name: 'Dashboard',
    components: {
      'app-sidebar': Sidebar,
      'app-header': Header,
      'app-footer': Footer,
      'control-sidebar': ControlSidebar
    }
  }
</script>
