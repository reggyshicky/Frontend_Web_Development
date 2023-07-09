import turtle as t
import time
t.title = "1st turtle"
t.bgcolor("black") #background colour
t.pensize(5) #pensize allows you to control the thickness of the lines drawns by turtle
t.speed(1)
t.color("blue")

t.begin_fill() #marks the beginning of a shape that you want to fill with a specific color

for i in range(4): #Loop repeats 4 times and draws 4 sides of a square
    t.forward(100) #moves the turtle 100 pixels forward
    t.left(90) #rotates the turtle counterclockwise, by 90 degrees

t.end_fill() #marks end of the shape to be filled by a specific color
time.sleep(20) #introduces a pause/delay in the execution of a programm, in this case for secs
