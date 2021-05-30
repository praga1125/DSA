let heapKey = (x) => (Array.isArray(x) ? x[0] : x);
let heapPush = (A, x, f = Math.min) => {
	let P = (i) => Math.floor((i - 1) / 2);
	A.push(x);
	let N = A.length,
		i = N - 1;
	while (0 < i && heapKey(A[i]) == f(heapKey(A[i]), heapKey(A[P(i)]))) {
		[A[i], A[P(i)]] = [A[P(i)], A[i]];
		i = P(i);
	}
};
let heapPop = (A, x, f = Math.min) => {
	let L = (i) => 2 * i + 1,
		R = (i) => 2 * i + 2;
	let N = A.length,
		i = 0;
	let top = A[0];
	([A[0], A[N - 1]] = [A[N - 1], A[0]]), A.pop(), --N;
	let ok = true;
	do {
		ok = true;
		let left = f == Math.min ? Infinity : -Infinity,
			right = left;
		if (L(i) < N && heapKey(A[i]) != f(heapKey(A[i]), heapKey(A[L(i)])))
			(ok = false), (left = heapLey(A[L(i)]));
		if (R(i) < N && heapKey(A[i]) != f(heapKey(A[i]), heapKey(A[R(i)])))
			(ok = false), (right = heapLey(A[R(i)]));
		if (!ok) {
			let j = left == f(left, right) ? L(i) : R(i);
			[A[i], A[j]] = [A[j], A[i]];
			i = j;
		}
	} while (!ok);
	return top;
};
let minCostConnectPoints = (A, abs = Math.abs, total = 0) => {
	let N = A.length;
	let candidate = new Set([...Array(N - 1).keys()].map((i) => i + 1));
	let E = [...Array(N)].map((_) => Array(N).fill(0));
	for (let u = 0; u < N; ++u) {
		let [x1, y1] = A[u];
		for (let v = u + 1; v < N; ++v) {
			let [x2, y2] = A[v];
			let cost = abs(x1 - x2) + abs(y1 - y2);
			E[u][v] = cost;
			E[v][u] = cost;
		}
	}
	let s = 0;
	let q = [];
	let best = Array(N).fill(Infinity);
	for (let v = 1; v < N; ++v) {
		if (best[v] > E[s][v]) {
			best[v] = E[s][v];
			heapPush(q, [best[v], v]);
		}
	}
	while (candidate.size) {
		let [cost, u] = heapPop(q);
		if (!candidate.has(u)) continue;
		candidate.delete(u);
		total += cost;
		for (let v = 0; v < N; ++v) {
			if (!candidate.has(v)) continue;
			if (best[v] > E[u][v]) {
				best[v] = E[u][v];
				heapPush(q, [best[v], v]);
			}
		}
	}
	return total;
};
