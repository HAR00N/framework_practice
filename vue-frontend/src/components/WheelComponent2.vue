<template>
  <v-container>
    <v-btn @click="spin"> spin </v-btn>
    <div
      style="width: 600px; height: 600px; padding-left: 5%; position: relative"
    >
      <!-- <div class="winwheelicon" style="background-repeat: no-repeat;"></div> -->
      <canvas
        id="canvas"
        width="600"
        height="600"
        style="margin: 30px"
      ></canvas>
    </div>
    <v-card>
      <h2>Selected : {{ resultWin }}</h2>
    </v-card>
  </v-container>
</template>

<script>
/* eslint-disable */
import Winwheel from "winwheel";
import swal from "sweetalert";
export default {
  data: function () {
    return {
      resultWin: "",
      winwheel: null,
      list: [],
      options: ["No.1", "No.2", "1번", "2번", "실패", "꽝"],

      arc: null,
      ctx: null,
      spinArcStart: 10,
      spinTime: 0,
      spinTimeTotal: 0,
      startAngle: 0,
    };
  },
  props: ["option"],
  created: function () {},
  mounted: function () {
    this.getWinwheel();
  },
  watch: {
    winwheel: function (newVal, oldVal) {
      console.log(newVal);
    },
  },
  methods: {
    getWinwheel: function () {
      let vm = this;

      vm.arc = Math.PI / (vm.options.length / 2);

      function byte2Hex(n) {
        var nybHexString = "0123456789ABCDEF";
        return (
          String(nybHexString.substr((n >> 4) & 0x0f, 1)) +
          nybHexString.substr(n & 0x0f, 1)
        );
      }

      function RGB2Color(r, g, b) {
        return "#" + byte2Hex(r) + byte2Hex(g) + byte2Hex(b);
      }

      function getColor(item, maxitem) {
        // var phase = 0;
        // var center = 128;
        // var width = 127;
        // var frequency = (Math.PI * 2) / maxitem;

        // let red = Math.sin(frequency * item + 2 + phase) * width + center;
        // let green = Math.sin(frequency * item + 0 + phase) * width + center;
        // let blue = Math.sin(frequency * item + 4 + phase) * width + center;

        if (item % 2 == 0) {
          var red = 233;
          var green = 233;
          var blue = 233;
        }
        if (item % 2 == 1) {
          var red = 250;
          var green = 250;
          var blue = 250;
        }

        return RGB2Color(red, green, blue);
      }

      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var outsideRadius = 200;
        var textRadius = 160;
        var insideRadius = 0;

        vm.ctx = canvas.getContext("2d");
        vm.ctx.clearRect(0, 0, 500, 500);

        vm.ctx.strokeStyle = "#c2c2c2";
        vm.ctx.lineWidth = 1;

        vm.ctx.font = "bold 20px Helvetica, consolas";

        for (var i = 0; i < vm.options.length; i++) {
          var angle = vm.startAngle + i * vm.arc;
          //ctx.fillStyle = colors[i];
          vm.ctx.fillStyle = getColor(i, vm.options.length);

          vm.ctx.beginPath();
          vm.ctx.arc(250, 250, outsideRadius, angle, angle + vm.arc, false);
          vm.ctx.arc(250, 250, insideRadius, angle + vm.arc, angle, true);
          vm.ctx.stroke();
          vm.ctx.fill();

          vm.ctx.save();
          vm.ctx.shadowOffsetX = -1;
          vm.ctx.shadowOffsetY = -1;
          vm.ctx.shadowBlur = 0;
          // vm.ctx.shadowColor = "rgb(220,220,220)";
          vm.ctx.fillStyle = "black";
          vm.ctx.translate(
            250 + Math.cos(angle + vm.arc / 2) * textRadius,
            250 + Math.sin(angle + vm.arc / 2) * textRadius
          );
          vm.ctx.rotate(angle + vm.arc / 2 + Math.PI / 2);
          var text = vm.options[i];
          vm.ctx.fillText(text, -vm.ctx.measureText(text).width / 2, 0);
          vm.ctx.restore();
        }

        //Arrow
        vm.ctx.fillStyle = "black";
        vm.ctx.beginPath();
        vm.ctx.moveTo(250 - 4, 250 - (outsideRadius + 5));
        vm.ctx.lineTo(250 + 4, 250 - (outsideRadius + 5));
        vm.ctx.lineTo(250 + 4, 250 - (outsideRadius - 5));
        vm.ctx.lineTo(250 + 9, 250 - (outsideRadius - 5));
        vm.ctx.lineTo(250 + 0, 250 - (outsideRadius - 13));
        vm.ctx.lineTo(250 - 9, 250 - (outsideRadius - 5));
        vm.ctx.lineTo(250 - 4, 250 - (outsideRadius - 5));
        vm.ctx.lineTo(250 - 4, 250 - (outsideRadius + 5));
        vm.ctx.fill();
      }
    },
    spin: function () {
        let vm = this;
        let degree = 0;
        const degree1 = 10.95 / 360;
        const randomNum = Math.random();
        console.log(randomNum);
        
        if (randomNum > 0 && randomNum <= 1/6) {
            degree = degree1 * 60;
        }
        else if (randomNum > 1/6 && randomNum <= 2/6) {
            degree = degree1 * 120;
        }
        else if (randomNum > 2/6 && randomNum <= 3/6) {
            degree = degree1 * 180;
        }
        else if (randomNum > 3/6 && randomNum <= 4/6) {
            degree = degree1 * 240;
        }
        else if (randomNum > 4/6 && randomNum <= 5/6) {
            degree = degree1 * 300;
        }
        else if (randomNum > 5/6 && randomNum <= 6/6) {
            degree = degree1 * 360;
        }

        // let spinAngleStart = randomNum * 10 + 10;
        let spinAngleStart = degree + 10.95 * 2;
        vm.spinTime = 0;
        let spinTimeTotal = Math.random() * 3 + 4 * 1000;
        let spinTimeout = null;

        function easeOut(t, b, c, d) {
          var ts = (t /= d) * t;
          var tc = ts * t;
          return b + c * (tc + -3 * ts + 3 * t);
        }

        function rotateWheel() {
          vm.spinTime += 30;
          if (vm.spinTime >= spinTimeTotal) {
            stopRotateWheel();
            return;
          }
          let spinAngle =
            spinAngleStart -
            easeOut(vm.spinTime, 0, spinAngleStart, spinTimeTotal);
          vm.startAngle += (spinAngle * Math.PI) / 180;
          vm.getWinwheel();
          spinTimeout = setTimeout(function () {
            rotateWheel();
          }, 30);

          //setTimeout('rotateWheel', 30);
        }
     

      function stopRotateWheel() {
        clearTimeout(spinTimeout);
        var degrees = (vm.startAngle * 180) / Math.PI + 90;
        var arcd = (vm.arc * 180) / Math.PI;
        var index = Math.floor((360 - (degrees % 360)) / arcd);
        vm.ctx.save();
        vm.ctx.font = "bold 30px Helvetica, Arial";
        vm.resultWin = vm.options[index];
        // vm.ctx.fillText(
        //   text,
        //   250 - vm.ctx.measureText(text).width / 2,
        //   250 + 10
        // );

        vm.ctx.restore();
      }

      rotateWheel();
    },
    alertPrize: function (_item) {
      let vm = this;
      console.log(_item);
      let _list = _item.winwheel.segments;
      let _result = _item.winwheel.getIndicatedSegment();
      // vm.winwheel.stopAnimation();
      vm.$parent.selectDetailInf.evt11 = _result.code;
      vm.$parent.selectDetailInf.evt21 = _result.title;
      //_item.winwheel.stopAnimation();

      if (_result.code == "MEANVRULNV00100") {
        swal(_result.title + "당점되었습니다. 다음에 다시 이용해주세요");
        vm.$parent.selectDetailInf.evt31 = "ERROR";
        vm.$parent.onClickEvnetParticipate(_result.uidKey);
      } else {
        swal(_result.title + "당점되었습니다. 다음에 다시 이용해주세요");
        vm.$parent.selectDetailInf.evt31 = "SUCCESS";
        vm.$parent.onClickEvnetParticipate(_result.uidKey);
      }

      /*   if(_list.length > 0 && _item.winwheel.animation._stopAngle != undefined){
              let filter = _list.filter(function(item){
                   return (item.startAngle < _item.winwheel.animation._stopAngle &&  _item.winwheel.animation._stopAngle < item.endAngle );
                  
              });
              console.log(filter);
            } */
    },
  },
};
</script>