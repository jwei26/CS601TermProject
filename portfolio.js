const app = Vue.createApp({
    data() {
        return {
            projects: [
                {
                    title: 'Kuromi\'s world',
                    description: 'This project utilizes Three.js to implement various features including model importing, distance-based fog effects, object selection, skybox rendering, and more. Initial loading time may vary depending on the your the hardware.',
                    link: 'https://people.ucsc.edu/~jwei26/asg5/'
                },
                {
                    title: 'PickUp App',
                    description: 'App that allows users to find and create pickup games of any sport in their area. (e.g. soccer, basketball, baseball, football, spikeball)',
                    link: 'https://github.com/chrisjjensen12/pick-up'
                },
                // More projects...
            ]
        }
    }
})

app.mount('#app')
