import { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Service from './Components/Service/Service';
import Sections from './Components/Sections/Sections';
import CTA from './Components/CTA/CTA';
import Projects from './Components/Projects/Projects';
import Testimonials from './Components/Testimonials/Testimonials';

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
          <Hero img={user.about.avatar.url}/>
          <Service services={user.services}/>
          <Sections user={user}/>
          <CTA />
          <Projects projects={user.projects}/>
          <Testimonials testimonials={user.testimonials}/>
        </>
      )}
    </div>
  );
}

export default App;
