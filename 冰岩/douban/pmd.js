

window.onresize=function () {
    var oUl=document.getElementsByTagName('ul')[0];
    var lis=oUl.getElementsByTagName('li');
    oUl.style.width=lis.length*lis[0].offsetWidth+'px';
    var left=null;

}
window.onload=function () {
    var oUl=document.getElementsByTagName('ul')[0];
    var lis=oUl.getElementsByTagName('li');
    oUl.innerHTML+=oUl.innerHTML;
    oUl.style.width=lis.length*lis[0].offsetWidth+'px';
    var left=null;

    var timer=setInterval(function clock(){
        left-=2;
        if(left<-oUl.offsetWidth/2){
            left=0;
        }
        if(left % lis[0].offsetWidth == 0){
            clearInterval(timer);
            setTimeout(function(){timer=setInterval(clock,5);},1000);
        }
        oUl.style.left=left+'px'
    },5);
}
