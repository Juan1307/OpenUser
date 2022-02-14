import { BtnIcon } from './../Reusable';
import { useLocation } from 'wouter';

export default function UserCardMini({item}) {
   const { id, name, username, email, phone, website } = item;
   const [, setLocation ] = useLocation();
   
   return <header className="card-header d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center border border-primary"> 
               <div className="text-primary  d-flex align-items-center" 
                    onClick={() => setLocation('/user/'+ id)}>
                  <i className="bx bx-sm bx-user me-2"></i>
                  <div className="text-uppercase link-hover cursor">
                     <small className="fw-bolder"> { username } </small>
                   </div>  
               </div>
               <div className="d-flex flex-wrap align-items-center">
                  <span className="link-hover ms-2">
                      <BtnIcon icon="bx-envelope"/> <small className="fw-light">{ email }</small>
                  </span>
                  <span className="link-hover ms-2">
                      <BtnIcon icon="bx-phone"/> <small className="fw-light">{ phone }</small>
                  </span>
                  <a href={'https://www.'+ website} target="_blank" rel="noreferrer noopener" className="btn btn-outline-primary btn-sm ms-2">
                     <BtnIcon icon="bx-link"/>
                  </a>
               </div>
            </header>
}