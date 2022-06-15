<template>  
    <div style="width:600px; height: 600px; padding-left:5%; position: relative;">
         <div class="winwheelicon" style="background-repeat: no-repeat;"></div>
        <canvas id="canvas" width="600" height="600" style="margin: 30px;"></canvas>
    </div>
</template>

<script>
/* eslint-disable */
import Winwheel from 'winwheel';
import swal from 'sweetalert';
export default{
    data: function () {
      return {
           winwheel:null
          , list:[]
          
      }
    }
    , props:['option']
    , created: function () {
      
		   
    }
    , mounted: function () {  
        this.getWinwheel();
    }
    , watch:{
        winwheel:function(newVal, oldVal){
            console.log(newVal);
        }
    }
    , methods: {
        getWinwheel:function(){
            let vm = this;

            vm.winwheel =  new Winwheel({
              numSegments       : 6, 
              centerX           : 300,
              centerY           : 300,
              rotationAngle     : -30, 
             // outerRadius       : 150,          // Set outer radius so wheel fits inside the background.
            //   drawMode          : 'image',      // drawMode must be set to image.
              segments:[
                   {text : 'T-55 Vampire'},
                   {text : 'P-40 Kittyhawk'},
                   {text : 'North American Harvard'},
                   {text : 'L-39C Albatross'},
                   {text : 'L-39C Albatross'},
                   {text : 'L-39C Albatross'},
              ],
              animation :                   // Specify the animation to use.
                {
                    type     : 'spinToStop',
                    duration : 6,             // Duration in seconds.
                    spins    : 6,             // Number of complete spins.
                    //callbackBefore : callBackBeforeFuc,
                    callbackFinished : function(e){
                        vm.alertPrize(vm);
                    }
                }
            });

            let c = vm.winwheel.ctx; 
            if (c) {
                c.save();
                c.lineWidth = 2;
                c.strokeStyle = 'black';
                c.fillStyle = 'black';
                c.beginPath();
                c.moveTo(180, 10);
                c.lineTo(220, 10);
                c.lineTo(200, 42);
                c.lineTo(180, 10);
                c.stroke();
                c.fill();
                c.restore();
            }

            if(vm.winwheel != null){
                 let loadedImg = new Image();
                loadedImg.onload = function() {
                    vm.winwheel.rotationAngle = 0;
                    vm.winwheel.wheelImage = loadedImg;
                    vm.winwheel.draw();
                 }
                // loadedImg.src = '/img/20220205/202202051652181.png';
            }

             function callBackBeforeFuc(sss){
                 console.log(sss);
             }
       
            
            
        }
        , alertPrize:function(_item) {
            let vm = this;
            console.log(_item);
            let _list =  _item.winwheel.segments;
            let _result = _item.winwheel.getIndicatedSegment();
           // vm.winwheel.stopAnimation();
            vm.$parent.selectDetailInf.evt11 = _result.code;
            vm.$parent.selectDetailInf.evt21 = _result.title;
           //_item.winwheel.stopAnimation();

            if(_result.code == 'MEANVRULNV00100'){
                  swal(_result.title + "당점되었습니다. 다음에 다시 이용해주세요");
                    vm.$parent.selectDetailInf.evt31 = 'ERROR';
                   vm.$parent.onClickEvnetParticipate(_result.uidKey);
            }else{
                  swal(_result.title + "당점되었습니다. 다음에 다시 이용해주세요");
                   vm.$parent.selectDetailInf.evt31 = 'SUCCESS';
                   vm.$parent.onClickEvnetParticipate(_result.uidKey);
            }


          /*   if(_list.length > 0 && _item.winwheel.animation._stopAngle != undefined){
              let filter = _list.filter(function(item){
                   return (item.startAngle < _item.winwheel.animation._stopAngle &&  _item.winwheel.animation._stopAngle < item.endAngle );
                  
              });
              console.log(filter);
            } */
             
        }
        
       
    }
  }
</script>