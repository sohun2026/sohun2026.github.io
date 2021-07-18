function warnEmpty() {
    alert("입력하세요");
}
function dateToString(date) {
    const dateString = date.toISOString();
    const dateToString = dateString.substring(0, 10) + " " + dateString.substring(11, 19);
    return dateToString;
}
function submitComment() {
    const newcommentEL = document.getElementById("new-comment");
    const newComment = newcommentEL.value.trim();

    if (newComment) {
        const dateEL = document.createElement('div');
        dateEL.classList.add("comment-date");
        const dateString = dateToString(new Date());
        dateEL.innerText = dateString;

        const contentEL = document.createElement('div');
        contentEL.classList.add('comment-content');
        contentEL.innerText = newcomment;

        const commentEL = document.createElement('div');
        commentEL.classList.add('comment-row');
        commentEL.appendChild(dateEL);
        commentEL.appendChild(contentEL);

        document.getElementById('comments').appendChild(commentEL);
        newcommentEL.value = "";

        const countEL = docuemnt.getElementById('comments-count');
        const count = countEL.innerText;
        countEL.innerText = parseInt(count) + 1;
    }
    else warnEmpty();
}