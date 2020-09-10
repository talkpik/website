import React, {Component} from 'react';
import Modal from './Modal';

class Footer extends Component {

render(){
	

  return (
    <div className="footer">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="footer-col">
                        <h4>About TalkPik</h4>
                        <p>We're passionate about offering some of the best business growth services for startups</p>
                    </div>
                </div> 
                <div className="col-md-4">
                    <div className="footer-col middle">
                    </div>
                </div> 
                <div className="col-md-4">
                    <div className="footer-col last">
                        <h4>Social Media</h4>
                        <span className="fa-stack">
                            <a href="https://facebook.com/talkpik2020">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-facebook-f fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="https://twitter.com/talkpik2020">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-twitter fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="https://instagram.com/talkpik2020">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-instagram fa-stack-1x"></i>
                            </a>
                        </span>
                        <span className="fa-stack">
                            <a href="https://www.linkedin.com/company/talkpik/?viewAsMember=true">
                                <i className="fas fa-circle fa-stack-2x"></i>
                                <i className="fab fa-linkedin-in fa-stack-1x"></i>
                            </a>
                        </span>
                    </div> 
                </div> 
            </div> 
        </div>
	  
	</div> 
  );
}
}

export default Footer;
