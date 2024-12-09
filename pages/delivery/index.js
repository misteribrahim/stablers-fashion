import React from 'react';
import MainLayout from '../../Layout/mainLayout';
import SecondaryBanner from '../../components/secondaryBanner';
import Link from 'next/link';
import { Container } from 'react-bootstrap';


const Faqs = () => {

    return (
        <MainLayout>
            <SecondaryBanner
                img="/images/DELIVERY.png"
                title="DELIVERY"
                desc="If you need help or get a query, feel free to contact with us via phone, email or by filling out the contact form. If you need help or get a query, feel free to contact with us via phone, email or by filling out the contact form. If you need help or get a query, feel free to contact with us via phone, email or by filling out the contact form."
            />
            <Container>
            <section className="p-5 sec-bg">
                <h5 className='text-dark'>Delivery- UK</h5>
                <p className='text-dark'>Stablers provide delivery services in all cities of UK.</p>
                <p>We offer following delivery option for any orders.</p>

                    <table className="shipping-table left my-3 ">
                        <thead>
                            <tr>
                                <th>Delivery Type</th>
                                <th>Time</th>
                                <th>Timeframe</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Standard Delivery (Orders over $150)</td>
                                <td>Business</td>
                                <td>Free</td>
                            </tr>
                            <tr>
                                <td>Standard Delivery (Orders over $150)</td>
                                <td>3-5 Business Days </td>
                                <td>$6.00</td>
                            </tr>

                        </tbody>
                    </table>
                <p>During sale periods, we cannot guarantee despatch of your order on the same day. Orders might be despatched with a slight delay, as our warehouse team gets very busy. As always, we will endeavour to get your order to you as quickly as possible, we apologise for the inconvenience. </p>
                <p className='text-dark'>Tracking details will be emailed upon the day of despatch.</p>
                <p>If you have not received your delivery within 5 working days of despatch*, please </p>
                   <div className="privacyPolicy w-100 p-0">
                   <p>Email:<Link href="mailto: info@stablersfashion.com" >
                        <a className='px-3' aria-label="Email info@stablersfashion.com">info@stablersfashion.com</a>
                    </Link></p>
                    <p>Phone:<Link href="https://wa.me/message/HJ32PM5VOUAHO1">
                        <a className='px-2' aria-label="Phone +92 309 1440 066 ">+92 309 1440 066 </a>
                    </Link></p>
                    <p>All our orders are despatched on a service which will require the goods to be signed for, so you may prefer to specify a business address etc when ordering, but please note that we are unable to change the delivery address once an order has been placed.</p>
                    <ul>
                        <li>Please be advised orders may be liable to local tax/duty charges when passing through customs clearance</li>
                        <li>Please note that this postage is not refunded unless the item is faulty.</li>
                    </ul>
                   </div>
            </section>
            </Container>
        </MainLayout>
    );
};

export default Faqs;
