import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from 'axios';

function Detailpoke(){
    const [details, setDetails] = useState({});
    const params = useParams()
    const id = params.id;
    // console.log(params.id);
    useEffect(() => {
        axios.get(`https://pokedexbackend.herokuapp.com/pokemon/${id}`)
      .then((res) => {
        console.log(res?.data.result,'ress');
        setDetails(res?.data?.result ?? []);
        // console.log(setDetails);

      });

    },[id])
   
   return(
      <div className="banner-content-top">
        {details?.map((mons,id)=> {
          return(
            <div className="card-pokemon" key={id}>
                <div className="desc">
                    <p>{mons.abilities}</p>
                </div>
            </div>
          ); 
        })}
        <p> Apa aja</p>
        <p> Apa aja</p>
      </div>
   )
}

export default Detailpoke