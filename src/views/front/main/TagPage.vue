<template>
  <div>
    <Header></Header>

    <el-main>
      <div class="block" style="width: 1000px;height:auto;margin: 0 auto">

        <!-- 标签  -->
        <tag-info></tag-info>

        <!--  列表 -->
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
import TagInfo from "../layout/TagList";

export default {
  name: "TagPage",
  components: {
    Header, Footer, ArticleList, TagInfo
  },
  data() {
    return {
      tag: this.$route.params.tag,
      articles: ''
    }
  },

  created() {
    this.getArticle()
    if (this.$route.path === `/tag/${this.tag}`) {
      this.getArticleByTag(this.tag)
    } else {
      this.getArticle()
    }
  },

  methods: {
    async getArticle() {
      const {data: res} = await this.$http.get(`/articles/`)
      this.articles = res.data
    },

    async getArticleByTag(tag) {
      const {data: res} = await this.$http.get(`/articles/tag/${tag}`)
      this.articles = res.data
    }
  }
}
</script>

<style scoped>

</style>
