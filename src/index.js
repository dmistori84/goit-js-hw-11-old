import './sass/main.scss';
import axios from 'axios';
import ApiService from './api';
//import onSearch from './onsearch';

const formRef = document.querySelector('.search-form');
const inputRef = document.querySelector('[name="searchQuery"]');
const btnSubmitRef = document.querySelector('[type="submit"]');
const btnLoadMore = document.querySelector('#bntLoadMore');

const apiService = new ApiService();

const BASE_URL = 'https://pixabay.com/api';
const API_key = '25848819-9cdff21383665c4a2b048e17c';

//let searchQuery = '';

formRef.addEventListener('submit', onSearch);

function onSearch(event) {   
    event.preventDefault();
    
    apiService.query = event.currentTarget.elements.searchQuery.value;
    
    apiService.fetchImage();
    
}   

btnLoadMore.addEventListener('click', onLoadMore);

function onLoadMore() { 
    
    apiService.fetchImage();
}



