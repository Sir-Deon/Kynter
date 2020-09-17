<template>
  <div class="project">
    <h1 class="subheading grey--text">My Projects</h1>
    <v-container class="my-5 ml-5">
      <v-row>
        <v-col v-for="project in projects" :key="project.title">
          <v-card max-width="400">
            <v-img
              class="white--text align-end"
              height="200px"
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
            >
              <v-card-title> {{ project.title }}</v-card-title>
            </v-img>

            <v-card-subtitle class="pb-0">
              {{ project.person }}
            </v-card-subtitle>

            <v-card-text class="text--primary">
              <div>{{ project.content }}</div>

              <div>
                <h2>Status
                <v-chip color="primary">
                  {{ project.status }}
                </v-chip>
                </h2> 
                </div>
            </v-card-text>

            <v-card-actions>
                  <v-rating
                    :value="4.5"
                    color="amber"
                    dense
                    half-increments
                    size="14"
                  ></v-rating>
               
                 <v-spacer></v-spacer>
                  <i class="fa fa-github"></i>
                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: "Design a new website",
          person: "The Net Ninja",
          due: "1st Jan 2019",
          status: "ongoing",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Code up the homepage",
          person: "Chun Li",
          due: "10th Jan 2019",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Design video thumbnails",
          person: "Ryu",
          due: "20th Dec 2018",
          status: "complete",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
        {
          title: "Create a community forum",
          person: "Gouken",
          due: "20th Oct 2018",
          status: "overdue",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
        },
      ],
    };
  },
  computed: {
    myprojects() {
      return this.projects.filter((project) => {
        return project.person === "The Net Ninja";
      });
    },
  },
};
</script>
