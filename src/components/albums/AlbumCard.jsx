import { subStringLength } from './../../extend/HelpersDom';

export default function AlbumCard({callback, active, item}){
   
   const { id, title } = item;

   return  <div className="col-sm-12 col-md-6 col-lg">
            <div className={'h-100 card card-album ' + (active && 'active')} 
                  onClick={() => callback(item)}>
               <div className="card-body flex-column">
                 <div className="border-bottom mb-1">
                    <i className="bx bx-customize"></i> ID : 00{ id }
                 </div>
                 <div className="text-initial">
                    { subStringLength(title, 20, true) }
                 </div>
               </div>
            </div>
           </div>
}