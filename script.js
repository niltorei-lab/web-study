    //紹介文を切り替えるボタン要素を取得
    const changeButton = document.getElementById("change-button");

    //紹介文の上段のメッセージを取得
    const introText = document.getElementById("intro-text");
    //元に戻すボタン要素を取得
    // const resetButton = document.getElementById("reset-button");
    //紹介文の下段のメッセージを取得
    const message =document.getElementById("message");

    //画像を表示・非表示するボタンを取得
    const toggleImagebutton = document.getElementById("toggle-image-button");
    //プロフィール画像を取得
    const profileImage = document.querySelector(".profile-image");
    
    //画像のサイズを変えるボタンを取得
    const resizeImageButton = document.getElementById("resize-image-button");

    //画像を切り替えるボタンを取得
    const changeImageButton = document.getElementById("change-image-button");

    //強調表示を切り替えるボタンを取得
    const toggleHighlightBttuon = document.getElementById("toggle-highlight-button");

    //テーマを切り替えるボタンを取得
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
    toggleImagebutton.addEventListener("click",function(){
        profileImage.classList.toggle("hidden");

        if(profileImage.classList.contains("hidden")){
            toggleImagebutton.textContent = "画像を表示"
        }else{
            toggleImagebutton.textContent = "画像を非表示"
        }
    });
    
    //今の状態を覚えておく変数
    let isChanged =false;
   //変えるボタン：クリックされたら文章を変える
    changeButton.addEventListener("click",function(){
        
        if(!isChanged){
           changeButton.textContent = "元に戻す"
           introText.innerHTML = '<span class="marker">Javascript</span>の練習も始めています。';
           introText.style.color = "#1f3c88"  
           message.textContent = "Javascriptで文字を変えられました!"
           message.style.color = "#0066cc"  
           isChanged = true;
        }else{
            changeButton.textContent = "紹介文を切り替える"
            introText.innerHTML = '<span class="marker">HTML</span>の練習も始めています。';
            introText.style.color = "#333333"  
            message.textContent = "少しずつWebページをつくれるようになりたいです。"
            message.style.color = "black"
           isChanged = false;
        }});
        
/*         message.textContent = "Javascriptで文字を変えられました!"
        message.style.color = "#0066cc"
        message.classList.add("active-message") */


    //戻すボタン：クリックされたら文章をもとに戻す
/*     resetButton.addEventListener("click",function(){
        message.textContent = "少しずつWebページをつくれるようになりたいです。"
        message.style.color = "black"
        message.classList.remove("acative-message")}); */

    //ボタンをクリックしたらsmall-imageをつけ外しする
    resizeImageButton.addEventListener("click", function(){
        profileImage.classList.toggle("small-image");
        
        if(profileImage.classList.contains("small-image")){
            resizeImageButton.textContent = "画像をもとのサイズに戻す";
        }else{
            resizeImageButton.textContent = "画像を小さくする";
        }
    });
    
    //ボタンをクリックしたら画像を切り替える
    changeImageButton.addEventListener("click",function(){
        if(profileImage.getAttribute("src") === "profile.png"){        
                profileImage.setAttribute("src","profile2.jpg");
                profileImage.setAttribute("alt","2枚目のプロフィール画像")
            }else{
                profileImage.setAttribute("src","profile.png");
                profileImage.setAttribute("alt","プロフィール画像")
            }    
    });

    //メッセージの強調表示を切り替える
    toggleHighlightBttuon.addEventListener("click",function(){
        message.classList.toggle("highlight-mode")

        if(message.classList.contains("highlight-mode")){
            toggleHighlightBttuon.textContent = "強調表示をOFF";
            toggleHighlightBttuon.classList.add("active-button");
        }else{
            toggleHighlightBttuon.textContent = "強調表示をON";
            toggleHighlightBttuon.classList.remove("active-button");
        }
    })

    //ボタンをクリックしたらdark-modeをつけ外しする
    toggleThemeButton.addEventListener("click", function(){
        card.classList.toggle("dark-mode");

        if(card.classList.contains("dark-mode")){
          toggleThemeButton.textContent = "テーマをOFF"
        }else{
          toggleThemeButton.textContent = "テーマをON"
        }
        
    });

    //ボタンをクリックしたら全てのsection-boxにbox-emphasisをつけ外しする
    toggleBoxStyleButton.addEventListener("click",function(){
        sectionBoxes.forEach(function(box){
            box.classList.toggle("box-emphasis");
        });
        
        if(sectionBoxes[0].classList.contains("box-emphasis")){
            toggleBoxStyleButton.textContent = "ボックス強調をOFF";
        }else{
            toggleBoxStyleButton.textContent = "ボックス強調をON";
        }
    });

    //画像の枠線の切り替え
    toggleImageFrameButton.addEventListener("click", function(){
        const isFramed = profileImage.classList.toggle("image-framed");

        if(isFramed){
            toggleImageFrameButton.textContent = "画像の枠線をOFF"
        }else{
            toggleImageFrameButton.textContent = "画像の枠線をON"
        }
    })

