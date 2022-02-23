import './sass/main.scss';
import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api';
const API_key = '25848819-9cdff21383665c4a2b048e17c';
const formRef = document.querySelector('.search-form');
const inputRef = document.querySelector('[name="searchQuery"]');
const btnSubmitRef = document.querySelector('[type="submit"]');


// fetch(`${BASE_URL}/?key=${API_key}&q=cat&image_type=photo`)
//     .then(res => res.json())
//     .then(console.log);

