package Arrays;

public class RemoveDuplicatesFromSortedArray {
    public static void main(String[] args) {
        int[] nums = {0,0,1,1,1,2,2,3,3,4};
        int k = 0;
        for (int i = 0; i < nums.length; i++) {
            if(i<nums.length-1 && nums[i]==nums[i+1]){
                continue;
            }else {
                nums[k] = nums[i];
                k++;
            }
        }
        for (int x : nums){
            System.out.println(x);
        }
    }
}
