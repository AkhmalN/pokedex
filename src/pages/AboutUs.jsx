import { Akhmal, Haikal, Naufal } from '../images';
import { useState } from 'react'

function AboutUs() {
  const [profile] = useState([
    {
      Name: 'Akhmal',
      Kelas: 'Front End',
      image: Akhmal,
      background : ''
    },
    {
      Name: 'Haikal',
      Kelas: 'Front End',
      image: Haikal,
      background : ''
    },
    {
      Name: 'Naufal',
      Kelas: 'Front End',
      image: Naufal,
      background : ''
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
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique ullam id iure optio ipsa at odit, ratione eveniet mollitia veniam.</p>
                  
                </div>
              )
            })}
          </div>
        </div>

    </>
  );
}

export default AboutUs;
