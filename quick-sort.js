// using quick sort let sort array [3,7,8,5,2,1,9,5,4]
// https://www.techiedelight.com/quicksort/

function main() {
    const a = [9, - 3, 5, 2, 6, 8, -6, 1, 3];

    const n = a.length;

    quicksort(a, 0, n - 1);
    console.log(a);
}

function quicksort(a, start, end) {
    // base condition
    if (start >= end) {
        return;
    }

    // rearrange elements across pivot
    const pivot = partition(a, start, end);

    // recur on subarray containing elements that are less than the pivot
    quicksort(a, start, pivot - 1);

    // recur on subarray containing elements that are more than the pivot
    quicksort(a, pivot + 1, end);
}

function partition(a, start, end) {
    const pivot = a[end];
    let i = start;
    for (let j = start; j < end; j++) {
        if (a[j] < pivot) {
            const temp = a[i];
            a[i] = a[j];
            a[j] = temp;
            i++;
        }
    }
    const temp = a[i];
    a[i] = a[end];
    a[end] = temp;
    return i;
}

main();