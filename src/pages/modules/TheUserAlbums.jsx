import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import AlbumPhotos from './../../components/albums/AlbumPhotos';
import AlbumCard from './../../components/albums/AlbumCard';
import NotFound from './../../require/NotFound';
import { UserGetContext } from './../../components/Dynamic';
import { Loader, InputSearch } from './../../components/Reusable';

import { getAlbumsUser } from './../../services/UsersSrv.js';
import { focusElement } from './../../extend/HelpersDom';

export default function TheUserAlbums () {
   const { currentIndex } = UserGetContext();
   
   const [ albums, setAlbums ] = useState([]);
   const [ albumsFil, setAlbumsFil ] = useState([]);
   const [ dataActive, setDataActive ] = useState({});

   const [ openModal, setOpenModal ] = useState(false);

   useEffect( () => {
      (async () => {
         const albumsData = await getAlbumsUser(currentIndex);
            setAlbums(albumsData);
            setAlbumsFil(albumsData);
            setDataActive(albumsData[0]);

            focusElement('input-default');
      })();
   }, [currentIndex]);

   const handleInputSearch = (val) => {
      setAlbumsFil(() => albums.filter(({title}) => title.toUpperCase().includes(val)));
   };
   const handleClickAlbumCard = (val) => setDataActive(val);

   return <div className="position-relative d-flex flex-column rounded min-h-20">

       { !albums.length ? <Loader message="Cargando Albums ..."/> : 
            // Albums content
            <>
               <div className="row position-relative">
                  <div className="col-md-12 col-lg-7">
                    <InputSearch placeholder="Buscar Albums ..." maxlength="20" callback={handleInputSearch}/>

                     <div className={'App-section d-flex mt-3 flex-column max-h-30 overflow-auto scroll-primary pe-2 ' + 
                                      (!albumsFil.length ? 
                                      'justify-content-center':'justify-content-start')}>
                        <TransitionGroup className="justify-content-center row  row-cols-md-1 row-cols-lg-2 row-cols-xl-3 g-3">
                          {
                              albumsFil.map(({id,title}) => <CSSTransition key={id} timeout={800} classNames="ani-fadeInUp">
                                    <AlbumCard item={{id, title}} callback={handleClickAlbumCard} active={id === dataActive.id}/>
                                 </CSSTransition> 
                                )                  
                          }
                        </TransitionGroup> 
                        <CSSTransition in={!albumsFil.length} timeout={900} unmountOnExit classNames="ani-fadeInDelay" exit={false}>
                           <NotFound message="Ooops albums no encontrados." custom="text-center"/>
                        </CSSTransition>
                    </div>
                  </div>

                  <div className={'mt-4 mt-lg-0 py-3 py-lg-0 col-md-12 col-lg album-photos-responsive ' + (openModal ? 'active' : null)}>
                     
                     <div className="position-relative d-flex flex-column rounded h-100 min-h-20">
                        <AlbumPhotos data={dataActive}/>
                     </div>

                  </div>

                  <div className="btn-album-photos-responsive d-block d-lg-none">
                     <button type="button" className="btn p-0 btn-primary rounded-circle align-middle" onClick={() => setOpenModal(!openModal) }>
                        <i className={'mt-1 bx ' + ( openModal ? 'bx-x' : 'bx-images')}></i>
                     </button>
                  </div>
               </div>
            </>

            }
   </div>
}