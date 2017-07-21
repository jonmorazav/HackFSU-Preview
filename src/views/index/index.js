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
    // Detect if IE
    var version = detectIE();
    
    if (version === false) {
        //don't do anything
    }
    else if (version >= 12) {
        //Edge - Also don't do anything
    }
    else {
        //IE - Show modal
        var modal = document.getElementById('98');
        var button = document.getElementById('closeBtn');
        var x = document.getElementById('closeX');

        modal.style.display = "block";


        x.onclick = function() {
            modal.style.display = "none";
        }

        button.onclick = function() {
            modal.style.display = "none";
        }
    }
})();


function detectIE() {
  var ua = window.navigator.userAgent;

  var msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    // IE 10 or older => return version number
    return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }

  var trident = ua.indexOf('Trident/');
  if (trident > 0) {
    // IE 11 => return version number
    var rv = ua.indexOf('rv:');
    return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }

  var edge = ua.indexOf('Edge/');
  if (edge > 0) {
    // Edge (IE 12+) => return version number
    return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }

  // other browser
  return false;
}