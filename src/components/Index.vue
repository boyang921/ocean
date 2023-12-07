<template>
  <div class="container">
    <img src="../image/首页.png" alt="" style="position: absolute;width: 100%;height: 100%;left: 0;bottom: 0;top: 0;">
    <div style="position:relative;">
      <div class="title">
        欢迎进入海洋生物识别系统
      </div>
      <div style="position: absolute;left: 6%">
        <img src="../image/鱼.png" alt="" style="width: 200px;">
      </div>
    </div>

    <div style="display: flex;align-items: center;justify-content: center;margin-top: 50px;position: relative">
      <div
        style="background: rgb(255,255,255,50%);height: 491px;width: 948px;border-radius: 36px;display: flex;align-items: center;justify-content: center;flex-direction: column;border: 4px #fff solid;">
        <router-link to="/NoExplain?status=1" style="text-decoration: none">
          <div class="btn" @click="onNoExplain">
            <div style="margin-right: 20px;width: 130px;text-align: center">无解释系统</div>
            <img src="../image/1.png" alt="" style="width: 60px;height: 45px">
          </div>
        </router-link>
        <router-link to="/NoExplain?status=2" style="text-decoration: none">
          <div class="btn" @click="onExplain">
            <div style="margin-right: 20px;width: 130px;text-align: center">解释系统1</div>
            <img src="../image/2.png" alt="" style="width: 60px;height: 45px">
          </div>
        </router-link>
        <router-link to="/NoExplain?status=3" style="text-decoration: none">
          <div class="btn" @click="onExplain">
            <div style="margin-right: 20px;width: 130px;text-align: center">解释系统2</div>
            <img src="../image/2.png" alt="" style="width: 60px;height: 45px">
          </div>
        </router-link>
      </div>
      <div style="position: absolute;bottom: 10px;left:290px;">
        <img src="../image/3.png" alt="" style="width: 260px;">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  methods: {
    onNoExplain() {
      //无解释系统

    },
    onExplain() {
      //解释系统

    }
  }
}
</script>

<style scoped>

.container {
  height: 100vh;
  position: relative;
  background-image: linear-gradient(to right bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1);
}

.title {
  font-size: 3rem;
  color: #223344;
  font-weight: 600;

}

.btn {
  font-size: 1.5rem;
  color: #2c3e50;
  font-weight: 600;
  background: rgb(255, 255, 255, 50%);
  width: 250px;
  height: 80px;
  display: flex;
  justify-content: center;
  border-radius: 36px;
  cursor: pointer;
  margin-bottom: 20px;
  align-items: center;
}
</style>
