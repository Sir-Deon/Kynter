<template>
  <div>
    <br /><br /><br />

    <v-container style="width: 90%;">
      <h1 class="subheading grey--text">View & Update Profile</h1>
      <v-row class="my-8">
        <v-avatar size color="red">
          <img
            src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.0-1/c0.5.160.160a/p160x160/81625929_130563411743239_383087507727712256_n.jpg?_nc_cat=106&_nc_sid=dbb9e7&_nc_ohc=OXwPh8Tzvz0AX_963du&_nc_ht=scontent-mia3-1.xx&oh=6c0c68d81d092156f2232aeaca8d5ef7&oe=5F86C4E1"
          />
        </v-avatar>
        <v-file-input
          :rules="rules"
          accept="image/png, image/jpeg, image/bmp"
          hide-input
          prepend-icon="mdi-camera"
          label="Avatar"
        ></v-file-input>
      </v-row>
      <v-form>
        <v-row>
          <v-col>
            <v-text-field label="Name"></v-text-field>
          </v-col>
          <v-col>
            <v-text-field label="Email"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="5">
            <v-text-field
              label="Password"
              type="password"
              value="password"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="11">
            <v-textarea label="About Your Self" :value="content"> </v-textarea>
          </v-col>
        </v-row>

        <v-btn color="primary">Update</v-btn>
      </v-form>
    </v-container>
  </div>
</template>

<script>
export default {
  auth: true,
  layout: "admin",
  data() {
    return {
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!",
      admin: "Admin",
      rules: [
        (value) =>
          !value ||
          value.size < 2000000 ||
          "Avatar size should be less than 2 MB!",
      ],
    };
  },
};
</script>

<style scoped></style>
