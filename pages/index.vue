<template>
  <div class="bg">
    <Header/>
    <div class="theme">
      <img id="id1" src="~/assets/img/fixedlogo.png"  alt="体育祭テーマロゴ"/>
      <img id="id2" class="hidden" :class="{show2:ActivateAratana,disableanime:ActivateAratana2}" src="~/assets/img/aratana.svg"  alt="新たな体育祭を"/>
      <img id="id3" class="hidden" :class="{show3:ActivateKaitaku,disableanime:ActivateKaitaku2}" src="~/assets/img/kaitaku.svg"  alt="開拓する"/>
    </div>
    <p class="live">ライブ配信実施中！！</p>
    <div class="points">
      <table class="table">
        <thead>
          <tr>
            <td colspan="2">
              <p>
                得点状況
              </p>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td class="class c1">
              <p>
              1組
              </p>
            </td>
            <td class="point">
              <p v-if="!sum.pointIsHidden">{{sum.scores[0]}}</p>
              <p v-else>???</p>
            </td>
          </tr>
          <tr>
            <td class="class c2">
              <p>
              2組
              </p>
            </td>
            <td class="point">
              <p v-if="!sum.pointIsHidden">{{sum.scores[1]}}</p>
              <p v-else>???</p>
            </td>
          </tr>
          <tr>
            <td class="class c3">
              <p>
              3組
              </p>
            </td>
            <td class="point">
              <p v-if="!sum.pointIsHidden">{{sum.scores[2]}}</p>
              <p v-else>???</p>
            </td>
          </tr>
          <tr>
            <td class="class c4">
              <p>
              4組
              </p>
            </td>
            <td class="point">
              <p v-if="!sum.pointIsHidden">{{sum.scores[3]}}</p>
              <p v-else>???</p>
            </td>
          </tr>
        </tbody>
      </table>
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
              2022.09.20
            </th>
            <td>
              相撲の予選が行われました
            </td>
          </tr>
          <tr>
            <th>
              2022.09.17
            </th>
            <td>
              雨天時プログラムが完成しました
            </td>
          </tr>
          <tr>
            <th>
              2022.09.14
            </th>
            <td>
              パンフレットが完成しました
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="speech">
      <div class="vision">
          <div class="midasi">
            <p class="midasitext"><span class="changecolor">V</span>ision<span class="changesize">▶︎▶︎▶︎▶︎▶︎</span></p>
          </div>
        <div class="profile">
          <img src="~/assets/img/ikedafull_2x.png" alt="体育委員長の写真" class="face">
          <div class="names">
            <p class="role">体育委員長</p>
            <div class="pl"/>
            <p class="name">池田高啓</p>
            <div class="pl2"/>
          </div>
        </div>
        <p class="aisatu">パンデミックの発生によりこの2年半、校内外で受けた制約は計り知れません。直近2回の体育祭も短縮開催を余儀なくされ、いくつもの競技や企画が廃止となってしまいました。</p>
        <br/>
        <p class="aisatu">今年は、今年こそは、僕たちが憧れた体育祭を復興しよう、熱気を創り出そう、その一心でこれまで準備にあたって来ました。</p>
        <br/>
        <p class="aisatu">ただ一筋縄では行きません。生徒の経験不足により8枚の垂れ幕を諦め、人数が集まらなかった応援団は4クラスの合同となりました。絶たれた伝統を取り戻すことは難しい、その中でも残すものは残し、この時代に合った体育祭の形を模索し続けて来ました。この第93回体育祭が、灘校生に熱狂を生み、新時代の体育祭の先駆けとなれば、これ以上のことはありません。</p>
        <br/>
        <p class="aisatu">最後にはなりますが、体育科を始めとする教職員の方々、その他体育祭の開催に向けて尽力してくださった方々に感謝申し上げます。ありがとうございました。</p>
        <br/><br/>
        <p class="aisatu">伝統を託そう。未来を拓こう。</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.live{
  font-size: min(16px , 2.4vh);
  font-family: toppan-bunkyu-midashi-go-std, sans-serif;
  font-weight: 900;
  font-style: normal;
  color: white;
  background-color: #FF4E00;
  width:calc( min(100vw,800px) + 10px);
  position: relative;
    left: -5px;
  text-align: center;
  margin: auto;
  padding: 8px 0;
}
.points{
  margin: auto;
  background-color: #e9e9e9;
  width: calc( min(100vw,800px) + 10px);
  position: relative;
  left: -5px;  
  font-size: min(16px , 2.4vh);
  font-family: toppan-bunkyu-midashi-go-std, sans-serif;
  font-weight: 900;
  font-style: normal;
  padding: 10px 0;

  table{
    width: 80%;
    margin: auto;
    border-spacing: 6px 6px;
    td{
      margin: auto 10px;
    }
    thead{
      td{
        font-size: min( 18px , 2.7vh);
        text-align: center;
        p{
        margin:8px auto;

        }
      }
    }
    .c1{
      background-color: #000;
      color: #FFFFFF;
    }
    .c2{
      background-color: #e33b3b;
      color: white;
    }
    .c3{
      background-color: #ffe557;
      color: black;
    }
    .c4{
      background-color: #2e7d00;
      color: white;
    }
    .class{
      width: 15%;
      padding: 14px 0;
      text-align: center;
    }
    .point{
      width: 85%;
      background-color: white;
      text-align: center;
      
      p{
        margin: 14px auto;
      }
    }
  }
}


  .midasitext{
    font-family: garamond-premier-pro, serif;
    font-weight: 700;
    font-style: normal;
    font-size: 50px;
    .changecolor{
      color: #FF4E00;
    }
    .changesize{
      margin-left: 15px;
      font-size: 10px;
    }
  }
