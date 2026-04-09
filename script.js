    //紹介文を切り替えるボタン
    const changeButton = document.getElementById("change-button");

    //紹介文の上段
    const introText = document.getElementById("intro-text");
    
    //紹介文の下段
    const message = document.getElementById("message");

    //画像の表示・非表示ボタン
    const toggleImageButton = document.getElementById("toggle-image-button");
    
    //プロフィール画像を取得
    const profileImage = document.querySelector(".profile-image");
    
    //画像のサイズ変更ボタン
    const resizeImageButton = document.getElementById("resize-image-button");

    //画像の切り替えボタン
    const changeImageButton = document.getElementById("change-image-button");

    //紹介文の強調表示の切り替えボタン
    const toggleHighlightButton = document.getElementById("toggle-highlight-button");

    //テーマの切り替えボタン
    const toggleThemeButton = document.getElementById("toggle-theme-button");
    
    //カード全体を取得
    const card = document.querySelector(".card");
    
    //ボックス強調ボタンを取得
    const toggleBoxStyleButton = document.getElementById("toggle-box-style-button");
    
    //section-boxをすべて取得
    const sectionBoxes = document.querySelectorAll(".section-box");

    //画像に枠線をつけるボタンを取得
    const toggleImageFrameButton = document.getElementById("toggle-image-frame-button");

    //toggleボタン押下でhiddenのつけ外しをする
    toggleImageButton.addEventListener("click",function(){
        profileImage.classList.toggle("hidden");

        if(profileImage.classList.contains("hidden")){
            toggleImageButton.textContent = "画像を表示";
        }else{
            toggleImageButton.textContent = "画像を非表示";
        }
    });
    
    //状態を管理する変数
    let isChanged = false;

    //ボタンのイベント処理
   //紹介文の切り替え
    changeButton.addEventListener("click",function(){        
        if(!isChanged){
           changeButton.textContent = "元に戻す";
           introText.innerHTML = 'HTMLに加えて、<span class="marker">JavaScript</span>の学習も始めています。';
           message.textContent = "ボタン操作や表示の切り替えなど、動きのあるページ作りを学習しています。";
           message.classList.add("message-changed");
           isChanged = true;
        }else{
            changeButton.textContent = "紹介文を切り替える";
            introText.innerHTML = '<span class="marker">HTML</span>の学習を始めています。';
            message.textContent = "少しずつWebページをつくれるようになりたいです。";
            message.classList.remove("message-changed");
           isChanged = false;
    }});

    //画像サイズの切り替え
    resizeImageButton.addEventListener("click", function(){
        profileImage.classList.toggle("small-image");
        
        if(profileImage.classList.contains("small-image")){
            resizeImageButton.textContent = "画像をもとのサイズに戻す";
        }else{
            resizeImageButton.textContent = "画像を小さくする";
        }
    });
    
    //プロフィール画像の切り替え
    changeImageButton.addEventListener("click",function(){
        if(profileImage.getAttribute("src") === "profile.png"){        
                profileImage.setAttribute("src","profile2.jpg");
                profileImage.setAttribute("alt","2枚目のプロフィール画像");
            }else{
                profileImage.setAttribute("src","profile.png");
                profileImage.setAttribute("alt","プロフィール画像");
            }    
    });

    //紹介文の強調表示の切り替え
    toggleHighlightButton.addEventListener("click",function(){
        message.classList.toggle("highlight-mode");

        if(message.classList.contains("highlight-mode")){
            toggleHighlightButton.textContent = "紹介文の強調を戻す";
            toggleHighlightButton.classList.add("active-button");
        }else{
            toggleHighlightButton.textContent = "紹介文を強調する";
            toggleHighlightButton.classList.remove("active-button");
        }
    });

    //ダークモードの切り替え
    toggleThemeButton.addEventListener("click", function(){
        card.classList.toggle("dark-mode");

        if(card.classList.contains("dark-mode")){
          toggleThemeButton.textContent = "テーマをOFF";
        }else{
          toggleThemeButton.textContent = "テーマをON";
        }
        
    });

    //セクションボックスの強調の切り替え
    toggleBoxStyleButton.addEventListener("click",function(){
        sectionBoxes.forEach(function(box){
            box.classList.toggle("box-emphasis");
        });
        
        if(sectionBoxes[0].classList.contains("box-emphasis")){
            toggleBoxStyleButton.textContent = "セクション強調OFF";
        }else{
            toggleBoxStyleButton.textContent = "セクション強調ON";
        }
    });

    //プロフィール画像の枠線の切り替え
    toggleImageFrameButton.addEventListener("click", function(){
        const isFramed = profileImage.classList.toggle("image-framed");

        if(isFramed){
            toggleImageFrameButton.textContent = "画像の枠線をOFF";
        }else{
            toggleImageFrameButton.textContent = "画像の枠線をON";
        }
    });

