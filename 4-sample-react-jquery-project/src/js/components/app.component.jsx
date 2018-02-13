import * as React from 'react';

import { Select2Component } from './select2-component';

export class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedValue: null
		};
		this.handleSelect = this.handleSelect.bind(this);
		this.handleUnSelect = this.handleUnSelect.bind(this);
	}

	handleSelect(event) {
		this.setState({
			selectedValue: event.target.value
		});
	}

	handleUnSelect() {
		this.setState({
			selectedValue: null
		});
	}

	render() {
		const select2Option = {
			placeholder: '選択して下さい',
			allowClear: true,
			language: {
				noResults: function() {
					return '候補がみつかりません';
				}
			}
		}
		return (
			<div>
				<h1>jQueryプラグインとReactの組み合わせサンプル</h1>
				<p style={{ marginRight: '50px', display: 'inline-block' }}>
					<Select2Component style={{ width: '300px' }}
							onSelect={ this.handleSelect }
							onUnSelect={ this.handleUnSelect }
							select2Option={ select2Option }>
						<option></option>
						<option value="Hoge">Hoge</option>
						<option value="Fuga">Fuga</option>
						<option value="Piyo">Piyo</option>
						<option value="ほげ">ほげ</option>
						<option value="ふが">ふが</option>
						<option value="ぴよ">ぴよ</option>
					</Select2Component>
					
				</p>
				<span>選択された値：{ this.state.selectedValue ? this.state.selectedValue : '未選択' }</span>
			</div>
		);
	}
}
