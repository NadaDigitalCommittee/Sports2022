<template>
  <div class="bg">
    <Header/>
    <div class="theme">
      <img id="1" src="~/static/logo.png"  alt="開拓する"/>
    </div>
    <div class="timer">
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
  </div>
</template>

<style lang="scss">
@import url("https://use.typekit.net/fge6cqc.css");
.theme{
  text-align: center;
  padding: 3.5% 0;
  width: 100vw;
  img{
    width: min(90%,400px);
  }
}
.timer{
  text-align: center;
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

</style>


<script>
import Vue from 'vue';
export default Vue.extend({
  name:'Index',
  data(){
    return{
      day:'',
    }
  },
  mounted() {
    var target = new Date(2022,8,25);
    var date = new Date();
    this.day = Math.floor((target-date)/86400000)
  }
});
</script>

