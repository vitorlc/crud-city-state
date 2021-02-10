<template>
  <el-form :inline="true" :model="formEstado" class="demo-form-inline">
    <el-form-item label="Nome">
      <el-input v-model="formEstado.nome"></el-input>
    </el-form-item>
    <el-form-item label="Abreviação">
      <el-input v-model="formEstado.abreviacao" placeholder="Ex: GO"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="addEstado">Adicionar</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import estadoService from "../services/estadoService";
export default {
  inject: ["carregarEstados"],
  data() {
    return {
      formEstado: {
        nome: "",
        abreviacao: "",
      },
    };
  },
  methods: {
    async addEstado() {
      try {
        await estadoService.create(this.formEstado);
        this.carregarEstados();
        this.formEstado = {};
        this.$swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Estado adicionado',
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