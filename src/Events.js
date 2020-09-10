import React, {Component} from 'react';
import Dialog from './Dialog';

class Events extends Component {
state={isOpen:false}
render(){
  return (
    <div id="event" className="cards-2">
        <div className="event-container">
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="mustard">Events</h2>
                    <p className="p-heading p-large">We've prepared pricing plans for all budgets so you can get started right away. They're great for small companies and large organizations</p>
                </div> 
            </div> 
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="card-title">Software Developer</div>
	  						<div className="card-subtitle">Just to see what can be achieved</div>
                            <hr className="cell-divide-hr"></hr>
                            <div className="price">
                                <span className="value">Sep 15, 2020</span>
                                <div className="frequency">3:00-4:00PM</div>
                            </div>
                            <hr className="cell-divide-hr"></hr>
                            <ul className="list-unstyled li-space-lg">
                                <li className="media">
                                    <i className="fas fa-check"></i><div className="media-body">Ex-Amazon employee</div>
                                </li>
                                <li className="media">
                                    <i className="fas fa-check"></i><div className="media-body">Sun Certified Java Developer</div>
                                </li>
                            </ul>
                            <div className="btn-solid-reg popup-with-move-anim">
	  							<a onClick={(e) => this.setState({isOpen:true})} >Open Dialog</a>
	  							<Dialog isOpen={this.state.isOpen} onClose={(e) => this.setState({isOpen:false})}>
	  								<iframe src="https://docs.google.com/forms/d/e/1FAIpQLScWVCPwEphQrscUthOoeyypX3rmv_lXyINmJLUtu8rC2jrWFQ/viewform?	embedded=true" width="640" height="400" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
	  							</Dialog>
							</div>
                        </div>
                    </div> 
                	<div className="card">
                        <div className="card-body">
                            <div className="price">
                                <span className="value" style={{fontSize:"50px"}}>MORE COMING SOON</span>
                            </div>
                        </div>
                    </div> 

                </div> 
            </div> 
        </div> 
    </div> 
    


  );
}
}

export default Events;
