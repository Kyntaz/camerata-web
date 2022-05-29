// Initialize stuff.

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function formSubmission() {
    form = document.getElementById("contactForm");
    form.submit();
    form.reset();
}