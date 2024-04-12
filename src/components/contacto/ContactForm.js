import React, { useState } from 'react';
import styled from 'styled-components';

import { useForm } from '@formspree/react';



const FormStyle = styled.form`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
  }
  label {
    font-size: 1.8rem;
  }
  input,
  textarea {
    width: 100%;
    font-size: 2rem;
    padding: 1.2rem;
    color: var(--gray-1);
    background-color: var(--deep-dark);
    outline: none;
    
    border-radius: 8px;
    margin-top: 1rem;
  }
  textarea {
    min-height: 250px;
    resize: vertical;
  }
  button[type='submit'] {
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    display: inline-block;
    outline: none;
    border: none;
    padding: 1rem 4rem;
    border-radius: 8px;
    cursor: pointer;
  }
`;

export default function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [telefono, setTelefono] = useState('');

    const [state, handleSubmit] = useForm("xoqozkel");
    if (state.succeeded) {
        return <p>Gracias por sus mensajes!</p>;
    }


    return (
        <>
            <FormStyle onSubmit={handleSubmit}>



                <div className="form-group">
                    <label htmlFor="cliente">
                        Nombre Completo
                        <input
                            type="text"
                            id="cliente"
                            name="cliente"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                </div>


                <div className="form-group">
                    <label htmlFor="email">
                        Correo Electronico
                        <input
                            type="Correo Electronico"
                            id="Correo Electronico"
                            name="Correo Electronico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                </div>

                <div className="form-group">
                    <label htmlFor="cliente">
                        Numero Telefonico
                        <input
                            type="text"
                            id="Numero Telefonico"
                            name="Numero Telefonico"
                            value={telefono}
                            onChange={(e) => setTelefono(e.target.value)}
                        />
                    </label>
                </div>


                <div className="form-group">
                    <label htmlFor="message">
                        Tu Mensaje
                        <textarea
                            type="text"
                            id="Mensaje"
                            name="Mensaje"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                </div>

                <button type="submit" className="btn btn-primary shadow">Send</button>



            </FormStyle>
        </>
    );
}