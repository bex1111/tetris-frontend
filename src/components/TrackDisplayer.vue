<template>
  <table>
    <tr v-for="(row, rowIndex) in coloredTrack" :key="rowIndex">
      <th
        v-for="(column, columnIndex) in row"
        :key="rowIndex + columnIndex"
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
  margin: 20px;
  table-layout: fixed;
}
table tr {
  height: 20px;
}
table,
th,
td {
  border-collapse: separate;
  border-spacing: 1px;
  border-style: solid;
  border-width: thin;
}
table {
  background: rgb(190, 187, 187);
}
tr {
  background: #fff;
}
th {
  width: 20px;
  height: 20px;
}
</style>
