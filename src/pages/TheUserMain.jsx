import { useState } from 'react';
import { useUserHook } from './../hooks/UserHook.js';

import UserCardInfo from './../components/user/UserCardInfo';
import Dynamic from './../components/Dynamic';
import { Loader, BtnIcon } from './../components/Reusable';

const localButtonsLinks = [ { title: 'Posts', icon:'bx-dock-right', state:true },
                            { title: 'Albums', icon:'bx-photo-album', state:false },
                            { title: 'Todos', icon:'bx-align-middle', state:false } ];

export default function TheUserMain(props) {
  
  const { params:{ index } } = props;
  const [ user ] = useUserHook(index); // custom hook

  const [ buttonsLinks, setButtonLinks ] = useState(localButtonsLinks);
  const [ component, setComponent ] = useState(localButtonsLinks[0].title.toLowerCase());

  const setActiveButton = (idx) => {
    // set state 
    const setOnActive = (elem, index) => {
      let { title, icon, state } = elem;
          state = (index == idx);
          state && setComponent(title.toLowerCase()); //set current title
      
      return { title, icon, state };
    } 
    setButtonLinks((current) => current.map(setOnActive));
  };

  const stateActive = (sts) => (sts) ? 'btn-primary' : 'btn-outline-primary';

  return (
      <>
        <div className="card min-h-10">
          { !user.username ? <Loader message="Cargando Usuario ..."/> : <UserCardInfo user={user}/> }
        </div>

        <div className="border rounded p-3 my-3">
          <nav className="d-flex">
           {
             buttonsLinks.map( ( {title, icon, state}, idx ) => {
                return <button key={idx} className={'btn btn-sm me-2 ' + stateActive(state)} 
                               onClick={() => setActiveButton(idx)}> 
                          <BtnIcon icon={icon}/> { title }
                       </button>
              }) 
           }
          </nav>

          <main className="py-3">
            <Dynamic module={component} index={index}/>
          </main>
        </div>
      </>);
}