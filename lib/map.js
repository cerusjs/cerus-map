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

	get(key) {
		if(this._opts.keytype === "all" || typeof key !== this._opts.keytype) {
			throw new TypeError("the argument key must be a(n) " + this._opts.keytype);
		}

		return this._map.get(key);
	}

	has(key) {
		if(this._opts.keytype === "all" || typeof key !== this._opts.keytype) {
			throw new TypeError("the argument key must be a(n) " + this._opts.keytype);
		}

		return this._map.has(key);
	}

	remove(key) {
		if(this._opts.keytype === "all" || typeof key !== this._opts.keytype) {
			throw new TypeError("the argument key must be a(n) " + this._opts.keytype);
		}

		return this._map.delete(key);
	}

	delete(key) {
		return this.remove(key);
	}

	list() {
		return Array.from(this._map.keys());
	}

	keys() {
		return this._map.keys();
	}

	entries() {
		return this._map.entries();
	}

	array() {
		return Array.from(this._map.entries());
	}

	clear() {
		return this._map.clear();
	}

	empty() {
		return this.clear();
	}

	sort(func) {
		return this._map = new Map([...this._map.entries()].sort(func));
	}

	filter(func) {
		if(typeof func !== "function") {
			throw new TypeError("the argument func must be a function");
		}

		return this._map = new Map([...this._map.entries()].filter(function(item, index) {
			func(item[0], item[1], index, this._map);
		}.bind(this)));
	}
}