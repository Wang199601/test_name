/**
 *  @Title:  index.js
 *  @Package:  static.views.tjcx.jsjcsjtj.xz
 *  @Description:  新增
 *  @Author:  ChenYang
 *  @Email:  chenyangtongxue@163.com
 *  @Date:  2020/3/5 0005 15:30
 *  @Version:  V1.0.0
 *  @Copyright:  (C)  2020  南京冠霆智能科技有限公司  版权所有
 */
var zybh = gtGetQueryString("zybh"),
    dict = JSON.parse(localStorage.getItem('dict'));
layui.use(['layer', 'laydate', 'form'], function () {
    var $ = layui.jquery,
        layer = layui.layer,
        laydate = layui.laydate,
        form = layui.form;

    var hssMap = {};

    loadSelectForKV('ldzj', dict.data.gbzwjb.data, 'item1', 'item1');
    sendReadAjax('SysJsjgxx/selectAreaAllJsjg', true, 'get', {}
    , (res) => {
        if (res.code === 0) {
            loadMap(hssMap,res.data,'jsbh','jsmc');
            loadSelectForKV('hssbh',res.data,'jsbh','jsmc');
            form.render();
        } else {
            layer.msg(res.msg);
        }
    });
    form.render();

    laydate.render({
        elem: '[name="tbyf"]'
        , trigger: 'click'
        , type: 'month'
        , value: new Date()
    });

    $('#tbr').val(localStorage.getItem('mjxm'));
    $('#dw').val(localStorage.getItem('jgmc'));

    if (zybh) {
        sendReadAjax('jgjctj/findJgjctjRecordByZybh', true, 'get'
            , { zybh: zybh }
            , (res) => {
            if (res.code === 0) {
                for (let i in res.data) {
                    if (res.data[i] === 'X') {
                        delete res.data[i];
                    }
                }
                form.val('main', res.data);
            } else {
                layer.msg(res.msg)
            }
        })
    }else{
        sendReadAjax('jgjctj/getLastMonData', true, 'get', {}, (res) => {
            if (res.code === 0) {
                var data = res.data[0];
                for (let i in data) {
                    if (data[i] === 'X') {
                        delete data[i];
                    }
                }
                form.val('main', data);
                form.render();
            } else {
                layer.msg(res.msg)
            }
        })
    }

    // 实际操作区域
    form.on('submit(add)', (obj) => {
        let fxList = ['hssyrjhsf', 'hssylfy', 'lszb', 'yljgxkz', 'yyjjtd', 'jgzybf', 'hsdfczys', 'ylfdfczys', 'jkszh', 'jkqfg', 'jkfbl', 'jkccsj', 'qczcsy', 'hsshsdfczys', 'hssylfdfczys']
        for (let i in obj.field) {
            if (obj.field[i] === 'on') {
                obj.field[i] = '√'
            }
        }
        for (let i = 0; i < fxList.length; i++) {
            if (!obj.field[fxList[i]]) {
                obj.field[fxList[i]] = 'X';
            }
        }
        let url ='jgjctj/addJgjctjRecord'
        if (zybh) {
            obj.field.zybh = zybh;
            url ='jgjctj/updateJgjctjRecord'
        }
        obj.field.hssmc = hssMap[obj.field.hssbh];
        sendWriteAjax(url, true, 'post', obj.field
            , (res) => {
                if (res.code === 0) {
                    var thisPageIndex = parent.layer.getFrameIndex(window.name);
                    parent.layer.close(thisPageIndex);
                    parent.layui.table.reload('test3');
                }
                parent.layer.msg(res.msg)
        })
    });


});