const { createApp } = Vue

createApp({
    data() {
        return {
            vinylLists: [],
        }
    },
    created(){
        axios.get('http://localhost/php-dischi-json/api.php', {
            params: {
            }
        })
        .then(res => {
            this.vinylLists = res.data;
        });
    }
}).mount('#app')