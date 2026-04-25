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

//20260413の学習記録の目次リンク
const indexLink20260413 = document.getElementById("index-link-2026-04-13");

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

//学習記録
const weeklyLogs = [
  weeklyLog20260406,
  weeklyLog20260413
];


//一括開閉ボタンの文言変更関数
function updateToggleAllButtonText(){
  const allOpen =
  !(logContent20260406.classList.contains("hidden")) &&
  !(logContent20260413.classList.contains("hidden"));

  if(allOpen){
    toggleAllButton.textContent = "すべての記録を閉じる";
  }else{
    toggleAllButton.textContent = "すべての記録を開く";
  }
}

//20260406の学習記録の表示非表示
toggleLog20260406Button.addEventListener("click",function(){
  logContent20260406.classList.toggle("hidden");

  if(logContent20260406.classList.contains("hidden")){
    toggleLog20260406Button.textContent = "開く";
  }else{
    toggleLog20260406Button.textContent = "閉じる";
    logSection20260406.scrollIntoView({
      behavior: 'smooth'
    });
  }  
  updateToggleAllButtonText();
});

//20260413の学習記録の表示非表示
toggleLog20260413Button.addEventListener("click",function(){
  logContent20260413.classList.toggle("hidden");

  if(logContent20260413.classList.contains("hidden")){
    toggleLog20260413Button.textContent = "開く";
  }else{
    toggleLog20260413Button.textContent = "閉じる";
    logSection20260413.scrollIntoView({
      behavior: 'smooth'
    });
  } 
  updateToggleAllButtonText();
});

//学習記録の開閉
toggleAllButton.addEventListener("click",function(){
  const allOpen =
  !(logContent20260406.classList.contains("hidden")) &&
  !(logContent20260413.classList.contains("hidden"));

  if(allOpen){
    logContent20260406.classList.add("hidden");
    logContent20260413.classList.add("hidden");

    toggleLog20260406Button.textContent = "開く";
    toggleLog20260413Button.textContent = "開く";
  }else{
    logContent20260406.classList.remove("hidden");
    logContent20260413.classList.remove("hidden");

    toggleLog20260406Button.textContent = "閉じる";
    toggleLog20260413Button.textContent = "閉じる";    
  }
  updateToggleAllButtonText(); 
});

//2026-04-06目次クリック
indexLink20260406.addEventListener("click", function(){
  if(logContent20260406.classList.contains("hidden")){
    logContent20260406.classList.remove("hidden");
    toggleLog20260406Button.textContent = "閉じる";
  }
  updateToggleAllButtonText();
});

//2026-04-13の目次クリック
indexLink20260413.addEventListener("click", function(){
  if(logContent20260413.classList.contains("hidden")){
    logContent20260413.classList.remove("hidden");
    toggleLog20260413Button.textContent = "閉じる";
  }
  updateToggleAllButtonText();
});

//最新の学習記録を強調
latestLog.classList.add("latest-log");

//最新の目次を強調
latestLogLink.classList.add("latest-log-link");