<template>
  <div>
    <Header></Header>

    <el-main>
      <div class="block" style="width: 1000px;height:auto;margin: 0 auto">
        <!--        <el-card style="height: auto;min-height: 620px">-->

        <!-- 标签  -->
        <tag-info></tag-info>

        <!--  列表 -->
        <article-list :articles="articles" :key="timer"></article-list>

        <!--   空状态   -->
        <div v-show="emptyShow">
          <el-empty description="暂无相关文章"></el-empty>
        </div>
        <!--        </el-card>-->
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
      tag: '',
      articles: ''
    }
  },

  created() {
    if (this.$route.path === "/tag") {
      this.getAllArticles()
    }else {
      this.getArticleByTag()
    }
  },

  methods: {
    // 获取全部文章
    async getAllArticles() {
      const {data: res} = await this.$http.get("/articles")
      this.articles = res.data;
    },

    // 获取对应分类的文章
    async getArticleByTag() {
      let tag = this.$route.params.tag
      this.tag = tag

      const {data: res} = await this.$http.get(`/articles/tag/${tag}`)
      this.articles = res.data
      if (this.articles.length === 0) {
        this.emptyShow = true
      } else {
        this.emptyShow = false
      }
    }
  }
}
</script>

<style scoped>

</style>
