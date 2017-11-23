from tkinter import *
import os
import csv
import urllib.request

root = Tk(className="Entries")
value = StringVar()  # defines widget as string
sValue = StringVar()
w = Entry(root, textvariable=value)  # adds a text area
u = Label(root, text="URL")  # adds URL label
u.pack()
w.pack()

z = Entry(root, textvariable=sValue)
f = Label(root, text="File Name")
f.pack()
z.pack()


def act():
    print("you entered the URL:")
    print('%s' % value.get())
    print("you entered the File Name:")
    print('%s' % sValue.get())

u = Button(root, text="Enter", command=act)
u.pack()
root.mainloop()

tempUrl = value.get()
temp2 = "&format=csv"
print(tempUrl + temp2)
tempFileName = sValue.get()
with urllib.request.urlopen(tempUrl+temp2) as url:
    data1 = url.read()

print(data1)

filename = "C:/tmp/" + tempFileName + ".csv"
os.makedirs(os.path.dirname(filename), exist_ok=True)
destination = "C:/tmp/" + tempFileName + "OUT.csv"
os.makedirs(os.path.dirname(destination), exist_ok=True)

final = open(filename, 'wb')
final.write(data1)
final.close()

with open(filename, 'r') as infd, open(destination, 'w', newline='') as outfd:
    reader = csv.reader(infd)
    writer = csv.writer(outfd)

    header = next(reader)

    header[0] = 'Program'
    header[1] = 'Sector'
    header[2] = 'Group'
    header[3] = 'Commodity'
    header[7] = 'Category'
    header[9] = 'Data Item'
    header[10] = 'Domain'
    header[11] = 'Domain Category'
    header[12] = 'Geographic Level'
    header[16] = 'State'
    header[18] = 'Ag District'
    header[21] = 'County'
    header[22] = 'Region'
    header[23] = 'Zip Code'
    header[25] = 'Watershed'
    header[30] = 'Year'
    header[31] = 'Period Type'
    header[34] = 'Period'

    print(header)
    writer.writerow(header)

    for row in reader:
        writer.writerow(row)

os.remove(filename)
os.rename(destination, filename)