import cases from 'cases/reducers';

const C = Constant('fw');

const menu = Reducer({
	main: [],
	footer: []
})({
	[C.of('GetMainMenu')]: (state, action) => ({
		...state,
		main: action.data
	}),
	[C.of('GetFooterMenu')]: (state, action) => ({
		...state,
		footer: action.data
	})
})

const demo = Reducer({isDemo: true})({
'GetDict': (state, action) => ({
	...action.dict
})
})

export default combineReducers({
	cases,
	menu
})