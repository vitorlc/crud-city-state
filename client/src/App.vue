<template>
  <div id="app">
    <el-container
      style="height: 98vh; border: 1px solid #eee"
      direction="vertical"
    >
      <Header></Header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="12">
            <form-estados></form-estados>
            <tabela-estados></tabela-estados>
          </el-col>
          <el-col :span="12">
            <form-cidades></form-cidades>
            <tabela-cidades></tabela-cidades>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/Header";
import TabelaEstados from "./components/TabelaEstados";
import TabelaCidades from "./components/TabelaCidades";
import FormEstados from "./components/FormEstados";
import FormCidades from "./components/FormCidades";
export default {
  name: "App",
  components: {
    Header,
    TabelaEstados,
    TabelaCidades,
    FormEstados,
    FormCidades,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
