//学習記録の開閉ボタン
const toggleAllButton = document.getElementById("toggle-all-button");

//目次リンク
const logIndexList = document.getElementById("logIndexList");

//main
const main = document.querySelector("main");

//学習記録のHTML要素を作成
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
  const title = document.createElement("h2");
  title.classList.add("section-title");
  title.id = "WeeklyLogDate";
  title.textContent = logData.date + "の学習記録";

  //トグルボタン
  const toggleButton = document.createElement("button");
  toggleButton.classList.add("action-button", "log-toggle-button");
  toggleButton.id = "toggle-log-"+ logData.date;
  toggleButton.textContent = "開く";

  //学習記録
  const logContent = document.createElement("div");
  logContent.classList.add("log-content","hidden");
  logContent.id = "logContent" + dateKey;

  //やったことタイトル
  const doneTitle = document.createElement("h3");
  doneTitle.textContent = "今週やったこと"

  //やったことsection-box
  const doneBox = document.createElement("div");
  doneBox.classList.add("section-box");
  
  //やったこと
  const done = document.createElement("ul");
  done.id = dateKey + "WeeklyLogDone";
  setListItems(done,logData.done);
  
  //学んだことタイトル
  const learnedTitle = document.createElement("h3");
  learnedTitle.textContent = "学んだこと";
  
  //学んだことsection-box
  const learnedBox = document.createElement("div");
  learnedBox.classList.add("section-box");
  
  //学んだこと
  const learned = document.createElement("ul");
  learned.id = dateKey + "WeeklyLogLearned";
  setListItems(learned,logData.learned);
  
  //次にやることタイトル
  const nextTitle = document.createElement("h3");
  nextTitle.textContent = "次にやること";
  
  //次にやることsection-box
  const nextBox = document.createElement("div");
  nextBox.classList.add("section-box");
  
  //次にやること
  const next = document.createElement("ul");
  next.id = dateKey + "WeeklyLogNext";
  setListItems(next,logData.next);
  
  //メモタイトル
  const memoTitle = document.createElement("h3");
  memoTitle.textContent = "メモ";
  
  //メモsection-box
  const memoBox = document.createElement("div");
  memoBox.classList.add("section-box");

  //メモ
  const memo = document.createElement("p");
  memo.id = dateKey + "WeeklyLogMemo";
  setText(memo,logData.memo);

  //HTML組み立て
  //header
  logHeader.appendChild(title);
  logHeader.appendChild(toggleButton);
  logSection.appendChild(logHeader);
  
  //やったこと
  doneBox.appendChild(done);
  logContent.appendChild(doneTitle);
  logContent.appendChild(doneBox);
  logSection.appendChild(logContent);
  
  //学んだこと
  learnedBox.appendChild(learned);
  logContent.appendChild(learnedTitle);
  logContent.appendChild(learnedBox);
  logSection.appendChild(logContent);
  
  //次にやること
  nextBox.appendChild(next);
  logContent.appendChild(nextTitle);
  logContent.appendChild(nextBox);
  logSection.appendChild(logContent);
  
  //メモ
  memoBox.appendChild(memo);
  logContent.appendChild(memoTitle);
  logContent.appendChild(memoBox);
  logSection.appendChild(logContent);

  return {
    section: logSection,
    button: toggleButton,
    content: logContent
  }
}

//目次リンクのHTMLの要素の作成
function createIndexLink(logData){
  const dateKey = logData.date.replaceAll("-", "");

  const indexItem = document.createElement("li");

  const indexLink = document.createElement("a");
  indexLink.classList.add("log-index-link");
  indexLink.id = "index-link" + dateKey;
  indexLink.href = "#logSection" + dateKey;
  indexLink.textContent = logData.date + "の学習記録";

  //HTMLの組み立て
  indexItem.appendChild(indexLink);
  logIndexList.appendChild(indexItem);
  
  return indexLink;
}

//学習記録データ → 画面表示用の要素セット
const logs = weeklyLogs.map(logData => createWeeklyLog(logData));

//目次リンク⇒画面表示用の要素にセット
const indexLinks = weeklyLogs.map(logData => createIndexLink(logData));

//学習記録のボタン
const toggleButtons = logs.map(log => log.button);

//学習記録のコンテンツ
const contents = logs.map(log => log.content);

//リスト表示
function setListItems(target, list){
   for(let i = 0; i < list.length; i++){
   const li = document.createElement("li");
   li.textContent = list[i];
   target.appendChild(li);
  };
};

//テキスト表示
function setText(target, text){
  target.textContent = text;
};

//学習記録の表示字非表示
function toggleLog(button, content, section){
  button.addEventListener("click",function(){
  content.classList.toggle("hidden");

  if(content.classList.contains("hidden")){
    button.textContent = "開く";
  }else{
    button.textContent = "閉じる";
    section.scrollIntoView({
      behavior: 'smooth'
    });
  }  
  updateToggleAllButtonText(contents);
  });
}

//一括開閉ボタンの文言変更関数
function updateToggleAllButtonText(contents){
  let allOpen = true;
  for(let i = 0; i < contents.length; i++){
    if(contents[i].classList.contains("hidden")){
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
function toggleAll(buttons, contents){
  toggleAllButton.addEventListener("click",function(){
    let allOpen = true;

    for(let i = 0; i < contents.length; i++){
      if(contents[i].classList.contains("hidden")){
        allOpen = false;
      }        
    }

    if(allOpen){
      for(let i = 0; i < contents.length; i++){
        contents[i].classList.add("hidden");
        buttons[i].textContent = "開く"
      }
    }else{
      for(let i = 0; i < contents.length; i++){
        contents[i].classList.remove("hidden");
        buttons[i].textContent = "閉じる"
      }
    }
   updateToggleAllButtonText(contents); 
 });   
};

//学習記録の一括開閉
toggleAll(toggleButtons,contents);

//目次クリック
function setupIndexLink(indexLink, content, button, contents){
  indexLink.addEventListener("click", function(){
    if(content.classList.contains("hidden")){
      content.classList.remove("hidden");
      button.textContent = "閉じる";
    }
    updateToggleAllButtonText(contents);
  });
}

//学習記録のHTML組み立て
logs.forEach(log => {
  main.appendChild(log.section);
  toggleLog(log.button, log.content, log.section);
});

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

//目次クリック
indexLinks.forEach((link, i) => {
  setupIndexLink(link, logs[i].content, logs[i].button,contents);
});