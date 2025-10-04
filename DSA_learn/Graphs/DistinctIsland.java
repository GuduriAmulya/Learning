// Pranav has a puzzle board filled with square boxes in the form of a grid.
// Some cells in the grid may be empty. '0' - indicates empty, '1' - indicates a box. 

// The puzzle board has some patterns formed with boxes in it, 
// the patterns may be repeated. The patterns are formed with boxes (1's) only, 
// that are connected horizontally and vertically but not diagonally.

// Pranav wants to find out the number of unique patterns in the board.

// You are given the board in the form of a grid M*N, filled wth 0's and 1's.
// Your task is to help Pranav to find the number of unique patterns in the puzzle board.

// Input Format:
// -------------
// Line-1: Two integers M and N, the number of rows and columns in the grid-land.
// Next M lines: contains N space-separated characters ['0','1'].

// Output Format:
// --------------
// Print an integer, the number of unique patterns in the puzzle board.


// Sample Input-1:
// ---------------
// 5 5
// 0 1 0 1 1
// 1 1 1 0 1
// 0 1 0 1 0
// 1 0 1 1 1
// 1 1 0 1 0

// Sample Output-1:
// ----------------
// 3

// Explanation-1:
// ------------
// The unique patterns are as follows:
//   1			 1 1		1 
// 1 1 1		   1  	,	1 1
//   1		,	
   
   
// Sample Input-2:
// ---------------
// 6 6
// 1 1 0 0 1 1
// 1 0 1 1 0 1
// 0 1 0 1 0 0
// 1 1 0 0 0 1
// 0 0 1 0 1 1
// 1 1 0 1 0 0

// Sample Output-2:
// ----------------
// 5

// Explanation-2:
// ------------
// The unique patterns are as follows:
// 1 1		1 1		    1			1 1 	1
// 1   	  1         1 1 			


import java.util.*;

class DistinctIslands_DFS {
    static boolean visited[][];
    private static int[][] delta = { {0, 1}, {1, 0}, {0, -1}, {-1, 0} };
    
    public boolean isSafe(int[][] grid,int r,int c){
        if(r>=0 && r<grid.length && c>=0 && c<grid[0].length && !visited[r][c] && grid[r][c]==1){
            return true;
        }
        return false;
    }
    public void dfs(int[][] grid, int r,int c,List<int[]>cells){
        visited[r][c]=true;
        cells.add(new int[]{r,c});
        for(int d[]: delta){
            int newr=d[0]+r;
            int newc=d[1]+c;
            if(isSafe(grid,newr,newc)){
                dfs(grid,newr,newc,cells);
            }
        }
    }
    public String normalise(List<int[]>cells){
        int minR=Integer.MAX_VALUE;
        int minC=Integer.MAX_VALUE;
        for(int[] cell: cells){
            minR=Math.min(minR,cell[0]);
            minC=Math.min(minC,cell[1]);
        }
        List<String>normalized=new ArrayList<>();
        for(int[] cell:cells){
            normalized.add((cell[0]-minR)+":"+(cell[1]-minC));
        }
        Collections.sort(normalized);
        //System.out.println(normalized);
        return String.join(",",normalized);
    }

    public int numDistinctIslands(int[][] grid) {
        //WRITE YOUR CODE HERE
        
        visited=new boolean[grid.length][grid[0].length];
        int row=grid.length;
        int col=grid[0].length;
        Set<String>shapes=new HashSet<>();
        for(int i=0;i<row;i++){
            for(int j=0;j<col;j++){
                if(grid[i][j]==1 &&!visited[i][j]){
                    List<int[]>cells=new ArrayList<>();
                    dfs(grid,i,j,cells);
                    //  System.out.print("Island cells: ");
                    //     for (int[] cell : cells){
                    //         System.out.print("(" + cell[0] + "," + cell[1] + ") ");
                    //     }
                    String norm=normalise(cells);
                    System.out.println("Normalized: "+norm);
                    shapes.add(norm);

                }
            }
        }
        return shapes.size();
        
        
    }
}
class DistinctIsland{
	public static void main(String args[] ) {
		Scanner scan = new Scanner(System.in);
		int R=scan.nextInt();
		int C=scan.nextInt();      
		DistinctIslands_DFS di=new DistinctIslands_DFS();
		int[][] field=new int[R][C];
	   for(int i=0; i<R; i++)
	   {
		   for(int j=0; j<C; j++)
		   {
			   field[i][j] = scan.nextInt();
		   }
	   }
	   System.out.println(di.numDistinctIslands(field));
	}
}
