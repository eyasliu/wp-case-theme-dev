
import {Provider} from 'react-redux';
import createStore from 'utils/store';
import rootReducer from './reducers';
import {getMenu} from './actions';

const store = createStore()(rootReducer)

export default class App extends React.Component{
	constructor(props){
		super();
		// store.dispatch(getMenu());
	}
	render(){
		return (
			<Provider store={store}>
				<div>
					<main className="main">
						{this.props.children}
					</main>
				</div>
			</Provider>
		)
	}
}