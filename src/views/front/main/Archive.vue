<template>
  <div>
    <Header></Header>

    <el-main>
      <div class="block" style="width: 1000px;height:auto;margin: 0 auto">
        <el-card style="height: auto;min-height: 560px">
          <h2 style="text-align: left;margin-left: 40px;color: #9F85EC">Yesterday Once More!</h2>
          <el-timeline :reverse="reverse">
            <el-timeline-item
                style="text-align: left;font-size: 18px"
                v-for="(activity, index) in activities"
                :key="index"
                :timestamp="activity.da"
                @click="this.$router.push(`/article/${activity.id}`)">
              {{ activity.title }}
            </el-timeline-item>
          </el-timeline>
        </el-card>
      </div>
    </el-main>

    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export default {
  name: "Archive",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      reverse: true,
      activities: ""
    };
  },
  created() {
    this.getArchive()
  },

  methods: {
    async getArchive() {
      const {data: res} = await this.$http.get("/archive")
      this.activities = res.data;
    }
  }
}
</script>

<style scoped>

</style>
