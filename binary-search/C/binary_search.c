#include <stdio.h>
#include <math.h>

int binary_search(int needle, int *haystack, int haystack_length) {
    int high = haystack_length - 1;
    int mid = 0;
    int low = 0;

    while(low <= high) {
        int guess;
        mid = floor((low + high) / 2);
        guess = haystack[mid];
        if(guess == needle) {
            return guess;
        }else if(guess < needle) {
            low = mid + 1;
        } else if(guess > needle) {
            high = mid - 1;
        }
    }
    return -1;
}

int main() {
    int haystack[] = {1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30};
    int res;
    int haystack_length = sizeof(haystack) / sizeof(int);
    printf("Length %d elements\n", haystack_length);
    res = binary_search(24, haystack, haystack_length);
    printf("Result is %d", res);
    return 0;
}