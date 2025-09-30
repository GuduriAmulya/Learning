// You are given a directed graph represented by vertices and edges. 
// Your task is to implement Depth-First Search (DFS) traversal from a given starting vertex. 
// The graph is represented using an adjacency list, and you need to traverse the graph starting from a specified vertex using an iterative approach (using a stack).

// Input Format:
// -------------
// Line-1: An integer V, the number of vertices in the graph.
// Line-2: An integer E, the number of edges in the graph.
// Line3 to E: The next E lines each contain two integers source and destination, representing an edge from the source vertex to the destination vertex.
// Line-E+1: The starting vertex S from which DFS traversal should begin.

// Output Format:
// --------------
// Line-1" Print the vertices visited in DFS order starting from the given vertex S.

// Constraints:
// ------------
// *1 ≤ V ≤ 100
// *0 ≤ E ≤ V * (V - 1)
// *0 ≤ source, destination, S < V

// Sample Input-1:
// ----------------
// 5
// 8
// 0 1
// 0 4
// 1 0
// 1 2
// 1 3
// 1 4
// 2 3
// 3 4
// 0

// Sample Output-1:
// ----------------
// 0 1 2 3 4 


import java.util.*;

class Graph {
    int V; // Number of vertices

    // Array of lists for Adjacency List Representation
    List<Integer>[] adj;

    // Constructor
    public Graph(int v) {
        V = v;
        adj = new LinkedList[v];
        for (int i = 0; i < v; i++) {
            adj[i] = new LinkedList<>();
        }
    }

    // Function to add an edge into the graph
    public void addEdge(int v, int w) {
        adj[v].add(w);  // Directed graph
    }
    public void dfsUtil(int v,boolean[] visited){
        Stack<Integer>st=new Stack<Integer>();
        st.push(v);
        visited[v]=true;
        while(!st.isEmpty()){
            int k=st.pop();
            System.out.print(k+" ");
            List<Integer>l=adj[k];
            //System.out.println(l);
            for(int i=l.size()-1;i>=0;i--){
                int u=l.get(i);
                //System.out.println(u);
                if(!visited[u]){
                    st.push(u);
                    visited[u]=true;
                }
            }
        }
        
        
        
    }

    // The function to do DFS traversal starting from vertex `v`
    public void DFS(int v) {
        //WRITE YOUR CODE HERE
        boolean visited[]=new boolean[V];
        dfsUtil(v,visited);
    }
}
class DFS{
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        // Read the number of vertices and edges
        int V = sc.nextInt();
        int E = sc.nextInt();

        // Create a graph instance
        Graph graph = new Graph(V);

        // Read the edges
        for (int i = 0; i < E; i++) {
            int source = sc.nextInt();
            int destination = sc.nextInt();
            graph.addEdge(source, destination);
        }

        // Read the starting vertex for DFS
        int startVertex = sc.nextInt();

        //System.out.println("Depth First Traversal (starting from vertex " + startVertex + "):");
        graph.DFS(startVertex);
    }
}