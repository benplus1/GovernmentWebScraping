from bs4 import BeautifulSoup
import urllib.request
import shutil
import os
#from pymongo import MongoClient

#client = MongoClient('localhost', 27017)
#db = client.test_database
#ids = db.test_collection

def takeExhibit102(tempUrl, tempFileName):
    with urllib.request.urlopen("https://www.sec.gov/" + tempUrl) as data:
        tempPage = data.read()
    tempSoup = BeautifulSoup(tempPage, 'html.parser')
    tempHtml = list(tempSoup.children)[2]
    tempBody = list(tempHtml.children)[3]
    tempSecondSet = tempBody.find_all('table', class_='tableFile', summary='Document Format Files')
    tempActual = tempSecondSet[0].find_all('td', scope='row')
    tempCounter = 0
    ActualSecondSet = []
    for item in tempActual:
        if (item.get_text() == "EX-102"):
            ActualSecondSet.append(tempActual[tempCounter - 1].find_all('a')[0]['href'])
        tempCounter += 1
    filename = "C:/crawlerTEMP/" + tempFileName + ".xml"
    os.makedirs(os.path.dirname(filename), exist_ok=True)
    with urllib.request.urlopen("https://sec.gov" + ActualSecondSet[0]) as response, open(filename, 'wb') as out_file:
        shutil.copyfileobj(response, out_file)
    print(ActualSecondSet)


startUrl = "https://www.sec.gov/cgi-bin/srch-edgar?text=ABS-EE&start=1&count=80&first=2017&last=2017"
with urllib.request.urlopen(startUrl) as url:
    page = url.read()

soup = BeautifulSoup(page, 'html.parser')

html = list(soup.children)[3]
body = list(html.children)[3]

otherPages = body.find_all('center')[1].find_all('a')

allPages = []
allPages.append(startUrl)

counter = 0
for item in otherPages:
    if counter != len(otherPages) - 1:
        allPages.append(otherPages[counter]['href'])
    counter += 1

firstSetTemp = body.find_all('td', align="left", valign="top")

counter = 0
firstSet = []
fileNames = []

for item in firstSetTemp:
    if counter % 4 == 0:
        firstSet.append(firstSetTemp[counter].find_all('a')[0]['href'])
    counter += 1

counter = 0

for item in firstSetTemp:
    if counter % 4 == 0:
        changeString = firstSetTemp[counter + 3].get_text()
        for ch in ['/']:
           if ch in changeString:
               changeString = changeString.replace(ch, ".")
        fileNames.append("EX-102/" + firstSetTemp[counter].find_all('a')[0].get_text() + "/" + changeString + "/" + firstSetTemp[counter + 2].get_text())
    counter += 1

counter = 0
for item in allPages:
    if counter != 0:
        with urllib.request.urlopen("https://sec.gov" + allPages[counter]) as url:
            page = url.read()

        soup = BeautifulSoup(page, 'html.parser')

        html = list(soup.children)[3]
        body = list(html.children)[3]
        firstSetTemp = body.find_all('td', align="left", valign="top")

        counter1 = 0

        for item in firstSetTemp:
            if counter1 % 4 == 0:
                firstSet.append(firstSetTemp[counter1].find_all('a')[0]['href'])
            counter1 += 1

        counter2 = 0

        for item in firstSetTemp:
            if counter2 % 4 == 0:
                changeString = firstSetTemp[counter2 + 3].get_text()
                for ch in ['/']:
                    if ch in changeString:
                        changeString = changeString.replace(ch, ".")
                fileNames.append("EX-102/" + firstSetTemp[counter2].find_all('a')[0].get_text() + "/" + changeString + "/" + firstSetTemp[
                    counter2 + 2].get_text())
            counter2 += 1
    counter += 1

print(fileNames)
counter = 0
for fileName in fileNames:
    #count = ids.find({"id": fileName}).count()
    # count == 0:
        print("starting mongo insert")
        #newPost = {"id": fileName}
        #post_id = ids.insert_one(newPost).inserted_id
        #print (post_id)
        print("successful mongo insert")
        print("starting")
        takeExhibit102(firstSet[counter], fileName)
        print("completed" + fileName)
        counter += 1