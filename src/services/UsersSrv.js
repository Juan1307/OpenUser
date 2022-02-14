const API = 'https://jsonplaceholder.typicode.com';

function getPosts(){
   return fetch(`${API}/posts`)
            .then((res) => res.json());

}

// for post by user
function getPostId(index) {
   return fetch(`${API}/posts/${index}`)
               .then((res) => res.json());
}

function getCommentsPost(index){
   return fetch(`${API}/posts/${index}/comments`)
               .then((res) => res.json());
}

// for user modules
function getTodosUser(index) {
   return fetch(`${API}/users/${index}/todos`)
               .then((res) => res.json());
}

function getAlbumPhotos(index){
   return fetch(`${API}/albums/${index}/photos`)
               .then((res) => res.json());
}

function getAlbumsUser(index) {
   return fetch(`${API}/users/${index}/albums`)
               .then((res) => res.json());
}

function getPostsUser(index) {
   return fetch(`${API}/users/${index}/posts`)
               .then((res) => res.json());
}

// for user
function getUserId(index){
   return fetch(`${API}/users/${index}`)
               .then((res) => res.json());
}

function getUsers() {
   return fetch(`${API}/users`)
               .then((res) => res.json())
               .then((data) => {
                  if(!Array.isArray(data)) return console.error('Ooops no data');
                  
                  return data.map( (user) => {
                   const { id, username, email, website } = user
                   return { id, username, email, website };  
                  });
                  
               });
}

export { getUsers as default, getUserId, 
         getPostsUser, 
         getAlbumsUser, getAlbumPhotos, 
         getTodosUser,
         getPostId, getCommentsPost,
         getPosts };