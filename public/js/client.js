$(document).ready(function () {
    $('.parallax').parallax();

    $("#frontBtn").on("click", () => {
        console.log("I was clicked!");
        $.ajax("/home", {
            type: "GET"
        }).then(function (res) {
            console.log("on home page");
            location.assign("/home");
        })

    })
})