<template>
  <el-header height="10">
    <el-row>
      <img
        id="title"
        src="https://fontmeme.com/permalink/210209/e8a2241a22b09252fc2de3b8c2864bc9.png"
        alt="big-time-rush-font"
        border="0"
      />
    </el-row>
    <span>Tecnologias utilizadas:</span>
    <el-row>
      <el-tooltip class="item" effect="dark" content="Javascript" placement="bottom">
        <img
          alt="Javascript"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png"
        />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="VueJs" placement="bottom">
        <img
          alt="VueJs"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png"
        />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="NodeJs" placement="bottom">
        <img
          alt="Nodejs"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png"
        />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="MongoDB" placement="bottom">
        <img
          alt="MongoDB"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/mongodb/mongodb.png"
        />
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="Git" placement="bottom">
        <img
          alt="Git"
          src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/git/git.png"
        />
      </el-tooltip>
    </el-row>
  </el-header>
</template>

<script>
export default {};
</script>

<style>
#title {
  width: 400px !important;
  margin: 10px;
}
img {
  margin: auto;
  width: 30px;
  padding: 10px;
}
</style>