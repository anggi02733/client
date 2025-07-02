import React from "react";

const ContacSection = ({profile}) =>{
    if (!profile) return null;

    return (
        <section id="kontak" className="py-5 bg-dark text-white">
        <div className="container-fluid">
            <h2 className="text-center mb-4">Kontak</h2>
            <div className="row justify-content-center">
            <div className="col-md-6 text-center">
                <p><strong>Email:</strong> {profile.email}</p>
                <p><strong>Lokasi:</strong> {profile.location}</p>
                <div className="mt-3">
                <a
                    href={profile.socials.github}
                    className="btn btn-outline-light btn-sm m-1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a
                    href={profile.socials.linkedin}
                    className="btn btn-outline-light btn-sm m-1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    LinkedIn
                </a>
                <a
                    href={profile.socials.instagram}
                    className="btn btn-outline-light btn-sm m-1"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Instagram
                </a>
                </div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default ContacSection;