document.getElementById('myForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const quote = document.getElementById('quote').value;

    fetch('/submit-form', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, quote }),
    })
    .catch((error) => {
        console.error('Error submitting form:', error);
    });
});