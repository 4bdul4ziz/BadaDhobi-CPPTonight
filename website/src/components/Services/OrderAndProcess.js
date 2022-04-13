import Typography from '@material-ui/core/Typography';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import React from 'react';
import { Button, Card, CardBody, Col, Container, Row, UncontrolledCollapse } from 'reactstrap';
import './Services.css';

const faq = [
	
	{
		id: 'toggle03',
		question: 'Will you wash out every stains from my clothes?',
		answer: 'The stain removal will depend on the quality of machine installed',
	},
	{
		id: 'toggle04',
		question: 'What if I leave my personal items with clothes?',
		answer:
			'It is your responsibility to remove and check for all personal items'
	},
	{
		id: 'toggle05',
		question: 'What if my clothes get missing?',
		answer:
			'We do not take responsibility for any loss/damage of clothes.'
	}
];

const OrderAndProcess = () => {
	return (
		<Container>
			<Row className="my-2">
				<Col md={6}>
					<h2 className="text-danger head-title mt-5">How to order</h2>

					<Timeline className="orderList">
						<TimelineItem>
							<TimelineSeparator>
								<TimelineDot color="secondary">
									<AssignmentTurnedInIcon />
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<Typography variant="h6" component="h1">
									Select Service
								</Typography>
								<Typography>From the category, select the service you are looking for.</Typography>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem>
							<TimelineSeparator>
								<TimelineDot color="secondary">
									<ScheduleIcon />
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<Typography variant="h6" component="h1">
									Set Schedule
								</Typography>
								<Typography>Scan QR code to turn on the nearest washer or select your convenient time slot to book your washer prior</Typography>
							</TimelineContent>
						</TimelineItem>

						<TimelineItem>
							<TimelineSeparator>
								<TimelineDot color="secondary">
									<LocalMallIcon />
								</TimelineDot>
								<TimelineConnector />
							</TimelineSeparator>
							<TimelineContent>
								<Typography variant="h6" component="h1">
									Place Order
								</Typography>
								<Typography>Make payment using your MATIC balance .</Typography>
							</TimelineContent>
						</TimelineItem>
					</Timeline>

					<div>
						<h2 className="text-danger head-title mt-3">Terms & Condition</h2>
						<div className="terms mb-5">
							<li className="mt-3">
								Before using service you have to pay through metamask


							</li>
							<li className="mt-3">
								Prices may differ.
							</li>
							<li className="mt-3">
								We are not responsible for any loss or damage.
							</li>
							<li className="mt-3">
								Any cost to repair damage done to the machine by the user, will be born by the user.
							</li>
							<li className="mt-3">
								We do not take responsibility if your clothes are taken away by the monkeys
							</li>
						</div>
					</div>
				</Col>

				<Col md={6} className="mobileView">
					<h2 className="text-danger head-title mt-5 ml-5">Details of Services</h2>
					<p className="text-justify story ml-5">
						Bada Dhobi helps you to find nearest washing machine near you connected to our blockchain network and ensure that your clothes are washed safely and efficiently.
			. Our quality services are quick and simple. Every customer’s laundry is washed with extreme care to preserve their clothes’ quality.
						<li className="mt-3">Trusted and Certified </li>
						<li>Best Product, Best Service.</li>
						<li>Guaranteed Customer Satisfaction.</li>
					</p>

					<div className="ml-5 my-5">
						<h2 className="text-danger head-title mt-5">FAQ of Our Service</h2>

						{faq.map((item) => (
							<div className="terms" key={item.id}>
								<Button
									className="btn-round"
									color="danger"
									outline
									id={item.id}
									style={{ marginBottom: '1rem', fontSize: '19px' }}
								>
									{item.question}
								</Button>
								<UncontrolledCollapse toggler={`#${item.id}`}>
									<Card>
										<CardBody>
											{item.answer}
										</CardBody>
									</Card>
								</UncontrolledCollapse>
							</div>
						))}
					</div>
				</Col>
			</Row>
		</Container>
	);
};

export default OrderAndProcess;
