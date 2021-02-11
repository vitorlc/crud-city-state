<template>
  <el-table
    :data="tableDataFiltered"
    style="width: 100%"
  >
    <el-table-column sortable label="Nome" prop="nome"> </el-table-column>
    <el-table-column sortable label="Estado" prop="estado.abreviacao"> </el-table-column>
    <el-table-column align="right">
      <!-- eslint-disable-next-line -->
      <template slot="header" slot-scope="scope">
        <el-input v-model="search" size="mini" placeholder="Pesquise por uma cidade"></el-input>
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
  computed: {
    tableDataFiltered() {
      return this.tableData.filter(
        (data) =>
          !this.search || 
          data.nome.toLowerCase().includes(this.search.toLowerCase()) ||
          data.estado.abreviacao.toLowerCase().includes(this.search.toLowerCase())
      )
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    async handleDelete(index, row) {
      try {
        await cidadeService.remove(row._id);
        this.carregarCidades();
        this.$swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Cidade Removida',
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
