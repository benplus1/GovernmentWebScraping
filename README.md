# GovernmentWebScraping

This repository is a collection of two projects that collect data from different government websites, download, and converts the files to CSV format. 


## Setup

It is recommended that the files be run and accessed using PyCharm or some other IDE. However, files can be easily run using the command line.

Install HTMLPY here: https://github.com/amol-mandhane/htmlPy

Install BeautifulSoup here: https://www.crummy.com/software/BeautifulSoup/


### JSON2CSV

Go to the "JSON2CSV" folder. There are a couple of options here:

GUI.py -> Uses HTMLPY to display and run a GUI that builds and sends a URL Request to the government website. Instead of typing out the input, the input can be selected with the mouse. Also uses the index.html, myjs.js, and mystyle.css files.

JSON2CSV10.py -> Accesses the proper URL using just command line input.

JSON2CSV.py -> Defunct.

As always, run the files using:
```
$ python filename.py
```

### Scraper

Go to the "Scraper" folder. BeautifulSoup.py is the only runnable program.

BeautifulSoup.py -> Analyzes the government website using commandline input to read in the URL. Automates downloading for all files at that specified link.

As always, run the file using:
```
$ python BeautifulSoup.py
```

If there are any errors, make sure Beautiful Soup is installed.

## Credit

Built by Benjamin Yang at Rutgers University, kept under the MIT License.
