import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.css';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={styles.childmain}>
                <div className={styles.topSection}>
                    <div className={styles.newsletter}>
                        <h3 className={styles.title}>BE THE FIRST TO KNOW</h3>
                        <p>Sign up for updates from mettā muse.</p>
                        <div className={styles.inputGroup}>
                            <input type="text" placeholder="Enter your email..." className={styles.emailInput} />
                            <button className={styles.subscribeButton}>SUBSCRIBE</button>
                        </div>
                    </div>

                    <div className={styles.contactCurrency}>
                        <div className={styles.contactInfo}>
                            <h3 className={styles.title}>CONTACT US</h3>
                            <p>+44 221 133 5360</p>
                            <p>customercare@mettamuse.com</p>
                        </div>
                        <div className={styles.currencyInfo}>
                            <h3 className={styles.title}>CURRENCY</h3>
                            <p>
                                <Image src="/us.png" width={20} height={20} alt="Currency" /> USD
                            </p>
                            <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
                        </div>
                    </div>
                </div>

                <div className={styles.middleSection}>
                    <div className={styles.section}>
                        <h3 className={styles.title}>mettā muse</h3>
                        <p>About Us</p>
                        <p>Stories</p>
                        <p>Artisans</p>
                        <p>Boutiques</p>
                        <p>Contact Us</p>
                        <p>EU Compliances Docs</p>
                    </div>
                    <div className={styles.section}>
                        <h3 className={styles.title}>QUICK LINKS</h3>
                        <p>Orders & Shipping</p>
                        <p>Join/Login as a Seller</p>
                        <p>Payment & Pricing</p>
                        <p>Return & Refunds</p>
                        <p>FAQs</p>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                    </div>
                    <div className={styles.section }>
                        <h3 className={styles.title}>FOLLOW US</h3>
                        <div className={styles.socialIcons}>
                            <SocialIcon url="https://instagram.com" style={{ width: 30, height: 30 }} />
                            <SocialIcon url="https://linkedin.com" style={{ width: 30, height: 30 }} />
                        </div>
                        <h4 className={styles.paymentTitle}>mettā muse ACCEPTS</h4>
                        <div className={styles.paymentMethods}>
                            <Image src="/gpay.png" width={40} height={25} alt="Google Pay" />
                            <Image src="/visa.png" width={40} height={25} alt="Visa" />
                            <Image src="/mastercard.png" width={40} height={25} alt="MasterCard" />
                            <Image src="/amex.png" width={40} height={25} alt="American Express" />
                            <Image src="/applepay.png" width={40} height={25} alt="Apple Pay" />
                            <Image src="/paypal.png" width={40} height={25} alt="PayPal" />
                        </div>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>Copyright © 2023 mettamuse. All rights reserved.</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
