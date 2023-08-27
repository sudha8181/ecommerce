import styled from "styled-components";
import React from "react";
import { Button } from "./styles/Button";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form{
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 className="common-heading">Contact Us</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3562.8320549421005!2d83.39818157416093!3d26.749734967077835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399144bd504cdd93%3A0xbc7dadf589201d16!2sOrion%20Mall!5e0!3m2!1sen!2sin!4v1690050159728!5m2!1sen!2sin"
     width="100%"
      height="400" 
      style={{border:"0"}}
      allowFullscreen="" 
      loading="lazy" 
      referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
       <div className="contact-form">
        <form action="https://formspree.io/f/mqkvagzq" method="post" className="contact-inputs">
          <input type="text" name="username" placeholder="username" required autoComplete="off" />
          <input type="email" name="email" placeholder="email" required autoComplete="off"/>
          <textarea name="message" id="" cols="30" rows="10"></textarea>
         <Button value="send" >Send</Button>
        </form>
        </div>
      </div>
  </Wrapper>;
};

export default Contact;
