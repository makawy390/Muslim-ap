import {useState , useEffect} from 'react'
import axios from 'axios';
import { TabView, TabPanel } from 'primereact/tabview';

const Azkar = () => {
 const [azkarsabah , setAzkarsabah] = useState([]);
 const [azkarmassa , setAzkarmassa] = useState([]);
 const apiAzkarsabah = 'https://ahegazy.github.io/muslimKit/json/azkar_sabah.json';
 const apiAzkarmassa = 'https://ahegazy.github.io/muslimKit/json/azkar_massa.json';
useEffect(()=>{
axios.get(apiAzkarsabah).then(res => setAzkarsabah(res.data)).catch(err => console.log(err))
axios.get(apiAzkarmassa).then(res => setAzkarmassa(res.data)).catch(err => console.log(err))
},[]);
// console.log(azkarsabah);
// console.log(azkarmassa);
const filtrationAzkarsabah = azkarsabah?.content?.map(({zekr, repeat} , index)=>(
 <div key={index}>
  <p>{zekr}</p>
  {/* <button>{repeat}</button> */}
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
                <TabPanel header={azkarsabah?.title}>
                    {filtrationAzkarsabah}
                </TabPanel>
                <TabPanel header={azkarmassa?.title}>
                   {filtrationmussa}
                </TabPanel>
            </TabView>
        </div>
    </div>
  )
}

export default Azkar