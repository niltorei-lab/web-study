//20260406のボタン
const toggleLog20260406Button = document.getElementById("toggle-log-2026-04-06");
//20260406のセクション
const logSection20260406 = document.getElementById("logSection20260406");
//20260406の学習記録
const logContent20260406 = document.getElementById("logContent20260406");

//20260413のボタン
const toggleLog20260413Button = document.getElementById("toggle-log-2026-04-13");
//20260413のセクション
const logSection20260413 = document.getElementById("logSection20260413");
//20260413の学習記録
const logContent20260413 = document.getElementById("logContent20260413");

//20260420のボタン
const toggleLog20260420Button = document.getElementById("toggle-log-2026-04-20");
//20260420のセクション
const logSection20260420 = document.getElementById("logSection20260420");
//20260420の学習記録
const logContent20260420 = document.getElementById("logContent20260420");

//すべての学習記録を取得
const logEntries = document.querySelectorAll(".log-entry");

//最新の学習記録を取得
const latestLog = logEntries[logEntries.length-1];

//すべての目次を取得
const logLinkEntries = document.querySelectorAll(".log-index-link");

//最新の目次を取得
const latestLogLink = logLinkEntries[logLinkEntries.length-1];

//学習記録の開閉ボタン
const toggleAllButton = document.getElementById("toggle-all-button");

//20260406学習記録の目次リンク
const indexLink20260406 = document.getElementById("index-link-2026-04-06");
//20260413学習記録の目次リンク
const indexLink20260413 = document.getElementById("index-link-2026-04-13");
//20260420学習記録の目次リンク
const indexLink20260420 = document.getElementById("index-link-2026-04-20");

//学習記録のボタン
const toggleLogButtons = [
  toggleLog20260406Button,
  toggleLog20260413Button,
  toggleLog20260420Button
];

//学習記録のコンテンツ
const logContents = [
  logContent20260406,
  logContent20260413,
  logContent20260420
];

//1週目の学習記録
const weeklyLog20260406 = {
  date: "2026-04-06",
  done: ["HTML/CSS/JavaScriptの復習","自己紹介ページの調整","GitHubへのPush"] ,
  learned: ["小さい修正でも見た目は大きく変わる","CSSの余白はどこで管理するかが大事","レスポンシブ対応では自然さを優先する"],
  next:["学習記録のページの見た目を整える","必要な項目を少しずつ追加する"],
  memo:"小さく作って、使いながら育てていく"
};

//2週目の学習記録
const weeklyLog20260413 = {
  date: "2026-04-13",
  done: ["learning-log.htmlの作成","index.htmlとのリンク追加","ボタンデザインの追加"] ,
  learned: ["ページ同士をリンクでつなげられる","静的ページでも少しずつ育てていける","共通のCSSを使うと見た目をそろえやすい"],
  next:["学習ログを増やす形に変える","表示・非表示の機能を考える"],
  memo:"まずは記録を増やせる形を作ることを優先する"
};

//3週目の学習記録
const weeklyLog20260420 = {
  date: "2026-04-20",
  done: ["最新の学習記録と目次の自動強調","開閉ボタンの押下時スクロール処理","学習記録をJSデータから画面に表示"] ,
  learned: ["役割ごとに動きを設定する","JavaScripitのオブジェクトと配列の違い","個別に処理⇒関数化"],
  next:["週ごとの表示記録をさらにまとめる","3週目の学習記録を追加する"],
  memo:"見た目を整えるだけでなくデータの持ち方とその表示まで考えられた"
}

//学習記録
const weeklyLogs = [
  weeklyLog20260406,
  weeklyLog20260413,
  weeklyLog20260420
];

//1週目の記録を取得
const firstWeeklyLog = weeklyLogs[0];

//2週目の記録を取得
const secondWeeklyLog = weeklyLogs[1];

//3週目の記録を取得
const thirdWeeklyLog = weeklyLogs[2];

//1週目の学習記録の表示先要素
const firstWeeklyLogElements = {
  date: document.getElementById("firstWeeklyLogDate"),
  done: document.getElementById("firstweeklyLogDone"),
  learned: document.getElementById("firstWeeklyLogLearned"),
  next: document.getElementById("firstWeeklyLogNext"),
  memo: document.getElementById("firstWeeklyLogMemo")
};

//2週目の学習記録の表示先要素
const secondWeeklyLogElements = {
  date: document.getElementById("secondWeeklyLogDate"),
  done: document.getElementById("secondweeklyLogDone"),
  learned: document.getElementById("secondWeeklyLogLearned"),
  next: document.getElementById("secondWeeklyLogNext"),
  memo: document.getElementById("secondWeeklyLogMemo")
};

