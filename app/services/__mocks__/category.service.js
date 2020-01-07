const categories = {
  'people': 'https://swapi.co/api/people/',
  'planets': 'https://swapi.co/api/planets/',
  'films': 'https://swapi.co/api/films/',
  'species': 'https://swapi.co/api/species/',
  'vehicles': 'https://swapi.co/api/vehicles/',
  'starships': 'https://swapi.co/api/starships/'
}

export const categoryService = {
  fetch
} 
function fetch() {
  return new Promise((resolve, reject) => {
    resolve(categories),
    reject({
      error: 'No categories found',
    })
  });
}