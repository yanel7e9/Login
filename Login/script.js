$(document).ready(function () {
    $("#login-form").on("submit", function (e) {
        e.preventDefault();
        var username = $("#username").val();
        var password = $("#password").val();
        
        if (username === "Juancito" && password === "123456") {
            window.location.href = "principal.html?username=" + encodeURIComponent(username);
        } else {
            $("#error-message").show();
        }
    });
});
