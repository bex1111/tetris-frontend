<template>
  <table style="border: 1px solid">
    <tr
      v-for="(row, rowIndex) in coloredTrack"
      :key="rowIndex"
      style="border: 1px solid; width 30px; height: 30px"
    >
      <th
        v-for="(column, columnIndex) in row"
        :key="rowIndex + columnIndex"
        style="border: 1px solid; width 30px; height: 30px"
        :bgcolor="column"
      ></th>
    </tr>
  </table>
</template>

<script>
export default {
  name: "TrackDisplayer",
  props: ["trackInfos"],
  data: () => ({
    coloredTrack: null,
  }),
  watch: {
    trackInfos: function () {
      this.coloredTrack = this.trackInfos.track.map((row) =>
        row.map(this.mapCellColor)
      );
    },
  },
  methods: {
    mapCellColor(cellType) {
      if (cellType === "EMPTY") {
        return "white";
      }
      if (cellType === "ELEMENT") {
        return "red";
      }
      if (cellType === "POINT") {
        return "black";
      }
    },
  },
};
</script>

<style scoped>
table {
  table-layout: fixed;
  width: 200px;
}
table tr {
  height: 20px;
}
</style>
