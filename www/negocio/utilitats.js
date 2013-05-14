
function phoneGapRun() {
    if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
        return true;
    } else {
        return false;
    }
}

function mensaje(msg) {
    if(phoneGapRun())
        navigator.notification.alert(msg, null, 'Atenció');
    else
        alert(msg);
}
