const app = Vue.createApp({
    data() {
        return {
            projects: []
        }
    },
    created() {
        fetch('https://lustrous-taiyaki-5da9ab.netlify.app/project.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(json => {
                this.projects = json.projects;
            })
            .catch(e => {
                console.log('There was a problem with your fetch operation: ' + e.message);
            });
    }
})

app.mount('#app')

