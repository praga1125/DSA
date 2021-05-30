class UnionFind {
	constructor() {
		this.sets = new Array(9).fill(-1);
	}
	find(v1, rank = 0) {
		if (this.sets[v1] == -1) {
			return [v1, rank];
		}
		return this.find(this.sets[v1], ++rank);
	}
	union(v1, v2) {
		let [parentA, rankA] = this.find(v1);
		let [parentB, rankB] = this.find(v2);

		if (parentA === parentB) {
			return true;
		}
		if (rankA > rankB) {
			this.sets[v2] = v1;
		} else {
			this.sets[v1] = v2;
		}

		return false;
	}
}

class WeightedGraph {
	constructor() {
		this.adjacencyList = {};
		this.unionFind = new UnionFind();
	}
	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
		return this;
	}
	removeVertex(vertex) {
		let vertices = this.adjacencyList[vertex];
		let j = 0;
		while (j < vertices.length) {
			let v = vertices[j];
			this.adjacencyList[v] = this.adjacencyList[v].filter(
				(_v) => _v !== vertex
			);
			j++;
		}
		if (this.adjacencyList[vertex]) delete this.adjacencyList[vertex];
		return this;
	}
	addEdge(v1, v2, weight, uniDirectional) {
		if (this.adjacencyList[v1])
			this.adjacencyList[v1].push({ node: v2, weight });
		if (!uniDirectional && this.adjacencyList[v2])
			this.adjacencyList[v2].push({ node: v1, weight });
		return this;
	}
	removeEdge(v1, v2, both) {
		if (this.adjacencyList[v1])
			this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v != v2);
		if (both && this.adjacencyList[v2])
			this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v != v1);
		return this;
	}
	kruskals() {
		let e = [];
		let v = new Array(9).fill(-1);
		for (var k in this.adjacencyList) {
			e = e.concat(
				this.adjacencyList[k].map((x) => {
					return {
						v1: k,
						v2: x.node,
						weight: x.weight,
					};
				})
			);
		}
		e = e
			.sort((a, b) => {
				return a.weight - b.weight;
			})
			.map((x, i) => i % 2 === 0 && x)
			.filter(Boolean);

		let r,
			minCost = 0;
		while ((r = e.shift())) {
			let isCycle = this.unionFind.union(r["v1"], r["v2"]);
			if (!isCycle) {
				minCost += r["weight"];
			}
		}
		return minCost;
	}
}
