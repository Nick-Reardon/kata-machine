export default function bubble_sort(arr: number[]): void {
  
  for (let i = 0; i < arr.length; i++) {
    // -- NOTE --
    // minus 1 accounts for the second num being compared
    // minus i accounts for the growing portion at the end that is sorted
    for (let j = 0; j < arr.length - i - 1; j++) {
      
      if (arr[j] > arr[j+1]) {
        const tmp= arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
      }
    }
  }
}