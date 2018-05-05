var expect = require("chai").expect;
var map = function(...opts) {
	return new (require("../lib/map"))(...opts);
}

describe("map", function() {
	describe("#set", function() {
		context("with a mismatching key type", function() {
			it("should throw an error", function() {
				var func = function() {
					map({"keytype": "string"}).set(123);
				};

				expect(func).to.throw();
			});
		});

		context("with a mismatching value type", function() {
			it("should throw an error", function() {
				var func = function() {
					map({"valuetype": "string"}).set("test", 123);
				};

				expect(func).to.throw();
			});
		});

		context("with matching types", function() {
			it("should set the specified key to the inserted value", function() {
				var map_ = map();
				map_.set("test", "value");

				expect(map_._map.get("test")).to.equal("value");
			});
		});
	});

	describe("#get", function() {
		context("with an incorrect key", function() {
			it("should throw an error", function() {
				var func = function() {
					map({"keytype": "string"}).get(123);
				}

				expect(func).to.throw();
			});
		});

		context("with a non-existant key", function() {
			it("should return undefinded", function() {
				expect(map().get("test")).to.equal(undefined);
			});
		});

		context("with an existant key", function() {
			it("should return the value", function() {
				var map_ = map();
				map_.set("test", "value");
				
				expect(map_.get("test")).to.equal("value");
			});
		});
	});

	describe("#has", function() {
		context("with an incorrect key", function() {
			it("should throw an error", function() {
				var func = function() {
					map({"keytype": "string"}).has(123);
				}

				expect(func).to.throw();
			});
		});

		context("with a non-existant key", function() {
			it("should return false", function() {
				expect(map().has("test")).to.equal(false);
			});
		});

		context("with an existant key", function() {
			it("should return true", function() {
				var map_ = map();
				map_.set("test", "value");
				
				expect(map_.has("test")).to.equal(true);
			});
		});
	});

	describe("#remove", function() {
		context("with an incorrect key", function() {
			it("should throw an error", function() {
				var func = function() {
					map({"keytype": "string"}).remove(123);
				}

				expect(func).to.throw();
			});
		});

		context("with a non-existant key", function() {
			it("should return false", function() {
				expect(map().remove("test")).to.equal(false);
			});
		});

		context("with an existant key", function() {
			it("should remove the item", function() {
				var map_ = map();
				map_.set("test", "value");
				map_.remove("test");
				
				expect(map_._map.has("test")).to.equal(false);
			});

			it("should return true", function() {
				var map_ = map();
				map_.set("test", "value");
				
				expect(map_.remove("test")).to.equal(true);
			});
		});
	});

	describe("#remove", function() {
		context("with no items", function() {
			it("should return []", function() {
				expect(map().list()).to.deep.equal([]);
			});
		});

		context("with a single item", function() {
			it("should return ['test']", function() {
				var map_ = map();
				map_.set("test");

				expect(map_.list()).to.deep.equal(["test"]);
			});
		});

		context("with multiple items", function() {
			it("should return ['test1', 'test2']", function() {
				var map_ = map();
				map_.set("test1", "value");
				map_.set("test2", "value");

				expect(map_.list()).to.deep.equal(["test1", "test2"]);
			});
		});
	});
});