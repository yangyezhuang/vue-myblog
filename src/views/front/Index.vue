<template>
  <div>
    <Header></Header>

    <el-main>
      <!--      轮播图     -->
      <!--      <el-carousel :interval="4000" height="250px" style="width: auto;margin: 0 auto;margin-bottom: 20px">-->
      <!--        <el-carousel-item v-for="item in lunboImg" :key="item">-->
      <!--          <img :src="item" style="width: 100%;height: 100%">-->
      <!--        </el-carousel-item>-->
      <!--      </el-carousel>-->

      <!--   横幅   -->
      <div style="position: relative; width: 100%; height: 250px;margin-bottom: 10px">
        <img src="../../assets/img/bg.svg" style="height: 100%; width: 100%">
        <span style="position: absolute; top: 10%; left: 40%;">
            <div>
                <h1 style="transition: all 0.25s ease-in-out 0.04s; transform: translateY(0px); opacity: 1;">
                  荧惑守心 掩日以观天象
                </h1>
                <p style="transition: all 0.25s ease-in-out 0.08s; transform: translateY(0px); opacity: 1;">
                  寸则王之寸 尺亦王之尺
                </p>
            </div>
        </span>
      </div>


      <!--    下方整体  -->
      <div style="width: 1100px;margin: 0 auto">
        <!--   左边主体    -->
        <div style="width: 750px;float: left;">
          <!-- 文章列表 -->
          <article-list :articles="articles"></article-list>
        </div>

        <!--   右边主体    -->
        <div style="width: 300px;height:auto;float: right">
          <el-card>
            <!--  介绍卡片   -->
            <div>
              <img src="../../assets/img/header.jpg" style="height: 100px;border-radius: 50%">
              <p>杨业壮</p>
              <span style="margin-right: 20px">
                <h2>{{ this.articles.length }} | {{ this.category.length }}</h2>
                <span>Article &ensp;|&ensp; Category</span>
              </span>
            </div>
            <el-divider></el-divider>

            <!--  分类  -->
            <i class="el-icon-menu" style="float:left;margin-bottom: 15px">分类</i>
            <el-card class="box-card bd" v-for="o in category">
              <div class="text" @click="$router.push(`/categories/${o.title}`)">
                {{ o.title }}
              </div>
            </el-card>
            <el-divider></el-divider>

            <!-- 标签  -->
            <i class="el-icon-s-flag" style="float:left;margin-bottom: 15px">Tag</i>
            <tag-info></tag-info>
          </el-card>
        </div>
      </div>

      <!--  回到顶部   -->
      <el-backtop :bottom="80">Top</el-backtop>
    </el-main>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import ArticleList from "./layout/ArticleList";
import TagInfo from "./layout/TagList";

export default {
  name: "Index",
  components: {
    Header, Footer, ArticleList, TagInfo
  },
  data() {
    return {
      articles: [],
      infoTag: [
        {icon: '#icon-github', url: 'https://github.com/yangyezhuang'},
        {icon: '#icon-csdn', url: 'https://blog.csdn.net/qq_47183158'}
      ],
      lunboImg: [
        "https://proprogramming.org/wp-content/uploads/2017/05/mysql-5.7-features-768x418.png",
        "https://pic4.zhimg.com/v2-9bd4f62838d64b5072e6381c598b3cb9_b.jpg",
      ],
      category: [],
    };
  },

  created() {
    this.getAllArticles()
    this.getAllCategory()

  },

  methods: {
    // 获取全部文章
    async getAllArticles() {
      const {data: res} = await this.$http.get("/articles")
      this.articles = res.data;
    },

    // 获取全部类别
    async getAllCategory() {
      const {data: res} = await this.$http.get("/category/")
      this.category = res.data;
    }
  }
}
</script>

<style scoped lang="less">
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}


.bd:hover {
  transform: scale(1.1); /*鼠标放上之后元素变成1.1倍大小*/

  .text {
    font-size: 18px;
    color: #9F85EC;
  }
}

.box-card {
  margin-top: 4px;
  width: 100%;
  height: 50px;
}


</style>
