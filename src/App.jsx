import React, { useState } from 'react'
import Navbar from './components/Navbar'
import logo from './assets/react.svg'
import Header from './components/Header'

const App = () => {

  const [errors, setErrors] = useState(null);

  const [show, setShow] = useState(false);

  const menu = [
    { label: 'Profile', url: '#profile' }, // 0
    { label: 'About', url: '#about' }, // 1
    { label: 'Services', url: '#services' },
    { label: 'Contact', url: '#contact' },
  ]

  return (
    <>
      {/* <!-- Navigation--> */}
      <Navbar menu={menu} logo={logo} />
      {/* <!-- Header--> */}
      {
        show ?
          (
            <>
              <Header />
              <button onClick={() => {
                setShow(!show)
              }}>Ocultar Header</button>
            </>
          ) : (
            <div className='d-flex w-100 p-5'>
              <button onClick={() => {
                setShow(!show)
              }}>Mostrar Header</button>
            </div>
          )
      }

      {
        !!errors && (
          <>
            <div className={"alert alert-dismissible fade show " + (errors.level === 1 ? "alert-danger" : "alert-warning")} role="alert">
              <strong>Holy guacamole!</strong> {errors.msg}.
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => setErrors(null)}></button>
            </div>
          </>
        )
      }
      <button onClick={() => setErrors({ msg: 'Aplicando un error con react state', level: 2})}>Set Errors</button>
      {/* <!-- About section--> */}
      <section id="about">
        <div className="container px-4">
          <div className="row gx-4 justify-content-center">
            <div className="col-lg-8">
              <h2>About this page</h2>
              <p className="lead">This is a great place to talk about your webpage. This template is purposefully unstyled so you can use it as a boilerplate or starting point for you own landing page designs! This template features:</p>
              <ul>
                <li>Clickable nav links that smooth scroll to page sections</li>
                <li>Responsive behavior when clicking nav links perfect for a one page website</li>
                <li>Bootstrap's scrollspy feature which highlights which section of the page you're on in the navbar</li>
                <li>Minimal custom CSS so you are free to explore your own unique design options</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Services section--> */}
      <section className="bg-light" id="services">
        <div className="container px-4">
          <div className="row gx-4 justify-content-center">
            <div className="col-lg-8">
              <h2>Services we offer</h2>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut optio velit inventore, expedita quo laboriosam possimus ea consequatur vitae, doloribus consequuntur ex. Nemo assumenda laborum vel, labore ut velit dignissimos.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Contact section--> */}
      <section id="contact">
        <div className="container px-4">
          <div className="row gx-4 justify-content-center">
            <div className="col-lg-8">
              <h2>Contact us</h2>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero odio fugiat voluptatem dolor, provident officiis, id iusto! Obcaecati incidunt, qui nihil beatae magnam et repudiandae ipsa exercitationem, in, quo totam.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Footer--> */}
      <footer className="py-5 bg-dark">
        <div className="container px-4"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2023</p></div>
      </footer>
    </>
  )
}

export default App