import * as React from 'react';

import { AddItemForm } from './add-item-form';
import { ItemList } from './item-list.component';

/**
 * アプリケーションの最親に位置するコンポーネント
 * @augments {React.Component<{}, {itemList: Array.<{ itemName: string, price: number, itemNumber: number }>}>}
 */
export class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			itemList: []
		};
		this.handleAddItem = this.handleAddItem.bind(this);
		this.handleChangeItemList = this.handleChangeItemList.bind(this);
	}

	/**
	 * @param {{ itemName: string, price: number, itemNumber: number }} item
	 */
	handleAddItem(item) {
		this.state.itemList.push(item);
		this.setState({
			itemList: this.state.itemList
		});
	}

	/**
	 * @param {Array.<{ itemName: string, price: number, itemNumber: number }>} itemList 
	 */
	handleChangeItemList(itemList) {
		this.setState({
			itemList: itemList
		});
	}

	/**
	 * 合計金額を算出して返します。
	 * @param itemList {Array.<{ itemNumber: number, price: number }>}
	 * @return {number}
	 */
	calcTotalPrice(itemList) {
		let result = 0;
		itemList.forEach((item) => {
			result += item.itemNumber * item.price;
		})
		return result;
	}

	render() {
		const totalPrice = this.calcTotalPrice(this.state.itemList);
		return (
			<div>
				<header className="header"><h1>税込金額計算機</h1></header>
				<div className="contents">
					<AddItemForm onAddItem={ this.handleAddItem }/>
					<ItemList itemList={ this.state.itemList } onChangeItemList={ this.handleChangeItemList }/>
				</div>
				<footer className="footer">
					<p>合計金額： ￥{ totalPrice }</p>
					<p>合計金額（税込み）: ￥{ Math.floor(totalPrice * 1.08) }</p>
				</footer>
			</div>
		);
	}
}
