#include <iostream>
#include <string>

int main() {
    std::string students[20][2] = {
        {"John", "85"},
        {"Mary", "90"},
        {"Tom", "88"},
        {"Alice", "92"},
        {"Bob", "78"},
        {"Emily", "89"},
        {"Chris", "95"},
        {"Sara", "87"},
        {"David", "91"},
        {"Sophia", "84"},
        {"Daniel", "88"},
        {"Olivia", "93"},
        {"Michael", "76"},
        {"Emma", "82"},
        {"Matthew", "96"},
        {"Grace", "88"},
        {"Ethan", "89"},
        {"Ava", "90"},
        {"Benjamin", "94"},
        {"Lily", "87"}
    };

    double sum = 0;

    // Calculate the average score
    for (int i = 0; i < 20; ++i) {
        sum += std::stod(students[i][1]);
    }

    double average = sum / 20;

    std::cout << "Average score: " << average << std::endl;

    return 0;
}
