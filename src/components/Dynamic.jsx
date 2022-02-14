import React, { useContext, Suspense } from 'react';

const TheUserPosts = React.lazy(() => import('./../pages/modules/TheUserPosts'));
const TheUserAlbums = React.lazy(() => import('./../pages/modules/TheUserAlbums'));
const TheUserTodos = React.lazy(() => import('./../pages/modules/TheUserTodos'));

const UserContext = React.createContext();
const UserGetContext = () => useContext(UserContext);

const Dynamic = ({index, module}) => {

   return <UserContext.Provider value={ {currentIndex:index} }>
            <Suspense fallback={null}>
               { 
                  module == 'posts' ? <TheUserPosts/> : 
                  module == 'albums' ? <TheUserAlbums/> : <TheUserTodos/>
               }
            </Suspense>
          </UserContext.Provider>
}

export { Dynamic as default, UserGetContext }