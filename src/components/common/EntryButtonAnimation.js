document.addEventListener("DOMContentLoaded", function () {
    // Catch the event of scrolling
    // var state = "mid";
    var button = document.querySelectorAll(".entrybutton");
    var button_css = button[0];
    window.addEventListener("scroll", function () {
        var y = window.pageYOffset;
        if (y > 10) {
            button_css.classList.add('buttonshow');
        }
        else {
            button_css.classList.remove('buttonshow');
        }

    })
})
