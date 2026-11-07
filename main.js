let count = 0;
let timeId = null;

$("#startBtn").on("click", function () {
    $("#startBtn").prop("disabled", true);
    $("#stopBtn").prop("disabled", false);
    $("#resetBtn").prop("disabled", false);
    timeId = setInterval(function() {
        count ++;
        const hours = Math.floor((count / 36000) % 24);
        const minutes = Math.floor((count / 600) % 60);
        const seconds = Math.floor((count / 10) % 60);
        const milliseconds = Math.floor(count % 10);
        $("#display").text(hours + " : " + minutes + " : " + seconds + " : " + milliseconds);
    }, 100);
});

$("#stopBtn").on("click",function() {
    $("#stopBtn").prop("disabled", true);
    $("#startBtn").prop("disabled", false);
    clearInterval(timeId);
});

$("#resetBtn").on("click",function() {
    $("#resetBtn").prop("disabled", true);
    $("#startBtn").prop("disabled", false);
    $("#stopBtn").prop("disabled", true);
    clearInterval(timeId);
    count = 0;
    $("#display").text("0 : 0 : 0 : 0");
});