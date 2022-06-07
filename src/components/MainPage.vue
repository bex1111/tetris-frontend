<template>
  <div>
    <div class="flex-container">
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
  },

  methods: {
    handleSocket(data) {
      let trackInfosLength = this.tracksInfos.length
      this.tracksInfos = data
      this.refreshListPointsIfTrackLenghtChange(trackInfosLength)
    },
    refreshListPointsIfTrackLenghtChange(trackInfosLength) {
      if (trackInfosLength !== this.tracksInfos.length) {
        listPoints()
            .then(x => this.userPointsList = x.data)
      }
    },
  },
}
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.flex-container > div {
  text-align: center;
}
</style>
