
var canvas = document.getElementById("mycanvas")
var ctx = canvas.getContext("2d")

//設定尺寸
canvas.width= 400
canvas.height= 400

var time=0
function draw(){
  time++
  ctx.clearRect(0,0,400,400) //清除畫布上的軌跡

  //座標繪製
  ctx.beginPath()
  for(var i=0;i<10;i++){
    let pos = i*50 //每格50劃一條線
    ctx.moveTo(pos,0) //x軸起點
    ctx.lineTo(pos,400) //x軸終點
    ctx.fillText(pos,pos,10) //x軸繪製文字(內容,x位置,y位置)
    //
    ctx.moveTo(0,pos) //y軸起點
    ctx.lineTo(400,pos) //y軸終點
    ctx.fillText(pos,10,pos) //y軸繪製文字(內容,x位置,y位置)
  }
  ctx.strokeStyle = "rgba(0,0,0,0.1)"
  ctx.stroke()

    //頭(上)
    ctx.beginPath();
    ctx.moveTo(190,55);
    ctx.lineTo(185,60); 
    ctx.lineTo(195,85);
    ctx.lineTo(205,85);
    ctx.lineTo(215,60);
    ctx.lineTo(210,55);
    ctx.closePath()
    ctx.fillStyle="#FFBB77"
    ctx.fill()
    ctx.strokeStyle= "  #4F4F4F"
    ctx.stroke()

    //頭(中)
    ctx.beginPath();
    ctx.moveTo(195,85);
    ctx.lineTo(205,85);
    ctx.lineTo(210,90);
    ctx.lineTo(190,90);
    ctx.closePath()
    ctx.fillStyle="#FFBB77"
    ctx.fill()
    ctx.strokeStyle= "  #4F4F4F"
    ctx.stroke()

    //頭(下)
    ctx.beginPath();
    ctx.moveTo(210,90);
    ctx.lineTo(190,90);
    ctx.lineTo(190,100);
    ctx.lineTo(210,100);
    ctx.closePath()
    ctx.fillStyle="#FFBB77"
    ctx.fill()
    ctx.strokeStyle= "  #4F4F4F"
    ctx.stroke()

    //屋頂(中)
    ctx.beginPath();
    ctx.moveTo(190,100);
    ctx.lineTo(210,100);
    ctx.lineTo(250,150);
    ctx.lineTo(150,150);
    ctx.closePath()
    ctx.fillStyle="#0072E3"
    ctx.fill()
    ctx.strokeStyle= "  #4F4F4F"
    ctx.stroke()

    //屋頂(左)
    ctx.beginPath();
    ctx.moveTo(190,100);
    ctx.lineTo(150,150);
    ctx.lineTo(100,135);
    ctx.closePath()
    ctx.fillStyle="#0072E3"
    ctx.fill()
    ctx.strokeStyle= "  #4F4F4F"
    ctx.stroke()

     //屋頂(右)
    ctx.beginPath();
    ctx.moveTo(210,100);
    ctx.lineTo(250,150);
    ctx.lineTo(300,135);
    ctx.closePath()
    ctx.fillStyle="#0072E3"
    ctx.fill()
    ctx.strokeStyle= "  #4F4F4F"
    ctx.stroke()

    //屋頂(白中)
    ctx.beginPath();
    ctx.moveTo(150,150);
    ctx.lineTo(250,150);
    ctx.lineTo(250,165);
    ctx.lineTo(150,165);
    ctx.closePath()
    ctx.fillStyle="#FFF"
    ctx.fill()
    ctx.strokeStyle= "  #4F4F4F"
    ctx.stroke()
   
   //屋頂(白左)
    ctx.beginPath();
    ctx.moveTo(150,150);
    ctx.lineTo(150,165);
    ctx.lineTo(110,153);
    ctx.lineTo(105,137);
    ctx.closePath()
    ctx.fillStyle="#FFF"
    ctx.fill()
    ctx.strokeStyle= "  #4F4F4F"
    ctx.stroke()

    //屋頂(白右)
    ctx.beginPath();
    ctx.moveTo(250,150);
    ctx.lineTo(250,165);
    ctx.lineTo(290,153);
    ctx.lineTo(295,137);
    ctx.closePath()
    ctx.fillStyle="#FFF"
    ctx.fill()
    ctx.strokeStyle= "  #4F4F4F"
    ctx.stroke()

    //屋頂(下中藍)
    ctx.beginPath();
    ctx.moveTo(150,165);
    ctx.lineTo(150,190);
    ctx.lineTo(250,190);
    ctx.lineTo(250,165);
    ctx.closePath()
    ctx.fillStyle="#0072E3"
    ctx.fill()
    ctx.strokeStyle= "  #4F4F4F"
    ctx.stroke()

    //屋頂(下左藍)
    ctx.beginPath();
    ctx.moveTo(150,165);
    ctx.lineTo(150,190);
    ctx.lineTo(80,170);
    ctx.lineTo(110,153);
    ctx.closePath()
    ctx.fillStyle="#0072E3"
    ctx.fill()
    ctx.strokeStyle= "  #4F4F4F"
    ctx.stroke()

   //屋頂(下右藍)
    ctx.beginPath();
    ctx.moveTo(250,165);
    ctx.lineTo(250,190);
    ctx.lineTo(320,170);
    ctx.lineTo(290,153);
    ctx.closePath()
    ctx.fillStyle="#0072E3"
    ctx.fill()
    ctx.strokeStyle= "  #4F4F4F"
    ctx.stroke()

//屋頂(下中白)
    ctx.beginPath();
    ctx.moveTo(150,190);
    ctx.lineTo(150,200);
    ctx.lineTo(250,200);
    ctx.lineTo(250,190);
    ctx.closePath()
    ctx.fillStyle="#FFF"
    ctx.fill()
    ctx.strokeStyle= "  #4F4F4F"
    ctx.stroke()

    //屋頂(下左白)
    ctx.beginPath();
    ctx.moveTo(150,190);
    ctx.lineTo(150,200);
    ctx.lineTo(100,187);
    ctx.lineTo(90,173);
    ctx.closePath()
    ctx.fillStyle="#FFF"
    ctx.fill()
    ctx.strokeStyle= "  #4F4F4F"
    ctx.stroke()

    //屋頂(下右白)
    ctx.beginPath();
    ctx.moveTo(250,190);
    ctx.lineTo(250,200);
    ctx.lineTo(300,187);
    ctx.lineTo(310,173);
    ctx.closePath()
    ctx.fillStyle="#FFF"
    ctx.fill()
    ctx.strokeStyle= "  #4F4F4F"
    ctx.stroke()

    //屋頂夾層
    ctx.beginPath();
    ctx.moveTo(125,194);
    ctx.lineTo(125,220);
    ctx.lineTo(275,220);
    ctx.lineTo(275,194);
    ctx.lineTo(250,200);
    ctx.lineTo(150,200);
    ctx.closePath()
    ctx.fillStyle="#FFF"
    ctx.fill()
    ctx.strokeStyle= "  #4F4F4F"
    ctx.stroke()

    //牆中
    ctx.beginPath();
    ctx.moveTo(150,210);
    ctx.lineTo(150,350);
    ctx.lineTo(250,350);
    ctx.lineTo(250,210);
    ctx.closePath()
    ctx.fillStyle="#FFF"
    ctx.fill()
    ctx.strokeStyle= "  #4F4F4F"
    ctx.stroke()

    //牆左
    ctx.beginPath();
    ctx.moveTo(110,220);
    ctx.lineTo(150,220);
    ctx.lineTo(150,350);
    ctx.lineTo(90,350);
    ctx.closePath()
    ctx.fillStyle="#FFF"
    ctx.fill()
    ctx.strokeStyle= "  #4F4F4F"
    ctx.stroke()

    //牆右
    ctx.beginPath();
    ctx.moveTo(250,220);
    ctx.lineTo(290,220);
    ctx.lineTo(310,350);
    ctx.lineTo(250,350);
    ctx.closePath()
    ctx.fillStyle="#FFF"
    ctx.fill()
    ctx.strokeStyle= "  #4F4F4F"
    ctx.stroke()

    //拱門
    ctx.beginPath()
    ctx.arc(200,275,25,Math.PI*2,Math.PI,true)
    ctx.lineTo(175,350)
    ctx.lineTo(225,350)
    ctx.closePath()
    ctx.closePath()
    ctx.fillStyle="#5B5B5B"
    ctx.fill()
    ctx.strokeStyle= "  #4F4F4F"
    ctx.stroke()

    //字框
    ctx.beginPath()
    ctx.moveTo(185,195)
    ctx.lineTo(185,230)
    ctx.lineTo(215,230)
    ctx.lineTo(215,195)
    ctx.closePath()
    ctx.fillStyle="#930000"
    ctx.fill()
    ctx.strokeStyle= "#4F4F4F"
    ctx.stroke()

    //雲
    let carx = time%440-40
    ctx.beginPath()
    ctx.arc(carx,50,15,Math.PI*3,Math.PI,true)
    ctx.arc(carx+15,50,15,Math.PI*3,Math.PI,true)
    ctx.arc(carx+30,50,15,Math.PI*3,Math.PI,true)
    ctx.closePath()
    ctx.fillStyle=" #C4E1FF"
    ctx.fill()

    ctx.beginPath()
    ctx.arc(carx+100,100,15,Math.PI*3,Math.PI,true)
    ctx.arc(carx+115,100,15,Math.PI*3,Math.PI,true)
    ctx.arc(carx+130,100,15,Math.PI*3,Math.PI,true)
    ctx.closePath()

    ctx.fillStyle=" #C4E1FF"
    ctx.fill()

    //左旗子
      ctx.beginPath()
        ctx.moveTo(125,350)
        ctx.lineTo(125,310-mouse.y/5)
        ctx.lineTo(135,300 - (time%3)-mouse.y/5)
        ctx.lineTo(125,290-mouse.y/5)
      ctx.closePath()
      ctx.fillStyle="#D3222F"
      ctx.fill()
      ctx.strokStyle = "black"
      ctx.stroke()

        //右旗子
      ctx.beginPath()
        ctx.moveTo(275,350)
        ctx.lineTo(275,310-mouse.y/5)
        ctx.lineTo(285,300 - (time%3)-mouse.y/5)
        ctx.lineTo(275,290-mouse.y/5)
      ctx.closePath()
      ctx.fillStyle="#D3222F"
      ctx.fill()
      ctx.strokStyle = "black"
      ctx.stroke()

  
  
    //確認滑鼠事件有抓取到
    ctx.beginPath()
    ctx.arc(mouse.x,mouse.y,5,0,Math.PI*2)
    ctx.fillStyle="black"
    ctx.fill()
}
//draw()

//設定連續繪製
setInterval(draw,30) //不斷畫圖，每隔30毫秒，約一秒鐘執行30次

//定義變數為物件，x,y分別紀錄滑鼠位置
var mouse = {
  x: 0,
  y: 0
} 

//事件監聽，取得滑鼠位置
canvas.addEventListener("mousemove",function(evt){
  mouse.x = evt.offsetX  //相對於畫布上的距離
  mouse.y = evt.offsetY
})