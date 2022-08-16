
// import { Base64 } from 'js-base64';
const CHG_ID = 'chgFile';
const PR_ID = 'PRFile';

const chgInput = document.querySelector('#chgFile');
const prInput = document.querySelector('#PRFile');

const b64 = document.querySelector('#b64');
const rep = document.querySelector('#rep');
const opt = document.querySelector('#opt');
const inp = document.querySelector('#inp');
var FUCKADOBE = new Uint8Array([102,15,0,0,0,0,0,0])

function clicked(){

var chgbin = Base64.toUint8Array(b64.value)
var chgrep = ((chgbin.toString()).replace('102,15,0,0,0,0,0,0,','')).replace(/,0/g,'')
console.log(chgrep)
var tranbin = new Uint8Array (chgrep.split(","))
var tranutf8 = Base64.decode(Base64.fromUint8Array(tranbin))
var replace = tranutf8.replace('@', rep.value)
var encode = (Base64.encode(replace))
var encode2 = new Uint8Array(((Base64.toUint8Array(encode)).join(',,')).split(","))
var newarray = new Uint8Array(encode2.length+FUCKADOBE.length+1)
newarray.set(FUCKADOBE)
newarray.set(encode2,FUCKADOBE.length)
var encode3 = Base64.fromUint8Array(newarray)
inp.value=b64.value
document.getElementById('inp2').value=tranutf8
document.getElementById('inp3').value=chgbin
opt.value= encode3
document.getElementById('opt2').value=replace
document.getElementById('opt3').value=Base64.toUint8Array(opt.value)
// if (1===1){
//     document.getElementById('check').innerHTML="TRUE"   
// }else{
//     document.getElementById('check').innerHTML="False"
// }
}

// function clicked2(){
//     const decode = document.getElementById('inp2').value
//     document.getElementById('enc').value=Base64.encode(decode)
//     document.getElementById('enc2').value=Base64.toUint8Array(document.getElementById('enc').value)

// }
// function clicked3(){
//     const decode = new Uint8Array(document.getElementById('bin').value.split(","))
//     console.log(decode)
//     document.getElementById('bin2').value=Base64.fromUint8Array(decode)
    

// }