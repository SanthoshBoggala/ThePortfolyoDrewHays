import { useEffect } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Service from './Components/Service/Service';
import About from './Components/About/About';

function App() {

  useEffect(()=>{
    const url = `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`;

    async function getData() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
    // getData();
    
  },[])

  return (
    <div>
      <Header />
      <Hero />
      <Service />
      <About />
      <h2>nvabra</h2>
      <h2>nvabra</h2>
      <h2>nvabra</h2>
      <h2>nvabra</h2>
      <h2>nvabra</h2>
      <h2>nvabra</h2>
      <h2>nvabra</h2>
      <h2>nvabra</h2>
      <h2>nvabra</h2>
      <h2>nvabra</h2>
      <h2>nvabra</h2>
      <h2>nvabra</h2>
      <h2>nvabra</h2>
      <h2>nvabra</h2>
      <h2>nvabra</h2>
      <h2>nvabra</h2>
      <h2>nvabra</h2>


    </div>
  );
}

export default App;
