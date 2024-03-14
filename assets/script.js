function updateCurrentDateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    var currentTimeString = 'Current Time: ' + hours + ':' + minutes + ':' + seconds;

    document.getElementById('current-time').textContent = currentTimeString;

    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();

    day = (day < 10) ? '0' + day : day;
    month = (month < 10) ? '0' + month : month;

    var currentDateString = 'Today\'s Date: ' + day + '/' + month + '/' + year;

    document.getElementById('current-date').textContent = currentDateString;
}

updateCurrentDateTime();
setInterval(updateCurrentDateTime, 1000);