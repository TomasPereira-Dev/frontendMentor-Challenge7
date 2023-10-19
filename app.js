const notificationsCounter = document.querySelector(".notifications-counter");
const notifications = document.querySelectorAll(".notification");
const notificationParagraph = document.querySelectorAll(".notification-paragraph");
const markAllAsReadBtn = document.querySelector(".mark-all");

const notificationsArr = Array.from(notifications);
const notificationParagraphArr = Array.from(notificationParagraph);

const markAllAsRead = () => {
    for(let i = 0; i < notificationsArr.length; i++){
        if(notificationsArr[i].classList.contains("unread")){
            notificationsArr[i].classList.remove("unread");
            notificationParagraphArr[i].classList.remove("unread-dot");
            notificationsCounter.textContent = "0";
        }
    }
}

markAllAsReadBtn.addEventListener("click", markAllAsRead);