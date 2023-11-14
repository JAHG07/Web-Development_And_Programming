package Arrays;

public class FindTheNumbersWithEvenNumberOfDigits {
    public static void main(String[] args){
        int[] nums = {12,345,2,6,7896};
        int count = 0;
        for (int x: nums){
            if(Integer.toString(x).length()%2 == 0) count ++;
        }

        int digits = 0, counts = 0;
        for (int i = 0; i < nums.length; i++){
            while (nums[i]!=0){
                nums[i]/=10;
                digits++;
            }
            if (digits%2 == 0){
                counts++;
            }
            digits = 0;
        }
    }
}
