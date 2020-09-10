import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import UpcomingEvents from './UpcomingEvents';
import Services from './Services';
import Seeker from './Seeker';
import Speaker from './Speaker';
import Events from './Events';
import Testimonials from './Testimonials';
import Team from './Team';
import Contact from './Contact';
import Footer from './Footer';


class App extends Component {
render(){
  return (
	  <div className="App">
	  <Navbar/>
	  <Header/>
	  <div style={{display:"none"}}>
	  <UpcomingEvents/>
	  </div>
	  <Services/>
	  <Seeker/>
	  <Speaker/>
	  <Events/>
	  <div style={{display:"none"}}>
	  <Testimonials/>
	  </div>
	  <Team/>
	  <Contact/>
	  <Footer/>
  </div>
		  );
}
}
export default App;