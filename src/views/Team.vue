<template>
  <div class="home">
    <h1 class="subheading grey--text">Team Projects</h1>
    <v-container class="my-2">
      <v-row class="mb-3">
        <v-col>
         <TeamProject class="mr-10"/>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                v-bind="attrs"
                v-on="on"
                small
                flat
                color="grey lighten-3"
                @click="sortBy('title')"
                depressed
              >
                <v-icon left small>mdi-folder</v-icon>
                <span class="caption text-lowercase">By Project name</span>
              </v-btn>
            </template>
            <span>Sort Projects by Project Name</span>
          </v-tooltip>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                class="ml-4"
                v-bind="attrs"
                v-on="on"
                small
                flat
                color="grey lighten-3"
                @click="sortBy('status')"
                depressed
              >
                <v-icon left small>mdi-account</v-icon>
                <span class="caption text-lowercase">By Status</span>
              </v-btn>
            </template>
            <span>Sort Projects by Status</span>
          </v-tooltip>
        </v-col>
      </v-row>

      <v-card class="pa-3">
        <v-divider></v-divider>
        <v-row
          v-for="project in projects"
          :key="project.title"
          :class="`pa-3 project ${project.status}`"
        >
          <v-col xs-12 md>
            <div class="caption grey--text">
              Project Title
            </div>
            <div>{{ project.title }}</div>
          </v-col>

          <v-col xs-6 sm-4 md-2>
            <div class="caption grey--text">
              Due by
            </div>
            <div>
              {{ project.due }}
            </div>
          </v-col>
          <v-col xs-6 sm-4 md-2>
            <div class="caption grey--text">
              Publish
            </div>
            <div>
              <v-switch v-model="project.publish"></v-switch>
            </div>
          </v-col>

          <v-col xs-6 sm-4 md-2>
            <div class="right">
              <div v-if="project.status == 'Ongoing'">
                <v-chip :color="ongoing" class="white--text caption">
                  <v-icon left>mdi-wrench</v-icon>
                  {{ project.status }}
                </v-chip>
              </div>
              <div v-if="project.status == 'Complete'">
                <v-chip :color="complete" class="white--text caption">
                  <v-icon left>mdi-checkbox-marked-circle</v-icon>
                  {{ project.status }}
                </v-chip>
              </div>
              <div v-if="project.status == 'Overdue'">
                <v-chip :color="overdue" class="white--text caption">
                  <v-icon left>mdi-fire</v-icon>
                  {{ project.status }}
                </v-chip>
              </div>
              <div v-if="project.status == 'Not-Started'">
                <v-chip :color="notStarted" class="white--text caption">
                  <v-icon left>mdi-clock</v-icon>
                  {{ project.status }}
                </v-chip>
              </div>
            </div>
          </v-col>
          <v-col>
            <v-row>
              <edit />
              <v-btn depressed color="white">
                <v-icon class="grey--text">mdi-delete</v-icon>
              </v-btn>
            </v-row>
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import edit from "../components/editProject";
import TeamProject from "../components/CreateTeamProject";

// @ is an alias to /
export default {
  name: "Home",
  components: {
    edit,
    TeamProject,
  },
  data() {
    return {
      dialog: false,
      ongoing: "#ffaa2c",
      overdue: "#f83e70",
      complete: "#3cd1c2",
      notStarted: "#ccc",
      started: "green",
      projects: [
        {
          title: "Design a new website",
          due: "1st Jan 2019",
          status: "Ongoing",
          publish: false,
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Code up the homepage",
          due: "1st Jan 2019",
          status: "Complete",
          publish: false,
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Design video thumbnails",
          due: "20th Dec 2018",
          status: "Complete",
          publish: false,
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Create a community forum",
          due: "20th Oct 2018",
          status: "Overdue",
          publish: false,
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "20th Oct 2018",
          status: "Not-Started",
          publish: false,
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
};
</script>

<style scoped>
.project.Complete {
  border-left: 4px solid #3cd1c2;
}
.project.Ongoing {
  border-left: 4px solid orange;
}
.project.Overdue {
  border-left: 4px solid tomato;
}
.project.Not-Started {
  border-left: 4px solid #ccc;
}
</style>
