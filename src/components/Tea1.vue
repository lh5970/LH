<template>
  <div>
    <!-- 背景1 -->
    <dir class="L1">
      <div class="bg-img"></div>
    </dir>
    <!-- 茶文化 -->
    <div class="tea">
      <h1 class="wow bounceInUp">【  茶文化  】</h1>
      <ul class="wow bounceInUp">
        <li>中华茶道，源远流长，</li>
        <li>却被忙碌浮躁的现代人所怠慢。</li>
        <li>红尘滚滚，沧海逐浪，人生，总值得在这样一个清静的黄昏，</li>
        <li>停下疲惫的脚步，泡一壶茶</li>
        <li>雕刻一段美好的时光，于满心的欣喜里，</li>
        <li>慢慢品味偷得浮生半日闲的惬意...</li>
      </ul>
    </div>
    <!-- 背景2 -->
    <div class="L3">
      <ul>
        <img class="wow bounceInUp" src="../../public/image/18.png" alt="">
        <li class="wow bounceInUp">先苦后甜，能提神补气；</li>
        <li class="wow bounceInUp">鲜醇厚感，闻之清香，汤色金黄透亮，茶味浓而耐泡</li>
        <li class="wow bounceInUp">水似蜜香，沁人心脾，香味浓郁，口感醇厚</li>
      </ul>
      <img class="img2 wow bounceInUp" src="../../public/image/19.png" alt="">
    </div>
    <!-- L4 -->
    <div class="L4">
      <img class="wow bounceInUp" src="../../public/image/17.png" alt="">
      <h1 class="wow bounceInUp">品</h1>
      <div class="L4-1">
        <div class="wow bounceInUp">
          <span>沁 人 心 脾</span>
        </div>
        <p class="wow bounceInUp">茶 香 缥 缈</p>
      </div>
    </div>
    <!-- 背景3 -->
    <div class="bg-3"></div>
    <!-- L5 -->
    <div class="L5">
      <div class="L5-1 wow bounceInUp"> 
        <img src="../../public/image/15.jpg" alt="">
      </div>
      <div class="L5-2 wow bounceInUp">
        <h1>禅茶一味</h1>
        <ul>
          <li>本来清静，</li>
          <li>只因在这喧闹的世界，</li>
          <li>匆匆人生中，</li>
          <li>进行渐远，</li>
          <li>静下来，</li>
          <li>品一杯生活的甘甜与本真</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 背景1 */
.L1{
  margin-bottom: 50px;
}
  .bg-img{
    height: 300px;
    background: url("../../public/image/bg-3.jpg") no-repeat;
  }
  /* 茶文化 */
  .tea{
    margin-bottom: 100px;
	height: 500px;
	background: url("../../public/img/7.png") no-repeat scroll 50% 80px;
}
.tea h1{
  color: rgb(51, 51, 51);
  font-size: 30px;
	padding-bottom:150px; 
}
.tea ul li{
	padding-bottom: 20px;
	font-family: 微软雅黑;
	font-size: 14px;
	color: rgb(51,51,51);
}
/* 背景2 */
.L3{
  height: 506px;
  background-image: url("../../public/image/bg-4.jpg");
  position: relative;
}
.L3 .img2{
  position: absolute;
  top:150px;
  left:60%;
}
.L3 ul{
  position: absolute;
  top:150px;
  left:25%;
  text-align: left;
}
.L3 ul img{
  margin-bottom: 30px;
}
.L3 li{
  font-size: 18px;
  color: rgb(51, 51, 51);
  padding-bottom: 15px;
}
/* L4 */
.L4{
  margin: 150px 0;
  text-align: center;
}
.L4-1{
  display: flex;
  font-size: 20px;
  color: #666;
  padding-top: 10px;
}
.L4 div{
  width: 32px;
  margin: 0 auto;
  padding-right: 10px;
}
.L4 p{
  width: 32px;
  margin: 0 auto;
}
/* 背景3 */
.bg-3{
  height: 500px;
  background-image: url("../../public/image/bg-5.jpg");
  margin-bottom: 100px;
}
/* L5 */
.L5{
  height: 300px;
   display: flex;
   justify-content: center;
}
.L5-2{
  padding-left: 200px;
  padding-top: 100px;
}
.L5-2 h1{
    font-size: 48px;
    color: rgb(51, 51, 51);
    padding-bottom: 50px;
    text-align: left;
}
.L5-2 li{
  font-size: 20px;
  color: rgb(102, 102, 102);
  padding-bottom: 10px;
  text-align: left;
}
</style>