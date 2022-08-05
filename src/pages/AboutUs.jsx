import { Akhmal, Haikal, Naufal } from '../images';
import { useState } from 'react'

function AboutUs() {
  const [profile] = useState([
    {
      Name: 'Akhmal',
      Kelas: 'Front End',
      image: Akhmal,
      background : 'Nama Saya Akhmal. Latar pedidikan saya sebelumnya SMA. Untuk saat ini saya menempuh pendidikan S1 di UNAS(Universitas Nasional) dengan mengambil jurusan Informatika. Saya memiliki ketertarikan untuk berkarir di Dunia IT'
    },
    {
      Name: 'Haikal',
      Kelas: 'Front End',
      image: Haikal,
      background : 'Nama saya Muhammad Hafidz Haiqal Putra. Saya berusia dua puluh dua tahun. Saat ini saya sedang menempuh pendidikan S1 di STMIK Indonesia Mandiri. Saya orang yang mampu bekerja dengan baik sebagai bagian dari tim maupun sendiri. Saya juga pekerja keras dan semangat belajar'
    },
    {
      Name: 'Naufal',
      Kelas: 'Front End',
      image: Naufal,
      background : 'Nama Saya Naufal.  Sedang menempuh S1 di Institut Pendidikan Indonesia dengan mengambil program studi Sistem Informasi. Saya  memiliki ketertarikan  Di dunia Front end setelah belajar di Kawah Edukasi'
    },
  ]);

  return (
    <>
      <div className="title-about">Our Team Page</div>
        <div className="about-us">
          <div className="parent-card-about">
            {profile?.map((prof, idx) => {
              return (
                <div key={idx} className="card-about">
                  <img src={prof.image} alt="" />
                  <h2>Name : {prof.Name} </h2>
                  <p>{prof.Kelas}</p>
                  <p>{prof.background}</p>
                  
                </div>
              )
            })}
          </div>
        </div>

    </>
  );
}

export default AboutUs;
