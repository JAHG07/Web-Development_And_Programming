package Arrays;

public class ValidMountainArray {
    public static void main(String[] args) {
     int[] arr = {0,3,2,1};
     if(arr.length < 3){
         System.out.println("false");
     }
    int i = 0;
    for (; i < arr.length-1; i++) {
        if(arr[i]>arr[i+1]){
            i++;
            break;
        }else if (arr[i] == arr[i+1]){
            System.out.println("false");
        }
    }
    if (i < 2){
        System.out.println("false");
    }
    for (; i < arr.length; i++) {
     if (arr[i-1] <= arr[i]){
         System.out.println("false");
     }
    }
        System.out.println("true");
    }
}
