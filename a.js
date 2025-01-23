var request = new XMLHttpRequest();
request.open("POST", "http://103.161.96.250:789/log", true); // Server nhận dữ liệu
request.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
request.send("data=" + encodeURIComponent("123")); // Gửi nội dung "123"
