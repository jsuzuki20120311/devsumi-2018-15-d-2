import * as React from 'react';

/**
 * @augments {React.Component<{ onAddItem: (item: { itemName: string, price: number, itemNumber: number }) => void }, { itemName: string, price: number, itemNumber: number }>}
 */
export class AddItemForm extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			itemName: '',
			price: 100,
			itemNumber: 1
		};
		this.handleClick = this.handleClick.bind(this);
		this.handleChangeItemName = this.handleChangeItemName.bind(this);
		this.handleChangePrice = this.handleChangePrice.bind(this);
		this.handleChangeItemNumber = this.handleChangeItemNumber.bind(this);
	}

	handleChangeItemName(event) {
		this.setState({
			itemName: event.target.value
		});
	}

	handleChangePrice(event) {
		const number = parseInt(event.target.value, 10);
		const price = number > 0 ? number : 0;
		this.setState({
			price: price
		});
	}

	handleChangeItemNumber(event) {
		const number = parseInt(event.target.value, 10);
		const itemNumber = number > 0 ? number : 0;
		this.setState({
			itemNumber: itemNumber
		});
	}

	handleClick() {
		this.props.onAddItem({
			itemName: this.state.itemName,
			price: this.state.price,
			itemNumber: this.state.itemNumber
		});
		this.setState({
			itemName: '',
			price: 0,
			itemNumber: 1
		});
	}

	render() {
		return (
			<div className="pure-form" style={{ padding: '10px' }}>
				<fieldset style={{ marginLeft: '40px' }}>
					<label style={{ marginRight: '10px' }}>
						<input type="text" value={ this.state.itemName } placeholder="商品名" onChange={ this.handleChangeItemName }/>
					</label>
					<label style={{ marginRight: '10px' }}>
						価格： ￥
						<input type="text" value={ this.state.price } onChange={ this.handleChangePrice }/>
					</label>
					<label style={{ marginRight: '10px' }}>
						数量：
						<input type="text" value={ this.state.itemNumber } onChange={ this.handleChangeItemNumber }/>
						個
					</label>
					<button className="pure-button pure-button-primary" onClick={ this.handleClick }>追加</button>
				</fieldset>
			</div>
		);
	}
}
