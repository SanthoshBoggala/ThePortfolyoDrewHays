import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Service from './Components/Service/Service';
import Sections from './Components/Sections/Sections';

function App() {
  const [user, setUser] = useState(null)

  useEffect(()=>{
    const url = `https://portfolio-backend-30mp.onrender.com/api/v1/get/user/65b3a22c01d900e96c4219ae`;

    async function getData() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await res.json();
        console.log(data.user);
        setUser(data.user);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
    getData();
    
  },[])

  return (
    <div>
      <Header />
      { user &&
      (
        <>
          <Hero />
          <Service />
          <Sections user={user}/>
        </>
      )}
    </div>
  );
}

export default App;
