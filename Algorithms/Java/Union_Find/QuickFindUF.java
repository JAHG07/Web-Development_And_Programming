public class QuickFindUF {
    final private int[] id;

    public QuickFindUF(int N) {
        id = new int[N];
        for(int i = 0; i < N; i++){
            id[i] = i;
        }
    }
    public boolean connected(int p, int q){
        return id[p] == id[q];
    }

    public void union(int p, int q){
        int pid = id[p];
        int qid = id[q];
        for(int i =0 ; i < id.length ; i++){
            if(id[i] == pid) id[i] = qid;
        }
    }
    public static void main(String[] args){
        QuickFindUF Qf = new QuickFindUF(9);
        Qf.union(1,5);
        System.out.println(Qf.connected(1,3));
    }
}
