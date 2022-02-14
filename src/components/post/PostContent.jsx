import { subStringLength, parsedNumberId } from './../../extend/HelpersDom';

export default function PostContent({item}) {
   const { id, title, body } = item;

   return <div className="card border border-dark shadow">
            <header className="card-header "> 
               <p className="fw-bolder mb-1"> 
                  Post nro : { parsedNumberId(id) } 
               </p>
               <p className="mb-1 text-uppercase"> {  subStringLength(title, 45, true) }</p> 
            </header>
            <article className="card-body">
               <p>
               { body } 
               </p>
               <p>
                  - Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus id incidunt dolor minima eos, nihil est inventore temporibus magnam autem at sint quod corporis obcaecati dignissimos error sunt similique,
               </p>
               <p>
               Lorem ipsum dolor sit amet consectetur adipisicing, elit. Praesentium ad quos nemo, quibusdam adipisci quod iure quaerat nobis possimus laudantium voluptas laboriosam error assumenda iste aliquid esse corporis nihil consequuntur.
               </p>
                              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing, elit. Praesentium ad quos nemo, quibusdam adipisci quod iure quaerat nobis possimus laudantium voluptas laboriosam error assumenda iste aliquid esse corporis nihil consequuntur.
               </p>

            </article>
         </div>   
}