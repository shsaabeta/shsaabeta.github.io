import React, { Component } from "react";
import '../../../includes/custom/css/privacypolicy.css';
import MemberHeader from '../../components/MemberHeader'


export default class PrivacyPolicyScreen extends Component {

    render() {

        return (

            <div>
                <MemberHeader />

                <div className={"container"}>

                    <div className={"header-shadow imagePosition"}>
                        <div className={"privateTitleContainer"}>
                            <h1 className={"privacyTitle font-size-title"}>PRIVACY POLICY</h1>
                            <h5 className={"privacyTitleDescription font-size-description"}>Mandaue Chamber of Commerce and Industry, respects and is committed to the protection of your Personal Information and your privacy in accordance with the Republic Act No. 10173, also known as the “Data Privacy Act of 2012” and its Implementing Rules and Regulations and other relevant data privacy laws.</h5>
                        </div>
                    </div>
                    <div className={"bottomContainer"}>
                        <div className={"privacySubTitleContainer"}>
                            <h1 className={"privacySubTitle font-size-title"}>Introduction</h1>
                            <h5 className={"privacyDescription font-size"}>Mandaue Chamber of Commerce and Industry, respects and is committed to the protection of your Personal Information and your privacy in accordance with the Republic Act No. 10173, also known as the “Data Privacy Act of 2012” and its Implementing Rules and Regulations and other relevant data privacy laws.Please note that the company reserves the right to change and/or amend this Privacy Policy at any time to comply with the latest laws and regulations. You are advised to check this policy from time to time from our website for the latest updates.</h5>
                        </div>

                        <div className={"privacySubTitleContainer"}>
                            <h1 className={"privacySubTitle font-size-title"}>Collection of Personal Information</h1>
                            <h5 className={"privacyDescription font-size"}>In the course of your dealings with us, we may collect certain personal data or information that will enable us to enter into transactions with you or to deliver the necessary goods, services and/or communications in connection with such transactions.</h5>
                        </div>

                        <div className={"privacySubTitleContainer"}>
                            <h1 className={"privacySubTitle font-size-title"}>Purposes</h1>
                            <h5 className={"privacyDescription font-size"}>Personal data or information you provide will be used for standard business processes such as:<br /><br />
                                <ul>
                                    <li>Processing and responding any communication you send us</li>
                                    <li>Internal record keeping</li>
                                    <li>Keeping you informed of our events and promotions</li>
                                    <li>Marketing and customer profiling activities in connection with our products or services</li>
                                    <li>Other purposes in furtherance of the foregoing</li>
                                </ul>
                            </h5>
                        </div>

                        <div className={"privacySubTitleContainer"}>
                            <h1 className={"privacySubTitle font-size-title"}>Disclosure of Personal Information</h1>
                            <h5 className={"privacyDescription font-size"}>Personal data or information provided to us will not be disclosed without your consent. If and when necessary, your personal data or information may be disclosed if required by law or if needed to be accessed as part of an investigation into technical problems or misuse.</h5>
                        </div>

                        <div className={"privacySubTitleContainer"}>
                            <h1 className={"privacySubTitle font-size-title"}>Retention and Disposal of Personal Information</h1>
                            <h5 className={"privacyDescription font-size"}>Your persona data or information shall only be retained for a period necessary to serve the purpose for which it was collected, or as required by applicable law. We shall undertake to ensure that all personal data or information is disposed in a secure manner that would prevent further processing or unauthorized access or disclosures.</h5>
                        </div>
                        <div className={"privacySubTitleContainer"}>
                            <h1 className={"privacySubTitle font-size-title"}>Use of Cookies</h1>
                            <h5 className={"privacyDescription font-size"}>Cookies are small data files that our web server sends to your web browser when you visit our website. This is mainly to provide you to have full functionality and excellent user experience in using our website.<br />
                                You may opt not to receive cookies by not accepting them or disabling them on your browser configuration. However, by doing this, you may not be able to fully utilize the features of our website.<br />
                                Our website may contain links to websites of third parties that may also use cookies. Please note that we have no control over such sites on their use of cookies when you chose to use such links and leave our website.
                            </h5>
                        </div>
                        <div className={"privacySubTitleContainer"}>
                            <h1 className={"privacySubTitle font-size-title"}>Security of Personal Information</h1>
                            <h5 className={"privacyDescription font-size"}>We adopt physical and technical measures to protect the personal data or information we hold from loss, misuse, modification, unauthorized or accidental disclosure or access.</h5>
                        </div>
                        <div className={"privacySubTitleContainer"}>
                            <h1 className={"privacySubTitle font-size-title"}>Inquiries and Concerns</h1>
                            <h5 className={"privacyDescription font-size"}>For any inquiries and/or concerns about this Privacy Policy, please contact:<br />
                                Mr. Cyruz T. Honoridez<br />
                                Membership Development Manager<br />
                                Phone: (032) 343-3491<br />
                                email: membership.mandauechamber@gmail.com<br />
                            </h5>
                        </div>
                    </div>

                </div>

            </div>

        );
    }
}

