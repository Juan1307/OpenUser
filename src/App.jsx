import './App.css';

import React, { Suspense,  useState, useRef, useEffect } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import { CSSTransition  } from 'react-transition-group';

const RandomPosts = React.lazy(() => import('./pages/RandomPosts') );

const TheListUsers = React.lazy(() => import('./pages/TheListUsers') );
const TheUserMain = React.lazy(() => import('./pages/TheUserMain') );
const TheModuleUser = React.lazy(() => import('./pages/TheModuleUser') );

const ThePostUser = React.lazy(() => import('./pages/ThePostUser') );

function App() {

  const [offset, setOffset] = useState(0);
  
  const [, setLocation ] = useLocation();
  const nodeRef = useRef(null);
  const switchTheme = useRef(null);

  const theme = {
    setTheme(){
      localStorage.setItem('theme-page', 'dark-theme');
    },
    removeTheme(){
      localStorage.removeItem('theme-page');
    }
  };

  // init page theme
  useEffect((d = document) => {
    const data = localStorage.getItem('theme-page');

    if(data){ 
      d.body.classList.add(data)
      switchTheme.current.checked = true;
    }
  }, []);

  // scroll event 
  useEffect((w = window) => {
    const onScroll = () => {
      const { round } = Math;
      setOffset(round(w.scrollY));
    };

    w.addEventListener('scroll', onScroll, { passive:true });
    return () => w.removeEventListener('scroll', onScroll);
  },[offset])

  // switch theme
  const handleOnClick = ({target:{ checked }}) => {
    document.body.classList.toggle('dark-theme');

    if(checked) theme.setTheme();
    else theme.removeTheme();
  };

  const handleToScroll = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <CSSTransition appear={true} in={true} timeout={1000} 
        unmountOnExit classNames="ani-fade" nodeRef={nodeRef}>
        
        <main className="App container-md" ref={nodeRef}>
        
          <header className="d-flex justify-content-between align-items-center">
            <div className="App-title">
              <h1 className="App-title-text display-3 mb-0"
                  onClick={() => setLocation('/') }>
                Demo Open User
              </h1>
              <p>Una demo que provee datos abiertos de APIs publicas como :&nbsp;
                <a href="https://jsonplaceholder.typicode.com/" className="link-priamry" target="_blank" rel="noreferrer noopener">JSON placeholder</a>
              </p>
            </div>
            <div className="text-center cursor">
              <label htmlFor="switch-theme">
                <small>Tema.</small>
              </label>
              <div className="form-check form-switch d-flex justify-content-center">
                <input type="checkbox" ref={switchTheme} onClick={handleOnClick} className="form-check-input App-theme" id="switch-theme"/>
              </div>
              
            </div>
          </header>

          {/* Main content */}
          <section className="row">
            <section className="col-12 col-sm-7 col-md-8 col-lg-9">
                
              <Switch>
                <Route path="/">  
                  <Suspense fallback={null}>
                    <TheListUsers/>
                  </Suspense>  
                </Route>

                <Route path="/user/:index">
                  {params => <Suspense fallback={null}> 
                                <TheUserMain params={params}/>
                              </Suspense> }
                </Route>
                
                <Route path="/user/:index/:path">
                  {params => <Suspense fallback={null}> 
                                <TheModuleUser params={params}/>
                             </Suspense>}
                </Route>

                <Route path="/user/:index/post/:sindex">
                  {params => <Suspense fallback={null}> 
                                <ThePostUser params={params}/>
                             </Suspense>}
                </Route>

                <Route path="/:rest*">
                  {() => <Suspense fallback={null}>
                            <TheListUsers/>
                          </Suspense>}
                </Route>
              </Switch>

              {/*<Route path="/user/:index/posts/:sindex" component={TheModuleUser} />*/}
            </section>
            
            <aside className="col overflow-auto scroll-primary pe-1">
              <p>Posts interesantes :</p>
              <Suspense fallback={null}>
                <RandomPosts limit={8}/>
              </Suspense>
            </aside>
          </section>
          
        </main>
      </CSSTransition>

      <div className="position-fixed top-50 start-0 translate-middle-y z-index-20">
        <a href="https://github.com/Juan1307" target="_blank" rel="noreferrer noopener" className="btn btn-dark rounded-0 rounded-end d-block">
          <i className="bx bxl-github align-middle"></i>
        </a>
        <a href="https://www.linkedin.com/in/juan-antoni-cabanillas-chuquiruna-20a449174/" target="_blank" rel="noreferrer noopener" className="btn btn-primary rounded-0 rounded-end mt-2">
          <i className="bx bxl-linkedin align-middle"></i>
        </a>
      </div>

      <div className={'position-fixed button-scroll ' + (offset > 200 ? 'active' : '')}>
        <button className="btn btn-sm btn-primary px-2 py-2 rounded-3"
              onClick={handleToScroll}>
          <i className="bx bx-sm bx-chevron-up align-middle"></i>
        </button>
      </div>

      <footer className="py-5 px-2 d-flex flex-column align-items-center bg-gray-100">
        <div className="text-center">
          <p>Aplicacion Demo JS, React, Bootstrap 5 y más</p>
        </div>
        <div className="mt-2 row gx-2">
          <div className="col">
            <a href="https://es.reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer noopener" className="btn btn-sm btn-outline-dark">
              <i className="bx bxl-react bx-md align-middle"></i>
            </a>
          </div>
          <div className="col">
            <a href="https://developer.mozilla.org/en-US/docs" target="_blank" rel="noreferrer noopener" className="btn btn-sm btn-outline-dark">
              <i className="bx bxl-javascript bx-md align-middle"></i>
            </a>
          </div>
          <div className="col">
            <a href="https://getbootstrap.com/docs/5.1/" target="_blank" rel="noreferrer noopener" className="btn btn-sm btn-outline-dark">
              <i className="bx bxl-bootstrap bx-md align-middle"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
