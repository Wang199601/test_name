/**
 *  @Title:  index.js
 *  @Package:  static.views.tjcx.jsjcsjtj.xz
 *  @Description:  详情
 *  @Author:  ChenYang
 *  @Email:  chenyangtongxue@163.com
 *  @Date:  2020/3/5 0005 15:30
 *  @Version:  V1.0.0
 *  @Copyright:  (C)  2020  南京冠霆智能科技有限公司  版权所有
 */




layui.use(['layer','form'], function () {
    var $ = layui.jquery,
        layer = layui.layer;
        form = layui.form;

    sendReadAjax('jgjctj/findJgjctjRecordByZybh', true, 'get'
        , { zybh: gtGetQueryString("zybh") }
        , (res) => {
            if (res.code === 0 && res.data!==null && res.data!=="") {
                setAllDataForSame(res.data);
            } else {
                layer.msg(res.msg)
            }
    });

});