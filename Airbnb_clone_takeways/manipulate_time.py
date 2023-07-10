#datime module is a python module to manipulate data
from datetime import datetime


date_now = datetime.now() #date_now is an object/instance of the class datetime
print(type(date_now)) #class <class 'datetime.datetime'>
print(date_now)


from datetime import timedelta
date_tomorrow = date_now + timedelta(days=1) #instance of class datetime
print(date_tomorrow)

#strtime(), string format time allows to format datetime object into humn readable str representation
#A% rep full weekdayname, %d rep day of the month, %B rep full month name, %Y rep the year in 4 digts, 
#%H rep the hour in 24-hour format, %M rep the minute, %S rep the second
print(date_now.strftime("%A"))
print(date_now.strftime("%A %d %B %Y at %Y at %H:%M:%S"))
