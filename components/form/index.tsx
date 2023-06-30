'use client';
import { useRef, useState, useEffect, MouseEvent } from 'react';
const Form = () => {
  const [error, setError] = useState(null);
  const [formSentOk, setFormSentOk] = useState(null);
  const [formData, setFormData] = useState({
    surname: '',
    email: '',
    message: '',
  });
  // To handle focus and make form accessible
  const surnameRef = useRef(null);
  const messageRef = useRef(null);
  const emailRef = useRef(null);

  //To handle focus management when dialog is closed (focus on send button)
  const sendButtonRef = useRef(null);

  useEffect(() => {
    if (formSentOk === false) {
      sendButtonRef.current.focus();
    }
  }, [formSentOk]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendMail = (event: MouseEvent) => {
    setError((prev) => {
      return null;
    });
    event.preventDefault();
    if (formData.surname === '') {
      setError((prev) => {
        return {
          ...prev,
          errorSurname: "Veuillez entrer votre nom s'il vous plait",
        };
      });
      surnameRef.current.focus();
      return;
    }
    if (formData.email === '') {
      setError((prev) => {
        return {
          ...prev,
          errorEmail:
            "Veuillez entrer votre email (sous la forme nom@domaine.fr) s'il vous plait",
        };
      });
      emailRef.current.focus();
      return;
    }
    if (formData.message === '') {
      setError((prev) => {
        return {
          ...prev,
          errorMessage: "Veuillez entrer un message s'il vous plait",
        };
      });
      messageRef.current.focus();
      return;
    }
    setFormSentOk((prev) => {
      return true;
    });
    setFormData((prev) => {
      return {
        surname: '',
        email: '',
        message: '',
      };
    });
  };

  return (
    <>
      <p className={error ? 'error' : ''}>Tous les champs sont obligatoires</p>
      <p>Ce formulaire ne fonctionne pas (n&rsquo;envoie pas de mail)</p>
      <div>
        <form id='contactForm'>
          <p>
            <label htmlFor='name' className='form-label-title'>
              Nom
            </label>
            <input
              type='text'
              id='name'
              aria-required='true'
              aria-describedby='helpEmail'
              autoComplete='name'
              value={formData.surname}
              onChange={handleChange}
              name='surname'
              ref={surnameRef}
            />
          </p>
          {error ? (
            <p className='error' id='error'>
              {error.errorSurname}
            </p>
          ) : null}
          <p>
            <label htmlFor='email'>
              <span className='form-label-title'>Email</span>
              <span id='helpEmail'>Format attendu : nom@domaine.fr</span>
            </label>
            <input
              type='email'
              id='email'
              aria-required='true'
              aria-describedby='helpEmail'
              autoComplete='email'
              value={formData.email}
              onChange={handleChange}
              name='email'
              ref={emailRef}
            />
          </p>
          {error ? (
            <p className='error' id='error'>
              {error.errorEmail}
            </p>
          ) : null}
          <p>
            <label htmlFor='message' className='form-label-title '>
              Votre message
            </label>
            <input
              id='message'
              aria-required='true'
              value={formData.message}
              onChange={handleChange}
              name='message'
              ref={messageRef}
            />
          </p>
          {error ? (
            <p className='error' id='error'>
              {error.errorMessage}
            </p>
          ) : null}
          <input
            type='submit'
            title='Envoyer le message par mail'
            onClick={sendMail}
            ref={sendButtonRef}
            value=' Envoyer'
            className='sendButton'
          />
        </form>
      </div>
    </>
  );
};
export default Form;
