<template>
  <el-form :inline="true" :model="formCidade" class="demo-form-inline">
    <el-form-item label="Nome">
      <el-input v-model="formCidade.nome"></el-input>
    </el-form-item>
    <el-form-item label="Estado">
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
      <el-button type="primary" @click="addCidade">Adicionar</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import cidadeService from "../services/cidadeService";
export default {
  inject: ["carregarCidades"],
  props: {
    estados: Array,
  },
  data() {
    return {
      formCidade: {
        nome: "",
        estadoId: "",
      },
    };
  },
  methods: {
    async addCidade() {
      try {
        await cidadeService.create(this.formCidade);
        this.carregarCidades();
        this.formCidade = {};
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>