import './index.css';
import { useEffect, useState } from 'react';

import TopBar from './components/TopBar';
import Footer from './components/Footer';

export function App() {
  const [windowHeight, setWindowHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(0);

  const updateDimensions = () => {
    setWindowWidth(typeof window !== "undefined" ? window.innerWidth : 0);
    setWindowHeight(typeof window !== "undefined" ? window.innerHeight : 0);
  }

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize",updateDimensions());
  })

  const styles = {
    topBarHeight: 40,    
    footerMenuHeight: 50,    
  }

  return (      
    <div>
      <TopBar />
      <hr />
      <Footer styles={styles}/>
    </div>
  );
}