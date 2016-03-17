/**
 * Created by Administrator on 2016/3/15.
 */
var div1=document.getElementById('div1');
var div2=document.getElementById('div2');
var div3=document.getElementById('div3');
var div4=document.getElementById('div4');
var div5=document.getElementById('div5');
var div6=document.getElementById('div6');
var link=document.getElementsByTagName('link');
div1.addEventListener('mouseover',f1);
div1.addEventListener('mouseout',f2);
div2.addEventListener('mouseover',f1);
div2.addEventListener('mouseout',f2);
div3.addEventListener('mouseover',f1);
div3.addEventListener('mouseout',f2);
div4.addEventListener('mouseover',f1);
div4.addEventListener('mouseout',f2);
div5.addEventListener('mouseover',f1);
div5.addEventListener('mouseout',f2);
div6.addEventListener('mouseover',f1);
div6.addEventListener('mouseout',f2);
function f1(){
    this.style.backgroundColor='#F7EED6';
    this.style.cursor='pointer';
    this.style.color='lightgreen';
}
function f2(){
    if(link[3].href.substring(link[3].href.lastIndexOf('/'))=='/orange.css') {
        this.style.backgroundColor = 'orange';
    }else{
        this.style.backgroundColor = 'deepskyblue';
    }
    this.style.cursor='default';
    this.style.color='black';
}
//alert(link[3].href.substring('lastIndexOf('/')'));

function changeOrange(){
    link[3].setAttribute('href','css/orange.css');
};
function changeBlue(){
    link[3].setAttribute('href','css/blue.css');
};
