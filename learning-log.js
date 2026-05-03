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
// const logEntries = document.querySelectorAll(".log-entry");

//最新の学習記録を取得
// const latestLog = logEntries[logEntries.length-1];

//すべての目次を取得
// const logLinkEntries = document.querySelectorAll(".log-index-link");

//最新の目次を取得
// const latestLogLink = logLinkEntries[logLinkEntries.length-1];

//学習記録の開閉ボタン
const toggleAllButton = document.getElementById("toggle-all-button");

//20260406学習記録の目次リンク
const indexLink20260406 = document.getElementById("index-link-2026-04-06");
//20260413学習記録の目次リンク
const indexLink20260413 = document.getElementById("index-link-2026-04-13");
//20260420学習記録の目次リンク
const indexLink20260420 = document.getElementById("index-link-2026-04-20");

// //学習記録のボタン
// const toggleLogButtons = [
//   toggleLog20260406Button,
//   toggleLog20260413Button,
//   toggleLog20260420Button
// ];

// //学習記録のコンテンツ
// const logContents = [
//   logContent20260406,
//   logContent20260413,
//   logContent20260420
// ];

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

//main
const main = document.querySelector("main");

// //1週目セクション
// const firstLogSection = document.createElement("section");
// firstLogSection.classList.add("log-entry");
// firstLogSection.id = "logSection20260406";

// //1週目header
// const firstLogHeader = document.createElement("div");
// firstLogHeader.classList.add("log-header");

// //1週目タイトル
// const firstLogTitle = document.createElement("h2");
// firstLogTitle.classList.add("section-title");
// firstLogTitle.id = "firstWeeklyLogDate";
// firstLogTitle.textContent = weeklyLog20260406.date + "の学習記録";

// //1週目ボタン
// const firstToggleButton = document.createElement("button");
// firstToggleButton.classList.add("action-button", "log-toggle-button");
// firstToggleButton.id = "toggle-log-2026-04-06";
// firstToggleButton.textContent = "開く"

// //1週目の学習記録
// const firstLogContent = document.createElement("div");
// firstLogContent.classList.add("log-content","hidden");
// firstLogContent.id = "logContent20260406";

// //1週目やったことタイトル
// const firstLogDoneTitle = document.createElement("h3");
// firstLogDoneTitle.textContent = "今週やったこと"

// //1週目やったことsection-box
// const firstLogSectionBox = document.createElement("div");
// firstLogSectionBox.classList.add("section-box");

// //1週目やったこと
// const firstLogDone = document.createElement("ul");
// firstLogDone.id = "firstWeeklyLogDone";
// setListItems(firstLogDone,weeklyLog20260406.done);

// //１週目学んだことタイトル
// const firstLogLearnedTitle = document.createElement("h3");
// firstLogLearnedTitle.textContent = "学んだこと";

// //1週目学んだことsection-box
// const firstLogLearnedSectionBox = document.createElement("div");
// firstLogLearnedSectionBox.classList.add("section-box");

// //1週目学んだこと
// const firstLogLearned = document.createElement("ul");
// firstLogLearned.id = "firstWeeklyLogLearned";
// setListItems(firstLogLearned,weeklyLog20260406.learned);

// //1週目次にやることタイトル
// const firstLogNextTitle = document.createElement("h3");
// firstLogNextTitle.textContent = "次にやること";

// //1週目次にやることsection-box
// const firstLogNextSectionBox = document.createElement("div");
// firstLogNextSectionBox.classList.add("section-box");

// //1週目次にやること
// const firstLogNext = document.createElement("ul");
// firstLogNext.id = "firstWeeklyLogNext";
// setListItems(firstLogNext,weeklyLog20260406.next);

// //1週目メモタイトル
// const firstLogMemoTitle = document.createElement("h3");
// firstLogMemoTitle.textContent = "メモ";

// //1週目メモsection-box
// const firstLogMemoSectionBox = document.createElement("div");
// firstLogMemoSectionBox.classList.add("section-box");

