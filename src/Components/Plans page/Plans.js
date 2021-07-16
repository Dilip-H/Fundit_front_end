import React from 'react';
import "./Plans.css";
import banner_plans from '../../assets/banner_plans.png';

function Plans() {
    return (
        <div className="bgimage__plans" style={{ backgroundImage: banner_plans }}>
            <div className="plans__container">
            <section className="pricing-plan plan__highlghted">
                <div className="pricing-plan__header">
                    <h1 className="pricing-plan__title">Free Plan</h1>
                </div>

                <div className="pricing-plan__description">
                    <ul className="pricing-plan__list">
                        <li className="pricing-plan__feature">✔ 1 Month Access</li>
                        <li className="pricing-plan__feature">✔ Pitch upto 5 Investors</li>
                        <li className="pricing-plan__feature">✔ Upload Pitch Deck file</li>
                        <li className="pricing-plan__feature">✔ One Startup deck at a time</li>
                    </ul>
                </div>

                <div className="pricing-plan__actions">
                    <p className="pricing-plan__cost">₹0</p>
                    <p className="pricing-plan__text">per month</p>
                    <p className="pricing-plan__text"><strike>₹100/m</strike></p>
                    <a href="./payment" className="pricing-plan__button">Choose Plan</a>
                </div>
            </section>

            <section className="pricing-plan plan__highlghted">
                <div className="pricing-plan__special-text">Recommended</div>
                <div className="pricing-plan__header">
                    <h1 className="pricing-plan__title">Basic Plan</h1>
                    <h2 className="pricing-plan__summary"></h2>
                </div>

                <div className="pricing-plan__description">
                    <ul className="pricing-plan__list">
                        <li className="pricing-plan__feature">✔ features</li>
                        <li className="pricing-plan__feature">✔ features</li>
                        <li className="pricing-plan__feature">✔ features</li>
                        <li className="pricing-plan__feature">✔ features</li>
                    </ul>
                </div>

                <div className="pricing-plan__actions">
                    <p className="pricing-plan__cost">500₹</p>
                    <p className="pricing-plan__text">per month</p>
                    <a href="./payment" className="pricing-plan__button">Choose Plan</a>
                    <p className="pricing-plan__text">some stuff</p>
                </div>
            </section>


            <section className="pricing-plan plan__highlghted">
                <div className="pricing-plan__header">
                    <h1 className="pricing-plan__title">Premium Plan</h1>
                    <h2 className="pricing-plan__summary"></h2>
                </div>

                <div className="pricing-plan__description">
                    <ul className="pricing-plan__list">
                        <li className="pricing-plan__feature">✔ 12 Month Access</li>
                        <li className="pricing-plan__feature">✔ Real time chat with Investors</li>
                        <li className="pricing-plan__feature">✔ NO limit to approach investors</li>
                        <li className="pricing-plan__feature">✔ Can Upload 4 start-up pitch Deck</li>
                    </ul>
                </div>

                <div className="pricing-plan__actions">
                    <p className="pricing-plan__cost">₹500</p>
                    <p className="pricing-plan__text">per year</p>
                    <p className="pricing-plan__text"><strike>₹800/yrs</strike></p>
                    <a href="./payment" className="pricing-plan__button">Choose Plan</a>
                </div>
            </section>
        </div>
    </div>
       
    )
}

export default Plans
