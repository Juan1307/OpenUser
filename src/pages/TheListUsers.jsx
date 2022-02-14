import { useState, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import UserCard from './../components/user/UserCard';
import NotFound from './../require/NotFound';
import getUsers from './../services/UsersSrv.js';

import { focusElement } from './../extend/HelpersDom';

const parsedUserName = (str) => str.toUpperCase();

export default function TheListUsers() {

   const [ users, setUsers ] = useState([]);
   const [ usersFil, setUsersFil ] = useState([]);

   let localUsers = localStorage.getItem('usersLocal'); 
   const setStates = (payload) => (setUsers(payload), setUsersFil(payload)); 
   
   useEffect(() => {
      focusElement('default-search');
      if (localUsers) {
         localUsers = JSON.parse(localUsers);
         return setStates(localUsers);
      }

      (async () => {
         const usersData = await getUsers();
               setStates(usersData);
         localStorage.setItem('usersLocal', JSON.stringify(usersData));
      })();

   }, []);

   const handleInputKeyword = (e) => {
      const { target: {value: keyword} } = e;
      setUsersFil(() => {
         return users.filter( ({username}) => parsedUserName(username).includes(parsedUserName(keyword)) );
      });
   }; 

   return <div className="d-flex flex-column">
            <input type="text" id="default-search" className="form-control control-search" onInput={handleInputKeyword} placeholder="Buscar Usuario"/>

            <section className={'App-section d-flex flex-column ' + 
                                (!usersFil.length ? 
                                'justify-content-center':'justify-content-start')}>
               
               <TransitionGroup className="justify-content-center mt-0 row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">

               { usersFil.map( ({id, username, email, website }) => {
                  return <CSSTransition key={id} timeout={800} classNames="ani-fadeInUp">
                           <UserCard key={id} index={id} username={username} email={email} website={website} />
                         </CSSTransition> }) 
               }

               </TransitionGroup>

               <CSSTransition in={!usersFil.length} timeout={900} unmountOnExit classNames="ani-fadeInDelay" exit={false}>
                  <NotFound message="Ooops datos no encontrados" custom="text-center"/>
               </CSSTransition>

            </section>
         </div>
}