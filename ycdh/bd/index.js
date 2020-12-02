/*layui.use(['form','layer'],function(){
	 var layer = layui.layer,
     form = layui.form,
     layer = parent.layer === undefined ? layui.layer : top.layer;
})*/
layui.use(['upload','form','layer'],function(){
    var form = layui.form,
           layer = parent.layer === undefined ? layui.layer : top.layer;



				 upload = layui.upload;
				upload.render({
					elem: '#test1',
					url: '/api/upload/',
					auto: false, //选择文件后不自动上传
					bindAction: '#testListAction', //指向一个按钮触发上传
					multiple: 'true', //允许多张图片上传
					number: '3', //最多上传图片
					done: function(res) {
						//上传完毕回调
						console.log("上传成功");
					},
					error: function() {
						//请求异常回调
						console.log("上传失败")
					},
					choose: function(obj) {
						//将每次选择的文件追加到文件队列
						var files = obj.pushFile();
						var imgarr = [];
						obj.preview(function(index, file, result) {
						
							var update = document.getElementById('test');
							var img = document.createElement("img");
							var div = document.createElement("div");
							div.setAttribute("class", "layui-col-xs6");
							img.setAttribute("id", "newImg");
							img.setAttribute("style", "width: 100%;height:100%");
							img.src = result;
							div.appendChild(img);　　　　
							update.appendChild(div);　　　	
						});
						
					}
				});
			});
	