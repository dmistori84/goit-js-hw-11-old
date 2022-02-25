export default class Api { 
    constructor() { 
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImage() { 
        console.log('приходящий объект:', this);
        const BASE_URL = 'https://pixabay.com/api';
        const API_key = '25848819-9cdff21383665c4a2b048e17c';

        fetch(`${BASE_URL}/?key=${API_key}&q=${this.searchQuery}&image_type=photo&per_page=5&page=${this.page}`)
            .then(res => res.json())
            .then(data => { 
                this.page += 1;
            });
    }

    get query() { 
        return this.searchQuery;
    }

    set query(newQuery) { 
        this.searchQuery = newQuery;
    }
}