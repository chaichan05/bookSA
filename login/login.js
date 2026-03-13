document.getElementById("login").addEventListener("click", (event) => {

    event.preventDefault(); // หยุดการ submit form

    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    let admin = "admin"
    let passAdmin = "1234"

    if (username == "" && password !== "") {
        alert("กรุณากรอก Username")
    }
    else if (username !== "" && password == "") {
        alert("กรุณากรอก Password")
    }
    else if (username == "" || password == "") {
        alert("กรุณากรอกข้อมูล")
    }
    else if (username == admin && password == passAdmin) {
        alert("เข้าสู่ระบบสำเร็จ")
        window.location.href = "/main/main.html"
    }

})