<template>
	<!-- 导航条子组件 -->
	<div>
		<el-row :gutter="20">
			<el-col :span="6">
				<div class="grid-content bg-purple">
					<router-link to="/About">
						<img src="../../public/img/1.jpg" alt="">
					</router-link>
					<router-link to="/About">
						<h1>叁合茶社</h1>	
					</router-link>
				</div></el-col>
			<el-col :span="3">
				<div class="grid-content bg-purple">
					<router-link to="/About">
						<div class="mysize">首页</div>
					</router-link>
				</div></el-col>
			<el-col :span="3">
				<div class="grid-content bg-purple">
					<router-link to="/Product">
						<div class="mysize">所有产品</div>
					</router-link>
				</div></el-col>
			<el-col :span="3">
				<div class="grid-content bg-purple">
					<router-link to="/News">
						<div class="mysize">行业资讯</div>
					</router-link>
				</div></el-col>
			<el-col :span="3">
				<div class="grid-content bg-purple">
					<router-link to="/Tea">
						<div class="mysize">茶文化</div>
					</router-link>	
				</div></el-col>
			<el-col :span="3">
				<div class="grid-content bg-purple">
					<router-link to="/Brand">
						<div class="mysize">品牌故事</div>
					</router-link>
				</div></el-col>
			<el-col :span="3">
				<div class="grid-content bg-purple">
					<router-link to="/Login">
						<div class="mysize">登录注册</div>
					</router-link>	
				</div></el-col>
		</el-row>
	</div>
</template>


<style scoped>
	  .el-col {
	    border-radius: 4px;
	  }
		.el-col img{
			width:100px;
			height:100px;
			float: left;
			margin-left: 100px;
		}
		.el-col h1{
			float: left;
			line-height: 100px;
			color: #000;
		}
		.mysize{
			width: 100px;
			height: 100px;
			line-height: 100px;
			color:#000;
		}
	  .mysize:hover{
			line-height: 100px;
			background: #4ab344;
			color: #fff;
		}

</style>
