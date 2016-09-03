const C = Constant('fw');

export function getMenu(){
	return dispatch => {
		fetchJson(config.home + '/wp-json/wp-api-menus/v2/menus')
		.then(data => {
			const mainMenu = _.find(data, item => item.slug === 'main');
			const footerMenu = _.find(data, item => item.slug === 'footer');
			fetchJson(mainMenu.meta.links.self).then(mainData => {
				dispatch({
					type: C.GetMainMenu,
					data: mainData.items
				})
			})
			fetchJson(footerMenu.meta.links.self).then(footerData => {
				dispatch({
					type: C.GetFooterMenu,
					data: footerData.items
				})
			})
		})
	}
}