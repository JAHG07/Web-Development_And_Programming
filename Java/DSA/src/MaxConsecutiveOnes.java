public class MaxConsecutiveOnes {
    public static void main(String[] args) {
        int[] nums = {1,1,0};
        int count =0;
        int max = 0;
        for(int i=0;i<nums.length;i++){
            if(nums[i] == 1){
                count++;
            }else{
                max = Math.max(max, count);
                count=0;
            }
        }
        max = Math.max(max, count);
        System.out.println(max);
    }
}