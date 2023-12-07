<template>
  <div>
    <div style="background-color: #ffffff;  box-shadow: 0 2px 4px  rgba(0, 0, 0, 0.25);">
      <div style="background-color: #ffffff;width: 100%">
        <div class="head">
          <div style="display: flex;align-items: center;cursor: pointer" @click="onOut()">
            <div style="margin-right: 8px;display: flex;align-items: center">
              <svg t="1701554610371" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="4224" width="16" height="16">
                <path
                  d="M624.788992 204.047974 585.205965 164.464026 219.560038 530.185011 585.205965 895.864013 624.788992 856.280986 298.663014 530.16105Z"
                  p-id="4225" fill="#555555"></path>
              </svg>
            </div>
            <div style="color: #555;" @click="onOut">
              退出答题
            </div>
          </div>
        </div>
      </div>
    </div>
    <div style="  width: 1182px;height: 147px;margin:30px auto;">
      <div class="content">
        <div style="display: flex;align-items: center;justify-content: space-around;height: 100%;">
          <div style="display: flex;align-items: center">
            <img src="../image/img_3.png" alt="" style="width: 50px;height: 50px;">
            <div >
              <div style="font-size: 40px;">{{ score }}</div>
              <div style="font-size: 14px;color: #555555;">得分</div>
            </div>
          </div>
          <div style="display: flex;align-items: center">
            <img src="../image/img_4.png" alt="" style="width: 50px;height: 50px;">
            <div>
              <div style="display: flex;align-items: end">
                <div style="font-size: 40px;">{{score}}</div>
                <div>/{{length}}</div>
              </div>
              <div style="font-size: 14px;color: #555555;">答对题目</div>
            </div>
          </div>
          <div style="display: flex;align-items: center">
            <img src="../image/img_5.png" alt="" style="width: 50px;height: 50px;">
            <div>
              <div style="display: flex;align-items: end">
                <div style="font-size: 40px;">{{time}}</div>
                <div style="font-size: 14px;">分钟</div>
              </div>
              <div style="font-size: 14px;color: #555555;">用时</div>
            </div>
          </div>
        </div>
      </div>
      <div style="text-align: center">
<!--        <div style="font-weight: 600;font-size: 40px">恭喜您！</div>-->
<!--        <div>本次答题共答对3道题</div>-->
<!--        <div>继续努力</div>-->
        <div @click="onZ" style="margin-top: 100px;font-size: 15px;border-radius: 50px;padding: 10px 30px;background-image: linear-gradient(to right top, #6b86d1, #708cd5, #7592da, #7a99de, #7f9fe2, #7fa2e5, #7ea4e9, #7ea7ec, #77a6f0, #70a5f3, #68a4f7, #5fa3fb);display: inline-block;color: #ffffff;cursor: pointer;">
          再来一次
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "End",
  data(){
    return{
      length:"",
      time:"",
      score:""
    }
  },
  created() {
    let answer= localStorage.getItem("map")
    console.log(answer)
    this.time =localStorage.getItem("time")
    this.score= localStorage.getItem("count")
    this.length= localStorage.getItem("list")
  },
  methods:{
    onOut(){
      this.$router.push("/")
    },
    onZ(){
      this.$router.push("/")
    }
  }
}
</script>

<style scoped>
.head {
  width: 1200px;
  height: 56px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 20px;
  /*矩形 1*/
  opacity: 1;
  background: rgba(255, 255, 255, 1);

}

.content {
  width: 1182px;
  height: 147px;
  opacity: 1;
  background: linear-gradient(0, rgba(255, 255, 255, 1) 0%, rgba(227, 244, 255, 1) 100%);
}
</style>
