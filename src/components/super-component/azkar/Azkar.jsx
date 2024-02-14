import {useState , useEffect} from 'react'
import axios from 'axios';
import { TabView, TabPanel } from 'primereact/tabview';

const Azkar = () => {
 const [azkarsabah , setAzkarsabah] = useState([]);
 const [azkarmassa , setAzkarmassa] = useState([]);
 const apiAzkarsabah = 'https://ahegazy.github.io/muslimKit/json/azkar_sabah.json';
 const apiAzkarmassa = 'https://ahegazy.github.io/muslimKit/json/azkar_massa.json';
 const api =  "https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json";
 const [azkar, setAzkar] = useState([]);
useEffect(()=>{
axios.get(apiAzkarsabah).then(res => setAzkarsabah(res.data)).catch(err => console.log(err))
axios.get(api).then(res => setAzkar(res.data)).catch(err => console.log(err))
axios.get(apiAzkarmassa).then(res => setAzkarmassa(res.data)).catch(err => console.log(err))
},[]);
const set  = Object.keys(azkar)
// console.log(azkar);
const entries = Object.entries(azkar);

console.log(entries);
// console.log(azkarsabah);
// console.log(azkarmassa);
// https://raw.githubusercontent.com/nawafalqari/azkar-api/56df51279ab6eb86dc2f6202c7de26c8948331c1/azkar.json
// https://hadis-api-id.vercel.app/hadith/abu-dawud?page=1&limit=300 // احاديث
const filtrationAzkarsabah = azkarsabah?.content?.map(({zekr, repeat} , index)=>(
 <div key={index}>
  <p>{zekr}</p>
 <input type='button' onClick={(e)=> handelEvent(e)} value={repeat}  className='button' />
 </div>
));
const handelEvent = (e)=>{
    e.target.value <= 0 ? e.preventDefault() : e.target.value-- ;
  }
const filtrationmussa = azkarmassa?.content?.map(({zekr, repeat} , index)=>(
 <div key={index}>
  <p>{zekr}</p>
 <input type='button' onClick={(e)=> handelEvent(e)} value={repeat}  className='button' />
 </div>
));

  return (
    <div className='azkar'>

       <div className="card">
            <TabView>
                {/* <TabPanel header={azkarsabah?.title}>
                    {filtrationAzkarsabah}
                </TabPanel>
                <TabPanel header={azkarmassa?.title}>
                   {filtrationmussa}
                </TabPanel> */}
                {set.map((set , index)=> (
                  <TabPanel header={set} key={index}>
                    
                    ...
                </TabPanel>
                ))}

            </TabView>
            {/* {fil} */}
        </div>
    </div>
  )
}

export default Azkar