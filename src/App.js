import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InfoSection from './components/InfoSection';
import ContactSection from './components/ContactSection';


function App() {
  const [profile , setProfile] = useState(null);
    
    useEffect(() => {
        axios.get('server.railway.internal/api/profile')
        .then(res => setProfile(res.data))
        .catch(err => console.error());
    },[]);
    
    if(!profile) return <p className="text-center">Loading...</p>
  return (
    <div>
       <Navbar/>
       <HeroSection profile={profile} />
      <InfoSection profile={profile} />
      <ContactSection profile={profile} />
    </div> 
  );
}

export default App;
