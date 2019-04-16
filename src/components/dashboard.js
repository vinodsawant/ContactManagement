import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.navigateToContactSystem = this.navigateToContactSystem.bind(this);
    }

    navigateToContactSystem() {
        const {history} = this.props;
        history.push('/contactSystem');
    }

    render() {
        return (
            <section>
                <div className="w3-top">
                    <div className="w3-bar w3-white w3-padding w3-card" style={{letterSpacing: '4px'}}>
                        <a href="#home" className="w3-bar-item w3-button">Contact Management System</a>
                        <div className="w3-right w3-hide-small">
                            <a href="#about" className="w3-bar-item w3-button">About</a>
                            <a href="#advantage" className="w3-bar-item w3-button">Advantages</a>
                            <a href="#contact-us" className="w3-bar-item w3-button">Contact Us</a>
                        </div>
                    </div>
                </div>
                <header
                    className="w3-display-container w3-content w3-wide"
                    style={{maxWidth: '1200px', minWidth: '500px'}}
                    id="home" >
                        <img
                            className="w3-image"
                            src="/images/contacts1.jpg"
                            alt="Hamburger Catering"
                            width="1600"
                            height="800"/>
                        <div className="w3-display-bottomleft w3-padding-large w3-opacity">
                            <h1 className="w3-xxlarge" onClick={this.navigateToContactSystem}>Go to Contact Details...</h1>
                        </div>
                </header>

                <div className="w3-content" style={{maxWidth: '1100px'}}>
                    <div className="w3-row w3-padding-64" id="about">
                        <div className="w3-col m6 w3-padding-large w3-hide-small">
                            <img src="/images/contacts4.jpg" className="w3-round w3-image w3-opacity-min"
                                 alt="Table Setting" width="600" height="750"/>
                        </div>
                        <div className="w3-col m6 w3-padding-large">
                            <h1 className="w3-center">About Contact System</h1>
                            <h5 className="w3-center">Ideas Behind Contact Management System</h5>
                            <p className="w3-text-grey">The principle behind constructing a Contact Management System is
                                to effectively retrieve and implement any information that an organization may have on a
                                pre-existing customer.</p><br/>
                            <p className="w3-text-grey">All the information related to a particular customer can be linked and archived only to
                                be retrieved later when they are required most. What should be more noteworthy is the
                                fact that all of this can be arranged over every single terminal and at an affordable
                                cost.</p><br/>
                            <p className="w3-text-grey">Once a company has established a Contact Management System, it can cater to the needs of
                                the customer better. The records of the customer can now be studied to understand his or
                                her preferences and implement them for each individual lead. This gives way to contact
                                personalization.</p><br/>

                            <p className="w3-text-grey">By managing contacts, the organization can also look for opportunities to upsell and
                                cross-sell a product or service depending on the customer’s current situation. By doing
                                so, the company achieves a two-part objective.</p><br/>
                        </div>
                    </div>
                </div>

                <div className="w3-row w3-padding-64" id="advantage">
                    <div className="w3-col l6 w3-padding-large">
                        <h1 className="w3-center">Advantages of a Contact Management</h1><br/>
                        <p className="w3-text-grey">Storing of customer information in a well-incorporated data repository from where it can be accessed by any computer terminal in the organization.
                        </p><br/>

                        <p className="w3-text-grey">Maintaining customer records with greater efficiency and less overhead as well as utilizing them to achieve maximum customer satisfaction.
                        </p><br/>

                        <p className="w3-text-grey">Tracking sales records and promoting new offers to enthusiastic customers, indirectly inducing upselling.
                        </p><br/>

                        <p className="w3-text-grey">Implementation of drip marketing using e-mails, social sites and other mediums.
                        </p><br/>

                        <p className="w3-text-grey">Recording customer complaints and improving areas of discrepancy.
                        </p>
                    </div>

                    <div className="w3-col l6 w3-padding-large">
                        <img src="/images/contacts3.jpg" className="w3-round w3-image w3-opacity-min" alt="advantage"
                             style={{width: '100%'}}/>
                    </div>
                </div>
                <div className="w3-container w3-padding-64" id="contact-us">
                    <h1>Contact Us</h1><br/>
                    <p>It is because of this reason that strong encouragement is given to organizations to maintain an automated Contact
                        Management System in order to reduce company overhead and serve the customer’s trust better.</p><br/>
                    <p className="w3-text-blue-grey w3-large"><b>Contact Management Service, Cyber City Tower-12, 411023, Pune,
                        India</b></p><br/>
                    <p>You can also contact us by phone +91-9561513247 or email vinod.sawant@amdocs.com</p>
                </div>
            </section>
        )
    }
}