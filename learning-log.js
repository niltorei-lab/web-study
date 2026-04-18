//20260402のボタン
const toggleLog20260402Button = document.getElementById("toggle-log-2026-04-02");

//20260402の学習記録
const logContent20260402 = document.getElementById("log-content-2026-04-02");

//20260409のボタン
const toggleLog20260409Button = document.getElementById("toggle-log-2026-04-09");

//20260409の学習記録
const logContent20260409 = document.getElementById("log-content-2026-04-09");

//学習記録の開閉ボタン
const toggleAllButton = document.getElementById("toggle-all-button");

//20260402の学習記録の表示非表示
toggleLog20260402Button.addEventListener("click",function(){
  logContent20260402.classList.toggle("hidden");

  if(logContent20260402.classList.contains("hidden")){
    toggleLog20260402Button.textContent = "開く";
  }else{
    toggleLog20260402Button.textContent = "閉じる";
  }
});

//20260409の学習記録の表示非表示
toggleLog20260409Button.addEventListener("click",function(){
  logContent20260409.classList.toggle("hidden");

  if(logContent20260409.classList.contains("hidden")){
    toggleLog20260409Button.textContent = "開く";
  }else{
    toggleLog20260409Button.textContent = "閉じる";
  }
});

//学習記録の開閉
toggleAllButton.addEventListener("click",function(){
  const allClosed =
  logContent20260402.classList.contains("hidden") &&
  logContent20260409.classList.contains("hidden");

  if(allClosed){
    logContent20260402.classList.remove("hidden");
    logContent20260409.classList.remove("hidden");

    toggleLog20260402Button.textContent = "閉じる";
    toggleLog20260409Button.textContent = "閉じる";
    toggleAllButton.textContent = "すべての記録を閉じる";

  }else{
    logContent20260402.classList.add("hidden");
    logContent20260409.classList.add("hidden");

    toggleLog20260402Button.textContent = "開く";
    toggleLog20260409Button.textContent = "開く";
    toggleAllButton.textContent = "すべての記録を開く";
  }
});