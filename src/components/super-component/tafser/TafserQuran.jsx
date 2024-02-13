import {useState , useEffect} from 'react';
import axios from 'axios'
import { Grid } from '@mui/material';
import './tafser.css'
const TafserQuran = () => {
 const [tafser , setTafser] = useState([]);
 const api = 'https://cdn.jsdelivr.net/gh/fawazahmed0/quran-api@1/editions/ara-jalaladdinalmah.json';

 useEffect(()=>{
  axios.get(api).then(res => setTafser(res.data.quran)).catch(err => console.log(err))
},[]);
console.log(tafser);
const filtrationTafser = tafser.map(({text} , index)=>(
 <Grid item xs={12} md={4}   key={index}>
  <p className="card">{text}</p>
 </Grid>
));

  return (
    <div>
     تفسير القران الكريم
     <Grid container spacing={2}>
           {filtrationTafser}
     </Grid>

     </div>
  )
}

export default TafserQuran