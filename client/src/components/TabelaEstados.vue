<template>
  <el-table
    :data="tableDataFiltered"
    style="width: 100%"
  >
    <el-table-column sortable label="Nome" prop="nome"> </el-table-column>
    <el-table-column sortable label="Abreviação" prop="abreviacao"> </el-table-column>
    <el-table-column align="right">
      <!-- eslint-disable-next-line -->
      <template slot="header" slot-scope="scope">
        <el-input v-model="search" size="mini" placeholder="Pesquise por um estado" />
      </template>
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >Editar</el-button
        >
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
          >Deletar</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import estadoService from "../services/estadoService";
export default {
  props: {
    tableData: Array,
  },
  inject: ["carregarEstados"],
  data() {
    return {
      search: "",
    };
  },
  computed: {
    tableDataFiltered() {
      return this.tableData.filter(
        (data) =>
          !this.search || 
          data.nome.toLowerCase().includes(this.search.toLowerCase()) ||
          data.abreviacao.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    async handleDelete(index, row) {
      try {
        await estadoService.remove(row._id);
        this.carregarEstados();
        this.$swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Estado Removido',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
