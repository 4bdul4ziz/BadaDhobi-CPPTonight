import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import '../../App.css';
import Logo from '../../images/logo.png';

const About = () => {
	return (
        <section  id="about-us">
		<Container>
			<div className="d-flex justify-content-center mb-4">
				<h2 className="text-danger head-title mt-5">About Us</h2>
			</div>
			<Row>
				<Col md={6} className="d-flex justify-content-center">
					<img src={Logo}  alt="Logo"/>
				</Col>
				<Col md={6}>
					<p className="text-justify mb-5">
						Tipsy is a decentralized platform for sharable services.
						Tipsy can be any shareable device. Any user who wants to earn extra income from their spare device can register and get paid by other users who use their service
					Transactions can be done usind matic and with smart contracts the hosts and the managers(Tipsy) of the service can be rewarded!
					Tipsy can be anything , any service like bikes, cars, washing machines, etc. 
					Bada Dhobi is one such implementation of our technology Tipsy.
					</p>
				</Col>
			</Row>
		</Container>
        </section>
	);
};

export default About;
