<template>
  <div class="container">
    <div style="background-color: #ffffff;width: 100%">
      <div class="head">
        <div style="display: flex;align-items: center;cursor: pointer" @click="onOut()">
          <div style="margin-right: 8px;display: flex;align-items: center">
            <svg t="1701554610371" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="4224" width="16" height="16">
              <path
                d="M624.788992 204.047974 585.205965 164.464026 219.560038 530.185011 585.205965 895.864013 624.788992 856.280986 298.663014 530.16105Z"
                p-id="4225" fill="#555555"></path>
            </svg>
          </div>
          <div style="color: #555;">
            退出答题
          </div>
        </div>
        <div v-if="status==1">
          海洋生物题目(无解释系统)
        </div>
        <div v-if="status==2">
          海洋生物题目(解释系统1)
        </div>
        <div v-if="status==3">
          海洋生物题目(解释系统2)
        </div>
        <div style="display: flex;align-items: center">
          <div
            style="border-radius: 30px;border: 1px #66A6FF solid;color: #66A6FF;padding: 5px 20px;margin-right: 16px;cursor: pointer;"
            @click="onSubmit">
            交卷
          </div>
          <div style="padding:8px 12px;background-color: #e5e5e5;color: #555555;border-radius: 36px;">
            {{ formattedTime }}
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div>
        <div class="title-box">
          <div style="display: flex;margin-bottom: 12px;align-items: center;">
            <div style="background-color: #B9D4FA;padding: 4px 8px;border-radius: 5px;color: #0A6FFC;font-size: 14px;">
              单选题
            </div>
            <div style="margin-left: 20px">
              ({{ index + 1 }}/{{ list.length }})
            </div>
          </div>
          <div style="display: flex;align-items: center;color: #333;font-weight: 600">
            <div>
              {{ index + 1 }}.
            </div>
            <div>
              {{ list[index].title }}
            </div>
          </div>
        </div>
        <div class="img-list">
          <div style="display: flex;justify-content: space-between;">
            <div style="display: flex">
              <div v-if="status==1 && index==0 || status==3 && index ==0"
                   v-for="(item,index) in list[index].img">
                <img :src="item.img" alt="" style="width: 180px;height: 180px;border-radius: 5px;margin-right: 10px;overflow: hidden">
              </div>
              <div v-for="(item,index) in list[index].img">
                <img v-if="status==2" :src="item.img" alt="" style="width: 180px;height: 180px;border-radius: 5px;margin-right: 10px;overflow: hidden">
              </div>
            </div>
            <div v-if="status==3"
                 style="margin-right: 130px;padding: 10px;border: 1px #888 solid;border-radius: 10px;width: 300px;text-align: left">
              {{ list[index].note }}
            </div>
          </div>
        </div>
        <div class="question-select">
          <div class="option-item" :class="{'isActive':isActive===index}" v-for="(item,index) in list[index].option"
               @click="onSelect(index)">
            <div class="label">{{ item.label }}</div>
            <div class="content-text">{{ item.item }}</div>
          </div>
        </div>
      </div>
      <div style="display: flex;margin-top: 50px;justify-content: right">
        <div class="btn-switch" @click="on">
          上一题
        </div>
        <div class="btn-switch" @click="next" v-if="this.list.length!==this.index+1">
          下一题
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import img from "../image/img.png"
import img_1 from "../image/img_1.png"
import img_2 from "../image/img_2.png"
import img_2_1 from "../image/img_2_1.png"
import img_2_2 from "../image/img_7.png"
import img_2_3 from "../image/img_9.png"
import img3 from "../image/img_78.png"
import img_3_1 from "../image/img_10.png"
import img_3_2 from "../image/img_11.png"
import img_3_3 from "../image/img_12.png"
import img_4_1 from "../image/img_13.png"
import img_4_2 from "../image/img_14.png"
import img_4_3 from "../image/img_15.png"
import img_5_1 from "../image/img_16.png"
import img_5_2 from "../image/img_17.png"
import img_5_3 from "../image/img_18.png"
import img_6_1 from "../image/img_19.png"
import img_6_2 from "../image/img_20.png"
import img_6_3 from "../image/img_21.png"
import img_7_1 from "../image/img_22.png"
import img_7_2 from "../image/img_23.png"
import img_7_3 from "../image/img_24.png"
import img_8_1 from "../image/img_25.png"
import img_8_2 from "../image/img_26.png"
import img_8_3 from "../image/img_27.png"

