import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
	Button,
	Col,
	Container,
	DropdownItem,
	DropdownMenu,
	DropdownToggle,
	Row,
	UncontrolledDropdown
} from 'reactstrap';
import { DataContext } from '../../App';
import houseDress from '../../images/icon/household.png';
import manDress from '../../images/icon/man.png';
import womanDress from '../../images/icon/woman.png';
import Cart from '../CartAndShipment/Cart';
import Preloader from '../Preloader/Preloader';
import OrderAndProcess from './OrderAndProcess';
import './Services.css';

const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		backgroundColor: theme.palette.background.paper
	},
	heading: {
		fontSize: theme.typography.pxToRem(19),
		fontWeight: theme.typography.fontWeightRegular
	},
	secondaryHeading: {
		fontSize: theme.typography.pxToRem(15),
		color: theme.palette.text.secondary
	}
}));

const WashAndIron = (props) => {
	const classes = useStyles();
	const ContextData = useContext(DataContext);

	const WashAndIronMan = ContextData.products.filter(
		(pd) => pd.service === 'Wash And Iron' && pd.category === "Men's Wear"
	);

	const washAndIronWoman = ContextData.products.filter(
		(pd) => pd.service === 'Wash And Iron' && pd.category === "Women's Wear"
	);

	const washAndIronHouse = ContextData.products.filter(
		(pd) => pd.service === 'Wash And Iron' && pd.category === 'Household'
	);

	const handleAddToCart = (currentItem) => {
		currentItem.ac = 'd-none';
		currentItem.dc = 'd-block';

		props.handleAddProduct(currentItem);
	};

	const removeItemFromCart = (currentItem) => {
		currentItem.dc = 'd-none';
		currentItem.ac = 'd-block';

		props.handleRemoveProduct(currentItem);
	};

	const handleProductQuantity = (productID, productQuantity) => {
		const newCart = ContextData.products.map((item) => {
			if (item.id === productID) {
				item.quantity = productQuantity;
			}
			return item;
		});

		const filteredCart = newCart.find((item) => item.id === productID);
		props.handleAddProduct(filteredCart);
	};

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<section id="WashAndIron">
			<Container>
				<div className="row justify-content-between py-3">
					<div className="col-md-8">
						<h2 className="text-danger">Scan washing machine</h2>
						<button className="btn btn-danger"> Open QR Code Scanner </button>
					</div>
					
				</div>
			
				


					<OrderAndProcess />
			
			</Container>
		</section>
	);
};

export default WashAndIron;
