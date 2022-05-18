<template>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Logo -->
    <router-link to="/" class="brand-link">
      <img src="../../assets/img/logo/ZPlogo2.jpg" alt="ZonePro LOGO" class="brand-image img-circle elevation-3" />
      <!--       mini logo for sidebar mini 50x50 pixels -->
      <span class="brand-text font-weight-light"><b>ZonePro</b>Админ</span>
    </router-link>
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img
            src="../../assets/img/user1-128x128.jpg"
            class="user-image img-circle mt-2 elevation-2"
            alt="User Image"
          />
        </div>
        <div class="info">
          <a href="#" class="d-block">{{ username }}</a>
          <span class="text-green">{{ role }}</span>
        </div>
        <button class="btn btn-dark" @click.prevent="logout()">
          <i class="fa fa-sign-out-alt"></i>
        </button>
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
      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->

          <li class="nav-item">
            <router-link :to="{ name: 'dashboard' }" class="nav-link">
              <i class="nav-icon fa fa-tachometer-alt"></i>
              <p>Панель</p>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'users' }" class="nav-link">
              <i class="nav-icon fa fa-users"></i>
              <p>Пользователи</p>
            </router-link>
          </li>
          <li class="nav-item dropdown-submenu">
            <a href="#" class="nav-link">
              <i class="nav-icon fa fa-tools"></i>
              <p>Разработка</p>
              <i class="right fas fa-angle-left"></i>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link :to="{ name: 'tags' }" class="nav-link">
                  <i class="fa fa-tags nav-icon"></i>
                  <p>Теги</p>
                </router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "DashboardSidebar",
  data: function () {
    return {
      username: "",
      role: "",
    };
  },
  methods: {
    ...mapActions("user", ["logAut"]),
    logout() {
      this.logAut();
      if (!this.GET_USER && !localStorage.getItem("avtuser")) {
        this.$router.push({ name: "login" });
      }
    },
  },
  computed: {
    ...mapGetters("user", ["GET_USER"]),
    // eslint-disable-next-line vue/return-in-computed-property
    getUsernameAndRole() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.username = this.GET_USER.username;
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.role = this.GET_USER.role;
    },
  },
  mounted() {
    this.getUsernameAndRole();
  },
};
</script>
