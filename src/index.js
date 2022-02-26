import './sass/main.scss';
import ApiService from './api';
import imgCardTpl from './photoCard.hbs'
import Notiflix from 'notiflix';

const formRef = document.querySelector('.search-form');
const btnLoadMore = document.querySelector('.load-more');
const galleryRef = document.querySelector('.gallery');

const apiService = new ApiService();

btnLoadMore.classList.add('is-hidden')

formRef.addEventListener('submit', onSearch);
btnLoadMore.addEventListener('click', onLoadMore);

function onSearch(event) {   
    event.preventDefault();
    
    apiService.query = event.currentTarget.elements.searchQuery.value;
    if (apiService.query === '') { 
        return Notiflix.Notify.warning('No search query!');
    }
    apiService.resetPage();
    apiService.fetchImage().then(data => {
        if (data.hits.length === 0) { 
            return Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
        }
        console.log(data);
        clearImagesMarkup();
        appendImagesMarkup(data.hits);
        Notiflix.Notify.success(`Hooray! We found ${data.totalHits} images.`);
        btnLoadMore.classList.remove('is-hidden');
    });
    
}   

function onLoadMore() { 
    
    apiService.fetchImage().then(data => appendImagesMarkup(data.hits));
}

function appendImagesMarkup(hits) { 
    galleryRef.insertAdjacentHTML('beforeend', imgCardTpl(hits));
}

function clearImagesMarkup() { 
    galleryRef.innerHTML = '';
}

