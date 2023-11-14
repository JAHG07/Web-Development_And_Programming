package Arrays;

import java.lang.reflect.Array;

public class SquaresOfSortedArray {
    public static void main(String[] args) {
        int[] nums = {-4,-1,0,3,10};
        int[] res = new int[nums.length];
        int l = 0;
        int r= nums.length -1;
        int i = nums.length -1;
        while(l <= r){
            if(nums[l] * nums[l] > nums[r] * nums[r]){
                res[i] = nums[l] * nums[l];
                l++;
                i--;
            }else {
                res[i] = nums[r] * nums[r];
                r--;
                i--;
            }
        }
        for (int x : res){
            System.out.println(x);
        }
    }
}
