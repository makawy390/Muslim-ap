// import React from 'react'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import {quran} from '../../../json/quran';
// import img from '../../../assets/images/1.jpg'
import './quran.css';
const QuranRead = () => {
  const filtrationQuran = quran.map((quran , index)=>(
<div style={{
    textAlign: 'center',
    // background: 'red',
    width : '100%',
    padding: '200px 0',
    fontSize: '30px'
  }} key={index}>
  <img src={quran.image} alt="..."  />
  </div>
  ));
  console.log(quran);
  return (
    <div>
     <Slide slidesToScroll={1} slidesToShow={1} indicators={true} autoplay={false} responsive={[{
  breakpoint: 800,
  settings: {
    slidesToShow: 3,
    slidesToScroll: 3
  }
}, {
  breakpoint: 500,
  settings: {
    slidesToShow: 2,
    slidesToScroll: 2
  }
}]}>
{filtrationQuran}
        {/* <div style={{
    textAlign: 'center',
    background: 'red',
    padding: '200px 0',
    fontSize: '30px'
  }}>First Slide</div>
        <div style={{
    textAlign: 'center',
    background: 'orange',
    padding: '200px 0',
    fontSize: '30px'
  }}>Second Slide</div>
        <div style={{
    textAlign: 'center',
    background: 'yellow',
    padding: '200px 0',
    fontSize: '30px'
  }}>Third Slide</div>
        <div style={{
    textAlign: 'center',
    background: 'green',
    padding: '200px 0',
    fontSize: '30px'
  }}>Fourth Slide</div>
        <div style={{
    textAlign: 'center',
    background: 'blue',
    padding: '200px 0',
    fontSize: '30px'
  }}>Sixth Slide</div>
        <div style={{
    textAlign: 'center',
    background: 'indigo',
    padding: '200px 0',
    fontSize: '30px'
  }}>Seventh Slide</div>
        <div style={{
    textAlign: 'center',
    background: 'violet',
    padding: '200px 0',
    fontSize: '30px'
  }}>Eight Slide</div> */}
    </Slide>
    </div>
  )
}

export default QuranRead