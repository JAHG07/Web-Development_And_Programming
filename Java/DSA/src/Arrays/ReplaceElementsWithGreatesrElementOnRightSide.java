package Arrays;

public class ReplaceElementsWithGreatesrElementOnRightSide {
    public static void main(String[] args) {
        int[] arr = {17,18,5,4,6,1};
        solution(arr);
    }
    public static int[] solution(int[] arr){
        if (arr.length == 1) arr[0] = -1;
        
        return arr;
    }
}

