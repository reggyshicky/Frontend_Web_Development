def print_kwargs(**kwargs):
    for key, value in kwargs.items():
        print("{} is {}".format(key, value))

print_kwargs(shicky="smart", reggy="beautiful")

def print_args(*args):
    print(args)

print_args("reggy", "shicky", "priscah")

def multiply(*args):
    z = 1
    for num in args:
        z = z * num
    print(z)
multiply(5, 4, 6, 10)

def my_funct(*args, **kwargs):
    print("{} - {}".format(args, kwargs))

a_dict = {"Name": "Best", "age": 89}
my_funct(a_dict)
my_funct(*a_dict)
my_funct(**a_dict)