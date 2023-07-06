/*c50 manual pages is the best*/
#include <stdio.h>

int main(void)
{
    const int n = 10; /*a variable that holds the value of i and j since its a square, easier to just change n at once*/
       /* for the const, you cant change the n value elsewhere, as it will result to an error*/
    int i;
    int j;
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n; j++)
        {
            printf("#");
        }
        printf("\n");
    }
    
}