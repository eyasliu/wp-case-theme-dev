import style  from './style.scss';

export default class Item extends React.Component{
	render(){
		const {data} = this.props;
		const {tagMap} = window.dict;
		return (
			<div className={style.item}>
				<Link to={"/cases/" + data.id} className={style.inner}>
					<figure className={style.thumb}>
						<img width="700" height="500" src={data.thumb} alt={data.title}/>
					</figure>
					<div className={style.title}>
						<h1>{data.title}</h1>
						<p>{data.description}</p>
					</div>
				</Link>
			</div>
		)
	}
}