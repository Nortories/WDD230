document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('form label.top input:required');

    inputs.forEach(input => {
        input.addEventListener('input', function () {
            if (this.value.trim() !== '') {
                this.classList.add('valid');
            } else {
                this.classList.remove('valid');
            }
        });
    });
});
