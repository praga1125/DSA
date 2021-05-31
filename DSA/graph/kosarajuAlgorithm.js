const selectConnectedComponents = (graph) => {
	const nVertices = graph.length;
	const reverseGraph = reverse(graph);

	const fValuesReverseGraph = topoSort(reverseGraph);

	const isExplored = Array(nVertices).fill(false);
	const sccValues = Array(nVertices);
	let numSccs = 0;

	function dfsSCC(graph, s) {
		isExplored[s] = true;
		sccValues[s] = numSccs;
		if (Array.isArray(graph[s])) {
			for (let v of graph[s]) {
				if (!isExplored[v]) {
					dfsSCC(graph, v);
				}
			}
		}
	}

	fValuesReverseGraph.forEach((v) => {
		if (!isExplored[v]) {
			numSccs += 1;
			dfsSCC(graph, v);
		}
	});

	const sccSizeList = new Array(numSccs).fill(0);
	sccValues.shift();
	sccValues.forEach((scc) => {
		sccSizeList[scc] += 1;
	});

	const result = sccSizeList
		.sort((a, b) => {
			return a - b;
		})
		.reverse()
		.slice(0, 5);

	console.log("The sizes of the 5 bigger SCCs are:");
	console.log(result);
};

function topoSort(graph) {
	const nVertices = graph.length;
	const isExplored = Array(nVertices).fill(false);

	const fValues = Array(nVertices);
	let curLabel = nVertices;

	function dfsTopo(graph, s) {
		isExplored[s] = true;

		if (Array.isArray(graph[s])) {
			for (let v of graph[s]) {
				if (!isExplored[v]) {
					dfsTopo(graph, v);
				}
			}
			curLabel -= 1;
			fValues[curLabel] = Number(s);
		}
	}

	for (let v = 0; v < nVertices; v++) {
		if (!isExplored[v]) {
			dfsTopo(graph, v);
		}
	}

	return fValues;
}
