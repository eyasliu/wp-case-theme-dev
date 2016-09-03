import Dict from './dict';

export default function beforeRender(before, render){
	return fetchJson(config.server + '/dict')
		.then(data => {
			window.dict = new Dict(data)
			const tagMap = {};
			for(let key in data.case_tag){
				const item = data.case_tag[key];
				tagMap[item.term_id] = item.name
			}
			window.dict.add('tagMap', tagMap)
		})


}