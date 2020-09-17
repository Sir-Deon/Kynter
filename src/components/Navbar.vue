<template>
  <nav>
    <v-toolbar flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Todo</span>
        <span>Ninja</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn depressed color="transparent" class="mr-2 grey--text" dark v-bind="attrs" v-on="on">
            <v-icon left>mdi-dots-vertical</v-icon>
            <span>Menu</span>
          </v-btn>
          
        </template>
        
        <v-list>
          <v-list-item v-for="link in links" :key="link.text"  :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      
      <v-btn depressed dark color="red">
        <span>Sign Out</span>
        <v-icon right>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <img
              src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-1/c0.5.160.160a/p160x160/81625929_130563411743239_383087507727712256_n.jpg?_nc_cat=106&_nc_sid=dbb9e7&_nc_ohc=OXwPh8Tzvz0AX_963du&_nc_ht=scontent-mia3-1.xx&oh=6c0c68d81d092156f2232aeaca8d5ef7&oe=5F86C4E1"
            />
          </v-list-item-avatar>

          <v-list-item-content class="white--text">
            <v-list-item-title>Deon Achuo</v-list-item-title>
            <v-list-item-subtitle class="white--text"
              >Mr Capable</v-list-item-subtitle
            >
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>
        <v-list0-item>
          <Popup/>
        </v-list0-item>        
        <v-list-item
          v-for="link in links"
          :key="link.text"
          link
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from './popup'
export default {
  components:{
    Popup,
  },
  data() {
    return {
      drawer: true,
      links: [
        { icon: "mdi-view-quilt", text: "Project Dashboard", route: "/" },
        { icon: "mdi-folder", text: "My Projects", route: "/projects" },
        { icon: "mdi-account-group-outline", text: "Team Projects", route: "/team" },
        { icon: "mdi-account", text: "View & Update Profile", route: "/profile" },
        { icon: "mdi-chat", text: "About Kynter", route: "/about" },
      ],
    };
  },
};
</script>

<style scoped></style>
