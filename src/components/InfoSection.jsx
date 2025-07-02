import React from "react";

const InfoSection = ({profile}) => {
  return (
    <section id="tentang" className="py-5 bg-light text-dark">
      <div className="container-fluid">
        <h2 className="text-center mb-4">Tentang Saya</h2>
        <div className="row align-items-center">
          <div className="col-md-4 text-center mb-4 mb-md-0">
            <div className="d-flex gap-3 justify-content-center flex-wrap">
                  <img
                    src={profile.images.find(image => image.id === 2)?.url}
                    alt="Foto Saya"
                    className="img-fluid rounded-circle shadow"
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                />
            </div>
          </div>

          <div className="col-md-8">
            <p className="fs-5">
              Halo! Saya <strong>{profile.name}</strong>, seorang mahasiswa
              Informatika di STMIK Widya Utama Purwokerto. Saya menyukai dunia
              pengembangan web dan mobile, serta tertarik pada machine learning
              dan UI/UX.
            </p>
            <p className="fs-6">
              Saya sedang mengembangkan portofolio saya melalui berbagai proyek
              sederhana menggunakan React, Node.js, dan Laravel. Saat ini saya
              fokus menggabungkan keterampilan teknis dan desain agar menghasilkan
              solusi digital yang fungsional dan menarik.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
