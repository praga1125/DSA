function medianOfTwoSortedArray(nums1, nums2){
    if(nums1.length > nums2.length){ 
    return medianOfTwoSortedArray(nums2, nums1);
    }
    let len1 = nums1.length
    let len2 = nums2.length
    let low = 0, high = len1
    while(low <= high) {
        const partition1 = (high + low) >> 1
        const partition2 = ((len1 + len2 + 1) >> 1) - partition1
        
        const max1 = partition1 == 0 ? Number.NEGATIVE_INFINITY : nums1[partition1 - 1]
        const max2 = partition2 == 0 ? Number.NEGATIVE_INFINITY : nums2[partition2 - 1]
        
        const min1 = partition1 == nums1.length ? Number.POSITIVE_INFINITY : nums1[partition1];
        const min2 = partition2 == nums2.length ? Number.POSITIVE_INFINITY : nums2[partition2];
        
        if(max1 <= min2 && max2 <= min1) {
            const lowMax = Math.max(max1, max2);
            if( (len1 + len2) % 2 == 1)
                return lowMax;
            return (lowMax + Math.min(min1, min2)) / 2;
        } else if(max1 < min2) {
            low = partition1 + 1;
        } else 
           high = partition1 - 1;
    }   
}

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [7, 8, 9, 11, 12, 13, 15];
let result = medianOfTwoSortedArray(arr1, arr2);
console.log(`The median of the array is : ${result}`);
