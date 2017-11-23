import htmlPy
import os
import json
import csv
import urllib.request

submissions = []

app = htmlPy.AppGUI(title=u"htmlPy Quickstart", maximized=True)

app.template_path = os.path.abspath(".")
app.static_path = os.path.abspath(".")

app.template = ("index.html", {"username": "htmlPy_user"})

def modifyString(str):
    str = str.upper()
    if ' ' in str:
        str = str.replace(' ', "%20")
    if '&' in str:
        str = str.replace('&', "%26")
    return str

class ClassName(htmlPy.Object):
    # GUI callable functions have to be inside a class.
    # The class should be inherited from htmlPy.Object.

    @htmlPy.Slot()
    def onClickGetData(self):
        # This is the function exposed to GUI events.
        # You can change app HTML from here.
        # Or, you can do pretty much any python from here.
        #
        # NOTE: @htmlPy.Slot decorater needs argument and return data-types.
        # Refer to API documentation.
        return

    @htmlPy.Slot(str, result=str)
    def submitSD(self, json_data):
        form_data = json.loads(json_data)
        tempStr = form_data['name']
        tempStr = modifyString(tempStr)
        temp = "&source_desc=" + tempStr
        submissions.append(temp)
        return

    @htmlPy.Slot(str, result=str)
    def submitSecD(self, json_data):
        form_data = json.loads(json_data)
        tempStr = form_data['name']
        tempStr = modifyString(tempStr)
        temp = "&sector_desc=" + tempStr
        submissions.append(temp)
        return

    @htmlPy.Slot(str, result=str)
    def submitGP(self, json_data):
        form_data = json.loads(json_data)
        tempStr = form_data['name']
        tempStr = modifyString(tempStr)
        temp = "&group_desc=" + tempStr
        submissions.append(temp)
        return

    @htmlPy.Slot(str, result=str)
    def submitComm(self, json_data):
        form_data = json.loads(json_data)
        tempStr = form_data['name']
        tempStr = modifyString(tempStr)
        temp = "&commodity_desc=" + tempStr
        submissions.append(temp)
        return

    @htmlPy.Slot(str, result=str)
    def submitSC(self, json_data):
        form_data = json.loads(json_data)
        tempStr = form_data['name']
        tempStr = modifyString(tempStr)
        temp = "&statisticcat_desc=" + tempStr
        submissions.append(temp)
        return

    @htmlPy.Slot(str, result=str)
    def submitAGL(self, json_data):
        form_data = json.loads(json_data)
        tempStr = form_data['name']
        tempStr = modifyString(tempStr)
        temp = "&agg_level_desc=" + tempStr
        submissions.append(temp)
        return

    @htmlPy.Slot(str, result=str)
    def submitSN(self, json_data):
        form_data = json.loads(json_data)
        tempStr = form_data['name']
        tempStr = modifyString(tempStr)
        temp = "&state_name=" + tempStr
        submissions.append(temp)
        return

    @htmlPy.Slot(str, result=str)
    def submitZIP5(self, json_data):
        form_data = json.loads(json_data)
        tempStr = form_data['name']
        tempStr = modifyString(tempStr)
        temp = "&zip_5=" + tempStr
        submissions.append(temp)
        return

    @htmlPy.Slot(str, result=str)
    def submitRD(self, json_data):
        form_data = json.loads(json_data)
        tempStr = form_data['name']
        tempStr = modifyString(tempStr)
        temp = "&region_desc=" + tempStr
        submissions.append(temp)
        return

    @htmlPy.Slot(str, result=str)
    def submitYLB(self, json_data):
        form_data = json.loads(json_data)
        tempStr = form_data['name']
        tempStr = modifyString(tempStr)
        temp = "&year__LE=" + tempStr
        submissions.append(temp)
        return

    @htmlPy.Slot(str, result=str)
    def submitYGG(self, json_data):
        form_data = json.loads(json_data)
        tempStr = form_data['name']
        tempStr = modifyString(tempStr)
        temp = "&year__GE=" + tempStr
        submissions.append(temp)
        return

    @htmlPy.Slot(str, result=str)
    def submitShortD(self, json_data):
        form_data = json.loads(json_data)
        tempStr = form_data['name']
        tempStr = modifyString(tempStr)
        temp = "&short_desc=" + tempStr
        submissions.append(temp)
        return

    @htmlPy.Slot(str, result=str)
    def submitF(self, json_data):
        form_data = json.loads(json_data)
        tempStr = form_data['name']
        tempStr = modifyString(tempStr)
        temp = "&freq_desc=" + tempStr
        submissions.append(temp)
        return

    @htmlPy.Slot(str, result=str)
    def submitRP(self, json_data):
        form_data = json.loads(json_data)
        tempStr = form_data['name']
        tempStr = modifyString(tempStr)
        temp = "&reference_period_desc=" + tempStr
        submissions.append(temp)
        return

    @htmlPy.Slot(str, result=str)
    def form_function_name(self, json_data):
        # @htmlPy.Slot(arg1_type, arg2_type, ..., result=return_type)
        # This function can be used for GUI forms.
        #
        form_data = json.loads(json_data)
        print(form_data)
        print(submissions)
##        tempUrl = "https://quickstats.nass.usda.gov/api/api_GET/?key=8183ACAB-0CF1-3D71-B848-31A09FABBBC5&source_desc=SURVEY&sector_desc=CROPS&group_desc=FRUIT%20%26%20TREE%20NUTS&commodity_desc=ORANGES&statisticcat_desc=PRICE%20RECEIVED&short_desc=ORANGES%20-%20PRICE%20RECEIVED,%20MEASURED%20IN%20$%20/%20BOX,%20PHD%20EQUIV%20&domain_desc=TOTAL&agg_level_desc=STATE&state_name=FLORIDA&year__LE=2017&year__GE=1970&freq_desc=ANNUAL&reference_period_desc=MARKETING%20YEAR"
        tempUrl = "https://quickstats.nass.usda.gov/api/api_GET/?key=8183ACAB-0CF1-3D71-B848-31A09FABBBC5"
        for item in submissions:
            tempUrl = tempUrl + item
        temp2 = "&format=csv"
        print(tempUrl + temp2)
        tempFileName = form_data['name']
        with urllib.request.urlopen(tempUrl + temp2) as url:
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
        return

    @htmlPy.Slot()
    def javascript_function(self):
        # Any function decorated with @htmlPy.Slot decorater can be called
        # using javascript in GUI
        print("hello world")
        return


## You have to bind the class instance to the AppGUI instance to be
## callable from GUI
app.bind(ClassName())

app.start()

app.html = u"<html></html>"