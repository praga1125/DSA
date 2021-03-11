class queue{
    constructor(){
        this.item = [];
    }
 enqueue(values){
    return this.item.push(values);
  }
  dequeue(){
      if(this.isEmpty())
       return "underflow";
        return this.item.shift();     
 }
  isEmpty(){ 
    if(this.item.length == 0){
        return true;
    }
}
}

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
    bfs(startingNode){  
        let visited = {};
        let result = [];
        let q = new queue();
        visited[startingNode] =  true;
        q.enqueue(startingNode);
        while(!q.isEmpty()){
            let getElement = q.dequeue();
            result.push(getElement);
            let getList = this.adjList.get(getElement);
            for(let i in getList){
                let neighbour = getList[i];
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    q.enqueue(neighbour);
                }
            }
        }
        console.log(result);
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

console.log("BFS:");
obj.bfs('a');
