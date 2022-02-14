import { useUserHook, usePostHook } from './../hooks/UserHook.js';
import { Loader } from './../components/Reusable';

import UserCardMini from './../components/user/UserCardMini';
import PostContent from './../components/post/PostContent';
import PostComments from './../components/post/PostComments';

export default function ThePostUser({params}){

   const { index, sindex } = params;
   const [ user ] = useUserHook(index); // custom hook
   const { post, comments } = usePostHook(sindex);  

   return <>
             <div className="card min-h-3 mb-3">
             {
               !user.username ? <Loader message="Cargando Usuario ..." state={true}/> : <UserCardMini item={user}/>
             }
             </div>
             <div className="row g-3">
                <div className="col-12 col-md-12 col-lg-6 col-xl-5">
                   <div className="position-relative min-h-25">
                      { 
                        !post.body ? <Loader message="Cargando Post ..."/> : <PostContent item={post}/>
                      }
                   </div>
                </div>
                <div className="col-12 col-md-12 col-lg-6 col-xl-7">
                   <div className="position-relative min-h-25">
                      {
                        !comments.length ? <Loader message="Cargando Comentarios ..."/> : <PostComments items={comments}/>
                      }
                   </div>
                </div>
             </div>
          </>
}