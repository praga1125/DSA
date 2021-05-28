class Graph {
    constructor() {
        this.edges = {};
        this.colors = {};
        this.nodes = [];
    }
    addNode(node) {
        this.nodes.push(node);
        this.edges[node] = []; 
        this.colors[node] = -1;
    }
    addEdge(node1, node2) {
        if(node1 !== node2) {
            this.edges[node1].push(node2);
            this.edges[node2].push(node1);
        }
    }
    displayGraph() {
        console.log("Graph:")
        console.log(this.nodes.reduce((text,node) => 
            text += (node + " -> " + this.edges[node].map(n => n).join(", ") + "\n") , ""))
    }
    displayColors() {
        let colors = ["blue","red","green"]
        let graph = "";
        console.log("Colored graph:")
        this.nodes.forEach(node => {
           Object.values(this.colors).reduce((a,b) => a > b ? a : b , 0) <= 7 ? 
           graph += node + " -> " + colors[this.colors[node]] + "\n" :
           graph += node + " -> " + this.colors[node] + "\n";
        });
        console.log(graph);
    }
}

function color(graph) {
    graph.nodes.forEach(
        node => graph.colors[node] = 
        graph.edges[node].map(x => graph.colors[x])
        .filter(color => color >= 0)
        .sort((a,b) => a-b)
        .reduce((current,next) => current === next ? current+=1 : current , 0)
    )
    return graph;
}

let obj = new Graph();
const noOfVertex = 5 
for(let i = 1; i <= noOfVertex; i++) {
  obj.addNode(i);
}
obj.addEdge(1,2);
obj.addEdge(2,3);
obj.addEdge(2,4);
obj.addEdge(2,5);
obj.addEdge(3,4);
g = color(obj);
g.displayGraph()
g.displayColors();