<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="Nome">
      <el-input v-model="formInline.user"></el-input>
    </el-form-item>
    <el-form-item label="Estado">
      <el-select v-model="formInline.region" placeholder="Selecione um estado">
        <el-option label="Zone one" value="shanghai"></el-option>
        <el-option label="Zone two" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Adicionar</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
};
</script>