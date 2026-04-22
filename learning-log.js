//20260406のボタン
const toggleLog20260406Button = document.getElementById("toggle-log-2026-04-06");

//20260406の学習記録
const logContent20260406 = document.getElementById("log-content-2026-04-06");

//20260413のボタン
const toggleLog20260413Button = document.getElementById("toggle-log-2026-04-13");

//20260413の学習記録
const logContent20260413 = document.getElementById("log-content-2026-04-13");

//すべての学習記録を取得
const logEntries = document.querySelectorAll(".log-entry");

//最新の学習記録を取得
const latestLog = logEntries[logEntries.length-1];

//すべての目次を取得
const logLnikEntries = document.querySelectorAll(".log-index-link");

//最新の目次を取得
const latastLogLink = logLnikEntries[logLnikEntries.length-1];


//学習記録の開閉ボタン
const toggleAllButton = document.getElementById("toggle-all-button");

//20260406学習記録の目次リンク
const indexLink20260406 = document.getElementById("index-link-2026-04-06");

//20260413の学習記録の目次リンク
const indexLink20260413 = document.getElementById("index-link-2026-04-13");

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

//20260402の学習記録の表示非表示
toggleLog20260406Button.addEventListener("click",function(){
  logContent20260406.classList.toggle("hidden");

  if(logContent20260406.classList.contains("hidden")){
    toggleLog20260406Button.textContent = "開く";
  }else{
    toggleLog20260406Button.textContent = "閉じる";
  }  
  updateToggleAllButtonText();
});

//20260409の学習記録の表示非表示
toggleLog20260413Button.addEventListener("click",function(){
  logContent20260413.classList.toggle("hidden");

  if(logContent20260413.classList.contains("hidden")){
    toggleLog20260413Button.textContent = "開く";
  }else{
    toggleLog20260413Button.textContent = "閉じる";
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

//2026-04-06の目次クリック
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
latastLogLink.classList.add("latest-log-link");