// //1週目メモ
// const firstLogMemo = document.createElement("p");
// firstLogMemo.id = "firstWeeklyLogMemo";
// setText(firstLogMemo,weeklyLog20260406.memo);

// //2週目セクション
// const secondLogSection = document.createElement("section");
// secondLogSection.classList.add("log-entry");
// secondLogSection.id = "logSection20260413";

// //2週目header
// const secondLogHeader = document.createElement("div");
// secondLogHeader.classList.add("log-header");

// //2週目タイトル
// const secondLogTitle = document.createElement("h2");
// secondLogTitle.classList.add("section-title");
// secondLogTitle.id = "secondWeeklyLogDate";
// secondLogTitle.textContent = weeklyLog20260413.date + "の学習記録";

// //2週目ボタン
// const secondToggleButton = document.createElement("button");
// secondToggleButton.classList.add("action-button", "log-toggle-button");
// secondToggleButton.id = "toggle-log-2026-04-13";
// secondToggleButton.textContent = "開く"

// //2週目の学習記録
// const secondLogContent = document.createElement("div");
// secondLogContent.classList.add("log-content","hidden");
// secondLogContent.id = "logContent20260413";

// //2週目やったことタイトル
// const secondLogDoneTitle = document.createElement("h3");
// secondLogDoneTitle.textContent = "今週やったこと"

// //2週目やったことsection-box
// const secondLogSectionBox = document.createElement("div");
// secondLogSectionBox.classList.add("section-box");

// //2週目やったこと
// const secondLogDone = document.createElement("ul");
// secondLogDone.id = "secondWeeklyLogDone";
// setListItems(secondLogDone,weeklyLog20260413.done);

// //2週目学んだことタイトル
// const secondLogLearnedTitle = document.createElement("h3");
// secondLogLearnedTitle.textContent = "学んだこと";

// //2週目学んだことsection-box
// const secondLogLearnedSectionBox = document.createElement("div");
// secondLogLearnedSectionBox.classList.add("section-box");

// //2週目学んだこと
// const secondLogLearned = document.createElement("ul");
// secondLogLearned.id = "secondLogWeeklyLogLearned";
// setListItems(secondLogLearned,weeklyLog20260413.learned);

// //2週目次にやることタイトル
// const secondLogNextTitle = document.createElement("h3");
// secondLogNextTitle.textContent = "次にやること";

// //2週目次にやることsection-box
// const secondLogNextSectionBox = document.createElement("div");
// secondLogNextSectionBox.classList.add("section-box");

// //2週目次にやること
// const secondLogNext = document.createElement("ul");
// secondLogNext.id = "secondWeeklyLogNext";
// setListItems(secondLogNext,weeklyLog20260413.next);

// //2週目メモタイトル
// const secondLogMemoTitle = document.createElement("h3");
// secondLogMemoTitle.textContent = "メモ";

// //2週目メモsection-box
// const secondLogMemoSectionBox = document.createElement("div");
// secondLogMemoSectionBox.classList.add("section-box");

// //2週目メモ
// const secondLogMemo = document.createElement("p");
// secondLogMemo.id = "secondWeeklyLogMemo";
// setText(secondLogMemo,weeklyLog20260413.memo);

// //3週目セクション
// const thirdLogSection = document.createElement("section");
// thirdLogSection.classList.add("log-entry");
// thirdLogSection.id = "logSection20260420";

// //3週目header
// const thirdLogHeader = document.createElement("div");
// thirdLogHeader.classList.add("log-header");

// //3週目タイトル
// const thirdLogTitle = document.createElement("h2");
// thirdLogTitle.classList.add("section-title");
// thirdLogTitle.id = "thirdWeeklyLogDate";
// thirdLogTitle.textContent = weeklyLog20260420.date + "の学習記録";

// //3週目ボタン
// const thirdToggleButton = document.createElement("button");
// thirdToggleButton.classList.add("action-button", "log-toggle-button");
// thirdToggleButton.id = "toggle-log-2026-04-20";
// thirdToggleButton.textContent = "開く"

// //3週目の学習記録
// const thirdLogContent = document.createElement("div");
// thirdLogContent.classList.add("log-content","hidden");
// thirdLogContent.id = "logContent20260420";

