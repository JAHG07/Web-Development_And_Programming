package Arrays;

public class CheckIfNAndItsDoubleExist {
    public static void main(String[] args) {
        int[] arr = {7,1,14,11};
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length; j++) {
                if(j!=i && arr[i] == arr[j]*2) System.out.println("True");
            }
        }
    }
}
