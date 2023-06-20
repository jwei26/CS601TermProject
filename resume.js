const app = Vue.createApp({
    data() {
        return {
            jobs: [
                {
                    title: 'SDE Intern',
                    company: 'Xencio',
                    details: 'Designed and executed a financial services platform utilized by high-profile clients such as Ping An Insurance, Bilibili, and Meizhou Dongpo, providing a secure and efficient environment for financial management.',
                    showDetails: false
                },
                {
                    title: 'SDE Intern',
                    company: 'Jetzy',
                    details: 'Contributed to the development of Jetzy, a global social network platform dedicated to connecting travel enthusiasts and providing unique lifestyle experiences.',
                    showDetails: false
                },
                // More jobs...
            ]
        }
    }
})

app.mount('#app')
