<template>
  <el-form :inline="true" :rules="rules" ref="formCidade" :model="formCidade" class="demo-form-inline">
    <el-form-item label="Nome" prop="nome">
      <el-input v-model="formCidade.nome"></el-input>
    </el-form-item>
    <el-form-item label="Estado" prop="estadoId">
      <el-select
        v-model="formCidade.estadoId"
        placeholder="Selecione um estado"
      >
        <el-option
          v-for="(estado, index) in estados"
          :key="index"
          :label="`${estado.abreviacao}-${estado.nome}`"
          :value="estado._id"
        ></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button v-if="edicao" type="primary" @click="editarCidade">Editar</el-button>
      <el-button v-else type="primary" @click="addCidade">Adicionar</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import cidadeService from "../services/cidadeService";
export default {
  inject: ["carregarCidades"],
  props: {
    estados: Array,
    cidadeSelecionada: Object,
  },
  data() {
    return {
      formCidade: {
        _id: null,
        nome: "",
        estadoId: "",
      },
      edicao: false,
      rules: {
          nome: [
            { required: true, message: 'Por favor, digite um nome', trigger: 'blur' },
          ],
          estadoId: [
            { required: true, message: 'Por favor, selecione um estado', trigger: 'blur' }
          ]
        }
    };
  },
  watch: {
    cidadeSelecionada: function(cidade){
      this.formCidade = {...cidade}
      this.formCidade.estadoId = cidade.estado._id
      this.edicao = true
    }
  },
  methods: {
    async addCidade() {
      try {
        await this.$refs['formCidade'].validate()
        await cidadeService.create(this.formCidade);
        this.carregarCidades();
        this.formCidade = {};
        this.edicao = false
        this.$swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Cidade Adicionada',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (e) {
        console.log(e);
      }
    },
    async editarCidade() {
      try {
        await this.$refs['formCidade'].validate()
        await cidadeService.update(this.formCidade._id, this.formCidade);
        this.carregarCidades();
        this.formCidade = {};
        this.edicao = false
        this.$swal.fire({
          toast: true,
          position: 'top-end',
          icon: 'success',
          title: 'Cidade Editada',
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