// //3週目やったことタイトル
// const thirdLogDoneTitle = document.createElement("h3");
// thirdLogDoneTitle.textContent = "今週やったこと"

// //3週目やったことsection-box
// const thirdLogSectionBox = document.createElement("div");
// thirdLogSectionBox.classList.add("section-box");

// //3週目やったこと
// const thirdLogDone = document.createElement("ul");
// thirdLogDone.id = "thirdWeeklyLogDone";
// setListItems(thirdLogDone,weeklyLog20260420.done);

// //3週目学んだことタイトル
// const thirdLogLearnedTitle = document.createElement("h3");
// thirdLogLearnedTitle.textContent = "学んだこと";

// //3週目学んだことsection-box
// const thirdLogLearnedSectionBox = document.createElement("div");
// thirdLogLearnedSectionBox.classList.add("section-box");

// //3週目学んだこと
// const thirdLogLearned = document.createElement("ul");
// thirdLogLearned.id = "thirdLogWeeklyLogLearned";
// setListItems(thirdLogLearned,weeklyLog20260420.learned);

// //3週目次にやることタイトル
// const thirdLogNextTitle = document.createElement("h3");
// thirdLogNextTitle.textContent = "次にやること";

// //3週目次にやることsection-box
// const thirdLogNextSectionBox = document.createElement("div");
// thirdLogNextSectionBox.classList.add("section-box");

// //3週目次にやること
// const thirdLogNext = document.createElement("ul");
// thirdLogNext.id = "firstWeeklyLogNext";
// setListItems(thirdLogNext,weeklyLog20260420.next);

// //3週目メモタイトル
// const thirdLogMemoTitle = document.createElement("h3");
// thirdLogMemoTitle.textContent = "メモ";

// //3週目メモsection-box
// const thirdLogMemoSectionBox = document.createElement("div");
// thirdLogMemoSectionBox.classList.add("section-box");

// //3週目メモ
// const thirdLogMemo = document.createElement("p");
// thirdLogMemo.id = "thirdWeeklyLogMemo";
// setText(thirdLogMemo,weeklyLog20260420.memo);

function createWeeklyLog(logData){
 const dateKey = logData.date.replaceAll("-", "");

  //学習記録セクション
  const logSection = document.createElement("section");
  logSection.classList.add("log-entry");
  logSection.id = "logSection" + dateKey;

  //header
  const logHeader = document.createElement("div");
  logHeader.classList.add("log-header");

  //タイトル
  const logTitle = document.createElement("h2");
  logTitle.classList.add("section-title");
  logTitle.id = "WeeklyLogDate";
  logTitle.textContent = logData.date + "の学習記録";

  //トグルボタン
  const toggleButton = document.createElement("button");
  toggleButton.classList.add("action-button", "log-toggle-button");
  toggleButton.id = "toggle-log"+ logData.date;
  toggleButton.textContent = "開く"

  //学習記録
  const logContent = document.createElement("div");
  logContent.classList.add("log-content","hidden");
  logContent.id = "logContent" + dateKey;

  //やったことタイトル
  const logDoneTitle = document.createElement("h3");
  logDoneTitle.textContent = "今週やったこと"

  //やったことsection-box
  const logSectionBox = document.createElement("div");
  logSectionBox.classList.add("section-box");
  
  //やったこと
  const logDone = document.createElement("ul");
  logDone.id = dateKey + "WeeklyLogDone";
  setListItems(logDone,logData.done);
  
  //学んだことタイトル
  const logLearnedTitle = document.createElement("h3");
  logLearnedTitle.textContent = "学んだこと";
  
  //学んだことsection-box
  const logLearnedSectionBox = document.createElement("div");
  logLearnedSectionBox.classList.add("section-box");
  
  //学んだこと
  const logLearned = document.createElement("ul");
  logLearned.id = dateKey + "WeeklyLogLearned";
  setListItems(logLearned,logData.learned);
  
  //次にやることタイトル
  const logNextTitle = document.createElement("h3");
  logNextTitle.textContent = "次にやること";
  
  //次にやることsection-box
  const logNextSectionBox = document.createElement("div");
  logNextSectionBox.classList.add("section-box");
  
  //目次にやること
  const logNext = document.createElement("ul");
  logNext.id = dateKey + "WeeklyLogNext";
  setListItems(logNext,logData.next);
  
  //メモタイトル
  const logMemoTitle = document.createElement("h3");
  logMemoTitle.textContent = "メモ";
  
  //メモsection-box
  const logMemoSectionBox = document.createElement("div");
  logMemoSectionBox.classList.add("section-box");

  //メモ
  const logMemo = document.createElement("p");
  logMemo.id = dateKey + "WeeklyLogMemo";
  setText(logMemo,logData.memo);

  //HTML組み立て
  //header
  logHeader.appendChild(logTitle);
  logHeader.appendChild(toggleButton);
  logSection.appendChild(logHeader);
  
  //やったこと
  logSectionBox.appendChild(logDone);
  logContent.appendChild(logDoneTitle);
  logContent.appendChild(logSectionBox);
  logSection.appendChild(logContent);
  
  //学んだこと
  logLearnedSectionBox.appendChild(logLearned);
  logContent.appendChild(logLearnedTitle);
  logContent.appendChild(logLearnedSectionBox);
  logSection.appendChild(logContent);
  
  //次にやること
  logNextSectionBox.appendChild(logNext);
  logContent.appendChild(logNextTitle);
  logContent.appendChild(logNextSectionBox);
  logSection.appendChild(logContent);
  
  //メモ
  logMemoSectionBox.appendChild(logMemo);
  logContent.appendChild(logMemoTitle);
  logContent.appendChild(logMemoSectionBox);
  logSection.appendChild(logContent);

  return {
    section: logSection,
    button: toggleButton,
    content: logContent
  }
}

