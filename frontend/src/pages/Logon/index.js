import React, { useState } from 'react';
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import api from '../../services/api.js';

import './style.css';
import '../../pages/global.css'

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';

function Logon() {

    const [id, setId] = useState('');
    const history = useHistory();

    async function handleLogon(e) {
        e.preventDefault();

        try {
            const response = await api.post('session', { id });
            alert(`Bem vindo, ${response.data.name}`);
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);
            history.push('profile');
        } catch (error) {
            alert('Falha ao logar');
        }
    }

    return (
        <div className="logon-container" >
            <section className="form">
                <img src={logoImg} alt="Be the Hero Logo" />

                <form onSubmit={handleLogon}>
                    <h1>Faca seu Logon</h1>
                    <input 
                        placeholder="Sua ID" 
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>
                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#e02041" />
                        Nao tenho cadastro
                    </Link>
                </form>
                
            </section>
            <img src={heroesImg} alt="heroes" />
        </div>
    );
}

export default Logon;