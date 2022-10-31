const quiz = [
{
  question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
  answers: [
    'スーパーファミコン',
    'プレステーション2',
    'ニンテンドーDS',
    'ニンテンドースイッチ'
  ],
  correct: 'ニンテンドーDS'
}, {
  question: 'Nikonが出すミラーレス機のマウントといえば？',
  answers: [
    'Fマウント',
    'RFマウント',
    'αマウント',
    'Zマウント'
  ],
  correct: 'Zマウント'
}, {
  question: 'やっちゃえ？',
  answers: [
    'トヨタ',
    'ニッサン',
    'ホンダ',
    'ベンツ'
  ],
  correct: 'ニッサン'
}
];
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question
  let buttonIndex = 0;
while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
}
}
setupQuiz();

const clickHandler = (e) => { 
  if(quiz[quizIndex].correct === e.target.textContent){
  window.alert('正解!');
  score++;
   } else {
    window.alert('不正解!');
   }

quizIndex++;

if(quizIndex < quizLength){
//問題数がまだあればこちらを実行
setupQuiz();
} else {
//問題数がなければこちらを実行
window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です！');
}

  };

//正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}

