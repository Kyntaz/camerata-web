// Initialize stuff.

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

function sendEmail(subject, body) {
    const params = new URLSearchParams({
        subject,
        body,
    }).toString();
    window.open(`mailto:ca.appassionata@gmail.com?${params}`)
}

function formSubmission() {
    const form = document.forms.contactForm;
    const subject = `Pedido de Orçamento ${form.name.value}`;
    const body =
`Nome: ${form.name.value}
Email: ${form.email.value}
Data: ${form.date.value}
Local: ${form.place.value}

${form.message.value}`;

    sendEmail(subject, body);
}
