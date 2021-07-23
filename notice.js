const inputBar = document.querySelector("#comment-input");
const rootDiv = document.querySelector("#comments");
const btn = document.querySelector("#submit");
const mainCommentCount = document.querySelector('#count'); //맨위 댓글 숫자 세는거. 

function numberCount(event) { 
    console.log(event.target); 
    if (event.target === voteUp) { 
        console.log("2"); 
        return voteUp.innerHTML++; 
    } else if (event.target === voteDown) { 
        return voteDown.innerHTML++; 
    } 
} 
function deleteComments(event) { 
    const btn = event.target; 
    const list = btn.parentNode.parentNode;//commentList 
    rootDiv.removeChild(list); //메인댓글 카운트 줄이기. 
    if(mainCommentCount.innerHTML <='0'){ 
        mainCommentCount.innerHTML = 0; }
        else{ 
            mainCommentCount.innerHTML--; 
        } 
    } //댓글보여주기 
    function showComment(comment){ 
        const userName = document.createElement('div'); 
        const inputValue = document.createElement('span'); 
        const showTime = document.createElement('div'); 
        const voteDiv = document.createElement('div'); 
        const countSpan = document.createElement('span') 
        const voteUp = document.createElement('button'); 
        const voteDown = document.createElement('button'); 
        const commentList = document.createElement('div'); 
        //이놈이 스코프 밖으로 나가는 순간 하나지우면 다 지워지고 입력하면 리스트 다불러옴. //삭제버튼 만들기 
        const delBtn = document.createElement('button'); 
        delBtn.className ="deleteComment"; 
        delBtn.innerHTML="X"; 
        commentList.className = "eachComment"; 
        userName.className="name"; 
        inputValue.className="inputValue"; 
        showTime.className="time"; 
        userName.appendChild(delBtn); //입력값 넘기기 
        inputValue.innerText = comment; //타임스템프찍기 
        //댓글뿌려주기 
        commentList.appendChild(userName); 
        commentList.appendChild(inputValue); 
        commentList.appendChild(showTime); 
        rootDiv.prepend(commentList); 
        voteUp.addEventListener("click",numberCount); 
        voteDown.addEventListener("click",numberCount); 
        delBtn.addEventListener("click",deleteComments); 
        console.dir(rootDiv); } //버튼만들기+입력값 전달 
        function pressBtn(){ 
            const currentVal = inputBar.value; 
            if(!currentVal.length){ 
                alert("댓글을 입력해주세요!!"); 
            }else{ 
                showComment(currentVal); 
                mainCommentCount.innerHTML++; 
                inputBar.value =''; 
            } 
        } 
        btn.onclick = pressBtn;
