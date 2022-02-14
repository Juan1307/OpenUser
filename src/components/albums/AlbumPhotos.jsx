import { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import NotFound from './../../require/NotFound';
import { Loader, InputSearch, BasicPagination } from './../../components/Reusable';
import { getAlbumPhotos } from './../../services/UsersSrv.js';
import { createPagination, subStringLength, parsedNumberId } from './../../extend/HelpersDom';

const PhotoBox = ({item}) => {
   const { id, title, url, thumbnailUrl } = item;

   return <div className="col-6 col-sm-12 col-md-6">
            <div className="card card-photo-box h-100 border-primary">
               <img className="rounded" src={url} loading="lazy" alt={'image_' + id}/>
               <div className="card-img-overlay card-photo-box-content p-0 d-flex align-items-end justify-content-end">
                  <article className="p-1 bg-info text-white rounded-start border-start border-top border-primary">
                     { subStringLength(title, 10) }
                  </article>
                  <div className="card-photo-box-intro position-absolute h-100 top-0 start-0 end-0 d-flex justify-content-center align-items-center flex-column">
                     <small className="cpb-text mb-2 text-center fw-bolder rounded p-1 bg-white">ID : { parsedNumberId(id) }</small>
                     <a href={thumbnailUrl} target="_blank" rel="noopener noreferrer" className="cpb-btn btn btn-sm btn-outline-primary">
                        <i className="bx bx-link"></i>
                     </a>
                  </div>
               </div>
            </div>
          </div>
};

export default function AlbumPhotos({data}){

   const { id , title } = data;

   const [ photos, setPhotos ] = useState([]);
   const [ photosFil, setPhotosFil ] = useState([]);
   const [ datPart, setDatPart ] = useState([]);
   const [ datPags, setDatPags ] = useState([]);

   const [ initialPag, setInitialPag ] = useState(0);

   useEffect(() => {
      //usar async await en use effect hace bugs de montado :l
      getAlbumPhotos(id).then((data) => {
         setPhotos(data);
         
         const { dataArray, dataPags } = createPagination(data);
            setDatPart(dataArray);
            setDatPags(dataPags);
            setInitialPag(0);

            setPhotosFil(() => dataArray[0]);

      },(err) => console.error(err.status));
      
      return () => setPhotos([]); //on loading 
   }, [id]);

   const handleInitialPag = (val) => {
      setInitialPag(val);
      setPhotosFil(datPart[val]);
   };

   const handleInputSearch = (val) => {
      setPhotosFil(() => {
         const data = photos.filter(({title}) => title.toUpperCase().includes(val));
         const { dataArray, dataPags } = createPagination(data);
            setDatPart(dataArray);
            setDatPags(dataPags);
            setInitialPag(0);

         return dataArray[0];
      });
   };

   return  !photos.length ? <Loader message="Cargando Fotos ..."/> : 
               <>
                  <div className="mb-3 rounded border border-primary p-2 d-flex align-items-center">
                     <div className="me-2 text-primary">
                        <i className="mt-1 bx bx-md bx-photo-album"></i>
                     </div>
                     <div className="d-flex flex-column">
                        <span>- ID : 00{ id }</span>
                        <small className="text-uppercase">- { subStringLength(title, 30, true) }</small>
                     </div>
                  </div>
                  <InputSearch placeholder="Buscar fotografia ..." maxlength="15" callback={handleInputSearch}/>

                  <div className={'min-h-20 d-flex mt-3 flex-column ' + 
                                    (!photosFil.length ? 
                                    'justify-content-center':'justify-content-start')}>
                     <TransitionGroup className="justify-content-center mb-3 row row-cols-md-1 row-cols-xl-2 g-2">
                       {
                           photosFil.map((elem, id) => <CSSTransition key={id} timeout={800} classNames="ani-fadeInUp">
                              <PhotoBox item={elem}/>
                           </CSSTransition> )   
                       }
                     </TransitionGroup> 
                     <CSSTransition in={!photosFil.length} timeout={900} unmountOnExit classNames="ani-fadeInDelay" exit={false}>
                        <NotFound message="Ooops fotos no encontradas." custom="text-center"/>
                     </CSSTransition>
                  </div>
                  
                  <BasicPagination currentpag={initialPag} totalpags={datPags.length} callback={handleInitialPag}/>
               </>
}