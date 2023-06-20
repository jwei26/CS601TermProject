const app = Vue.createApp({
    data() {
        return {
            name: '',
            email: '',
            message: '',
            submitted: false,
        }
    },
    methods: {
        submitForm() {
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            };
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(data => {
                this.submitted = true;
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }
    }
})

app.mount('#app')

document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var isValid = true;

    if (!name.match(/^[a-zA-Z]{2,}$/)) {
        document.getElementById('nameError').innerText = 'Name must be at least 2 characters long and contain only alphabets.';
        isValid = false;
    } else {
        document.getElementById('nameError').innerText = '';
    }

    if (!email.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/)) {
        document.getElementById('emailError').innerText = 'Email is invalid.';
        isValid = false;
    } else {
        document.getElementById('emailError').innerText = '';
    }

    if (message.trim().length < 1) {
        document.getElementById('messageError').innerText = 'Message cannot be empty.';
        isValid = false;
    } else {
        document.getElementById('messageError').innerText = '';
    }

    if (!isValid) {
        event.preventDefault();
    }
});


