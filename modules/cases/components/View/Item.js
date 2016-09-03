import style from './style.scss';

export default class Item extends React.Component{
	constructor(props){
		super();
	}
	render(){
		const {data} = this.props;
		console.log(data)
		return (
			<div className={style.item}>
				<div className={style.inner}>
					<h1 className={style.title}>{data.title}</h1>
					<div className={cx("entry-content", style.content)} dangerouslySetInnerHTML={{__html:data.content}}></div>
					<div className={style.images}>
						<img src={data.thumb} alt={data.title}/>
						{data.images && data.images && data.images.length ? data.images.map(item => <img key={uuid()} src={item} alt={item}/>): ''}
					</div>
				</div>
			</div>
		)
	}
}