<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="Nome">
      <el-input v-model="formInline.user"></el-input>
    </el-form-item>
    <el-form-item label="Abreviação">
      <el-input v-model="formInline.user" placeholder="Ex: GO"></el-input>
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