const C = Constant('cases');

const parseCase = viewdata => {
	viewdata.thumb = viewdata.thumb.guid;
	viewdata.title = viewdata.title.rendered;
	viewdata.images = viewdata.images.map(item => item.guid);
	viewdata.guid = viewdata.guid.rendered;
	return viewdata;
}

export const getList = (page = 1) => {
	console.log(page)
	return async dispatch => {
		try{
			const list = await fetchJson(config.server + '/case', {query: {page, per_page: 12}})
			dispatch({
				type: C.GetList,
				list: _.map(list, parseCase)
			})
		} catch(e) {}
	}
}

export function getView(id){
	return async dispatch => {
		var data = await fetchJson(config.server + '/case/' + id)
		dispatch({
			type: C.GetView,
			data: parseCase(data)
		})
	}
}