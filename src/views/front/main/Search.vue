<template>
  <div>
    <Header></Header>

    <el-main>
      <div class="block" style="width: 1000px;height:auto;min-height: 620px;margin: 0 auto">
        <h2>与 “{{ keyword }}” 相关的文章</h2>

        <!-- 列表 -->
        <article-list :keyword="keyword" :key="timer"></article-list>
      </div>
    </el-main>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ArticleList from "../layout/ArticleList";

export default {
  name: "Search",
  components: {
    Header, Footer, ArticleList
  },
  data() {
    return {
      keyword: this.$route.params.keyword,
    }
  }
}
</script>

<style scoped>

</style>
