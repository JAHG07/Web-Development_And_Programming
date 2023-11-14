package Arrays;

public class DuplicateZeros {
    public static void main(String[] args) {
        int[] arr = {1,0,2,3,0,4,5,0};
        int i = 0;
        while (i<arr.length){
            if (arr[i] == 0){
                int j = arr.length-1;
                while (j > i){
                    arr[j] = arr[j-1];
                    j--;
                }
                i++;
            }
            i++;
        }
        for (int x:
             arr) {
            System.out.println(x);
        }
    }
}
