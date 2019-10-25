<template>
<!-- 首页组件 -->
  <div class="go-top">
			<!-- 锚点 -->	
			<div class="scrollTop" v-show="showTop" @click="toTop">
    		<img src="../../public/img/icon.png"/>
  		</div>
			<!-- 轮播图 -->
			<el-carousel height="700px">
				<el-carousel-item v-for="item in 2" :key="item">
					<h3 class="small">{{ item }}</h3>
				</el-carousel-item>
			</el-carousel>
			<!-- 四图 -->
			<ul class="wow bounceInUp L1-img">
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
			<!-- 茶文化 -->
			<div class="L2">
				<h1 class="wow bounceInUp">【茶文化】</h1>
				<ul>
					<li>中华茶道，源远流长,</li>
					<li>却被忙碌浮躁的现代人所怠慢。</li>
					<li>红尘滚滚，沧海逐浪，人生，总值得在这样一个清静的黄昏，</li>
					<li>停下疲惫的脚步，泡一壶茶，</li>
					<li>雕刻一段美好的时光，于满心的欣喜里，</li>
					<li>慢慢品味偷得浮生半日闲的惬意...</li>
				</ul>
			</div>
			<!-- 背景1 -->
			<div class="L3-bgimg">
				<div class="wow bounceInUp L3-bg">
					<img src="../../public/img/8_1.png" alt="">
					<p>烹饪好茶 ，尝百味人生，香满万家</p>
				</div>
			</div>
			<!-- 拼图 -->
			<div class="L4"> 
				<img class="l4 wow bounceInUp" src="../../public/img/9.png" alt="">
				<img class="l4" src="../../public/img/10.png" alt="">
				<img class="l4 wow bounceInUp" src="../../public/img/11.png" alt="">
				<img class="l4" src="../../public/img/12.png" alt="">
				<img class="l42 wow bounceInUp" src="../../public/img/13.png" alt="">
				<img class="l42 wow bounceInUp" src="../../public/img/14.png" alt="">
				<img class="l42 wow bounceInUp" src="../../public/img/15.png" alt="">
			</div>
			<!-- 背景2 -->
			<div class="L5">
				<img class="wow bounceInUp" src="../../public/img/16_1.png" alt="">
			</div>
			<!-- 背景3 -->
			<div class="L6 wow bounceInUp">
				<div class="L6-bgimg">
			</div>
				<!-- 拼图2 -->
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
			<!-- 背景4 -->
			<div class="L7">
				<img class="wow bounceInUp" src="../../public/img/25.png" alt="">
			</div>
			<!-- 背景5 -->
			<div class="L8">
				<img class="wow bounceInUp" src="../../public/img/26.png" alt="">
				<ul class="L8-img wow bounceInUp">
					<li>
						<img src="../../public/img/27.jpg" alt="">
						<p>茉莉花绿茶 浓香型碧螺春2016新茶</p>
					</li>
					<li>
						<img src="../../public/img/28.jpg" alt="">
						<p>特级大红袍 武夷岩茶 500g散装乌龙茶</p>
					</li>
					<li>
						<img src="../../public/img/29.jpg" alt="">
						<p>黑乌龙茶 特级黑乌龙茶叶 乌龙茶茶叶</p>
					</li>
				</ul>
			</div>
		</div>
</template>

<script>
export default {
    name: 'scroll-top',
    data (){
      return {
        scrollTop: 0,
        time: 0,
        dParams: 20,
        scrollState: 0
      }
    },
    computed:{
      showTop: function(){
        let value = this.scrollTop>200?true:false;
        return value;
      },
    },
    mounted() {
      window.addEventListener('scroll', this.getScrollTop);
    },
    methods: {
      toTop(e) {
        if(!!this.scrollState){
          return;
        }
        this.scrollState = 1;
        e.preventDefault();
        let distance = document.documentElement.scrollTop || document.body.scrollTop;
        let _this = this;
        this.time = setInterval(function(){ _this.gotoTop(_this.scrollTop-_this.dParams) }, 10);
      },
      gotoTop(distance){
        this.dParams += 20;
        distance = distance>0 ? distance : 0;
        document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance;
        if(this.scrollTop < 10){
          clearInterval(this.time);
          this.dParams = 20;
          this.scrollState = 0;
        }
      },
      getScrollTop() {
        this.scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      }
    },
   
  }
</script>

<style scoped>
/* 锚点 */
 .scrollTop {
    position: fixed;
    right: 40px;
    bottom: 80px;
    cursor: pointer;
		z-index: 5;
  }
.scrollTop img{
	width: 70px;
}
/* 轮播 */
  .el-carousel{
    width: 100%;
}
.el-carousel__item h3 {
	
	color: #475669;
	font-size: 14px;
	opacity: 0.75;
	line-height: 150px;
	margin: 0;
}

.el-carousel__item:nth-child(2n) {
		background-image: url("../../public/img/01.jpg")
}

.el-carousel__item:nth-child(2n+1) {
		background-image: url("../../public/img/02.jpg")  
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
/* 茶文化 */
.L2{
	height: 500px;
	background: url("../../public/img/7.png") no-repeat scroll 50% 80px;
}
.L2 h1{
	padding-bottom:150px; 
}
.L2 ul li{
	padding-bottom: 20px;
	font-family: 微软雅黑;
	font-size: 14px;
	color: rgb(51,51,51);
}
/* 背景图1 */
.L3-bgimg{
	height: 415px;
	background-image:url("../../public/img/8.jpg");
	margin-top: 50px; 
	position: relative;
}
.L3-bg{
	position: absolute;
	top:75px;
	left:45%;
	color: #fff;
}
/* 拼图 */
.L4{
	 width: 950px; 
	height: 750px;
	margin: 100px auto;
}
.L4 .l4 {
	float: left;
	padding-bottom:10px; 
	padding-right:20px; 
}
.L4 .l42{
	float: left;
	padding-right:10px; 
}
 /*背景2  */
.L5{
	height: 500px;
	background-image: url("../../public/img/16.jpg");
	position: relative;
}
.L5 img{
	position: absolute;
	top:25%;
	left: 55%;
}
/* 背景3 */
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
/* 背景4 */
.L7{
	height: 500px;
	background-image: url("../../public/img/24.jpg");
	position: relative;
	margin-bottom: 100px;
}
.L7 img{
	position: absolute;
	top:35%;
}
.L8{
	margin-bottom:150px; 
	
}
.L8-img li{
	float: left;
	margin-left:180px; 
	margin-right: -100px;
}
.L8-img li p{
	text-align: left;
}
</style>