//3週目の学習記録の表示要素
const thirdWeeklyLogElements = {
  date: document.getElementById("thirdWeeklyLogDate"),
  done: document.getElementById("thirdweeklyLogDone"),
  learned: document.getElementById("thirdWeeklyLogLearned"),
  next: document.getElementById("thirdWeeklyLogNext"),
  memo: document.getElementById("thirdWeeklyLogMemo")
};

//表示先要素
const weeklyLogElements = [
  firstWeeklyLogElements,
  secondWeeklyLogElements,
  thirdWeeklyLogElements
];

//リスト表示
function setListItems(target,list){
   for(let i = 0; i < list.length; i++){
   const li = document.createElement("li");
   li.textContent = list[i];
   target.appendChild(li);
  };
};

//テキスト表示
function setText(target,element){
  target.textContent = element;
};

//複数週の学習記録表示
function renderWeeklyLogs(elements, weeklyLogs){
  for (let i = 0; i < weeklyLogs.length; i++){
      //タイトルをセット
      setText(elements[i].date, weeklyLogs[i].date + "の学習記録");  
      //やったことをセット
      setListItems(elements[i].done, weeklyLogs[i].done);
      //学んだことをセット
      setListItems(elements[i].learned, weeklyLogs[i].learned);
      //次にやることをセット
      setListItems(elements[i].next, weeklyLogs[i].next);
      //メモをセット
      setText(elements[i].memo, weeklyLogs[i].memo);  
  }
};

//学習記録をセット
renderWeeklyLogs(weeklyLogElements,weeklyLogs);

//学習記録の表示字非表示
function toggleLog(button,logContent,logSection){
  button.addEventListener("click",function(){
  logContent.classList.toggle("hidden");

  if(logContent.classList.contains("hidden")){
    button.textContent = "開く";
  }else{
    button.textContent = "閉じる";
    logSection.scrollIntoView({
      behavior: 'smooth'
    });
  }  
  updateToggleAllButtonText(logContents);
  });
}

//20260406の学習記録の表示非表示
toggleLog(toggleLog20260406Button,logContent20260406,logSection20260406);

//20260413の学習記録の表示非表示
toggleLog(toggleLog20260413Button,logContent20260413,logSection20260413);

//20260420の学習記録の表示非表示
toggleLog(toggleLog20260420Button,logContent20260420,logSection20260420);

//一括開閉ボタンの文言変更関数
function updateToggleAllButtonText(logContents){
  let allOpen = true;
  for(let i = 0; i < logContents.length; i++){
    if(logContents[i].classList.contains("hidden")){
        allOpen = false;
    }        
  }

  if(allOpen){
    toggleAllButton.textContent = "すべての記録を閉じる";
  }else{
    toggleAllButton.textContent = "すべての記録を開く";
  }
}

//学習記録の一括開閉関数
function toggleAll(toggleLogButtons,logContents){
  toggleAllButton.addEventListener("click",function(){
    let allOpen = true;

    for(let i = 0; i < logContents.length; i++){
      if(logContents[i].classList.contains("hidden")){
        allOpen = false;
      }        
    }

    if(allOpen){
      for(let i = 0; i < logContents.length; i++){
        logContents[i].classList.add("hidden");
        toggleLogButtons[i].textContent = "開く"
      }
    }else{
      for(let i = 0; i < logContents.length; i++){
        logContents[i].classList.remove("hidden");
        toggleLogButtons[i].textContent = "閉じる"
      }
    }
   updateToggleAllButtonText(logContents); 
 });   
};

//学習記録の一括開閉
toggleAll(toggleLogButtons,logContents);

//目次クリック
function indexLink(indexLink,logContent,button){
  indexLink.addEventListener("click", function(){
    if(logContent.classList.contains("hidden")){
      logContent.classList.remove("hidden");
      button.textContent = "閉じる";
    }
    updateToggleAllButtonText(logContents);
  });
}

//2026-04-06目次クリック
indexLink(indexLink20260406,logContent20260406,toggleLog20260406Button);
//2026-04-13目次クリック
indexLink(indexLink20260413,logContent20260413,toggleLog20260413Button);
//2026-04-20目次クリック
indexLink(indexLink20260420,logContent20260420,toggleLog20260420Button);

//最新の学習記録を強調
latestLog.classList.add("latest-log");

//最新の目次を強調
latestLogLink.classList.add("latest-log-link");