import * as React from 'react';

import { Item } from './item.component';

/**
 * @augments {React.Component<{itemList: Array, onChangeItemList: (itemList: Array) => void }, { itemList: Array }>}
 */
export class ItemList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			itemList: props.itemList
		};
		this.handleChangeItem = this.handleChangeItem.bind(this);
		this.handleDeleteItem = this.handleDeleteItem.bind(this);
	}

	/**
	 * @param {{ itemList: Array }} nextProps
	 */
	componentWillReceiveProps(nextProps) {
		this.setState({
			itemList: nextProps.itemList
		});
	}

	/**
	 * @param {number} index 
	 * @param {Object} item 
	 */
	handleChangeItem(index, item) {
		this.state.itemList[index] = item;
		this.props.onChangeItemList(this.state.itemList);
	}

	/**
	 * @param {number} index 
	 */
	handleDeleteItem(index) {
		const itemList = this.state.itemList.filter((item, itemIndex) => {
			return index !== itemIndex;
		});
		this.props.onChangeItemList(itemList);
	}

	render() {
		const items = this.state.itemList.map((item, index) => {
			const props = {
				item: item,
				onDeleteItem: () => { this.handleDeleteItem(index); },
				onChangeItem: (item) => { this.handleChangeItem(index, item); }
			};
			return <li key={ index }><Item {...props}/></li>;
		});
		return <ul>{ items }</ul>;
	}

}
