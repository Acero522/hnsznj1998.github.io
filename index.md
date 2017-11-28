<html>
<head>
<style> 
img{border:0}/* 设置图片边框为0 */ 
body{text-align:center;} 
.divcss5{ position:relative;width:550px; height:275px;margin:0 auto} 
.divcss5 a,.divcss5 span{display:none}
.divcss5:hover a.now{cursor:pointer; position:absolute; top:0; width:100%; height:100%; z-index:100; left:0; display:block;}
.divcss5:hover span{ display:block;position:absolute; bottom:0; left:0;color:#FFF;width:550px; z-index:10;height:36px; line-height:36px; background:#000;filter:alpha(opacity=60);-moz-opacity:0.5;opacity: 0.5;}
/* 设置显示文字定位位置，背景半透明(opacity) */ 
 
</style> 
</head>
<script type="text/javascript">
      function contxt() //定义函数
      {
         alert("Yes I am!");
      }
   </script>
<body> 
<style type="text/css">
h1{
    font-size:60px;
    color:green;	
    text-align:center;
}

</style>
<li><a href="https://hnsznj1998.github.io/demo/page1.html" title="test" >how to learn html</a> </li>
 <li><a href="https://aidn.jp/mikutap//" target="_blank" title="fun web" >Fun web</a> </li>
  <li><a href="http://mrdoob.com/lab/javascript/effects/solitaire/?url_type=39&object_type=webpage&pos=1&url_type=39&object_type=webpage&pos=1" target="_blank" title="fun web2" >Fun web NO.2</a> </li>
<h1>This is Welcome page</h1> <br />

<form>
      <input type="button"  value="Are you ready?" onclick="contxt()" /> <br /> 
   </form>


<div class="divcss5" style="background-image:url(https://hnsznj1998.github.io/pic1.jpg)">
<span>DIVCSS5</span>
<a href="https://hnsznj1998.github.io/demo/page1.html" class="now"></a> 
</div> 

</body>
</html>
