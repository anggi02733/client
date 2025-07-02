import React from "react";

const HeroSection = ({profile}) =>{
    return(
        <section id="beranda" className="d-flex flex-column align-items-center justify-content-center text-white bg-primary" style={{ minHeight: '100vh' }}>
            <img src={profile.images.find(image => image.id === 1)?.url} className="rounded-circle mb-3" alt="Profile" style={{ width: '400px', height: '400px', objectFit: 'cover' }} />
            <h1 className="display-4">{profile.name}</h1>
            <p className="lead text-center">{profile.deskripsi}</p>
            <a href="#tentang" className="btn btn-light mt-3">Lanjut Tentang Saya</a>
        </section>
    )
};

export default HeroSection;