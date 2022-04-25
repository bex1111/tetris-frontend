<template>
  <v-container>
    <v-row>
      <table
        v-for="index in 10"
        :key="index"
        style="border: 1px solid; margin: 50px"
      >
        <tr>
          <th>asd</th>
        </tr>
      </table>
    </v-row>
  </v-container>
</template>

<script>
//import io from "socket.io-client";
import axios from "axios";

export default {
  name: "MainPage",

  data: () => ({
    tracks: [],
  }),

  created() {
    axios
      .post("http://localhost:8080/startGame", { username: "testtest" })
      .then((response) => console.log(response));
  },
};
</script>
