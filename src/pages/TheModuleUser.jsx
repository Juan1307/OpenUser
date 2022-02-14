import { useUserHook } from './../hooks/UserHook.js';

import Dynamic from './../components/Dynamic';
import { Loader } from './../components/Reusable';
import UserCardMini from './../components/user/UserCardMini';

export default function TheModuleUser(props) {
  const { params: { index, path } } = props;

  const [ user ] = useUserHook(index); // custom hook  
  const newPath = path.toLowerCase();

  return <>
          <div className="card min-h-3 mb-3">
          {
            !user.username ? <Loader message="Cargando Usuario ..." state={true}/> : <UserCardMini item={user}/>
          }
          </div>

          <Dynamic index={index} module={newPath}/>
         </>  
}