const C = Constant('cases');

export function getView(id){
	return async dispatch => {
		const data = await fetchJson(config.server + '/case/' + id)
		dispatch({
			type: C.GetView,
			data
		})
	}
}