import java.util.Scanner;


// Input: board =
//[["X","X","X","X"],
//["X","O","O","X"],
//["X","X","O","X"],
//["X","O","X","X"]]

// Output: 
//[["X","X","X","X"],
//["X","X","X","X"],
//["X","X","X","X"],
//["X","O","X","X"]]
class SurroundingRegions {
    public static int[][] directions={{0,1},{0,-1},{-1,0},{1,0}};
    public static void dfs(char [][] board,int i,int j,int r,int c){
        if(i>=0 && i<r && j>=0 && j<c && board[i][j]=='O'){
            board[i][j]='#';
            for(int[] dir:directions){
                dfs(board,i+dir[0],j+dir[1],r,c);
            }
        }
    }
    public static void solve(char[][] board) {
        int r=board.length;
        int c=board[0].length;
// since o's in the boundary cannot be replaced do dfs from border whenever u see o, the connected o's cannot be replaced therefore change them to #. then at last, change all o's to X and all #'s to o'
// first and ;ast col
        for(int i=0;i<r;i++){
            if(board[i][0]=='O'){
                dfs(board,i,0,r,c);
            }
            if(board[i][c-1]=='O'){
                dfs(board,i,c-1,r,c);
            }
        }
        for(int i=0;i<c;i++){
            if(board[0][i]=='O'){// first row
                dfs(board,0,i,r,c);
            }
            if(board[r-1][i]=='O'){//last row;
                dfs(board,r-1,i,r,c);
            }
        }
        for(int i=0;i<r;i++){
            for(int j=0;j<c;j++){
                if(board[i][j]=='O'){
                    board[i][j]='X';
                }
                if(board[i][j]=='#'){
                    board[i][j]='O';
                }
            }
        }

    }
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
		int R=scan.nextInt();
		int C=scan.nextInt();      
		char[][] field=new char[R][C];
	   for(int i=0; i<R; i++)
	   {
		   for(int j=0; j<C; j++)
		   {
			   field[i][j] = scan.next().charAt(0);
		   }
	   }
       solve(field);
       System.out.println("output");
       for(int i=0;i<R;i++){
        for(int j=0;j<C;j++){
            System.out.print(field[i][j]+" ");
        }
        System.out.println();
       }
    }
}