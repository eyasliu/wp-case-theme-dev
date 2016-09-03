@connect(
	state => ({
		data: state.menu.main
	})
)

export default class Top extends React.Component{
	constructor(props){
		super();
	}

	static defaultProps = {
		bgImg: 'http://static.bootcss.com/expo/img/d/dd/2de797545de56274f03a5920eb3a1.jpg'
	}
	render(){
		const {data} = this.props;
		return (
			<div id="header" style={{backgroundImage: 'url(' + this.props.bgImg + ')'}}>
				<div className="logotext">
					<h1><Link to="/">案例展示</Link></h1>
					<h2>Eyas</h2>
				</div>
				<div className="logoimg">
			    <Link to="/cases">
			    	<img src="http://image.youzhan.org/e/35/22ccaf4c24ef690f7767e6a3ba5f0.png" width="78" />
			    </Link>
			  </div>
			</div>
		)
	}
}