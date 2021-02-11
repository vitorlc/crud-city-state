<template>
  <el-form :inline="true" :rules="rules" ref="formEstado" :model="formEstado" class="demo-form-inline">
    <el-form-item label="Nome" prop="nome">
      <el-input v-model="formEstado.nome"></el-input>
    </el-form-item>
    <el-form-item label="Abreviação" prop="abreviacao">
      <el-input v-model="formEstado.abreviacao" placeholder="Ex: GO"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button v-if="edicao" type="primary" @click="editarEstado">Editar</el-button>
      <el-button v-else type="primary" @click="addEstado">Adicionar</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import estadoService from "../services/estadoService";
export default {
  inject: ["carregarEstados"],
  props: {
    estadoSelecionado: Object,
  },
  data() {
    return {
      formEstado: {
        _id: null,
        nome: "",
        abreviacao: "",
      },
      edicao: false,
      rules: {
        nome: [{ required: true, message: 'Por favor, digite um nome', trigger: 'blur' }],
        abreviacao: [{ required: true, message: 'Por favor, digite uma abreviação', trigger: 'blur' }]
      }
    };
  },
  watch: {
    estadoSelecionado: function(estado){
      this.formEstado = {...estado}
      this.edicao = true
    }
  },
  methods: {
    async addEstado() {
      try {
        await this.$refs['formEstado'].validate()
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
    async editarEstado() {
      try { 
        await this.$refs['formEstado'].validate()
        await estadoService.update(this.formEstado._id, this.formEstado);
        this.carregarEstados();
        this.formEstado = {};
        this.edicao = false;
        this.$swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Estado Editado',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (e) {
        console.log(e);
      }
    }
  },
};
</script>