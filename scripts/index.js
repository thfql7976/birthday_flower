// 위 입력칸 (태어난 달을 숫자로 입력해주세요 input) 클릭시 12로 값 변경
const user_birthday = document.querySelector(`#user_birthday`)
console.log(user_birthday);

//12로 변경하기
//객체.속성 =값;
function birthday() {
    user_birthday.value = 12;
}
const popup_wrap = document.querySelector('.month');
const popup_bg = document.querySelector('.popup_bg');
console.log (popup_bg, popup_wrap);

// popup_wrap {display:none;}
// popup_bg {display:none;}
// 자바스크립트에서 css쓰려면 작성하는 속성? 객체.style.속성= 값
popup_wrap.style.display = 'none';
popup_bg.style.display = 'none';
// 자바스크립트에서 display=none으로 숨겼다가 특정이벤트에 따라 다시 보이고 싶을떄
// 무조건 block을 쓰는게 아닌 그 선택자가 원래 가지고 있는 display속성으로 되돌리기
// display:flex가 선택자에 원래 있었다면 자바스크립트도 display:flex
// display가 선택자가 없었다면? 원래 태그 고요속성에 따라 display-block 또는 display=inline

function showPopup(){
    popup_wrap.style.display = 'flex';
    popup_bg.style.display = 'block';
}

function hidePopup(){
    popup_wrap.style.display = 'none';
    popup_bg.style.display = 'none';
}