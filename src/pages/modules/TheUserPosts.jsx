import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import PostCard from './../../components/post/PostCard';
import NotFound from './../../require/NotFound';
import { UserGetContext } from './../../components/Dynamic';
import { Loader, InputSearch, SelectorDrop } from './../../components/Reusable';

import { getPostsUser } from './../../services/UsersSrv.js';
import { focusElement } from './../../extend/HelpersDom';

export default function TheUserPosts () {

   const { currentIndex } = UserGetContext();

   const [ posts, setPosts ] = useState([]);
   const [ postsFil, setPostsFil ] = useState([]);
   const [ search, setSearch ] = useState( {inputVal: '', selectVal: 'title'} );

   useEffect(() => {
      (async () =>{
         const postsData = await getPostsUser(currentIndex)
            setPosts(postsData);
            setPostsFil(postsData);
            focusElement('input-default');
      })();
   }, [currentIndex]);

   const filterValues = [ {title: 'Titulo', value:'title'},
                          {title: 'Contenido', value:'body'} ];

   const handleInputSearch = (inputVal) => {
      setSearch((state) => ({...state, inputVal}) );
      setPostsFil(() => posts.filter((elem) => (elem[search.selectVal]).toUpperCase().includes(inputVal)));
   };

   const handleSelectorDrop = (val) => {
      setSearch((state) => ({ ...state, selectVal: val ?? 'title'}) );
      handleInputSearch(search.inputVal);

      focusElement('input-default');
   };

   return <div className="position-relative d-flex flex-column rounded min-h-20">
            { !posts.length ? <Loader message="Cargando Posts ..."/> : 
            // POst content
            <>
               <div className="row">
                  <div className="col">
                    <InputSearch placeholder="Buscar Post ..." maxlength="20" callback={handleInputSearch}/>
                  </div>
                  <div className="col-5 col-md-4 col-lg-2 offset-lg-3">
                    <SelectorDrop options={filterValues} callback={handleSelectorDrop}/>
                  </div>
               </div>

               <div className={'App-section d-flex mt-3 flex-column max-h-30 overflow-auto scroll-primary pe-2  ' + 
                                (!postsFil.length ? 
                                'justify-content-center':'justify-content-start')}>
                  <TransitionGroup className="justify-content-center row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
                    {
                        postsFil.map(({id,title,body}) => <CSSTransition key={id} timeout={800} classNames="ani-fadeInUp">
                              <PostCard id={id} title={title} body={body}/>
                           </CSSTransition> 
                          )                  
                    }
                  </TransitionGroup> 
                  <CSSTransition in={!postsFil.length} timeout={900} unmountOnExit classNames="ani-fadeInDelay" exit={false}>
                     <NotFound message="Ooops posts no encontrados." custom="text-center"/>
                  </CSSTransition>
              </div>
            </>

            }
          </div> 
}