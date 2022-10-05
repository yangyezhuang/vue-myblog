<template>
  <div>
    <Header></Header>

    <el-main>
      <div class="block" style="width: 1000px;height:auto;min-height: 620px;margin: 0 auto">
        <h2>与 “{{ keyword }}” 相关的文章</h2>

        <!-- 列表 -->
        <article-list :articles="articles"></article-list>
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
      articles: ''
    }
  },

  created() {
    this.getArticles()
  },

  methods: {
    // 根据keyword获取
    async getArticles() {
      const {data: res} = await this.$http.get(`/articles/search/${this.keyword}`)
      this.articles = res.data
    }
  }
}
</script>

<style scoped>

</style>
