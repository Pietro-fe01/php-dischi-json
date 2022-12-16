const { createApp } = Vue

createApp({
    data() {
        return {
            vinylLists: [],
            songTitle: '',
        }
    },
    methods: {
        searchInAPI(){
            axios.get('http://localhost/php-dischi-json/api.php', {
                params: {
                }
            })
            .then(res => {
                this.vinylLists = res.data;
            });
        },
        searchByName(){
            this.vinylLists = [];
            axios.get('http://localhost/php-dischi-json/api.php', {
                params: {
                    song_name: this.songTitle,
                }
            })
            .then(res => {
                res.data.forEach(element => {
                    if(element.title.toLowerCase().includes(this.songTitle)){
                        this.vinylLists.push(element);
                    }
                });
            });
        }
    },
    created(){
        this.searchInAPI();
    }
}).mount('#app')