import bubble_sort from "@code/BubbleSort";

test("bubble-sort", function () {
    const arr = [9, 3, 7, 4, 69, 420, 42];

    debugger;
    // bubble_sort(arr);
    // expect(arr).toEqual([3, 4, 7, 9, 42, 69, 420]);

    const arr2 = [9, 7, 4, 69, 420, 42, 3];
    bubble_sort(arr2);
    expect(arr2).toEqual([3, 4, 7, 9, 42, 69, 420]);
});

