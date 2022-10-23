//変数
let nakayou = 'stay hungry stay foolish';

//定数
const wecando = 'iphone14pro';

//配列
const inoki = ['いち','に','さん'];

//ループ文
//let index = 0;
//while(index < inoki.length){　//=3
    //繰り返したい命令
//   console.log(inoki[index]);
//index++; 
//}

//ifelse文
//if(inoki.length > 2){
//console.log('ボンバイエ！');
//}  else{
//    console.log('ボンバ..')
//}

//関数
const test = (arg) => {if(inoki.length > arg){
    console.log('ボンバイエ！');
    }  else{
        console.log('ボンバ..')
    } };

    test (1);
    test (2);
    test (3);

    //オブジェクト
    const nakayou2 = {
        color: 'pink',
        size: 'large',
        purfume: 'mint',
        gotoilet: () => {
            console.log('hello world');
        }
    };

//window.alert('カエルの歌が聞こえてくるよ');

document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
    window.alert('カエルの歌がきこえてくるよ');
});