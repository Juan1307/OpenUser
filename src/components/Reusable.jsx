import { useState } from 'react';

const Loader = ({message = '', state = false}) => {

   const spinnerSize  = (state) ? 'spinner-border-sm' : '';

   return (<div className="loader w-100 h-100 d-flex">
         <div className="m-auto d-flex align-items-center text-primary">
            <div className={"spinner-border text-primary " + spinnerSize } role="status">
               <span className="visually-hidden">Cargando ...</span>
             </div>
             <span className="ms-3">
               { state ? <small> { message } </small> : message }
             </span> 
         </div>
      </div>);
}

const BtnIcon = ({icon}) => <i className={'align-middle bx ' + icon}></i>;

const SelectorDrop = ({callback, options}) => {

   if (!Array.isArray(options)) return;
   
   const [ title, setTitle ] = useState('Filtrar');
   const [ slideOn, setSlideOn ] = useState(false);
   const [ active, setActive ] = useState(true);

   const handleClickButton = ({title, value}) => {
      setTitle(title);
      setSlideOn(false)
      setActive(value === null); //check if null

      return callback(value) //pass value to parent
   }

   const defaultActive = (sts) => sts ? 'btn-outline-secondary' : 'btn-outline-primary'; 
   const defaultItem = { title:'Sin filtros', value: null };

   const slideActive = (sts) => !sts ? 'd-none' : 'z-index-10 position-absolute shadow top-100 start-0 end-0';
   const slideIcon = (sts) => !sts ? 'bx-chevron-down' : 'bx-chevron-up';

   const ButtonOption = ({item:{ title, value }}) => 
      <button type="button" className="p-1 list-group-item list-group-item-action text-secondary" onClick={() => handleClickButton({title, value}) } >
         <BtnIcon icon="bx-chevron-right"/> { title }
      </button>

   return <div className="d-grid position-relative">
            <button type="button" className={`btn btn-sm ${defaultActive(active)} d-flex justify-content-between align-items-center`} onClick={() => setSlideOn(!slideOn)}>
               <span>
                  <BtnIcon icon="bx-filter-alt"/> { title } 
               </span>
               <BtnIcon icon={slideIcon(slideOn)}/>
            </button>
            <div className={slideActive(slideOn)}>
               <ul className="list-group border border-secondary mt-1">
                  <ButtonOption item={defaultItem}/>
                  { options.map((elem, index) => <ButtonOption key={index} item={elem}/>) }
               </ul>
            </div>
          </div>
}

const InputSearch = ( { callback,
                        saltId = 'default', placeholder = 'Ingrese valor ...', maxlength = 12 }) => {

   const inputID = 'input-' + saltId;
   const handleOnInput = (evt) => {
      const { target:{ value } } = evt;
      return callback(value.toUpperCase().trim());
   }
   return <input type="text" id={inputID} className="form-control form-control-sm control-search" placeholder={placeholder} maxLength={maxlength} onInput={handleOnInput}/>
}

const BasicPagination = ({currentpag = 0, totalpags = [0], callback})  => {
   
   return <ul className="pagination pagination-sm justify-content-center">
            {  currentpag > 0 ?
               <li className="page-item" onClick={() => callback(currentpag - 1)}>
                  <a className="page-link cursor">Anterior</a>
               </li> :  
               <li className="page-item disabled">
                  <span className="page-link">Anterior</span>
               </li> }
            
            <li className="page-item active">
               <span className="page-link">{ currentpag + 1 }</span>
            </li>

            {  currentpag + 1 < totalpags ?
               <li className="page-item" onClick={() => callback(currentpag + 1)}>
                  <a className="page-link cursor">Siguiente</a>
               </li>:
               <li className="page-item disabled">
                  <span className="page-link">Siguiente</span>
               </li> }
         </ul>
}

export { Loader, BtnIcon, InputSearch, SelectorDrop, BasicPagination };