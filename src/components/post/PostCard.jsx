import { useLocation } from 'wouter';

import { subStringLength } from './../../extend/HelpersDom';
import { UserGetContext } from './../Dynamic';

export default function PostCard ({id, title, body}) {
   const [ , setLocation ]  = useLocation();
   const { currentIndex } = UserGetContext();

   return <div className="col-sm-12 col-md-6 col-lg">
            <div className="h-100 card card-post">
               <header className="card-header row bg-white">
                  <span className="col text-truncate">
                     { title.toUpperCase() } 
                  </span>
                  <span className="col-2">
                     <i className="bx bx-bookmark"></i>
                  </span>
               </header>
               <div className="card-body">
                  <article>
                     { subStringLength(body, 110) }
                  </article>
               </div>

               <div className="card-post-intro position-absolute h-100 top-0 start-0 end-0 d-flex justify-content-center align-items-center">
                  <div>
                     <p className="cp-txt mb-2 text-center rounded p-1 bg-white">ID : 000{id}</p>
                     <button type="button" className="cp-btn btn btn-sm btn-outline-dark" 
                             onClick={() => setLocation(`/user/${currentIndex}/post/${id}`)}>
                        Visualizar <i className="bx bx-cross mt-1"></i>
                     </button>
                  </div>
               </div>
            </div>
         </div>
}