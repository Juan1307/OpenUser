import { useLocation } from 'wouter';

import { Loader } from './../components/Reusable';

import { parsedNumberId, subStringLength } from './../extend/HelpersDom';
import { useRandomPostsHook } from './../hooks/UserHook.js';

export default function RandomPosts({limit}) {
   const posts = useRandomPostsHook(limit);
   const [, setLocation] = useLocation();

   return <div className="border rounded p-2 position-relative min-h-25 h-100">
            {
              !posts.length ? <Loader message="Cargando Posts ..."/> :
               <div className="d-flex flex-column h-100 justify-content-between">
                  {
                     posts.map(({ userId, id, title }, idx) => {
                        return  (<div className="card p-2 border-primary mb-3 card-random" 
                                      key={idx} onClick={() => setLocation(`/OpenUser/user/${userId}/post/${id}`)}>
                                    <header className="d-flex justify-content-between">
                                       <span> <i className="bx bx-food-menu"></i> : { parsedNumberId(id) }</span>
                                       <span> <i className="bx bx-user"></i> : { parsedNumberId(userId) }</span>
                                    </header>
                                    <article className="text-uppercase"> { subStringLength(title, 18, true) } </article>
                                 </div>)
                     })
                  }
                 
               </div>      
            }
         </div>
}