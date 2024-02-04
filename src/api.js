import axios from 'axios';

const searchImages =async (term) => {
    const response =await axios.get('https://api.unsplash.com/search/photos',{
      headers:{
        Authorization: 'Client-ID 3qY9YXcDK5-YzZbeplfZT0CYI9FhDzoh4aGXok7YE9s',
      },
      params:{
        query: term,
      },
    });
    return response.data.results;
  };

  export default searchImages;