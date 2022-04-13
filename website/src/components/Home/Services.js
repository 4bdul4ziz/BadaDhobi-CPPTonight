import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from 'reactstrap';

const services = [
	{
		src: require('../../images/service/wash-iron.jpeg'),
		name: 'Only Wash',
		title: 'All your regular wear garments will be washed perfectly and will come out stain free',
		link: '/wash-and-iron'
	},

	{
		src: require('../../images/service/dry-cleaning.webp'),
		name: 'Dryer',
		title: 'All your sensitive and special garments will be dried completely using our hyper-rottion technique.',
		link: '/wash-and-iron'
	},
	
	{
		src: require('../../images/service/subscription.jpg'),
		name: 'Wash and dry ',
		title: 'Washes and drys your clothes for you and you get your clothes stain free and dried', 
		link: '/wash-and-iron'
	}
];

const Services = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section className="mb-3" id="services">
			<Container>
				<div className="d-flex justify-content-center mt-5">
					<h2 className="text-danger head-title">Our Services</h2>
				</div>
				<Row>
					{services.map((service) => (
						<Col md={4} className="d-flex justify-content-center mt-4" key={service.src}>
							<Card style={{ width: '20rem' }}>
								<CardImg className="service-image" src={service.src} top />
								<CardBody>
									<CardTitle tag="h3" className="text-danger">
										{service.name}
									</CardTitle>
									<CardText>{service.title}</CardText>

									<Link to={service.link}>
										<Button color="danger" className="service-button">
											<i className="now-ui-icons arrows-1_minimal-right" />
											<span className="nav-name"> Select Service</span>
										</Button>
									</Link>
								</CardBody>
							</Card>
						</Col>
					))}
				</Row>
			</Container>
		</section>
	);
};

export default Services;
