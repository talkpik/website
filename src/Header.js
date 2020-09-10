import React, {Component} from 'react';


class Header extends Component {
render(){
  return (
    <header id="header" className="header">
        <div className="header-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-container">
                            <h1><span className="mustard">StartUp Landing</span> Page Template Free</h1>
                            <p className="p-large">Want to know more about a profession, industry or institution, but not sure who to ask? TalkPik is here to help</p>
	  						<a className="btn-solid-lg page-scroll" href="#services">DISCOVER</a>
                        </div> 
                    </div> 
                    <div className="col-lg-6">
                        <div className="image-container">
                            <img className="img-fluid" src="images/image1.png" alt="alternative"/>
                        </div> 
                    </div> 
                </div> 
            </div> 
        </div> 
    </header>
  );
}
}

export default Header;
