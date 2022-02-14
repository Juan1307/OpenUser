import { useState, useEffect, useRef } from 'react';

import { focusElement, subStringLength } from './../../../extend/HelpersDom';  
import { valString } from './../../../extend/ValueValidator.js';  

export default function FormComment({callback}) {

   const [ user, setUser ] = useState( {name:'',email:'', body:''} );
   const [ val, setVal ] = useState( {name:false, email:false, body: false} );
   const [ valState, setValState ] = useState(true);
   const [ init, setInit ] = useState(false);

   const inputComment = useRef(null);

   // when we're init the component 
   useEffect(() => focusElement('name') ,[]);
   useEffect(() => {
      // check valState
      if(!valState && checkSendCallBack(val)) {
         callback(user); // parent function comunication
         setInit(true);
         focusElement('body');

         inputComment.current.value = ''; //clear input comment
      } 

   },[valState]);
   
   const checkSendCallBack = (obj) => {
      setValState(true); 
      const findVal = Object.entries(obj).find( ([, value]) => value);

      if (!findVal) return true;
      else {
         focusElement(findVal[0]); //prop reference
         return false;
      }
   };

   const ValConfigKeys =  {
      name: (value) => !valString('StringNormal', { value, range:[2, 10] }),
      email: (value) => !valString('StringEmail', { value, range:[2, 30] }),
      body: (value) => !valString('StringNormal', { value, range:[2, 70] })
   };

   const funcValidator = (key, value) => ValConfigKeys[key](value);

   const handleOnInput = ({target}) => {
      const { value, id } = target;

      setVal((prev) => ({ ...prev, [id]: funcValidator(id, value) }) );
      setUser((prev) => ({ ...prev, [id]: value }) );
      setValState(true);
   };

   const handleOnClick = () => {
      setVal((prev) => ({ ...prev, name: funcValidator('name', user.name) }) );
      setVal((prev) => ({ ...prev, email: funcValidator('email', user.email) }) );
      setVal((prev) => ({ ...prev, body: funcValidator('body', user.body) }) );
      setValState(false);
   };

   const isInvalid = (bool) => bool ? 'is-invalid' : '';

   return  <> 
            <div className="d-flex flex-wrap justify-content-between">
              <label htmlFor={!init ? 'name':'body'} className="mb-2">Escribe un comentario:</label>
              {
                 init ? 
                 <span>
                    <small className="text-uppercase">{ subStringLength(user.name, 10, true) }</small>
                     - <small className="text-primary">{ user.email }</small>
                 </span> : null
              }
              
            </div>
               <form className="row g-2">
                  {
                    !init ? <>  
                        <div className="col-6">
                           <input onInput={handleOnInput} className={`form-control ${ isInvalid(val.name) }`} 
                                  type="text" id="name"  placeholder="Ingrese nombre" maxLength="10"/>
                        </div>
                        <div className="col-6">
                           <input onInput={handleOnInput} className={`form-control ${ isInvalid(val.email) }`}
                                  type="text" id="email" placeholder="Ingrese email" maxLength="30"/>
                        </div>
                      </> : null
                  }
                  <div className="col-10" >
                     <textarea ref={inputComment} onInput={handleOnInput} className={`form-control ${ isInvalid(val.body) }`} 
                        type="text" id="body" rows="2" placeholder="Escribe un commentario" maxLength="70">
                     </textarea>
                  </div>
                  <div className="col-2 d-flex">
                     <button onClick={handleOnClick} type="button" className="btn btn-outline-primary w-100" >
                        <i className="bx bx-sm bx-send"></i>
                     </button>
                  </div>
               </form>
            </>
}