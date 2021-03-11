class graph{
    constructor(size){
        this.noOfVertices = size;
        this.adjList = new Map(); 
    }
    addVertex(vertice){
        this.adjList.set(vertice,[]);
    }
    addEdges(src, dist){
        this.adjList.get(src).push(dist);
        this.adjList.get(dist).push(src);
    }
    printGraph(){
        let keys = this.adjList.keys();
        for(let i of keys){
            let values = this.adjList.get(i);
            let concat = "";
        for(let j of values){
            concat += j+" ";
        }
        console.log(`${i} -> ${concat}`);
    }
    }
}

const obj = new graph(6);
const vertices = ['a', 'b', 'c', 'd', 'e', 'f'];
for(let i=0;i<vertices.length;i++){
    obj.addVertex(vertices[i]);
}

obj.addEdges('a', 'b'); 
obj.addEdges('a', 'd'); 
obj.addEdges('a', 'e'); 
obj.addEdges('b', 'c'); 
obj.addEdges('d', 'e'); 
obj.addEdges('e', 'f'); 
obj.addEdges('e', 'c'); 
obj.addEdges('c', 'f'); 

obj.printGraph();
