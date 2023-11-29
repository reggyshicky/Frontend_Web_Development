#include <iostream>
int main() {
    // Creates an array containing the values 1 to 20
    int firstArray[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20};

    // Gets the size of the first array
    int arraySize = sizeof(firstArray) / sizeof(firstArray[0]);

    // Creates a second array to store even numbers
    int secondArray[arraySize];
    int secondArraySize = 0;  // Keeps track of the size of the second array

    // Using a for loop to populate the second array with even numbers from the first array
    for (int i = 0; i < arraySize; ++i) {
        if (firstArray[i] % 2 == 0) {
            secondArray[secondArraySize] = firstArray[i];
            ++secondArraySize;
        }
    }

    // Output the contents of the second array
    for (int i = 0; i < secondArraySize; ++i) {
        std::cout << secondArray[i] << " ";
    }

    std::cout << std::endl;

    return 0;
}

