//20260402のボタンを取得
const toggleLog20260402Button = document.getElementById("toggle-log-2026-04-02");

//20260402の学習記録を取得
const logContent20260402 = document.getElementById("log-content-2026-04-02");

//20260409のボタンを取得
const toggleLog20260409Button = document.getElementById("toggle-log-2026-04-09");

//20260409の学習記録を取得
const logContent20260409 = document.getElementById("log-content-2026-04-09");

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