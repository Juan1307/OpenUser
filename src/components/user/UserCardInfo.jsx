import { BtnIcon } from './../Reusable';

export default function UserCardInfo({user}) {
  const { name, email, phone, website,
          address: { city, street, suite },
          company
          } = user;

  const ButtonLink = ({data, icon = 'bx-x', target = false}) => {
    return target ? 
            <a href={'https://www.'+ data} target="_blank" rel="noreferrer noopener" className="btn btn-outline-primary btn-sm ms-2">
                <BtnIcon icon={icon}/>
             </a>
            :
            <span className="link-hover ms-2">
              <BtnIcon icon={icon}/> <small className="fw-light">{ data }</small>
            </span>
  }

  // react fragment
  return (<>
            <header className="card-header d-flex flex-wrap justify-content-center justify-content-lg-between align-items-center"> 
              <div>{ name }</div>
              <div className="d-flex flex-wrap align-items-center">
                <ButtonLink data={email} icon="bx-envelope"/>
                <ButtonLink data={phone} icon="bx-phone"/>
                <ButtonLink data={website} icon="bx-link" target={true}/>
              </div>
            </header>
            <div className="card-body">
              <div className="row">
                <div className="col-12 mb-3 mb-lg-0 col-lg-4">
                  <div>
                    <i className="bx bx-home"></i> : { city }
                  </div>
                  <div>
                    <i className="bx bx-detail"></i> : { street } - { suite }           
                  </div>
                  <hr className="my-1"/>
                  <div>
                    <i className="bx bx-briefcase"></i> : { company.name } 
                  </div>
                </div>
                <article className="col align-self-center">
                  <span>
                    Hi, My name's <span className="fst-italic"> { name } </span>, I'm from {city } and I live in { street }, I work at { company.name } where { company.catchPhrase }. Thanks you :b
                  </span>
                </article>
              </div>
            </div>
          </>);
}