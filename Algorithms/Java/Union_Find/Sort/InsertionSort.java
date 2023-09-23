package Sort;

public class InsertionSort {
    public static  void  main(String[] args){
        int[] sort = {2,9,7,6,4,3,1,5,8};
        for (int i = 1 ; i < 9 ; i++){
            int j = i;
            if (sort[i] < sort[i-1]){
                while (j> 0 && sort[j]<sort[j-1]) {
                    int temp = sort[j];
                    sort[j] = sort[j-1];
                    sort[j-1] = temp;
                    j--;
                }
            }
        }
        for (int x: sort) {
            System.out.println(x);
        }
    }
}
