export default class Dict {
	constructor(data){
		for(let key in data){
			this.add(key, data[key])
		}
	}

	add(key, data){
		this[key] = data
		return this;
	}
}