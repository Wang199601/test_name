/**
 *  @Title:  index.js
 *  @Package:  static.views.tjcx.jsjcsjtj
 *  @Description:  监所基础数据统计
 *  @Author:  ChenYang
 *  @Email:  chenyangtongxue@163.com
 *  @Date:  2020/3/5 0005 15:10
 *  @Version:  V1.0.0
 *  @Copyright:  (C)  2020  南京冠霆智能科技有限公司  版权所有
 */
layui.use(['layer', 'table', 'laydate'], function() {
    var $ = layui.jquery,
        table = layui.table,
        laydate = layui.laydate,
        layer = layui.layer;
    laydate.render({
        elem: '#searchTimeInputStart' //指定元素
    });
    laydate.render({
        elem: '#searchTimeInputEnd' //指定元素
    });
    gtFormatDate({
        ele: $("#searchTimeInputStart")
    });
    gtFormatDate({
        ele: $("#searchTimeInputEnd")
    });
    var table1 = table.render({
        elem: '#test3',
        url: newip + 'jgjctj/111',
        toolbar: '#toolbarDemo',
        height: gtSettings.table.height,
        limit: gtSettings.table.limit,
        limits: gtSettings.table.limits,
        text: gtSettings.table.text,
        cellMinWidth: 160,
        page: true,
        cols: [
            [ //表头
                { type: 'numbers', title: '序号' },
                {
                    field: 'tbyf',
                    title: '填报月份',
                    sort: true,
                    templet: function(d) {
                        return d.tbyf.toString()
                    }
                },
                { field: 'dw', title: '单位', sort: true },
                { field: 'hssmc', title: '合设所', sort: true },
                { field: 'tbr', title: '填报人', sort: true },
                { field: 'tbsj', title: '填报时间', sort: true },
                { field: 'jsshr', title: '监所审核人', sort: true },
                { field: 'jsshsj', title: '监所审核时间', sort: true },
                { field: 'jgzdshr', title: '监管支队审核人', sort: true },
                { field: 'rjyl', title: '本所日均押量(不含合设所)', sort: true },
                { field: 'sjrl', title: '本所设计容量(不含合设所)', sort: true },
                { field: 'hssyjyl', title: '与本所合设监所日均押量', sort: true },
                { field: 'hsssjrl', title: '与本所合设监所设计容量', sort: true },
                { field: 'ldbzrs', title: '领导班子人数', sort: true },
                { field: 'ldbzzj', title: '本月领导班子增加', sort: true },
                { field: 'ldbzjs', title: '本月领导班子减少', sort: true },
                { field: 'ldzj', title: '主要领导职级', sort: true },
                { field: 'mjzs', title: '民警总数(含领导班子)', sort: true },
                { field: 'mmjs', title: '男民警数', sort: true },
                { field: 'fmjs', title: '女民警数', sort: true },
                { field: 'mjzj', title: '本月民警增加', sort: true },
                { field: 'mjjs', title: '本月民警减少', sort: true },
                { field: 'zgzs', title: '职工总数', sort: true },
                { field: 'zgdj', title: '本月职工增加', sort: true },
                { field: 'zgdc', title: '本月职工减少', sort: true },
                { field: 'xjzs', title: '协警总数', sort: true },
                { field: 'qtgqryzs', title: '其他工勤人员总数', sort: true },
                { field: 'ywryzs', title: '医务人员总数', sort: true },
                { field: 'jrywryzs', title: '兼任多个医务岗位人员数', sort: true },
                { field: 'yszs', title: '医生总数', sort: true },
                { field: 'mjyss', title: '民警医生数', sort: true },
                { field: 'zgyss', title: '职工医生数', sort: true },
                { field: 'pyyss', title: '聘用医生数', sort: true },
                { field: 'jyzyzgyss', title: '具有执业资格医生数', sort: true },
                { field: 'hszs', title: '护士总数', sort: true },
                { field: 'mjhss', title: '民警护士数', sort: true },
                { field: 'zghss', title: '职工护士数', sort: true },
                { field: 'pyhss', title: '聘用护士数', sort: true },
                { field: 'jyzyzghss', title: '具有执业资格护士数', sort: true },
                { field: 'yjzs', title: '医技人员总数', sort: true },
                { field: 'mjyjs', title: '民警医技人员数', sort: true },
                { field: 'zgyjs', title: '职工医技人员数', sort: true },
                { field: 'pyyjs', title: '职工医技人员数', sort: true },
                { field: 'jyzyzgyjs', title: '具有职业资格医技人员数', sort: true },
                { field: 'lszb', title: '是否落实医生24小时值班', sort: true },
                { field: 'gbxx', title: '到医院跟班学习人次', sort: true },
                { field: 'lszz', title: '医院医生来所坐诊人次', sort: true },
                { field: 'snmz', title: '所内门诊人次', sort: true },
                { field: 'cszl', title: '出所治疗人次', sort: true },
                { field: 'zy', title: '住院人次', sort: true },
                { field: 'zyrytj', title: '在押人员体检人次', sort: true },
                { field: 'yljgxkz', title: '有无医疗机构许可证', sort: true },
                { field: 'yyjjtd', title: '是否有医院急救通道', sort: true },
                { field: 'jgzybf', title: '是否在社会医院设立监管专用病房', sort: true },
                { field: 'bgqzcs', title: '因病危及生命的在押人员变更强制措施数', sort: true },
                { field: 'jsrys', title: '拒收因病不宜羁押人员数', sort: true },
                { field: 'yrjhsf', title: '本所在押人员月人均伙食费(元)(不含合设所)', sort: true },
                { field: 'hsdfczys', title: '本所在押人员伙食费是否纳入地方财政预算(不含合设所)', sort: true },
                { field: 'ylfy', title: '本所在押人员月人均医疗费(元)(不含合设所)', sort: true },
                { field: 'ylfdfczys', title: '本所在押人员医疗费是否纳入地方财政预算(不含合设所)', sort: true },
                { field: 'hssyrjhsf', title: '与本所合设监所在押人员月人均伙食费(元)', sort: true },
                { field: 'hsshsdfczys', title: '与本所合设监所在押人员伙食费是否纳入地方财政预算', sort: true },
                { field: 'hssylfy', title: '与本所合设监所在押人员月人均医疗费(元)', sort: true },
                { field: 'hssylfdfczys', title: '与本所合设监所在押人员医疗费是否纳入地方财政预算', sort: true },
                { field: 'jkszh', title: '是否完成监控数字化改造', sort: true },
                { field: 'jkqfg', title: '监控是否实现全覆盖、无死角,', sort: true },
                { field: 'jkfbl', title: '监控图像分辨率是否达到2CIF以上', sort: true },
                { field: 'jkccsj', title: '监控图像存储时间是否不少于15天', sort: true },
                { field: 'pbqc', title: '配备囚车', sort: true },
                { field: 'qczcsy', title: '囚车能否正常使用', sort: true },
                { field: 'zyzyaf', title: '在押重要案犯数', sort: true },
                { field: 'zdgkdx', title: '重点管控对象数', sort: true },
                { field: 'zysxf', title: '在押死刑犯数', sort: true },
                { field: 'knpc', title: '可能判处15年以上徒刑人数', sort: true },
                { field: 'pcfxyh', title: '排查发现隐患数', sort: true },
                { field: 'ssyh', title: '设施隐患数', sort: true },
                { field: 'glyh', title: '管理隐患·数', sort: true },
                { field: 'yhzg', title: '隐患已整改数', sort: true },
                { field: 'clyzwg', title: '处理欺压、打架等严重违规事件起数', sort: true },
                { field: 'fxsgmt', title: '发现企图脱逃、自杀等事故苗头人次', sort: true },
                { field: 'yxzz', title: '有效制止事故苗头和重大事件起数', sort: true },
                { field: 'gjmj', title: '管教民警数', sort: true },
                { field: 'xlzxs', title: '取得国家职业资格证书的心理咨询师', sort: true },
                { field: 'xlsd', title: '心理疏导人次', sort: true },
                { width: 200, title: '操作', toolbar: '#toolDemo', fixed: 'right' }
            ]
        ]
    });

    // 查询按钮
    $('#chax').click(function() {
        table1.reload({
            where: {
                startTime: $("#searchTimeInputStart").val(),
                endTime: $("#searchTimeInputEnd").val()
            },
            page: {
                curr: 1
            }
        })
    });


    // 新增按钮
    $('#xz').click(function() {
        layer.open({
            type: 2,
            title: gtSettings.open.title('新增'),
            area: gtSettings.open.areal,
            resize: false,
            content: 'xz/index.html',
            btn: ['提交'],
            yes: function(index, layero) {
                $(layero).find("iframe").contents().find('#add').click();
                table1.reload({
                    where: {
                        startTime: $("#searchTimeInputStart").val(),
                        endTime: $("#searchTimeInputEnd").val()
                    },
                    page: {
                        curr: 1
                    }
                })
            },
        });
    });

    // 监听行工具栏
    table.on('tool(test3)', function(obj) {
        var data = obj.data;
        var layEvent = obj.event;
        if (layEvent === 'xq') { //详情
            layer.open({
                type: 2,
                title: gtSettings.open.title('详情'),
                area: gtSettings.open.areal,
                resize: false,
                content: 'xq/index.html?zybh=' + data.zybh
            });
        } else if (layEvent === 'xg') { // 修改
            layer.open({
                type: 2,
                title: gtSettings.open.title('修改'),
                area: gtSettings.open.areal,
                resize: false,
                btn: ['确定'],
                yes: function(index, layero) {
                    $(layero).find("iframe").contents().find("#add").click();
                },
                content: 'xz/index.html?zybh=' + data.zybh
            });
        } else if (layEvent === 'cx') { // 撤销
            sendDeleteAjax(false, gtSettings.open.confirm.cancel, 'jgjctj/deleteJgjctjRecord', false, 'get', {
                zybh: data.zybh
            }, (res) => {
                layer.msg(res.msg);
                if (res.code === 0) {
                    table1.reload({
                        where: {
                            startTime: $("#searchTimeInputStart").val(),
                            endTime: $("#searchTimeInputEnd").val()
                        },
                        page: {
                            curr: 1
                        }
                    })
                }
            });
        }
    });
});