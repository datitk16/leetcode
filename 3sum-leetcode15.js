// given an integer array nums, return all the triplet [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

function main() {
    const nums = [-2, 0, 0, 2, 2];
    threeSum(nums)
}

function threeSum(array) {
    array = array.sort((a, b) => a - b)
    let result = [];
    if (array.length < 3) {
        return result;
    }

    for (let i = 0; i < array.length; i++) {
        let left = i + 1;
        let right = array.length - 1;
        if (i > 0 && (array[i - 1] == array[i])) continue;
        while (left < right) {
            let sums = 0 - array[i];
            if (array[left] + array[right] == sums) {
                result.push([array[i], array[left], array[right]]);
                right--;
                while (left < right && array[right + 1] == array[right]) right--;

            }

            if (array[i] + array[left] + array[right] > 0) right--;
            if (array[i] + array[left] + array[right] < 0) left++;
        }
    }
    console.log(result)
    return result;
}
main()