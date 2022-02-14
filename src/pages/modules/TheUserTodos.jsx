import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import TodoItem from './../../components/todos/TodoItem';
import NotFound from './../../require/NotFound';
import { UserGetContext } from './../../components/Dynamic';
import { Loader, InputSearch, BasicPagination  } from './../../components/Reusable';

import { getTodosUser } from './../../services/UsersSrv.js';
import { focusElement, createPagination } from './../../extend/HelpersDom';

export default function TheUserTodos () {
   
   const { currentIndex } = UserGetContext();
   
   const [ todos, setTodos ] = useState([]);
   const [ todosFil, setTodosFil ] = useState([]);

   const [ datPart, setDatPart ] = useState([]);
   const [ datPags, setDatPags ] = useState([]);
   const [ initialPag, setInitialPag ] = useState(0);

   const [ info, setInfo ] = useState({});
   
   const getCurrentCompleted = (data) => {
      const [ completed, uncompleted ] = data.reduce(([one, two], { completed }) => {
         (completed) ?  one++ : two++;
            return [one, two];
      }, [0, 0]);
      return { completed, uncompleted };
   };

   const setStatesPagination = (data) => {
      const { dataArray, dataPags } = createPagination(data, 10);
            setDatPart(dataArray);
            setDatPags(dataPags);
            setInitialPag(0);
     return dataArray[0];
   };

   useEffect(() => {
      (async () => {
         const todosData = await getTodosUser(currentIndex);
               setTodos(todosData);
               setTodosFil(() => setStatesPagination(todosData));
               setInfo(() => getCurrentCompleted(todosData));

               focusElement('input-default');
      })();
   },[currentIndex]);


   const handleTodoItem = (val, sts) => {
      const index = todos.findIndex(({id}) => id === val);
      todos[index].completed = !sts;
      setInfo(() => getCurrentCompleted(todos));
   };

   const handleInitialPag = (val) => {
      setInitialPag(val);
      setTodosFil(datPart[val]);
   };

   const handleInputSearch = (val) => {
      setTodosFil(() => {
         const data = todos.filter(({title}) => title.toUpperCase().includes(val));
         return setStatesPagination(data);
      });
   };

   return <div className="position-relative d-flex flex-column rounded min-h-20">
            { !todos.length ? <Loader message="Cargando Todos ..."/> : 
               <>
                  <div className="row">
                     <div className="col-sm-12 col-md">
                        <InputSearch placeholder="Buscar Todos ..." maxlength="20" callback={handleInputSearch}/>
                     </div>
                     <div className="mt-3 mt-md-0 col-sm-12 col-md d-flex flex-wrap justify-content-around align-items-center">
                        <div className="fw-bolder border-bottom border-dark dark">
                           Total : { todos.length }   
                        </div>
                        <div className="fw-bolder text-success border-bottom border-success">
                           <i className="bx bx-check align-middle"></i> { info.completed } 
                        </div>
                        <div className="fw-bolder text-danger border-bottom border-danger">
                           <i className="bx bx-x align-middle"></i> { info.uncompleted }
                        </div>
                     </div>
                  </div>

                  <div className={'min-h-20 d-flex mt-1 flex-column max-h-30 overflow-auto scroll-primary pe-2 ' + 
                                (!todosFil.length ? 
                                'justify-content-center':'justify-content-start')}>
                     <TransitionGroup className="justify-content-center row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-3">
                       {
                           todosFil.map((elem, id) => <CSSTransition key={id} timeout={800} classNames="ani-fadeInUp">
                                 <TodoItem item={elem} callback={handleTodoItem}/>
                              </CSSTransition> 
                             )
                       }
                     </TransitionGroup> 
                     <CSSTransition in={!todosFil.length} timeout={900} unmountOnExit classNames="ani-fadeInDelay" exit={false}>
                        <NotFound message="Ooops todos no encontrados." custom="text-center"/>
                     </CSSTransition>
                  </div>

                  <div className="mt-3">
                     <BasicPagination currentpag={initialPag} totalpags={datPags.length} callback={handleInitialPag}/>  
                  </div>
               </>   
            }
         </div>
}