// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import BookList from './components/bookslist';
// import BookAdd from './components/booksAdd';
// import Header from './components/header';

// function App() {
//   return (
//     <Router>
//       <Header /> {/* Header is now fixed */}
//       <main style={{ paddingTop: '120px' }}> {/* Add top padding to prevent content from hiding under the header */}
//         <Routes>
//           <Route path="/" element={<BookList />} />
//           <Route path="/add" element={<BookAdd />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from 'react';
import './styles.js/App.css';

import HeroSection from './components/herosection';
import PropertyTypes from './components/propertyTypes';
import SampleOMs from './components/sampleOMs';
import Header from './components/header';
import DrawerMenu from './components/drawerMenu';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <Header setIsOpen={setIsOpen} />
      <HeroSection />
      <PropertyTypes />
      <SampleOMs style/>
      {isOpen && <DrawerMenu closeMenu={() => setIsOpen(false)} />}
    </div>
  );
}

export default App;
