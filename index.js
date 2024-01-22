function showDiv(divId) {
    hideAllDivs();

    // 顯示指定的 div
    var divToShow = document.getElementById('div' + divId);
    if (divToShow) {
        divToShow.style.display = 'grid';
    }

    // 修改按鈕的樣式
    changeBtncolor(divId);
}

function changeBtncolor(btnId) {
    var allButtons = document.querySelectorAll('.content-menu_btn');
    allButtons.forEach(function (button) {
        button.style.backgroundColor = '#F0F0F0';
        button.style.color = 'black';
    });

    var btn = document.getElementById('btn' + btnId);
    if (btn) {
        btn.style.backgroundColor = 'black';
        btn.style.color = 'white';


    }
}

function hideAllDivs() {
    // 將所有的 div 隱藏
    var allDivs = document.querySelectorAll('.hidden');
    allDivs.forEach(function (div) {
        div.style.display = 'none';
    });
}

showDiv('_all');

function show_more_btn(){
    var show=document.getElementById("show_more_btn");
    show.style.display='block';
    var more_btns=document.getElementById("more_btns");
    more_btns.style.display='none';
}
function off_more_btn(){
    var off=document.getElementById("show_more_btn");
    off.style.display='none';
    var off_more_btns=document.getElementById("more_btns");
    off_more_btns.style.display='block';
}

function show_more_items(){
    var show_items=document.getElementById("show_more_items");
    show_items.style.display='block';
    var more_items=document.getElementById("more_items");
    more_items.style.display='none';
}
function off_more_items(){
    var off_items=document.getElementById("show_more_items");
    off_items.style.display='none';
    var off_more_items=document.getElementById("more_items");
    off_more_items.style.display='block';
}