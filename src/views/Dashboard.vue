<template>
  <app-header></app-header>
  <!-- Left side column. contains the sidebar -->
  <app-sidebar></app-sidebar>
  <!-- Content Wrapper. Contains page content -->
  <router-view></router-view>
  <!-- /.content-wrapper -->
  <app-footer></app-footer>
  <control-sidebar></control-sidebar>
</template>

<script>
    import Sidebar from "./main/Sidebar";
    import Header from "./main/Header";
    import Footer from "./main/Footer";
    import ControlSidebar from "./main/ControlSidebar";

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
