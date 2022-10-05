<template>
  <div>
    <Header></Header>

    <el-main>
      <div style="width: 1000px;margin: 0 auto">
        <el-card style="height: auto;min-height: 650px">
          <!--   标签页头   -->
          <el-menu class="el-menu-demo" mode="horizontal"
                   :default-active="activeIndex" active-text-color="#9F85EC">
            <el-menu-item v-for="i in categories" @click="toCategory(i.title)">{{ i.title }}
            </el-menu-item>
          </el-menu>

          <!-- 列表 -->
          <article-list :articles="articles"></article-list>

        </el-card>
      </div>

      <!--  回到顶部   -->
      <el-backtop :bottom="80">Top</el-backtop>
    </el-main>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ArticleList from "../layout/ArticleList";

export default {
  name: "Category",
  components: {
    Header,
    Footer,
    ArticleList
  },

  data() {
    return {
      activeIndex: '1',
      isRouterAlive: true,
      activeName: 'second',
      categories: '',
      articles: '',
      category: this.$route.params.category
    }
  },

  created() {
    this.getCategory()
    if (this.$route.path === `/category/${this.category}`) {
      this.getArticleByCategory(this.category)
    } else {
      this.getArticle()
    }
  },

  methods: {
    // 获取 category
    async getCategory() {
      const {data: res} = await this.$http.get('/category/')
      this.categories = res.data
    },

    //
    toCategory(category) {
      this.$router.push(`/categories/${category}`)
      this.getArticleByCategory(category)
    },

    async getArticle() {
      const {data: res} = await this.$http.get(`/articles/`)
      this.articles = res.data
    },

    // 根据分类获取文章
    async getArticleByCategory(category) {
      const {data: res} = await this.$http.get(`/category/${category}`)
      this.articles = res.data
    }
  }
}
</script>

<style scoped>
.el-menu > .el-menu-item.is-active {
  border-bottom: none;
  text-decoration: none;
}

</style>
