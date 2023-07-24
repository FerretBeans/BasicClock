const date = new Date();
console.log(date.toString());
document.getElementById("time").innerHTML = date.toString().replace("GMT+0800 (Australian Western Standard Time)", "");
setInterval(() => {
    location.reload();
}, 100);