

 // HTTP request
export default function getPostsByUser(query) {
    const BASE_URL = "https://pixabay.com";
    const END_POINT = '/api/';
    const API_KEY = '42305658-75508782eac06a666c1fb928b';

    const params = {
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        q: query
    
    };


const url = `${BASE_URL}${END_POINT}?${new URLSearchParams(params)}`;
  return fetch(url).then(res => res.json());
    };
