#include <iostream>

int main() {
    // Creates an array containing the values 1 to 15
    int firstArray[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15};

    // Gets the size of the array
    int arraySize = sizeof(firstArray) / sizeof(firstArray[0]);

    // Create a second array of the same size
    int secondArray[arraySize];

    // Using a for loop to populate the second array with the squares of the values in the first array
    for (int i = 0; i < arraySize; ++i) {
        secondArray[i] = firstArray[i] * firstArray[i];
    }
    //Outputs the content of the second array
    for (int i = 0; i < arraySize; ++i) {
        std::cout << secondArray[i] << " ";
    }
    std::cout << std::endl;
    return 0;
}
