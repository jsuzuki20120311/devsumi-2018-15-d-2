import * as React from 'react';

/**
 * @augments {React.Component<
   {
     item: { itemName: string, price: number, itemNumber: number },
     onChangeItem: (item: { itemName: string, price: number, itemNumber: number }) => void, 
     onDeleteItem: () => void
    },
    { itemName: string, price: number, itemNumber: number }
   >}
 */
export class Item extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			itemName: props.item.itemName,
			price: props.item.price,
			itemNumber: props.item.itemNumber
		};
		this.handleChangeItemName = this.handleChangeItemName.bind(this);
		this.handleChangePrice = this.handleChangePrice.bind(this);
		this.handleChangeItemNumber = this.handleChangeItemNumber.bind(this);
		this.handleClickDelete = this.handleClickDelete.bind(this);
	}

	/**
	 * @param {{item: { itemName: string, price: number, itemNumber: number } }} nextProps 
	 */
	componentWillReceiveProps(nextProps) {
		this.setState({
			itemName: nextProps.item.itemName,
			price: nextProps.item.price,
			itemNumber: nextProps.item.itemNumber
		});
	}

	handleChangeItemName(event) {
		const item = {
			itemName: event.target.value,
			price: this.state.price,
			itemNumber: this.state.itemNumber
		};
		this.props.onChangeItem(item);
	}

	handleChangePrice(event) {
		const num = parseInt(event.target.value, 10);
		const price = num > 0 ? num : 0;
		const item = {
			itemName: this.state.itemName,
			price: price,
			itemNumber: this.state.itemNumber
		};
		this.props.onChangeItem(item);
	}

	handleChangeItemNumber(event) {
		const num = parseInt(event.target.value, 10);
		const itemNumber = num > 0 ? num : 0;
		const item = {
			itemName: this.state.itemName,
			price: this.state.price,
			itemNumber: itemNumber
		};
		this.props.onChangeItem(item);
	}

	handleClickDelete() {
		if (confirm('削除してもよろしいですか？')) {
			this.props.onDeleteItem();
		}
	}

	render() {
		return (
			<div className="pure-form" style={{ padding: '10px' }}>
				<fieldset>
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
					<button className="pure-button" onClick={ this.handleClickDelete }>削除</button>
				</fieldset>
			</div>
		);
	}

}
