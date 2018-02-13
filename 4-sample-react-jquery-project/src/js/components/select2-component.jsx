// jQueryをimport
import * as $ from 'jquery';
// ラップして使用するjQueryプラグインをimport
import 'select2';
// Reactをimport
import * as React from 'react';


/**
 * jQueryプラグインのselect2をReact用にラップしたコンポーネントクラスです。
 * Select2のAPIについては以下のURLを参照してください。
 * {@link https://select2.github.io/}
 */
export class Select2Component extends React.Component
{
	static get defaultProps() {
		return {
			select2Option: {},
			onSelect: function() { /* do nothing */ },
			onSelecting: function() { /* do nothing */ },
			onUnSelect: function() { /* do nothing */ },
			onUnSelecting: function() { /* do nothing */ },
			onOpen: function() { /* do nothing */ },
			onOpening: function() { /* do nothing */ },
			onClose: function() { /* do nothing */ },
			onClosing: function() { /* do nothing */ },
			style: {},
			className: '',
			disabled: false
		};
	}

	/**
	 * コンストラクタ
	 * @param props {Object}
	 */
	constructor(props) {
		super(props);
		this.state = {
			groups: props.groups,
			groupProperties: props.groupProperties,
			items: props.items,
			value: props.value,
			style: props.style,
			className: props.className,
			disabled: props.disabled
		};
		this.root;
		this.$root;
	}

	componentDidMount() {

		// componentDidMountはReact側のライフサイクルメソッド
		// DOMが生成された後に呼ばれるメソッドなので、このタイミングならDOMの属性を書き換えたり、jQueryプラグインを使用したりできる。

		this.$root = $(this.root);
		this.$root.select2(this.props.select2Option)
			.on('select2:select', this.props.onSelect)
			.on('select2:selecting', this.props.onSelecting)
			.on('select2:unselect', this.props.onUnSelect)
			.on('select2:unselecting', this.props.onUnSelecting)
			.on('select2:open', this.props.onOpen)
			.on('select2:opening', this.props.onOpening)
			.on('select2:close', this.props.onClose)
			.on('select2:closing', this.props.onClosing);
		this.$root.val(this.state.value).trigger('change.select2');
		this.$root.prop('disabled', this.state.disabled);
	}

	componentWillUnmount() {

		// Reactコンポーネントが削除される前に呼ばれるReact側のライフサイクルメソッド
		// このタイミングでイベントハンドラなどをoffしておく。

		this.$root.off('select2:select', this.props.onSelect)
			.off('select2:selecting', this.props.onSelecting)
			.off('select2:unselect', this.props.onUnSelect)
			.off('select2:unselecting', this.props.onUnSelecting)
			.off('select2:open', this.props.onOpen)
			.off('select2:opening', this.props.onOpening)
			.off('select2:close', this.props.onClose)
			.off('select2:closing', this.props.onClosing)
			.select2('destroy');
		this.$root = null;
	}

	render() {
		// ref属性でDOMを取得
		return (
			<select ref={(select) => { this.root = select; }}
					style={this.state.style} className={this.state.className}>
				{ this.props.children }
			</select>
		);
	}
}
