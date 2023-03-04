<template>
  <v-app id="inspire">
    <v-navigation-drawer
    v-model="drawer"
    app
    >


    <v-img
      height="160"
      prominent
      dark
      class="pa-4 pt-7"
    >
    <v-avatar color="indigo" size="60">
      <v-icon dark>
        mdi-account-circle
      </v-icon>
    </v-avatar>

    <div
    class="black--text text-subtitle-1 font-weight-bold"
    >User Name</div>
    <div
    class="primary--text text-subtitle-2"
    >@username</div>
    </v-img>

    <v-divider></v-divider>


      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :height="$route.path === '/' ? '240' : '170'"
      prominent
      dark
      app
      src="header.jpg"
    >

      <v-container>
        <v-row>
          <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <SearchBar></SearchBar>
        </v-row>

        <v-row>
          <v-toolbar-title class="mt-6 ml-3 text-h4">My Todo</v-toolbar-title>
        </v-row>
        <v-row>
          <LiveDate></LiveDate>
        </v-row>

        <v-row v-if="$route.path === '/'">
          <FieldAddTask></FieldAddTask>
        </v-row>
      </v-container>

    </v-app-bar>

    <v-main>
      <!--  -->
      <router-view></router-view>

      <SnackBar></SnackBar>
    </v-main>
  </v-app>
</template>

<script>
import FieldAddTask from '@/components/FieldAddTask.vue'
import SnackBar from '@/components/SnackBar.vue'
import SearchBar from '@/components/SearchBar.vue'
import LiveDate from '@/components/LiveDate.vue'
export default {
    data: () => ({
      drawer: null,
      items: [
          { title: 'Todo', icon: 'mdi-format-list-checks', to: '/' },
          { title: 'About', icon: 'mdi-information-outline' , to:'/about'},
        ],

      filter: ''
    }),
    mounted(){
      this.$store.dispatch('getTasks')
    },
    components: {
      FieldAddTask,
      SnackBar,
      SearchBar,
      LiveDate
    }
  }
</script>