.theme{
  position: relative;
  padding-bottom: 2vh;
  width: 100vw;
  display: flex;
}

#id1{
  position: relative;
  left: calc( 50vw - ( min(45vh,90vw) * 175 / 337 ) + 1.5vh);
  width: calc( min(45vh,90vw) * 349 / 337);
  height: min(45vh,90vw);
  resize: none;
}
#id2{
  position: relative;
  left: calc(50vw - ( min(45vh,90vw) * 235 / 337 ) + 1.5vh);
  top: calc( 0vh -  min(45vh,90vw) * 30 / 337  );
  width: calc( min(45vh,90vw) * 34 / 337);
  height: calc( min(45vh,90vw) * 305 / 337);
  z-index: 1;
}
#id3{
  position: relative;
  left: calc(50vw - ( min(45vh,90vw) * 535 / 337 ) + 1.5vh);
  top: calc( min(45vh,90vw) * 95 / 337 );
  width: calc( min(45vh,90vw) * 34 / 337 );
  height: calc( min(45vh,90vw) * 180 / 337 );
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
  font-size: min(28px , 4.2vh);

  font-family: toppan-bunkyu-midashi-go-std, sans-serif;
    font-weight: 900;
    font-style: normal;
}
.ato{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;

  font-size: min(24px , 4vh);
  p{
    margin: 0 20px;
    position: relative;
    top: -20px;
  }
  #daycount{
    font-family: cheap-pine,sans-serif;
    font-size: min(120px , 20vh);
    color: #FF4E00;
    font-style: normal;
    top:0;
  }
  margin-bottom: 30px;
}
.news{
  
  font-family: yu-gothic-pr6n,sans-serif;
  font-weight: 400;
  font-style: normal;
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
  width: 100vw;
  .midasi{
  margin: auto;
  padding-right: 15px;
  padding-left:15px;
  width: calc( min(100vw,max(50% , 600px)) - 30px);
  }
  .midasi img{
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

    .profile{
    margin-top:15px;
    margin-bottom: 25px;
    margin: auto;
    display: flex;
    justify-content: center;
    font-family: source-han-serif-japanese, serif;
    font-weight: 900;
    width: 375px;
    height: 300px;
    img{
      position: absolute;
      width: min(100vw,375px);
      z-index: 1;
    }
    .names{
      width: 375px;
      height: 300px;
      z-index: 2;
      p{
        color: #FFFFFF;
        z-index: 3;
      }
      .role{
        position: relative;
        font-size:24px;
        width: 140px;
        top:162px;
        left: 159px;
      }
      .name{
        position: relative;
        font-size:30px;
        width: 140px;
        top:150px;
        left: 204px;
      }
      .pl{
        background-color: $maincolor;
        position: relative;
        height: 30px;
        width:168px;
        clip-path: polygon(0% 0%,12% 100%,100% 100%,88% 0%);
        opacity: 0.67;
        z-index: 2;
        top:135px;
        left: 135px;
      }
      .pl2{
        background-color: $maincolor;
        position: relative;
        height: 36px;
        width:200px;
        clip-path: polygon(0% 0%,12% 100%,100% 100%,88% 0%);
        opacity: 0.67;
        z-index: 2;
        top:115px;
        left: 162px;
      }
    }
  }
  }

}
.aisatu{
  font-size: 16px;
  font-family: yu-gothic-pr6n,sans-serif;
  font-weight: 400;
  font-style: normal;
  margin: auto;
  padding-right: 15px;
  padding-left:15px;
  text-align: left;
  line-height: 26px;
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
      sum: { scores: [0, 0, 0, 0], pointIsHidden: true },
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
    let config = {
      kitId: 'zlv1mor',
      scriptTimeout: 3000,
      async: true,
    };
    let h = d.documentElement;
    let t = setTimeout(() => { h.className = `${h.className.replace(/\bwf-loading\b/g, '')} wf-inactive`; }, config.scriptTimeout);
    let tk = d.createElement('script');
    let f = false;
    let s = d.getElementsByTagName('script')[0];
    let a;
    h.className += ' wf-loading';
    tk.src = `https://use.typekit.net/${config.kitId}.js`;
    tk.async = true;
    tk.onload = tk.onreadystatechange = function () {
      a = this.readyState; if (f || a && a != 'complete' && a != 'loaded') return; f = true; clearTimeout(t); try {
        Typekit.load(config);
      } catch (e) { }
    };
    s.parentNode.insertBefore(tk, s);
    // font
    config = {
      kitId: 'zlv1mor',
      scriptTimeout: 3000,
      async: true,
    };
    h = d.documentElement;
    t = setTimeout(() => { h.className = `${h.className.replace(/\bwf-loading\b/g, '')} wf-inactive`; }, config.scriptTimeout);
    tk = d.createElement('script');
    f = false;
    s = d.getElementsByTagName('script')[0];
    a;
    h.className += ' wf-loading';
    tk.src = `https://use.typekit.net/${config.kitId}.js`;
    tk.async = true;
    tk.onload = tk.onreadystatechange = function () {
      a = this.readyState; if (f || a && a != 'complete' && a != 'loaded') return; f = true; clearTimeout(t); try {
        Typekit.load(config);
      } catch (e) { }
    };
    s.parentNode.insertBefore(tk, s);
    
    this.requestsum();
  },
  methods: {
    async requestsum() {
      // @ts-ignore
      this.sum = (await this.$axios.$get('https://apifornada76sportfes.azurewebsites.net/sum', {
        headers: { 'Content-Type': 'application/json' },
        data: {},
      }));
    },
  },
});
</script>
