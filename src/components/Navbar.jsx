import React from 'react';

const Navbar = () =>{
    return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow sticky-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="#beranda">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link" href="#beranda">Beranda</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#tentang">Tentang Saya</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#kontak">Kontak</a>
                </li>
            </ul>
            </div>
        </div>
        </nav>
        )
    }
export default Navbar;
