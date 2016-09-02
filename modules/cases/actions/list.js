const C = Constant('cases');

const parseCase = viewdata => {
	viewdata.thumb = viewdata.thumb.guid;
	viewdata.title = viewdata.title.rendered;
	viewdata.images = viewdata.images.map(item => item.guid);
	viewdata.guid = viewdata.guid.rendered;
	return viewdata;
}

export const getList = (page = 1) => {
	return dispatch => {
		fetchJson(config.server + '/case', {query: {page, per_page: 12}})
		.then(list => {
			dispatch({
				type: C.GetList,
				list: _.map(list, parseCase)
			})
		})
	}
}

export function getView(id){
	return dispatch => {
		fetchJson(config.server + '/case/' + id)
		.then(data => {
			dispatch({
				type: C.GetView,
				data: parseCase(data)
			})
			
		})
	}
}