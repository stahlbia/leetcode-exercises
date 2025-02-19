/**
 * You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
 * Merge nums1 and nums2 into a single array sorted in non-decreasing order.
 * The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    for (let i = 0; i < m+n; i++) {
        if (nums1[i] === 0 && i == 0) {
            nums1[i] = nums2[i]
            continue
        }
        if (nums1[i] === 0) {
            nums1[i] = nums2[i-n]
        } 
    }
    nums1.sort()
};

merge([1,2,3,0,0,0], 3, [2,5,6], 3);