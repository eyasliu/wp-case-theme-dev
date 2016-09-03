import React from 'react';
// import 'loaders.css';
import style from  './style.css';

export default class Loading extends React.Component{
	constructor(props){
		super();
	}

	render(){
		return (
			<div className="loader">
				<div className={`loader-inner line-scale`}>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		)
	}
}