import { useState } from 'react';

import { subStringLength } from './../../extend/HelpersDom';
import FormComment from './extend/FormComment';

export default function PostComments({items}){
   const [ comments, setComments  ] = useState(items);

   const handleFormComment = ({name, email, body}) => {
      const { postId, id } = comments[comments.length - 1]; //preconfig by original comment
      const newComment = { postId, id: id + 1, name, email, body };

      setComments((prev) => ([ newComment, ...prev ]) );
   };

   return <>
            <div className="my-2">
               <FormComment callback={handleFormComment}/>                       
            </div>
            <hr/>
            <div className="my-2 max-h-30 overflow-auto scroll-primary pe-2">
               {
                  comments.map( ({name, email, body}, idx) => {
                     return <div key={idx}  className="card mb-2 border border-primary">
                                 <header className="card-header p-1 d-flex justify-content-between align-items-center">
                                    <small className="text-uppercase link-hover cursor">
                                       <i className="bx bx-user-pin align-middle me-1"></i>
                                       { subStringLength(name, 12, true) }
                                    </small>
                                    <small className="link-hover">{ email }</small>
                                 </header>
                                 <article className="card-body">
                                    { body }
                                 </article>
                              </div>
                  })
               }
            </div>
         </>
}