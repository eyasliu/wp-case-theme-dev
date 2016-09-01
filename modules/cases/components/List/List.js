import Item from './Item';
import style from './style.scss';

export default class ListItems extends React.Component{
	render(){
		return (
			<div className={style.list}>
				<div className={style.items}>
					{this.props.list.map(item => <Item key={item.id} data={item} />)}
				</div>
				<div className={style.pagenation}>
					<ul>
						<li>1</li>
						<li>2</li>
						<li className={style.active}>3</li>
						<li>4</li>
						<li>5</li>
						<li>6</li>
					</ul>
					<div className={style.next}>下一页</div>
				</div>
			</div>
		)
	}
}