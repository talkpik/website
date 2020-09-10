import React, {Component} from 'react';

class Contact extends Component {
render(){
  return (
    <div id="contact" className="form-2">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="mustard">Contact Information</h2>
                    <ul className="list-unstyled li-space-lg">
                        <li className="address">Don't hesitate to give us a call or send us a contact form message</li>
                        <li><i className="fas fa-map-marker-alt"></i>Vancouver, BC, Canada</li>
                        <li><i className="fas fa-envelope"></i><a className="turquoise" href="mailto:talkpik2020@gmail.com">talkpik2020@gmail.com</a></li>
                    </ul>
                </div> 
            </div> 
            <div className="row">
                <div className="col-lg-6">
                    <div className="map-responsive">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d166655.30827522842!2d-123.2639867747921!3d49.2576507715125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1597819772008!5m2!1sen!2sca" allowFullScreen></iframe>
	                </div>
                </div> 
                <div className="col-lg-6">
	  				<iframe src="https://formfaca.de/sm/IkBKWBJTZ" width="640" height="600" frameBorder="0" marginheight="0" marginwidth="0">Loading…</iframe>
	  </div> 
            </div> 
        </div> 
    </div> 
  );
}
}

export default Contact;
