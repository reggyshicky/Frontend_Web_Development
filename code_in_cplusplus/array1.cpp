#include <iostream>

int main() {
    // Create an array containing the numbers 1 to 10
    int numbers[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    // Get the size of the array
    int arraySize = sizeof(numbers) / sizeof(numbers[0]);

    // Use a while loop to output the contents of the array
    int i = 0;
    while (i < arraySize) {
        std::cout << numbers[i] << " ";
        i++;
    }

    // Output a newline for better formatting
    std::cout << std::endl;

    return 0;
}
