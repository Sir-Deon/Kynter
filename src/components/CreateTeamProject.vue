<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn depressed color="primary" dark v-bind="attrs" v-on="on">
          <v-icon>mdi-plus</v-icon>
          Create Team Projects
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="headline">
          Create Team Project
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="10">
                <v-text-field label="Project Title" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="11">
                <v-textarea label="Project Description"> </v-textarea>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['Started', 'Ongoing', 'Completed', 'Overdue']"
                  label="Status"
                  required
                ></v-select>
              </v-col>
              <v-col>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  :return-value.sync="date"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Due Date"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="date" no-title scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false"
                      >Cancel</v-btn
                    >
                    <v-btn text color="primary" @click="$refs.menu.save(date)"
                      >OK</v-btn
                    >
                  </v-date-picker>
                </v-menu>
              </v-col>
              <v-col cols="12" sm="6" md="12">
                <div v-if="members.length > 0" class="preview">
                  <v-chip
                    v-for="member in members"
                    close
                    @click:close="remove(member)"
                    :key="member"
                  >
                    {{ member }}
                  </v-chip>
                </div>
                <v-text-field
                  v-model="member"
                  label="Add Project Members. (Write member user name & Hit Enter key)"
                  required
                ></v-text-field>
                <v-btn color="primary" :disabled="check" @click="addMember"
                  >Add Member</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn color="primary" text @click="dialog = false">
            Cancle
          </v-btn>

          <v-btn color="primary" text @click="dialog = false">
            Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  data() {
    return {
      dialog: false,
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
      member: "",
      members: [],
      valid: false,
      memberRule: [(v) => v.length() < 1 || this.valid == true],
    };
  },
  methods: {
    addMember: function() {
      if (this.member != "") {
        this.members.push(this.member);
        this.member = "";
      }
    },
    remove: function(member) {
      const index = this.members.indexOf(member);
      this.members.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.preview {
  width: 80%;
  background-color: rgb(233, 233, 233);
  border-radius: 10px;
  min-height: 80px;
  padding: 20px;
}
</style>
