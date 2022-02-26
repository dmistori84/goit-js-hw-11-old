const BASE_URL = 'https://pixabay.com/api';
const API_key = '25848819-9cdff21383665c4a2b048e17c';

export default class Api { 
    constructor() { 
        this.searchQuery = '';
        this.page = 1;
    }

    fetchImage() { 
        return fetch(`${BASE_URL}/?key=${API_key}&q=${this.searchQuery}&image_type=photo&per_page=5&page=${this.page}&orientation=horizontal&safesearch=true`)
            .then(res => res.json())
            .then((data) => { 
                this.page += 1;
                return data;
            });
    }

    get query() { 
        return this.searchQuery;
    }

    set query(newQuery) { 
        this.searchQuery = newQuery;
    }

    resetPage() { 
        this.page = 1;
    }
}