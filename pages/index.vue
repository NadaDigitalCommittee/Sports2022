<template>
  <div class="bg">
    <Header/>
    <div class="theme">
      <img id="id1" src="~/assets/img/theme.png"  alt="体育祭テーマロゴ"/>
      <img id="id2" class="hidden" :class="{show2:ActivateAratana,disableanime:ActivateAratana2}" src="~/assets/img/aratana.png"  alt="新たな体育祭を"/>
      <img id="id3" class="hidden" :class="{show3:ActivateKaitaku,disableanime:ActivateKaitaku2}" src="~/assets/img/kaitaku.png"  alt="開拓する"/>
    </div>
    <div class="timer hidden" v-bind:class="{show:ActivateTime}">
      <b class = "made">第93回灘校体育祭まで</b>
      <div class="ato">
        <p>あと</p><p id = "daycount">{{ day }}</p><p>日</p>
      </div>
    </div>
    <div class="news">
      <table>
        <thead>
          <tr>
            <td colspan="3">
              <b>最新情報</b>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              2002/01/01
            </th>
            <td>
              adipisicing elit.
            </td>
          </tr>
          <tr>
            <th>
              2001/01/01
            </th>
            <td>
              sit amet consectetur
            </td>
          </tr>
          <tr>
            <th>
              2000/01/01
            </th>
            <td>
              Lorem ipsum dolor
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="speech">
      <div class="vision">
        <img src="~/assets/img/vision.png" alt="vision">
        <div class="profile">
          <img src="~/assets/img/ikeda.png" alt="体育委員長の顔写真" class="face">
          <div class="names">
            <p class="role">体育委員長</p>
            <div class="pl"/>
            <p class="name">池田高啓</p>
            <div class="pl2"/>
          </div>
        </div>
        <p class="aisatu">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam dignissimos nostrum cumque recusandae earum, sunt, saepe similique ipsam culpa exercitationem ex, placeat obcaecati iste! Hic voluptatem magni illum minus culpa?</p>
      </div>
      <div class="concept">
        <img src="~/assets/img/concept.png" alt="concept">
        <div class="profile">
          <img src="~/assets/img/josuke.png" alt="デザイン課長の顔写真" class="face">
          <div class="names">
            <p class="role">デザイン課長</p>
            <div class="pl"/>
            <p class="name">髙島晟輔</p>
            <div class="pl2"/>
          </div>
        </div>
        <p class="aisatu">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita inventore hic velit quos eius aliquam, rerum fugit pariatur reprehenderit voluptate nihil iusto veritatis est culpa quasi commodi aut! Dolorem, et!</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.theme{
  padding: 5vh 0;
  width: 100vw;
  display: flex;
}

#id1{
  position: relative;
  left: calc( 50vw - 175px );
  resize: none;
}
#id2{
  position: relative;
  left: calc(50vw - 175px  - 60px);
  top: -30px;
  width: 34px;
  height: 305px;
  z-index: 1;
}
#id3{
  position: relative;
  left: calc(50vw - 535px);
  top:95px;
  width: 34px;
  height: 180px;
  z-index: 1;
}

.timer{
  position: relative;
  top: 40px;
  text-align: center;
}
.hidden{
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  -ms-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  opacity: 0;
}
.show {
  top:0px;
  opacity: 1;
}
.show2{
  top:10px !important;
  opacity: 1;
}
.show3{
  top:135px !important;
  opacity: 1;
}
.disableanime{
  -webkit-transition: all 0s;
  -moz-transition: all 0s;
  -ms-transition: all 0s;
  -o-transition: all 0s;
  transition: all 0s;
}

.made{
  font-size:28px;
}
.ato{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  font-size: 24px;
  p{
    margin: 0 20px;
  }
  #daycount{
    font-family: cheap-pine,sans-serif;
    font-size: 120px;
    color: #FF4E00;
    font-style: normal;
  }
  margin-bottom: 30px;
}
.news{
    display: flex;
    justify-content: center;
  table{
    width: calc( min(100vw,800px) + 10px);
    position: relative;
    left: -5px;
    thead{
      width: min(100vw,800px);

      tr{
        background-color: #FF4E00;
        td{
          column-span: 2;
          padding: 8px 0;
          text-align: center;
          font-size: 18px;
          color: #FFFFFF;
        }
      }
    }
    tbody{
      tr{
        th{
          text-align: center;
          padding: 7px 0 8px;
          border: solid;
          border-width: 0 0 1px;
          border-color: #FF4E00;
          width: 30%;
        }
        td{
          padding: 7px 0 8px;
          border: solid;
          border-width: 0 0 1px ;
          border-color: #FF4E00;
          width: 70%;
        }
      }
    }
  }
}

.speech{
  margin-top: 50px;
  .vision{
    p{
      z-index: 2;
    }
    margin: auto;
    margin-bottom: 50px;
    text-align: left;
    width: min(100vw,max(70vw,600px));
    img{
      border-color: $maincolor;
    }
    .role{
      position: relative;
      z-index: 3;
      font-size:24px;
      margin-left: 18px;
    }

    .pl{
      background-color: $maincolor;
    }
    .pl2{
      background-color: $maincolor;
    }
    .name{
      position: relative;
      z-index: 3;
      margin-left: 40px;
      font-size:32px;
    }
  }
  .concept{
    margin: auto;
    text-align: left;
    width: min(100vw,max(70vw,600px));
    margin-bottom: 50px;
    img{
      border-color: $subcolor;
    }
    .role{
      position: relative;
      font-size:24px;
      margin-left: 18px;
      z-index: 3;
    }
    .pl{
      background-color: $subcolor;
    }
    .pl2{
      background-color: $subcolor;
    }
    .name{
      position: relative;
      z-index: 3;
      margin-left: 40px;
      font-size:32px;
    }
  }
  .profile{
    margin: auto;
    display: flex;
    justify-content: center;
    width: min(100vw,max(50% , 600px));
    img{
      border-radius:50% ;
      border-width: 3px;
    }
  }
}
.pl{
  position: relative;
  top: -12px;
  height: 15px;
  width:168px;
  clip-path: polygon(0% 0%,8% 100%,100% 100%,92% 0%);
  opacity: 0.7;
}
.pl2{
  position: relative;
  top: -16px;
  left: +20px;
  height: 20px;
  width:172px;
  clip-path: polygon(0% 0%,8% 100%,100% 100%,92% 0%);
  opacity: 0.7;
}
.aisatu{
  font-size: 16px;
  margin: auto;
  text-align: center;
  width: min(100vw,max(50% , 600px));
}
</style>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Index',
  data() {
    return {
      day: '',
      ActivateTime: false,
      ActivateAratana: false,
      ActivateKaitaku: false,
      ActivateAratana2: false,
      ActivateKaitaku2: false,
    };
  },
  mounted() {
    const target = new Date(2022, 8, 25);
    const date = new Date();
    this.day = Math.floor((target - date) / 86400000);
    setTimeout(() => {
      this.ActivateAratana = true;
    }, 500);
    setTimeout(() => {
      this.ActivateKaitaku = true;
      this.ActivateAratana2 = true;
    }, 1000);
    setTimeout(() => {
      this.ActivateTime = true;
      this.ActivateKaitaku2 = true;
    }, 1500);
  },
  methods: {

  },
});
</script>
