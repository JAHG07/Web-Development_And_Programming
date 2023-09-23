package Sort;

public class InsertionSort {
    public static void main(String[] args){
        int[] sort = {2,9,7,6,4,3,1,5,8};
        for (int i = 0 ; i < 9; i++){
            int min = i;
            for (int j = i+1 ; j < 9 ; j ++) {
                if (sort[j] < sort[min]) min = j;
            }
            if (sort[min] < sort[i]){
              int temp = sort[i];
              sort[i] = sort[min];
              sort[min] = temp;
            }
        }
        for (int k = 0 ; k < 9; k++){
            System.out.println(sort[k]);
        }
    }
}
