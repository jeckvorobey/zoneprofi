<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Logo -->
    <router-link to="/dashboard" class="brand-link">
      <!-- mini logo for sidebar mini 50x50 pixels -->
<!--      <span class="logo-mini"><b>ZP</b>A</span>-->
      <span class="brand-text font-weight-light"><b>ZonePro</b>Админ</span>
    </router-link>
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="static/img/user2-160x160.jpg" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <span class="font-weight-light">Alexander Pierce</span>
          <span>Admin</span>
        </div>
      </div>
      <!-- search form -->
<!--      <form class="form-inline">-->
<!--        <div class="input-group">-->
<!--          <input class="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search">-->
<!--          <div class="input-group-append">-->
<!--            <button class="btn btn-sidebar" type="submit">-->
<!--              <i class="fas fa-search"></i>-->
<!--            </button>-->
<!--          </div>-->
<!--        </div>-->
<!--      </form>-->
      <!-- /.search form -->
      <!-- sidebar menu: -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
          <li>
            <router-link to="/dashboard">
              <i class="fa fa-dashboard"></i> <span>Dashboard</span>
            </router-link>
          </li>
          <li>
            <router-link to="/users">
              <i class="fa fa-users"></i> <span>Пользователи</span>
            </router-link>
          </li>
        </ul>
      </nav>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: 'DashboardSidebar'
}
</script>
