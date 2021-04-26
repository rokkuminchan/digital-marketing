export default function LeftTime(time) {
  const newsDate = time.time.slice(6).split("/");
  const newsTime = time.time.slice(0, 5).split(":");
  let today = new Date();
  if (
    newsDate[2] == today.getFullYear() &&
    newsDate[1] - 1 === today.getMonth() &&
    newsDate[0] == today.getDate()
  ) {
    if (today.getHours() == newsTime[0]) {
      return today.getMinutes() - newsTime[1] + " phút trước";
    } else if (today.getHours() - newsTime[0] === 1) {
      if (today.getMinutes() >= newsTime[1]) return "1 giờ trước";
      else return today.getMinutes() + 60 - newsTime[1] + " phút trước";
    } else return today.getHours() - newsTime[0] + " giờ trước";
  } else return time.time;
}
