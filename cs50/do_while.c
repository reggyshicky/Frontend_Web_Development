#include <stdio.h>
int get_size(void);
void print_grid(int size);
int get_size(void)
{
    int n;
    do
    {
        printf("Please enter the size: ");
        scanf("%d", &n);
    }
    while (n < 0);

    return (n);
}

void print_grid(const int size)
{

    int i, j;
    for (i = 0; i < size; i++)
    {
        for (j = 0; j < size; j++)
        {
            printf("#");
        }
        printf("\n");
    }
}

int main(void)
{
    int size = get_size();
    print_grid(size);
    
    return (0);
}

