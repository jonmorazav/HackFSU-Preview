// index.js

var interest = undefined;
const url = "https://2017.hackfsu.com/api/preview/register";
// const url = "https://requestb.in/1ho3ytm1";

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

(function () {

    $('.section .buttons span a').click(function(event) {
        $('.section .buttons span a').removeClass("focus");
        $(this).toggleClass("focus");

        console.log(this.name);
        interest = this.name;
        $('#email').focus();
    });

    $('#submit-button').bind("click", function() {
        var email = $('#email').get(0).value;

        if(!email || !validateEmail(email)) {
            alert("Please enter a valid email.");
        } else if(!interest) {
            alert("Please indicate your preference.");
        } else {
            $.post(url, {
                email: email,
                interest: interest
            });

            $('#submit-button img').toggle();
            $('#submit-button').append("<span>Submitted!</span>");
            $('#submit-button').unbind("click");
        }
    });

    // Disable custom 5 rendering on Windows due to font errors
    if (window.navigator.userAgent.indexOf("Windows")!= -1) {
        $('.letter.five').toggleClass('five');
    }

})();
