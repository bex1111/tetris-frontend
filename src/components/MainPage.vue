<template>
  <v-container>
    <v-row>
      <track-displayer
        v-for="(trackInfos, index) in tracksInfos"
        :key="index"
        :trackInfos="trackInfos"
      ></track-displayer>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import TrackDisplayer from "./TrackDisplayer.vue";
import socket from "../mixins/socket";

export default {
  name: "MainPage",
  components: {
    TrackDisplayer,
  },

  data: () => ({
    tracksInfos: [],
  }),

  created() {
    axios
      .post("http://localhost:8080/startGame", { username: "testtest" })
      .then((response) => console.log(response));
    socket(this.handleSocket);
  },

  methods: {
    handleSocket(data) {
      this.tracksInfos = JSON.parse(data.data);
    },
  },
};
</script>
