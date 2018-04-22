module.exports = class map {
	constructor(opts = {}) {
		this._opts = Object.assign({}, {
			keytype: "string",
			valuetype: "all"
		}, opts);
		this._map = new Map();
	}

	set(key, value) {
		if(this._opts.keytype === "all" || typeof key !== this._opts.keytype) {
			throw new TypeError("the argument key must be a(n) " + this._opts.keytype);
		}
		else if(this._opts.valuetype === "all" || typeof key !== this._opts.valuetype) {
			throw new TypeError("the argument value must be a(n) " + this._opts.valuetype);
		}

		this._map.set(key, value);
	}
}