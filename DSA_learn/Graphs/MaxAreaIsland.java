// Jadav Payeng, "The Forest Man of India", 
// started planting the seeds in a M*N grid land.
// Each cell in the grid land is planted with a seed.
// After few days, some seeds grow into saplings indicates with '1',
// and the rest are dead seeds indicates with '0'.

// One or more saplings are connected either horizontally, vertically or diagonally with each other, form a sapling-group. 
// There may be zero more sapling-groups in the grid land.

// Jadav Payeng wants to know the biggest sapling-group in that grid land.

// You are given the M * N grid, filled with 0's and 1's.
// You are task is to help Jadav Payeng to find the number of saplings in 
// the largest sapling-group.

// Input Format:
// -------------
// Line-1: Two integers M and N, the number of rows and columns in the grid-land.
// Next M lines: contains N space-separated integers .

// Output Format:
// --------------
// Print an integer, the number of saplings in the 
// largest sapling-group in the given grid-land.

// Sample Input-1:
// ---------------
// 5 4
// 0 0 1 1
// 0 0 1 0
// 0 1 1 0
// 0 1 0 0
// 1 1 0 0

// Sample Output-1:
// ----------------
// 8


// Sample Input-2:
// ---------------
// 5 5
// 0 1 1 1 1
// 0 0 0 0 1
// 1 1 0 0 0
// 1 1 0 1 1
// 0 0 0 1 0

// Sample Output-2:
// ----------------
// 5



import java.util.*;

class MaxArea_DFS {
    static boolean[][] visited;
    static int[][] matrix;
    public static boolean isSafe(int r,int c,int[][]m){
        if(r>=0 && r<m.length && c>=0 && c<m[0].length && m[r][c]==1){
            return true;
        }
        return false;
    }
    public static int dfs(int[][] m,int r,int c){
        visited[r][c]=true;
        int area=1;
        // go to all directions and check if 1 is present.
        int directions[][]={{1,1},{0,1},{1,0},{-1,-1},{-1,0},{1,-1},{-1,1},{0,-1}};
        for(int []dir:directions){
            if(isSafe(r+dir[0],c+dir[1],m) && !visited[r+dir[0]][c+dir[1]]){
                area+=dfs(m,r+dir[0],c+dir[1]);
            }
        }
        return area;
        
        
    }



    
    public static void solve(int[][] m) 
	{
        //WRITE YOUR CODE HERE
        int maxArea=Integer.MIN_VALUE;
        int rows=m.length;
        int col=m[0].length;
        visited = new boolean[rows][col];
        for(int i=0;i<rows;i++){
            for(int j=0;j<col;j++)
            {
                if(m[i][j]==1){
                    if(!visited[i][j]){
                        maxArea=Math.max(maxArea,dfs(m,i,j));
                    }
                }
            }
        }
        System.out.println(maxArea);
        
	}
}
public class MaxAreaIsland{
    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int m = in.nextInt();
        int n = in.nextInt();
        int[][] board = new int[m][n];
        
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                board[i][j] = in.nextInt();
            }
        }
        MaxArea_DFS madfs = new MaxArea_DFS();
        madfs.solve(board);
    }
}