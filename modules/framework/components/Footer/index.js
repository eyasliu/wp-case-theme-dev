
@connect(
	state => ({
		description: '该站点由 wordpress 驱动的 react + redux 单页面应用'
	})
)
export default class Footer extends React.Component{
	render(){
		const {data} = this.props;
		return (
			<footer className="footer">
				<div className="description">
					<p>{this.props.description}</p>
				</div>
				<div className="copyright">
					<div className="logo">© COPYRIGHT {(new Date).getFullYear()}</div>
				</div>
			</footer>
		)
	}
}