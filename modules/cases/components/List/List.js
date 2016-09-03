import Item from './Item';
import style from './style.scss';
import {getList} from 'cases/actions/list';
import Loading from 'common/components/Loading';

@connect(
	state => ({
		list: state.cases.list.values
	})
)
export default class ListItems extends React.Component{
	constructor(props){
		super();
		props.dispatch(getList())
		this.state = {
			loading: true
		}
	}

	componentWillReceiveProps(nextProps){
		if(nextProps.list.length !== this.props.list.length){
			this.setState({
				loading: false
			})
		}
	}

	render(){
		return (
			<div className={style.list}>
				<div className={style.items}>
					{this.props.list.map(item => <Item key={item.id + uuid()} data={item} />)}
				</div>
				{this.state.loading ? <Loading /> : ''}
				<PageNav total={window.dict.case_count.publish} limit={12} onChange={paged => {
					this.setState({
						loading: true
					})
					this.props.dispatch(getList(paged))
				}} />
			</div>
		)
	}
}

class PageNav extends Component{
	constructor(props){
		super();
		this.state = {
			current: props.current
		}
	}
	static defaultProps = {
		total: 100,
		current: 1,
		limit: 12,
		onChange: () => {}
	}

	clickHandler(paged, e){
		const {current} = this.state;
		this.gotoPage(paged);
	}

	gotoPage(paged){
		if(paged < this.state.current) return;
		this.setState({
			current: paged
		})
		this.props.onChange && this.props.onChange(paged)
	}

	pageCount(total, limit){
		return parseInt(total/limit + (total%limit ? 1 : 0))
	}

	generateNav(){
		const {total, limit} = this.props;
		const {current} = this.state;
		const pageCount = this.pageCount(total, limit);
		const items = [];
		for(let i = 0; i < pageCount ; i++){
			const paged = i + 1;
			items.push(<li 
				onClick={::this.clickHandler.bind(this, paged)} 
				key={paged} 
				className={`${current === paged? style.active : ''} ${paged < current ? style.disabled : ''}`}
				>{paged}</li>)
		}
		return items
	}

	render(){
		const {total, limit} = this.props;
		if(total <= limit) {
			return <span></span>;
		}
		return (
<div className={style.pagenation}>
	<ul>
		{this.generateNav()}
	</ul>
	{
		this.pageCount(total, limit) > this.state.current &&
		<div className={style.next} onClick={e => this.gotoPage(this.state.current + 1)}>下一页</div>
	}
</div>
		)
	}
}