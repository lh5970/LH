const express=require('express');
//引入连接池模块
const pool=require('../../pool.js');
//创建路由器
var router=express.Router();
// 添加路由
// 1.登录路由
router.post('/login1',function(req,res){
  // 1.1获取post请求的数据
  var obj=req.body;
  // 1.2验证数据是否为空
  if(obj.username===''){
    res.send({
      code:401,msg:'uname required'
    });
    return
  }
  if(obj.password===''){
    req.send({
      code:402,msg:'upwd required'
    });
    return;
  }
  // 1.3执行sql语句
  // 查询是否有用户名和密码相同的数据
  pool.query('SELECT * FROM tea_user WHERE uname=? AND upwd=?',
    [obj.username,obj.password],function(err,result){
      if(err) throw err;
      // 判断是否登陆成功
      if(result.length>0){
        res.send({
          code:200,msg:'login suc'
        })
      }else{
        res.send({
          code:201,msg:'username or password error'
        });
      }
    }
  )
});
// 2.注册路由
router.post('/register',function(req,res){
  // 2.1获取post请求数据
  var obj=req.body;
  // 1.2验证每一项是否为空
  if(obj.username===''){
    res.send({
      code:401,msg:'username required'
    });
    return
  }
  // 如果密码为空
  if(obj.password===''){
    res.send({
      code:402,msg:'password required'
    });
    return
  }
  // 1.3执行sql语句
  pool.query('INSERT INTO tea_user SET ？',
    [obj],function(err,result){
      if(err) throw err;
      if(result.affectedRows>0){
        res.send({
          code:200,msg:'reg suc'
        });
      }
    }
  );
});

// 导出路由器对象
module.exports=router;
