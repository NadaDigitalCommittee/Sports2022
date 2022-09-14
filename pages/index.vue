<template>
  <div class="bg">
    <Header/>
    <div class="theme">
      <img id="id1" src="~/assets/img/fixedlogo.png"  alt="体育祭テーマロゴ"/>
      <img id="id2" class="hidden" :class="{show2:ActivateAratana,disableanime:ActivateAratana2}" src="~/assets/img/aratana.png"  alt="新たな体育祭を"/>
      <img id="id3" class="hidden" :class="{show3:ActivateKaitaku,disableanime:ActivateKaitaku2}" src="~/assets/img/kaitaku.png"  alt="開拓する"/>
    </div>
    <div class="timer hidden" :class="{show:ActivateTime}">
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
        <img src="~/assets/img/vision.png" alt="vision" class="midasi">
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
        <img src="~/assets/img/concept.png" alt="concept" class="midasi">
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

<style scoped lang="scss">
.theme{
  padding: 5vh 0;
  width: 100vw;
  display: flex;
}

#id1{
  position: relative;
  left: calc( 50vw - ( 40vh * 175 / 337 ) );
  width: calc( 40vh * 349 / 337);
  height: 40vh;
  resize: none;
}
#id2{
  position: relative;
  left: calc(50vw - ( 40vh * 235 / 337 ));
  top: calc( 0vh -  40vh * 30 / 337  );
  width: calc( 40vh * 34 / 337);
  height: calc( 40vh * 305 / 337);
  z-index: 1;
}
#id3{
  position: relative;
  left: calc(50vw - ( 40vh * 535 / 337 ));
  top: calc( 40vh * 95 / 337 );
  width: calc( 40vh * 34 / 337 );
  height: calc( 40vh * 180 / 337 );
  z-index: 1;
}

.timer{
  position: relative;
  top: 40px;
  text-align: center;
}
.hidden{
  -webkit-transition: transform all 1.25s;
  -webkit-transition: -webkit-transform all 1.25s;
  -moz-transition: all 1.25s;
  -ms-transition: all 1.25s;
  -o-transition: all 1.25s;
  transition: all 1.25s;
  opacity: 0;
}
.show {
  top:0px;
  opacity: 1;
}
.show2{
  top:calc( 40vh * 10 / 337 ) !important;
  opacity: 1;
}
.show3{
  top:calc( 40vh * 135 / 337 ) !important;
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
  font-size: min(28px , 3vh);
}
.ato{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  font-size: min(24px , 2.5vh);
  p{
    margin: 0 20px;
  }
  #daycount{
    font-family: cheap-pine,sans-serif;
    font-size: min(120px , 12.5vh);
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

  .midasi{
    height: 50px;
  }
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
      margin-left: 10px;
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
      margin-left: 45px;
      font-size:30px;
    }
  }
  .profile{
    margin: auto;
    margin-top:15px;
    margin-bottom: 25px;
    display: flex;
    justify-content: center;
    font-family: source-han-serif-japanese, serif;
    font-weight: 900;
    width: min(100vw,max(50% , 600px));
    img{
      border-radius:50% ;
      border-width: 3px;
      width: 120px;
      height: 120px;
    }
    .names{
      margin-left: 20px;
      margin-top: 15px;
    }
  }
}
.pl{
  position: relative;
  top: -12px;
  height: 15px;
  width:168px;
  clip-path: polygon(0% 0%,8% 100%,100% 100%,92% 0%);
  opacity: 0.6;
}
.pl2{
  position: relative;
  top: -16px;
  left: +20px;
  height: 20px;
  width:172px;
  clip-path: polygon(0% 0%,8% 100%,100% 100%,92% 0%);
  opacity: 0.6;
}
.aisatu{
  font-size: 16px;
  font-family: sans-serif;
  margin: auto;
  padding-right: 15px;
  padding-left:15px;
  text-align: center;
  width: calc( min(100vw,max(50% , 600px)) - 30px);
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
  head() {
    const url = 'https://sports.nada-sc.jp/2022/';

    return {
      title: 'トップページ - 第93回灘校体育祭「拓」',
      meta: [
        { hid: 'description', name: 'description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:description', name: 'og:description', content: '2022年9月25日に開催される、第93回灘校体育祭「拓」の公式ウェブサイトです。' },
        { hid: 'og:url', name: 'og:url', content: url },
      ],
    };
  },
  mounted() {
    const target = new Date(2022, 8, 26);
    const date = new Date();
    this.day = Math.floor((target - date) / 86400000);
    setTimeout(() => {
      this.ActivateAratana = true;
    }, 1000);
    setTimeout(() => {
      this.ActivateKaitaku = true;
      this.ActivateAratana2 = true;
    }, 2250);
    setTimeout(() => {
      this.ActivateTime = true;
      this.ActivateKaitaku2 = true;
    }, 3500);
    // font読み込み
    const d = document;
    const config = {
      kitId: 'zlv1mor',
      scriptTimeout: 3000,
      async: true,
    };
    const h = d.documentElement; const t = setTimeout(() => { h.className = `${h.className.replace(/\bwf-loading\b/g, '')} wf-inactive`; }, config.scriptTimeout); const tk = d.createElement('script'); let f = false; const s = d.getElementsByTagName('script')[0]; let a; h.className += ' wf-loading'; tk.src = `https://use.typekit.net/${config.kitId}.js`; tk.async = true; tk.onload = tk.onreadystatechange = function () { a = this.readyState; if (f || a && a != 'complete' && a != 'loaded') return; f = true; clearTimeout(t); try { Typekit.load(config); } catch (e) {} }; s.parentNode.insertBefore(tk, s);
  },
  methods: {

  },
});
</script>
