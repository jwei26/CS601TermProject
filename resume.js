const app = Vue.createApp({
    data() {
        return {
            jobs: []
        }
    },
    created() {
        fetch('https://lustrous-taiyaki-5da9ab.netlify.app/jobInfo.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(json => {
                this.jobs = json.jobs.map(job => ({...job, showDetails: false}));
            })
            .catch(e => {
                console.log('There was a problem with your fetch operation: ' + e.message);
            });
    }
})

app.mount('#app')
