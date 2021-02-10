<template>
  <el-table
    :data="
      tableData.filter(
        (data) =>
          !search || data.name.toLowerCase().includes(search.toLowerCase())
      )
    "
    style="width: 100%"
  >
    <el-table-column label="Nome" prop="nome"> </el-table-column>
    <el-table-column label="Estado" prop="estado.abreviacao"> </el-table-column>
    <el-table-column align="right">
      <template slot="header">
        <el-input v-model="search" size="mini" placeholder="Type to search" />
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >Edit</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import cidadeService from "../services/cidadeService";
export default {
  props: {
    tableData: Array,
  },
  inject: ["carregarCidades"],
  data() {
    return {
      search: "",
    };
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    async handleDelete(index, row) {
      try {
        await cidadeService.remove(row._id);
        this.carregarCidades();
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
