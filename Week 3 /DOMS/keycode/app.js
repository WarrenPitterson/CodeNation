function keycode(){
    var key = event.key;
    var code = event.code;
    var which = event.which;
 
    console.log(key,code,which);
document.getElementById('keyvalue').innerHTML=key;
document.getElementById('codevalue').innerHTML=code;
document.getElementById('whichvalue').innerHTML=which;
}