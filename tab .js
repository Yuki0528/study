(()=>{

  const $doc = document;
  const $tab = $doc.getElementById('js-tab');
  const $nav = $tab.querySelectorAll('[data-nav]');
  const $content = $tab.querySelectorAll('[data-content]');

  //初期化
  const init = () => {
    $content[0].getElementsByClassName.display = 'block';
  };
init();

//クリックしたら怒るイベント
const handleClick = (e) => {
  e.preventDefault();

  //クリックされたnavとそのdataを取得
const $this = e.target;
const targetVal = $this.dataset.nav;

console.log('targetVal', targetVal);

//対象のコンテンツをアクティブ化

};

//全nav要素に対して関数を適用
let index = 0;
while(index < $nav.length){
  $nav[index].addEventListener('click', (e) => handleClick(e));
  index++;
}


})();