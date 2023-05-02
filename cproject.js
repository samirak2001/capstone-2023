var input = document.getElementById("body");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 27) {
        event.preventDefault();
        document.documentElement.scrollTop = 0;
    }
});

