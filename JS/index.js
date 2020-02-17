$(document).scroll(function(){// 加载完成后执行
    //获取当前滚轮高度
    var distance = $(document).scrollTop();
    //通过判断高度切换nav样式
    if(distance<600){
        $("nav").removeClass('nav');
        // $("ul li:nth-child(1) a").removeClass('liColor')
    }else if(distance>=600){
        $("nav").addClass('nav');
        // $("ul li:nth-child(1) a").addClass('liColor')
    }

    /*if(distance<600){
        // $("nav").removeClass('nav');
        $("ul li a").removeClass('liColor');
    }else if(1110>distance>=600){
        // $("nav").addClass('nav');
        $("ul li:nth-child(1) a").addClass('liColor');
    }else if(distance>=1110){
        // $("nav").addClass('nav');
        $("ul li:nth-child(1) a").removeClass('liColor');
        $("ul li:nth-child(2) a").addClass('liColor');
    }*/

    //通过判断高度播放动画
    if(distance >= 2800) {
        $(".bgLeft").addClass('bgDongHua80');
        $(".bgLeft75").addClass('bgDongHua75');
        $(".bgLeft70").addClass('bgDongHua70');
    }
    console.log(distance)   //添加某某css
})