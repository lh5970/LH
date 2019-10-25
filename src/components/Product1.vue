<template>
<!-- 所有产品详情页 -->
  <div class="app">
    <!-- 背景图 -->
    <div class="L1-bg"></div>
    <!-- 拼图1 -->
    <div class="L2">
      <ul class="wow bounceInUp">
        <li class="L2-1">
          <img src="../../public/image/1.jpg" alt="">
          <img class="my-icon" src="../../public/image/icon.png" alt="">
          <p>2016头春岩茶武夷岩茶大红袍茶叶 春茶特级</p>
        </li>
        <li class="L2-img">
          <img src="../../public/image/2.jpg" alt="">
          <img class="my-icon" src="../../public/image/icon.png" alt="">
          <p>2016新茶峨眉雪芽雀舌茶叶绿茶</p>
        </li>
        <li>
          <img src="../../public/image/3.jpg" alt="">
          <img class="my-icon" src="../../public/image/icon.png" alt="">
          <p>安溪铁观音茶叶</p>
        </li>
      </ul>
      <ul >
        <li class="L2-1 wow bounceInUp">
          <img src="../../public/image/4.jpg" alt="">
          <img class="my-icon" src="../../public/image/icon.png" alt="">
          <p>布朗山金芽老茶头 云南勐海普洱茶</p>
        </li>
        <li class="L2-img wow bounceInUp">
          <img src="../../public/image/5.jpg" alt="">
          <img class="my-icon" src="../../public/image/icon.png" alt="">
          <p>干柠檬片泡茶 泡水蜂蜜柠檬片花草茶</p>
        </li>
        <li class="wow bounceInUp">
          <img src="../../public/image/6.jpg" alt="">
          <img class="my-icon" src="../../public/image/icon.png" alt="">
          <p>黑乌龙茶 特级黑乌龙茶叶 乌龙茶茶叶</p>
        </li>
      </ul>
      <ul>
        <li class="L2-1 wow bounceInUp">
          <img src="../../public/image/7.jpg" alt="">
          <img class="my-icon" src="../../public/image/icon.png" alt="">
          <p>花草茶玫瑰枸杞胎菊柠檬组合花茶</p>
        </li>
        <li class="L2-img wow bounceInUp">
          <img src="../../public/image/8.jpg" alt="">
          <img class="my-icon" src="../../public/image/icon.png" alt="">
          <p>茉莉花绿茶 浓香型碧螺春2016新茶</p>
        </li>
        <li class="wow bounceInUp">
          <img src="../../public/image/9.jpg" alt="">
          <img class="my-icon" src="../../public/image/icon.png" alt="">
          <p>特级大红袍 武夷岩茶 500g散装乌龙茶</p>
        </li>
      </ul>
      <ul>
        <li class="L2-1 wow bounceInUp">
          <img src="../../public/image/10.jpg" alt="">
          <img class="my-icon" src="../../public/image/icon.png" alt="">
          <p>特级金骏眉红茶桐木关小种茶叶</p>
        </li>
        <li class="L2-img wow bounceInUp">
          <img src="../../public/image/11.jpg" alt="">
          <img class="my-icon" src="../../public/image/icon.png" alt="">
          <p>云南七子饼茶叶普洱茶饼</p>
        </li>
        <li class="wow bounceInUp">
          <img src="../../public/image/12.jpg" alt="">
          <img class="my-icon" src="../../public/image/icon.png" alt="">
          <p>云南特级普洱茶熟茶陈年茶叶</p>
        </li>
      </ul>
    </div>
  </div>
</template>


<style  scoped>
.app{
  height: 1460px;
}
  .L1-bg{
    height: 300px;
    background-image:url("../../public/image/bg.jpg")
  }
  .L2 ul li{
    float: left;
    text-align: left;
    position: relative;
    margin-top:100px; 
  }
  .my-icon{
    position: absolute;
    top:85px;
    left: 140px;
    display: none;
  }
  .L2 li:hover .my-icon{
    display: block;
  }
  .L2-img{
    margin: 0 50px;
   
  }
  .L2-1{
    margin-left: 250px;
  }

</style>