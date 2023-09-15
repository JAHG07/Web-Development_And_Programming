public class QuickUnionUF {
    final private int[] id;
    public QuickUnionUF(int N) {
        id = new int[N];
        for(int i = 0 ; i < N ; i++){
            id[i] = i;
        }
    }
    private int root(int i){
        while(i != id[i]) i = id[i];
        return i;
    }
    public boolean connected(int p, int q){
        return root(p) == root(q);
    }
    public void union(int p, int q){
        int i = root(p);
        int j = root(q);
        id[i] = j;
    }
    public static void main(String[] args){
        QuickFindUF QUF = new QuickFindUF(10);
        QUF.union(5,2);
        QUF.union(3,1);
        QUF.union(8,1);
        QUF.union(9,8);
        System.out.println(QUF.connected(5 ,2));
        System.out.println(QUF.connected(9 ,1));
    }
}
