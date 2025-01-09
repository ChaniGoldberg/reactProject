import React, { useState, useEffect } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import HomePage from '../screens/HomePage';
import About from '../screens/About';
import Thanks from '../screens/thanks';
import Conection from '../screens/Conection';
import Services from '../screens/Services';
export default function TechFlow() {
    return(
    <BrowserRouter>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/home">home page</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/services">services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">about</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/conection">contect</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/home" element={<HomePage/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/services" element={<Services/>} />
            <Route path="/conection" element={<Conection/>} />
            <Route path="/thanks" element={<Thanks/>} />
        </Routes>
    </BrowserRouter>)
}