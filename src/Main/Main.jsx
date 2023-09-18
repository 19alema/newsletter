/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from "react";
import {AiFillCheckCircle} from 'react-icons/ai'
import "./main.css"
import { Flex, Header, Button } from "../components";
import illustration_desktop from "../assets/images/illustration-sign-up-desktop.svg"
import illustration_mobile from "../assets/images/illustration-sign-up-mobile.svg"



function Main() {

  const [email, setEmail] = useState("");
  const [width, setWidth] = useState();
  const [label, setLabel] = useState('');
  const [submit, setSubmit] = useState(true)

  useEffect(() => {


    window.addEventListener('resize', ()=> {
      setWidth(window.innerWidth)
    })
  }, [width])

  const handleOnchange = () => {
    setEmail(email)
  }

  function onSubmit(e) {
    e.preventDefault()

    if(email == "") {
        setLabel("Email is Required");
        setSubmit(true)
    }
    if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setLabel("Email is not valid!")
    }

    setSubmit(prev => !prev);
  }

  return (
    <main className="main">
    { submit? ( <section className={`${width > 768? 'flex_desktop':'flex_mobile'} section`}>
        <div className="section_left">
          <Header
            headerTitle={'Stay updated!'}
          />

          <p>
          Join 60,000+ product managers receiving monthly updates on
          </p>

          <div className="content_info">
            <Flex
              iconLabel={'Product discovery and building what matters'}
            />
            <Flex
               iconLabel={'Measuring to ensure updates are a success'}
            />
            <Flex
               iconLabel={'And much more!'}
            />
          </div>
      <form onSubmit={onSubmit}>
          <div className="inputForm">
            <label htmlFor="email">Email Address</label>

            <p className="validate_message">
                {label}
            </p>
            <input
            className={`input_email`}
             type="email" 
             name="email" 
             id="email" 
             value={email}
             onChange={handleOnchange}
             placeholder="johndoe@gmail.com"
             disabled = {false}
            />
          </div>

          <Button 
            btnText={'Subscribe to monthly newsletter'}
          />
      </form>


        </div>
        <div>
          <img src={`${ width < 768? illustration_mobile : illustration_desktop}`} alt="illustration" />
        </div>
      </section>) :

      (
        <section className="section check-section">
          
              <AiFillCheckCircle className="icon_check"/>

              <div>
                <Header 
                  headerTitle={'Thanks for subscribing'}
                />

                <p>
                  A confirmation email has been send to <b>{email}</b>. Please open it and click the button inside to confirm your subscription
                </p>
              </div>

              <form onSubmit={
                () => {
                  setSubmit(true)
                }
              }>
              <Button btnText={'Dismiss message'}/>
              </form>
            
        </section>
      )
      
      }
    </main>
  )
}

export default Main