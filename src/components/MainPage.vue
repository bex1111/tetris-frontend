<template>
  <div>
    <h1>
      <img class="image-size" :src="require('../../public/IdomHackathon_logo.png')" alt="Idom Hackathon logo">
      <span class="hackathon-green"> IdomHACKATHON </span>
      <span class="hackathon-blue">Tetris</span>
    </h1>
    <div class="overflow-box">
      <points-displayer
          v-for="(userPoints, index) in userPointsList"
          :key="index"
          :userPoints="userPoints">
      </points-displayer>
    </div>
    <div class="flex-container">
      <track-displayer
          v-for="(trackInfos, index) in tracksInfos"
          :trackInfos="trackInfos"
          :key="index"
      ></track-displayer>
    </div>
  </div>
</template>

<script>
import TrackDisplayer from './TrackDisplayer.vue'
import socket from '../mixins/socket'
import {listPoints} from '@/mixins/axios'
import PointsDisplayer from '@/components/PointsDisplayer'

export default {
  name: 'MainPage',
  components: {
    PointsDisplayer,
    TrackDisplayer,
  },

  data: () => ({
    tracksInfos: [],
    userPointsList: [],
  }),

  created() {
    socket(this.handleSocket)
    this.fillPointList()
  },

  methods: {
    handleSocket(data) {
      let trackInfosLength = this.tracksInfos.length
      this.tracksInfos = data
      this.refreshListPointsIfTrackLenghtChange(trackInfosLength)
    },
    fillPointList() {
      listPoints()
          .then(x => this.userPointsList = x.data)
    },
    refreshListPointsIfTrackLenghtChange(trackInfosLength) {
      if (trackInfosLength !== this.tracksInfos.length) {
        this.fillPointList()
      }
    },
  },
}
</script>

<style scoped>
h1 {
  text-align: center;
}

.overflow-box > div {
  text-align: center;
}

.overflow-box {
  margin-bottom: 30px;
  display: flex;
  overflow: scroll;
  overflow-y: hidden;
  overflow-x: auto;
  -ms-overflow-y: hidden;
}

.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.flex-container > div {
  text-align: center;
}

.image-size {
  width: 5%;
  height: 5%;
}

.hackathon-green {
  color: #72f04b;
}

.hackathon-blue {
  color: #4066ff;
}
</style>
