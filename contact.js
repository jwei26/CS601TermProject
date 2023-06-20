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
            fetch('http://fakeapi.com/submit', {
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
