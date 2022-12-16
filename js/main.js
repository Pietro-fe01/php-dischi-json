const { createApp } = Vue

createApp({
    data() {
        return {
            vinylLists: [],
            songTitle: '',
            searchBar: false
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
            if(this.songTitle){
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
            } else {
                this.searchInAPI();
            }
        },
        openSearchBar(){
            this.searchBar = !this.searchBar;
            if(!this.searchBar){
                return this.$refs.searchInput.focus();
            }
        }
    },
    created(){
        this.searchInAPI();
    }
}).mount('#app')