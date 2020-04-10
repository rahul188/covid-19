import pandas as pd
import json
import requests
from bs4 import BeautifulSoup

from flask import Flask,jsonify
import random
import json


app = Flask(__name__)
@app.route("/count")
def count():
	page = requests.get("https://www.mygov.in/covid-19/")
	soup = BeautifulSoup(page.content, 'html.parser')
	temp = str(soup.find_all('span', class_='icount'))
	temp = temp.replace('<span class="icount">',"")
	temp = temp.replace("</span>","")
	temp = temp.replace(" ","")
	
	data = temp
	temp = str(soup.find_all('div', class_='info_title'))
	#print(temp["<span>","</span>"])
	first = temp.find("span")
	temp = temp[first:]
	secound = temp.find("<")
	data2 = data[:len(data)-1]+","+temp[5:secound]+"]"
	result = jsonify(data2)
	result.headers.add("Access-Control-Allow-Origin","*")
	return(result)

@app.route("/table")
def table():
	results = pd.read_html('https://www.mohfw.gov.in/')
	result = results[0].dropna(how='all')
	result.dropna(axis='columns', how='all', inplace=True)
	
	result.index = result.index + 1
	result = result.reset_index()
	str1 = result.to_json(orient="records")
	str1 = str(str1)
	result = json.loads(str1.replace("\\",""))
	result = jsonify(result)
	result.headers.add("Access-Control-Allow-Origin","*")
	return result

if __name__=="__main__":
    app.run(host="127.0.0.1",port=80,debug=True)

	