import img_9_3 from "../image/img_30.png"
import img_10_1 from "../image/img_31.png"
import img_10_2 from "../image/img_32.png"
import img_10_3 from "../image/img_33.png"
import img_11_1 from "../image/img_34.png"
import img_11_2 from "../image/img_35.png"
import img_11_3 from "../image/img_36.png"
import img_12_1 from "../image/img_37.png"
import img_12_2 from "../image/img_38.png"
import img_12_3 from "../image/img_39.png"
import img_13_1 from "../image/img_40.png"
import img_13_2 from "../image/img_41.png"
import img_13_3 from "../image/img_42.png"
import img_14_1 from "../image/img_43.png"
import img_14_2 from "../image/img_44.png"
import img_14_3 from "../image/img_45.png"
import img_15_1 from "../image/img_46.png"
import img_15_2 from "../image/img_47.png"
import img_15_3 from "../image/img_48.png"
import img_16_1 from "../image/img_49.png"
import img_16_2 from "../image/img_50.png"
import img_16_3 from "../image/img_51.png"
import img_17_1 from "../image/img_52.png"
import img_17_2 from "../image/img_53.png"
import img_17_3 from "../image/img_54.png"
import img_18_1 from "../image/img_55.png"
import img_18_2 from "../image/img_56.png"
import img_18_3 from "../image/img_57.png"
import img_19_1 from "../image/img_58.png"
import img_19_2 from "../image/img_59.png"
import img_19_3 from "../image/img_60.png"
import img_20_1 from "../image/img_61.png"
import img_20_2 from "../image/img_62.png"
import img_20_3 from "../image/img_63.png"
import img_21_1 from "../image/img_64.png"
import img_21_2 from "../image/img_65.png"
import img_21_3 from "../image/img_66.png"
import img_22_1 from "../image/img_67.png"
import img_22_2 from "../image/img_68.png"
import img_22_3 from "../image/img_69.png"
import img_23_1 from "../image/img_70.png"
import img_23_2 from "../image/img_71.png"
import img_24_1 from "../image/img_72.png"
import img_24_2 from "../image/img_73.png"
import img_24_3 from "../image/img_74.png"
import img_25_1 from "../image/img_75.png"
import img_25_2 from "../image/img_76.png"
import img_25_3 from "../image/img_77.png"
import {stat} from "copy-webpack-plugin/dist/utils/promisify";


