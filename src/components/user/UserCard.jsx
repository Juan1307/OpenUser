import { useLocation } from 'wouter';
import PropTypes from 'prop-types';

UserCard.propTypes = {  index: PropTypes.number,
                        username: PropTypes.string,
                        email: PropTypes.string,
                        website: PropTypes.string };

export default function UserCard({index, username, email, website }) {

  const [, setLocation] = useLocation();

  return <div className="col-sm-12 col-md-6 col-lg">
             <div className="card card-user">
               <header onClick={() => setLocation('/user/'+index)} className="card-header d-flex justify-content-between">
                  <span>{ username.toUpperCase() }</span>
                  <i className="bx bx-sm bx-chevron-right"></i>
               </header>
               <div className="card-body">
                 <article>
                   Lorem ipsum dolor sit, amet consectetur nulla!
                 </article>
                 <div className="row">

                   <div className="col col-md-12 col-lg-12 col-xl">
                     <small>
                       <a href="" className="link-primary">{ email }</a>
                     </small>
                   </div>
                   <div className="col col-md-12 col-lg-12 col-xl text-end text-md-center text-xl-end">
                     <a href={'https://www.'+ website} className="btn btn-sm btn-outline-primary" target="_blank" rel="noreferrer noopener">
                        <i className="bx bx-link mt-1"></i>
                     </a>

                   </div>

                 </div>
               </div>
            </div>
          </div>
}
