import React from 'react';
import Metadata from '../components/metadata';
import { Helmet } from 'react-helmet';
import Header from '../components/header';
import ParticlesBg from '../components/particlesbg';
import '../../static/css/normalize.scss';
import '../../static/css/grid.min.scss';
import '../../static/css/global.scss';
import Banner from '../components/banner';
import { Link } from 'gatsby';
import styles from './css/home.module.scss';
import Footer from '../components/footer';
import ReactFullpage from '@fullpage/react-fullpage';

const SEL = 'custom-section';
const SECTION_SEL = `.${SEL}`;

const Home = (props) => {
	return (
		<div className="home">
			<Metadata />
            <Helmet>
				<title>Home</title>
			</Helmet>


            <ReactFullpage

            // fullpage options
            licenseKey={'YOUR_KEY_HERE'} // Get one from https://alvarotrigo.com/fullPage/pricing/
            navigation
            anchors={['banner', 'author', 'book', 'review', 'contact', 'footer']}
            sectionSelector={SECTION_SEL}

            render={comp => (
                <ReactFullpage.Wrapper>
                    <div className={`${SEL} sect`}>
                        <Header />
                        <ParticlesBg />
                        <Banner />
                    </div>
                    <div className={`${SEL} sect`}>
                        <div className={`${styles.aboutTheAuthor}`}>
                            <div className="container">
                                <div className="row">
                                    <div className={`col-lg-12 sectHeadingCont`}>
                                        <div className="sectHeading">
                                            <h2>Author</h2>
                                        </div>
                                    </div>
                                    <div className={`col-lg-6 ${styles.aboutTheAuthorContents}`}>
                                        <h2 className="title">
                                            <span>Margrit</span> <span>Spear</span>
                                        </h2>
                                        <p>
                                            has a PhD in Counseling Psychology, is a California-licensed Marriage and Family
                                            therapist, and is the vice president of CCRS, an independent research group that has
                                            vested fifty years in mind/body/spirit integration.{' '}
                                        </p>
                                        <Link to="/about-the-author" className="readMore">
                                            Read More
                                        </Link>
                                    </div>
                                    <div className={`col-md-6 ${styles.aboutTheAuthorImg}`}>
                                        <img src="../author.jpg" alt="Author" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${SEL} sect`}>
                        <div className={`${styles.aboutTheBook}`}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 sectHeadingCont">
                                        <div className="sectHeading">
                                            <h2>Book</h2>
                                        </div>
                                    </div>
                                    <div className={`col-lg-6 ${styles.aboutTheBookContents}`}>
                                        <h2 className="title">
                                            <span>Life-Changing</span>
                                            <span>Explosion</span>
                                            <span>of Consciousness:</span>
                                            <span>Introduction to</span>
                                            <span>Holographic</span>
                                            <span>Psychology</span>
                                        </h2>
                                        <p>
                                            Holographic Psychology is the birth of a revolutionary course of understanding that all
                                            comprehension and associated behavior is being subjectively determined and manifested as
                                            part of the individual’s psychological dynamics.
                                        </p>
                                        <Link to="/about-the-book" className="readMore">
                                            Read More
                                        </Link>
                                    </div>
                                    <div className={`col-md-6 ${styles.aboutTheBookImg}`}>
                                        <img src="../book1.jpg" alt="Book" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${SEL} sect`}>
                        <div className={`${styles.reviews}`}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 sectHeadingCont">
                                        <div className="sectHeading">
                                            <h2>Reviews</h2>
                                        </div>
                                    </div>
                                    <div className={`col-lg-6 ${styles.reviewsImg}`}>
                                        <div className={`${styles.reviewsName}`}>
                                            <h2>Dr. Larry James Stevens</h2>
                                            <span>"SoulMan" Larry — soulmanlarry.com</span>
                                        </div>
                                    </div>
                                    <div className={`col-lg-6 ${styles.reviewsContents}`}>
                                        <p className={`${styles.reviewsText}`}>
                                            Dr. Margrit Spear is my kind of psychotherapist and "Human Being...emphasizing the
                                            PRACTICAL applications revolving around personal responsibility taking. When we know
                                            better we can do better. That she turned a life and death crisis with her own daughter
                                            into a personal, life-changing awakening...to WHO we, as Humans, are and HOW we truly
                                            function...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${SEL} sect`}>
                        <div className={`${styles.contact}`}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12 sectHeadingCont">
                                        <div className="sectHeading">
                                            <h2>Contact</h2>
                                        </div>
                                    </div>
                                    <div className={`col-lg-6 ${styles.contactImg}`}>
                                        <div className={`${styles.contactName}`}>
                                            <h2>Send Us A Message</h2>
                                            <Link to="/contact">
                                                <img src="../arrow.png" alt="arrow" />
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={`col-lg-6 ${styles.contactContents}`}>
                                        <div className={`${styles.contactInfo}`}>
                                            <ul>
                                                <li>
                                                    <h2>Information</h2>
                                                </li>
                                                <li>
                                                    831 N Tatnall Street, Suite M #188<br />Wilmington, DE 19801
                                                </li>
                                                <li>
                                                    <a href="tel:8883237009">888-323-7009</a>
                                                </li>
                                                <li>
                                                    <a href="mailto:publish@stratton-press.com">publish@stratton-press.com</a>
                                                </li>
                                            </ul>
                                            <p className={`${styles.contactText}`}>
                                                Dr. Margrit Spear loves to hear from readers. You can reach her via email. Feel free
                                                to send questions about her writing, works, interviews and other publicity matters.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${SEL} fp-auto-height`} >
                        <Footer />
                    </div>
                </ReactFullpage.Wrapper>
            )}
          />
		</div>
	);
};

export default Home;