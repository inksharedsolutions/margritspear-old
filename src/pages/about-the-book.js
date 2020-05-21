import React from 'react';
import Layout from '../layout/layout';
import { Helmet } from 'react-helmet';
import Banner2 from '../components/banner2';
import styles from './css/about-the-book.module.scss';

const Book = () => {
	return (
		<Layout>
			<Helmet>
				<title>About the Book</title>
			</Helmet>
			<Banner2 pagetitle="About the Book" />
			<div className="main-nonhome">
				<div className="container">
					<div className="row">
						<div className={`col-md-6 ${styles.aboutTheBookImg}`}>
							<img src="../book1.jpg" alt="Book" />
						</div>
						<div className={`col-lg-6 ${styles.aboutTheBookContents}`}>
							<h2 className="title">
								Life-Changing Explosion of Consciousness: Introduction to Holographic Psychology
							</h2>
							<p>
								Holographic Psychology is the birth of a revolutionary course of understanding that all
								comprehension and associated behavior is being subjectively determined and manifested as
								part of the individual’s psychological dynamics. It presents a giant leap in awareness,
								recognizing that all language is a symbolic means that reflects people, places, or
								things based on the person’s own accepted worldview.
							</p>
							<p>
								Holographic Psychology is surely one of the most important discoveries, revealing that
								the self-image is part of a process of human perception that evolves through three
								different realities.
							</p>
							<p>
								The principles of Holographic Psychology hold a viable model for world peace and provide
								an end to relationship issues or being a victim of any sort.
							</p>
							<p>
								Holographic Psychology holds the key to a healthier, happier life as it exposes newfound
								freedom. The principles are based on the person’s potential and not his or her
								pathology.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};

export default Book;