const firstLog = createWeeklyLog(weeklyLog20260406);
const secondLog = createWeeklyLog(weeklyLog20260413);
const thirdLog = createWeeklyLog(weeklyLog20260420);

//学習記録のボタン
const toggleLogButtons = [
  firstLog.button,
  secondLog.button,
  thirdLog.button
];

//学習記録のコンテンツ
const logContents = [
  firstLog.content,
  secondLog.content,
  thirdLog.content
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
//renderWeeklyLogs(weeklyLogElements,weeklyLogs);

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
// indexLink(indexLink20260406,logContent20260406,toggleLog20260406Button);
//2026-04-13目次クリック
// indexLink(indexLink20260413,logContent20260413,toggleLog20260413Button);
//2026-04-20目次クリック
// indexLink(indexLink20260420,logContent20260420,toggleLog20260420Button);

//最新の学習記録を強調
// latestLog.classList.add("latest-log");

//最新の目次を強調
// latestLogLink.classList.add("latest-log-link");

// //HTML組み立て
// //1週目header
// firstLogHeader.appendChild(firstLogTitle);
// firstLogHeader.appendChild(firstToggleButton);
// firstLogSection.appendChild(firstLogHeader);

// //1週目やったこと
// firstLogSectionBox.appendChild(firstLogDone);
// firstLogContent.appendChild(firstLogDoneTitle);
// firstLogContent.appendChild(firstLogSectionBox);
// firstLogSection.appendChild(firstLogContent);

// //1週目学んだこと
// firstLogLearnedSectionBox.appendChild(firstLogLearned);
// firstLogContent.appendChild(firstLogLearnedTitle);
// firstLogContent.appendChild(firstLogLearnedSectionBox);
// firstLogSection.appendChild(firstLogContent);

// //1週目次にやること
// firstLogNextSectionBox.appendChild(firstLogNext);
// firstLogContent.appendChild(firstLogNextTitle);
// firstLogContent.appendChild(firstLogNextSectionBox);
// firstLogSection.appendChild(firstLogContent);

// //1週目メモ
// firstLogMemoSectionBox.appendChild(firstLogMemo);
// firstLogContent.appendChild(firstLogMemoTitle);
// firstLogContent.appendChild(firstLogMemoSectionBox);
// firstLogSection.appendChild(firstLogContent);

// //2週目header
// secondLogHeader.appendChild(secondLogTitle);
// secondLogHeader.appendChild(secondToggleButton);
// secondLogSection.appendChild(secondLogHeader);

// //2週目やったこと
// secondLogSectionBox.appendChild(secondLogDone);
// secondLogContent.appendChild(secondLogDoneTitle);
// secondLogContent.appendChild(secondLogSectionBox);
// secondLogSection.appendChild(secondLogContent);

// //2週目学んだこと
// secondLogLearnedSectionBox.appendChild(secondLogLearned);
// secondLogContent.appendChild(secondLogLearnedTitle);
// secondLogContent.appendChild(secondLogLearnedSectionBox);
// secondLogSection.appendChild(secondLogContent);

// //2週目次にやること
// secondLogNextSectionBox.appendChild(secondLogNext);
// secondLogContent.appendChild(secondLogNextTitle);
// secondLogContent.appendChild(secondLogNextSectionBox);
// secondLogSection.appendChild(secondLogContent);

// //2週目メモ
// secondLogMemoSectionBox.appendChild(secondLogMemo);
// secondLogContent.appendChild(secondLogMemoTitle);
// secondLogContent.appendChild(secondLogMemoSectionBox);
// secondLogSection.appendChild(secondLogContent);

// //3週目header
// thirdLogHeader.appendChild(thirdLogTitle);
// thirdLogHeader.appendChild(thirdToggleButton);
// thirdLogSection.appendChild(thirdLogHeader);

// //3週目やったこと
// thirdLogSectionBox.appendChild(thirdLogDone);
// thirdLogContent.appendChild(thirdLogDoneTitle);
// thirdLogContent.appendChild(thirdLogSectionBox);
// thirdLogSection.appendChild(thirdLogContent);

// //3週目学んだこと
// thirdLogLearnedSectionBox.appendChild(thirdLogLearned);
// thirdLogContent.appendChild(thirdLogLearnedTitle);
// thirdLogContent.appendChild(thirdLogLearnedSectionBox);
// thirdLogSection.appendChild(thirdLogContent);

// //3週目次にやること
// thirdLogNextSectionBox.appendChild(thirdLogNext);
// thirdLogContent.appendChild(thirdLogNextTitle);
// thirdLogContent.appendChild(thirdLogNextSectionBox);
// thirdLogSection.appendChild(thirdLogContent);

// //3週目メモ
// thirdLogMemoSectionBox.appendChild(thirdLogMemo);
// thirdLogContent.appendChild(thirdLogMemoTitle);
// thirdLogContent.appendChild(thirdLogMemoSectionBox);
// thirdLogSection.appendChild(thirdLogContent);

main.appendChild(firstLog.section);
main.appendChild(secondLog.section);
main.appendChild(thirdLog.section);

//20260406の学習記録の表示非表示
toggleLog(firstLog.button,firstLog.content,firstLog.section);
//20260413の学習記録の表示非表示
toggleLog(secondLog.button,secondLog.content,secondLog.section);
//20260420の学習記録の表示非表示
toggleLog(thirdLog.button,thirdLog.content,thirdLog.section);

//すべての学習記録を取得
const logEntries = document.querySelectorAll(".log-entry");

//最新の学習記録を取得
const latestLog = logEntries[logEntries.length-1];

//すべての目次を取得
const logLinkEntries = document.querySelectorAll(".log-index-link");

//最新の目次を取得
const latestLogLink = logLinkEntries[logLinkEntries.length-1];

//最新の学習記録を強調
latestLog.classList.add("latest-log");

//最新の目次を強調
latestLogLink.classList.add("latest-log-link");

//2026-04-06目次クリック
indexLink(indexLink20260406,firstLog.content,firstLog.button);
//2026-04-13目次クリック
indexLink(indexLink20260413,secondLog.content,secondLog.button);
//2026-04-20目次クリック
indexLink(indexLink20260420,thirdLog.content,thirdLog.button);