const map = new Map()
export default {
  name: "NoExplain",
  data() {
    return {
      index: 0,
      isActive: null,
      seconds: 0,
      status: null,
      formattedTime: "00:00:00",
      answer: ["1", "1", "1", "2", "1", "2", "1", "1", "2", "2", "2", "2", "1", "2", "1", "2", "2", "2", "1", "2", "1", "2", "2", "1", "1"],
      list: [
        {
          title: "What sea creatures do you think the picture looks like? 您认为该图像是什么海洋生物?",
          img: [
            {
              img: img
            },
            {
              img: img_1
            }
          ],
          note: "AI认为该图像是鳗鱼，撒帝国海军的哈就开始的骄傲客户端接口和即可获得道具卡好玩多红色经典好看和户籍科户籍科",
          heatImg: [
            {
              heatImg: img_2
            }
          ],
          option: [
            {
              label: "A",
              item: "Eel.鳗鱼"
            },
            {
              label: "B",
              item: "Sea Ray海鳐"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        },
        {
          title: "您认为该图像是什么海洋生物？ ",
          img: [
            {
              img: img_2_1
            },
            {
              img: img_2_2
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ],
          note: "测试",
          heatImg: [
            {
              heatImg: img_2_3
            }
          ],
          option: [
            {
              label: "A",
              item: "Jelly Fish（水母）"
            },
            {
              label: "B",
              item: "Sea slug(海蛞蝓)"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        },
        {
          title: "您认为该图像是什么海洋生物", note: "测试",
          img: [
            {
              img: img3
            },
            {
              img: img_3_2
            }],
          heatImg: [
            {
              heatImg: img_3_1
            }
          ],
          option: [
            {
              label: "A",
              item: "Nudibranchs(裸鳃类生物)"
            },
            {
              label: "B",
              item: "Corals(珊瑚)"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        },
        {
          title: "您认为该图像是什么海洋生物", note: "测试",
          img: [
            {
              img: img_3_3
            },
            {
              img: img_4_2
            }],
          heatImg: [
            {
              heatImg: img_4_1
            }
          ],
          option: [
            {
              label: "A",
              item: "Nudibranchs(裸鳃类生物)"
            },
            {
              label: "B",
              item: "Corals(珊瑚)"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        },
        {
          title: "您认为该图像是什么海洋生物? ", note: "测试",
          img: [
            {
              img: img_4_3
            },
            {
              img: img_5_2
            }],
          heatImg: [
            {
              heatImg: img_5_1
            }
          ],
          option: [
            {
              label: "A",
              item: "Fish "
            },
            {
              label: "B",
              item: "Nudibranchs(裸鳃类生物)"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        },
        {
          title: "您认为该图像是什么海洋生物? ", note: "测试",
          img: [
            {
              img: img_5_3
            },
            {
              img: img_6_2
            }],
          heatImg: [
            {
              heatImg: img_6_1
            }
          ],
          option: [
            {
              label: "A",
              item: "octopus（章鱼）"
            },
            {
              label: "B",
              item: "starfish（海星）"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        },
        {
          title: "您认为该图像是什么海洋生物? ", note: "测试",
          img: [
            {
              img: img_6_3
            },
            {
              img: img_7_2
            }],
          heatImg: [
            {
              heatImg: img_7_1
            }
          ],
          option: [
            {
              label: "A",
              item: "penguin（企鹅）"
            },
            {
              label: "B",
              item: "Tuna（金枪鱼）"
            },
            {
              label: "C",
              item: "未知生物"
            }
          ]
        },
        {
          title: "您认为该图像是什么海洋生物? ", note: "测试",
          img: [
            {
              img: img_7_3
            },
            {
              img: img_8_2
            }],
          heatImg: [
            {
              heatImg: img_8_1
            }
          ],
          option: [
            {
              label: "A",
              item: "Puffers（河豚）"
            },
            {
              label: "B",
              item: "cowfish（江豚）"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        },
        {
          title: "您认为该图像是什么海洋生物? ", note: "测试",
          img: [
            {
              img: img_8_3
            },
            {
              img: img_7_2
            }],
          heatImg: [
            {
              heatImg: img_7_1
            }
          ],
          option: [
            {
              label: "A",
              item: "Squid（墨鱼）"
            },
            {
              label: "B",
              item: "Puffers河豚"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        },
        {
          title: "您认为该图像是什么海洋生物? ", note: "测试",
          img: [
            {
              img: img_9_3
            },
            {
              img: img_10_2
            }],
          heatImg: [
            {
              heatImg: img_10_1
            }
          ],
          option: [
            {
              label: "A",
              item: "Fish（鱼）"
            },
            {
              label: "B",
              item: "Sea Ray（海鳐）"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        },
        {
          title: "您认为该图像是什么海洋生物? ", note: "测试",
          img: [
            {
              img: img_10_3
            },
            {
              img: img_11_1
            }],
          heatImg: [
            {
              heatImg: img_11_2
            }
          ],
          option: [
            {
              label: "A",
              item: "Corals（珊瑚）"
            },
            {
              label: "B",
              item: " Sea urchins（海胆）"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        },
        {
          title: "您认为该图像是什么海洋生物? ", note: "测试",
          img: [
            {
              img: img_11_3
            },
            {
              img: img_12_2
            }],
          heatImg: [
            {
              heatImg: img_12_1
            }
          ],
          option: [
            {
              label: "A",
              item: "Eel（鳗鱼）"
            },
            {
              label: "B",
              item: "Squid（章鱼）"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        },
        {
          title: "您认为该图像是什么海洋生物? ", note: "测试",
          img: [
            {
              img: img_12_3
            },
            {
              img: img_13_2
            }],
          heatImg: [
            {
              heatImg: img_13_1
            }
          ],
          option: [
            {
              label: "A",
              item: "seal（海豹） "
            },
            {
              label: "B",
              item: "whale（鲸）"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        },
        {
          title: "您认为该图像是什么海洋生物? ", note: "测试",
          img: [
            {
              img: img_13_3
            },
            {
              img: img_14_2
            }],
          heatImg: [
            {
              heatImg: img_14_1
            }
          ],
          option: [
            {
              label: "A",
              item: "Penguins（企鹅）"
            },
            {
              label: "B",
              item: "shark(鲨鱼)"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        },
        {
          title: "您认为该图像是什么海洋生物? ", note: "测试",
          img: [
            {
              img: img_14_3
            },
            {
              img: img_15_2
            }],
          heatImg: [
            {
              heatImg: img_15_1
            }
          ],
          option: [
            {
              label: "A",
              item: "shrimp（虾）"
            },
            {
              label: "B",
              item: "Nudibranchs（裸鳃类生物）"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        },
        {
          title: "您认为该图像是什么海洋生物? ", note: "测试",
          img: [
            {
              img: img_15_3
            },
            {
              img: img_16_1
            }],
          heatImg: [
            {
              heatImg: img_16_2
            }
          ],
          option: [
            {
              label: "A",
              item: "Shrimp（虾）"
            },
            {
              label: "B",
              item: "squid（墨鱼）"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        },
        {
          title: "您认为该图像是什么海洋生物? ", note: "测试",
          img: [
            {
              img: img_16_3
            },
            {
              img: img_17_2
            }],
          heatImg: [
            {
              heatImg: img_17_1
            }
          ],
          option: [
            {
              label: "A",
              item: "Nudibranchs（裸鳃类生物）"
            },
            {
              label: "B",
              item: "Eel (鳗鱼）"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        },
        {
          title: "您认为该图像是什么海洋生物? ", note: "测试",
          img: [
            {
              img: img_17_3
            },
            {
              img: img_18_1
            }],
          heatImg: [
            {
              heatImg: img_18_2
            }
          ],
          option: [
            {
              label: "A",
              item: "Dophin"
            },
            {
              label: "B",
              item: "turtle"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        },
        {
          title: "您认为该图像是什么海洋生物? ", note: "测试",
          img: [
            {
              img: img_18_3
            },
            {
              img: img_19_1
            }],
          heatImg: [
            {
              heatImg: img_19_2
            }
          ],
          option: [
            {
              label: "A",
              item: "Whale（鲸）"
            },
            {
              label: "B",
              item: "Dophin(海豚)"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        }
        ,
        {
          title: "您认为该图像是什么海洋生物? ", note: "测试",
          img: [
            {
              img: img_19_3
            },
            {
              img: img_20_1
            }],
          heatImg: [
            {
              heatImg: img_20_2
            }
          ],
          option: [
            {
              label: "A",
              item: "Sea Ray（海鳐）"
            },
            {
              label: "B",
              item: "Eel(鳗鱼)"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        }
        ,
        {
          title: "您认为该图像是什么海洋生物? ", note: "测试",
          img: [
            {
              img: img_20_3
            },
            {
              img: img_21_2
            }],
          heatImg: [
            {
              heatImg: img_21_1
            }
          ],
          option: [
            {
              label: "A",
              item: "Lobster（龙虾）"
            },
            {
              label: "B",
              item: "Crab(螃蟹)"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        }
        ,
        {
          title: "您认为该图像是什么海洋生物? ", note: "测试",
          img: [
            {
              img: img_21_3
            },
            {
              img: img_22_1
            }],
          heatImg: [
            {
              heatImg: img_22_2
            }
          ],
          option: [
            {
              label: "A",
              item: "Octopus（章鱼）"
            },
            {
              label: "B",
              item: "Squid(墨鱼)"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        }
        ,
        {
          title: "您认为该图像是什么海洋生物? ", note: "测试",
          img: [
            {
              img: img_22_3
            },
            {
              img: img_23_1
            }],
          heatImg: [
            {
              heatImg: img_23_2
            }
          ],
          option: [
            {
              label: "A",
              item: "Hermit crab（寄居蟹）"
            },
            {
              label: "B",
              item: "A.Clam(蚌)"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        }
        ,
        {
          title: "您认为该图像是什么海洋生物? ", note: "测试",
          img: [
            {
              img: img_24_1
            },
            {
              img: img_24_2
            }],
          heatImg: [
            {
              heatImg: img_24_3
            }
          ],
          option: [
            {
              label: "A",
              item: "Sea Ray（海鳐）"
            },
            {
              label: "B",
              item: "Shark（鲨鱼）"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        }
        ,
        {
          title: "您认为该图像是什么海洋生物? ", note: "测试",
          img: [
            {
              img: img_25_1
            },
            {
              img: img_25_2
            }],
          heatImg: [
            {
              heatImg: img_25_3
            }
          ],
          option: [
            {
              label: "A",
              item: "Puffers(河豚) "
            },
            {
              label: "B",
              item: "Astronotus ocellatus（地图鱼）"
            },
            {
              label: "C",
              item: "Not sure不确定"
            }
          ]
        }
      ]
    }
  },
  created() {
    this.status = window.location.href.split("=")[1]
  },
  mounted() {
    this.timer = setInterval(() => {
      this.seconds++;
      this.updateTime();
    }, 1000);
  },
  methods: {
    stat,
    updateTime() {
      let hours = Math.floor(this.seconds / 3600).toString().padStart(2, '0');
      let minutes = Math.floor((this.seconds % 3600) / 60).toString().padStart(2, '0');
      let seconds = (this.seconds % 60).toString().padStart(2, '0');
      this.formattedTime = `${hours}:${minutes}:${seconds}`;
    },
    onSelect(event) {
      this.isActive = event
      map.set(this.index + 1, this.isActive + 1)
      console.log(map.get(this.index + 1))
      console.log(map)
    },
    onOut() {
      this.$router.push("/")
    },
    on() {
      if (this.index !== 0) {
        this.index = this.index - 1
        this.isActive = map.get(this.index + 1)
      }
    },
    next() {
      if (this.index <= this.list.length) {
        this.index = this.index + 1
        //获取选中的答案下标存储到数组中
        this.answer.push(this.isActive)
        this.isActive = null
        this.isActive = map.get(this.index + 1)
      }
    },
    onSubmit() {
      //判断
      let count = 0
      for (let i = 0; i < this.answer.length; i++) {
        if (map.get(i + 1) == this.answer[i]) {
          count++
        }
      }
      console.log("答对", count)
      localStorage.setItem("time", this.formattedTime)
      let length = this.list.length
      localStorage.setItem("list", length)
      localStorage.setItem("count", count)
      localStorage.setItem("map", map)
      map.clear()
      this.$router.push("/end")
      // this.$confirm('你未全部作答，是否退出答题?', '提示', {
      //   confirmButtonText: '确定',
      //   cancelButtonText: '取消',
      //   type: 'warning'
      // }).then(() => {
      //
      // }).catch(() => {
      //
      // });
    }
  }
}
</script>

<style scoped>
.container {
  background-color: #F5F5F5;

}

.isActive {
  background-color: #DAE7FFFF;
  border: 1px rgb(88, 155, 250) solid;


}

.isActive .label {
  background-color: rgb(88, 155, 250);
  color: #ffffff;
  border: none;
}

.btn-switch {
  background-color: #73a4fc;
  color: #ffffff;
  padding: 8px 18px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
}

.img-list {


}

.title-box {
  margin-bottom: 20px;
}

.question-select {
  /*width: 600px;*/
}

.head {
  width: 1200px;
  height: 56px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto 20px;
}

.option-item {
  padding: 8px 12px;
  display: flex;
  align-items: center;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 16px;
}

.option-item:hover {
  background-color: #f5f5f5;
}

.option-item:hover .label {
  background-color: rgb(88, 155, 250);
  color: #ffffff;
  border: none;
}

.label {
  margin-right: 8px;
  border-radius: 50%;
  border: 1px #8C8C8C solid;
  height: 28px;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content {
  background-color: #ffffff;
  width: 1130px;
  height: 700px;
  border-radius: 8px;
  margin: 0 auto;
  padding: 24px;
}
</style>
