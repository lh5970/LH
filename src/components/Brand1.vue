<template>
  <div class="app">
    <!-- 背景1 -->
    <div class="bg1"></div>
    <!-- 四图 -->
		<ul class="L1-img wow bounceInUp">
			<li>
        <img src="../../public/img//3.png" alt="">
        <p>红茶</p>
        </li>
			<li>
        <img src="../../public/img//4.png" alt="">
        <p>乌龙茶</p>
        </li>
			<li>
        <img src="../../public/img//5.png" alt="">
        <p>花茶</p>
        </li>
			<li>
        <img src="../../public/img//6.png" alt="">
        <p>普洱茶</p>
      </li>
		</ul>
    <!-- 背景2 -->
		<div class="L6 wow bounceInUp">
			<div class="L6-bgimg">
		</div>
			<!-- 拼图 -->
		<div class="l6">
			<img class="L6-1 wow bounceInUp" src="../../public/img/17.png" alt="">
			<img class="L6-1 wow bounceInUp" src="../../public/img/18.png" alt="">
			<img class="L6-1 wow bounceInUp" src="../../public/img/19.png" alt="">
			<img class="L6-1 wow bounceInUp" src="../../public/img/20.png" alt="">
			<img class="L6-1 wow bounceInUp" src="../../public/img/21.png" alt="">
			<img class="L6-1 wow bounceInUp" src="../../public/img/22.png" alt="">
			<img class="L6-1 wow bounceInUp" src="../../public/img/23.png" alt="">
		</div>
	 </div>
   <!-- 背景3 -->
   <div class="bg3"></div>
   <!-- 背景4 -->
   <div class="bg4 wow bounceInUp">
     <h2 class="wow bounceInUp">走进我们</h2>
     <span class="wow bounceInUp"></span>
     <p>公司一直秉承“诚信为本”的古训，以“金般品质、百年承诺”为经营理念，</p>
     <p>以”打造中国茶叶品牌、弘扬国饮“为目标。1994年在福建重新建立了自己的生产基地</p>
     <p>公司已经成功实现产、供、销、研一体化目标，</p>
     <p>在福建、浙江、安徽、云南、四川等省建立了30个生产基地，公司不断延伸茶产业链先后开设</p>
     <p>了茶楼、茶馆，涉及休闲、娱乐、文化创意产业发展。</p>
     <p>拥有连锁经营店120多家</p>
   </div>
   <!-- 黑白图 -->
   <div class="img1">
     <img class="img2 wow bounceInUp" src="../../public/img/33.png" alt="">
     <img class="img3 wow bounceInUp" src="../../public/img/32.png" alt="">
     <img class="img4 wow bounceInUp" src="../../public/img/34.png" alt="">
     <img class="img5 wow bounceInUp" src="../../public/img/35.png" alt="">
     <img class="img6 wow bounceInUp" src="../../public/img/36.png" alt="">
   </div>
  </div>
</template>
 
 <style scoped>
 .app{
   height: 2700px;
 }
 /* 背景1 */
  .bg1{
    height: 300px;
    background-image: url("../../public/img/30.jpg")
  }
 /* 四图 */
.L1-img{
	display: flex;
	justify-content:space-around;
	padding: 150px 0 100px;
}
.L1-img p{
  padding-top: 10px;
  font-size: 20px;
}
/* 背景2 */
.L6-bgimg{
	height: 200px;
	background: url("../../public/img/16.png") no-repeat scroll 50% 70px;
}
.l6{
	width: 1000px;
	height: 400px;
	margin: 100px 0 150px 20%;
}
.L6-1{
	float: left;
	padding-right:25px; 
	padding-bottom:20px; 
}
/* 背景3 */
.bg3{
  height: 500px;
  background-image: url("../../public/img/31.jpg");  
}
/* 背景4 */
.bg4{
  height: 990px;
  background: url("../../public/img/32.jpg") no-repeat scroll 50% 0;
  margin: 0 auto;
}
.bg4 h2{
  padding: 50px 0 30px;
  font-size: 24px;
  color: rgb(169, 169, 169);
}
.bg4 span{
  display:inline-block;
  width: 300px;
  border-bottom: 1px solid rgb(169, 169, 169);
  margin-bottom: 50px;
}
.bg4 p{
    font-family: 微软雅黑;
    font-size: 14px;
    color: rgb(51, 51, 51);
    padding-bottom: 30px;
}
/* 黑白图 */
.img1{
  position: relative;  
}
.img2{
  position: absolute;
  bottom:320px;
  left: 450px;
}
.img3{
  position: absolute;
  bottom:320px;
  right:460px ;
}
.img4{
  position: absolute;
  bottom:165px;
  left:280px;
}
.img5{
  position: absolute;
  bottom:120px;
  right:690px ;
}
.img6{
  position: absolute;
  bottom:165px;
  right:290px ;
}
 </style>