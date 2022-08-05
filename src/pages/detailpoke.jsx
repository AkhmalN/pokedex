import {useParams} from 'react-router-dom'


function Detailpoke(){
   const params = useParams()
   console.log(params);
   return(
      <div>Detail Pokemon {params.name}</div>
   )
}

export default Detailpoke