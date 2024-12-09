import React from 'react';
import MainLayout from '../../Layout/mainLayout';
import SecondaryBanner from '../../components/secondaryBanner';
import { CiCalendar } from "react-icons/ci";
import Link from 'next/link';

function Privacy() {
    return (
        <MainLayout>
            <SecondaryBanner
                img={"/images/privacy.png"}
                title={"PRIVACY POLICY"}
                desc={
                    "If you need help or get a query, feel free to contact with us via phone, email or by filling out the contact form. If you need help or get a query, feel free to contact with us via phone, email or by filling out the contact form. If you need help or get a query, feel free to contact with us via phone, email or by filling out the contact form."
                }
            />
            <div className="privacyPolicy">
                <div className="title"><p><CiCalendar />Last Updated: 1st October 2023</p></div>
                <p>We are committed to protecting and respecting your privacy. This Privacy Notice sets out details of the information that we may collect from you and how we may use that information.  We currently use software tools to ensure all of our contractual obligations to you are met and we are able to fulfil any legal obligations we have.</p>
                <p>In this Privacy Notice, "we" or "us" refers to Stablers Fashion Team, this Privacy Notice will apply to our website which refers to  <Link href="/" passHref>demo.stablersfashion.com </Link></p>
                <div>
                    <h5>Information We Collect About You</h5>
                    <p>The personal information we may collect about you includes:</p>
                    <ul>
                        <li>Contact details you provide to us by filling in contact forms on the website or any other information submitted to us via the website/e-mail.</li>
                        <li>Records of correspondence, whether via the Website, email, telephone or other means.</li>
                        <li>Details of the transactions you carry out with us, whether via the Website, telephone or other means.</li>
                        <li>Your responses to surveys or market research that we carry out.</li>
                    </ul>
                    <p>This list is not exhaustive and sometimes we may need to collect additional data for the purposes set out in this Notice. Some of your personal data is collected directly, for example, when you make a purchase on our websites or enter a competition. Other personal data is collected indirectly, for example, your browsing or shopping activity.</p>
                </div>
                <div >
                    <h5>How Your Information Is Used? </h5>
                    <p>Depending on how you are interacting with us, we (and trusted partners acting on our behalf) use your personal data:</p>
                    <ul>
                        <li>To fulfil contractual agreements between you and us (for example when you place an order for products through our website)</li>
                        <li>To manage any registered account(s) that you hold with us</li>
                        <li>To verify your identity</li>
                        <li>To respond to a query and manage other customer service interactions with you</li>
                        <li>To send you information about our products by post</li>
                        <li>For market research purposes - to better understand your needs</li>
                        <li>To send you details (by phone, e-mail or SMS) of promotional offers and products and services which we think may interest you, where you have consented to this (and have not withdrawn such consent) or where we have a legitimate business interest because you are a customer or have engaged with us to buy our products (and have not opted out of such communications)</li>
                        <li>To let you know about and invite you to events</li>
                        <li>To send you information about our products by post</li>
                    </ul>
                    <p>We only allow our service providers to handle your personal data when we have confirmed that they apply appropriate data protection and security controls. We also impose contractual obligations on service providers relating to data protection and security, which mean they can only use your data to provide services to us and to you, and for no other purposes. All payments are provided through a trusted third party payment service provider such as Worldpay. Worldpay acts as Data Controller of your information for the purposes of payments for products.</p>
                </div>

                <div >
                    <h5>Our Legal Basis For Using Your Information</h5>
                    <p>Depending on how you are interacting with us, we (and trusted partners acting on our behalf) use your personal data:</p>
                    <ul>
                        <li>To fulfil a contract we have with you.</li>
                        <li>When it is our legal duty.</li>
                        <li>When it is in our legitimate interest.</li>
                    </ul>
                    <p>In general, we only rely on consent as a legal basis for processing in relation to sending direct marketing communications to customers via email, post or text message unless you are a customer or have engaged with us to buy our products, in which case we may rely on the legal basis of legitimate interests to send you such communications. We also use legitimate interest to contact you with targeted advertising delivered online through social media and other online platforms operated by other companies, unless you object. We don't have access to any information held on your social media account.</p>
                </div>

                <div >
                    <h5>How Long Do We Keep Your Data?</h5>
                    <p>We will not retain your data for longer than necessary for the purposes set out in this Privacy Notice. We may also keep it to comply with our legal obligations, respond to queries, resolve disputes, enforce our rights, and pursue our legitimate interests.</p>
                    <p>Different retention periods apply for different types of data, which are based on criteria including: information we have told you about retention periods on our website or in terms and conditions; applicable contractual provisions; legal statutory limitation periods; applicable regulatory requirements; and industry standards.</p>
                </div>

                <div >
                    <h5>Your Privacy Rights</h5>
                    <p>You have various right to:</p>
                    <ul>
                        <li>Find out what information we hold about you and to access a copy of your personal data that we hold and receive certain supplementary information.</li>
                        <li>Correct any inaccurate information we hold about you.</li>
                        <li>Request the erasure of the information that we hold about you.</li>
                    </ul>
                    <p>To exercise any of these rights, please contact us using the details in the Contact section below. These rights are subject to certain limitations and exemptions. Therefore, please consider your request carefully before submitting it.</p>
                </div>
                <div >
                    <h5>Cookies</h5>
                    <p>This section describes how cookies and similar technologies are used on our website that contain or link to this notice. It is intended to operate with and be read together with the cookies consent widget.</p>
                    <p>Our website and emails use cookies. Cookies are small files stored on your computer's hard drive which are used to collect information about your visit to the website and interaction with our emails. Cookies help to provide users with a good experience when browsing our website and also allow us to improve our website. We also use cookies to measure the effectiveness of our marketing communications by tracking how you interact with our content when we send you marketing emails (e.g. whether you open an email or click on a link in an email we send you).</p>
                    <p>Email opens are tracked by a hidden pixel that is automatically placed at the bottom of our emails. We record date and time of open, IP address (location) and user agent (device). For link clicks we record date and time of click, URL, IP address and user agent. While there are many different uses for first and third party cookies, the cookies used by us all fall into one of two main categories being either functional needed to make sure our website runs optimally or third-party marketing/targeting cookies.</p>
                </div>

                <div >
                    <h5>How Can You Control The Use Of Cookies?</h5>
                    <p>Please use this link to review or change your current consent preferences as regards website cookies any time.</p>
                    <p>If you do not want us to use cookies to measure the effectiveness of our marketing communications via cookies, you can unsubscribe from our emails at any time by contacting us or using the unsubscribe link found at the bottom of all marketing emails.</p>
                    <p>You can also amend your browser settings to block some or all cookies. To do this, follow the instructions provided by your preferred web browser. For your ease of reference we have provided the links below which provide instructions on how to remove and delete cookies for some of the more common web browsers. Please be aware that if you block cookies from the websites, some or all the website's functions may not perform as intended:</p>
                    <ul>
                        <li>Firefox</li>
                        <li>Internet Explorer</li>
                        <li>Google Chrome</li>
                        <li>Safari</li>
                    </ul>
                    <p>We generally request cookie consent every 30 days. If you close your online account, we will erase all cookies data associated with your account within 24 hours.</p>
                </div>
                <div >
                    <h5>Security</h5>
                    <p>In accordance with applicable data protection law and our own policies, we have adopted appropriate security procedures to help prevent unauthorised access to your information. In accordance with applicable data protection law and our own policies, we have adopted appropriate security procedures to help prevent unauthorised access to your information.</p>
                </div>
                <div >
                    <h5>Changes To Our Privacy Notice</h5>
                    <p>We may update or amend this Privacy Notice from time to time to comply with law or to meet our changing business requirements without notice to you. Any updates or amendments will be posted on this page. We may update or amend this Privacy Notice from time to time to comply with law or to meet our changing business requirements without notice to you. Any updates or amendments will be posted on this page.</p>
                </div>
                <div >
                    <h5>Question & Complaints</h5>
                    <p>If you have any question or complaints about this privacy notice or any concerns about how your personal data has been handled, please contact us with:</p>
                    <p>Email:<Link href="mailto: info@stablersfashion.com" >
                        <a className='px-3' aria-label="Email info@stablersfashion.com">info@stablersfashion.com</a>
                    </Link></p>
                    <p>Phone:<Link href="https://wa.me/message/HJ32PM5VOUAHO1">
                        <a className='px-2' aria-label="Phone +92 309 1440 066 ">+92 309 1440 066 </a>
                    </Link></p>
                    <p>We are available 24 hour, 7days a week for you.</p>
                </div>
                <div >
                    <h5>Changes To Our Privacy Notice</h5>
                    <p>We may update or amend this Privacy Notice from time to time to comply with law or to meet our changing business requirements without notice to you. Any updates or amendments will be posted on this page. We may update or amend this Privacy Notice from time to time to comply with law or to meet our changing business requirements without notice to you. Any updates or amendments will be posted on this page.</p>
                </div>

            </div>
        </MainLayout>

    )
}

export default Privacy
