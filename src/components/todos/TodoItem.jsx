import { subStringLength, parsedNumberId } from './../../extend/HelpersDom';

export default function TodoItem({item, callback}) {
   const {id, title, completed } = item;
   
   const handleOnClick = () => callback(id, completed);
   
   return <div className="col-sm-12 col-md-6 col-lg">
             <div className="h-100 card border-0 mt-2">
                <header className="mt-4 card-header rounded border d-flex justify-content-between align-items-center">
                  <div className="text-initial">
                      { subStringLength(title, 15, true) }
                  </div>
                  <div>
                     <button type="button" 
                     className={'btn btn-sm ' + (completed ? 'btn-outline-success' : 'btn-outline-danger')}
                        onClick={handleOnClick}>
                        <i className={'align-middle bx ' + (completed ? 'bx-check' : 'bx-x')} ></i>
                     </button>
                  </div>
                </header>
                <div className="position-absolute start-0 top-0 border rounded px-1">
                   { parsedNumberId(id, 4) }
                </div>
             </div> 
          </div>
}