# React and Viet Application

Welcome to my react App that debuts a health tips page. The first page helps introduce the pages and then there are three navigational pages that include health tips, a grocery list, and a way to search for excersizes. The grocery list and the carousel of top health tips utilize a mongo db server : please go to this page to run your own version of that application to get this one working. 

## Overview
this application is a front end web application that connects to  two eternal apis. You can
1 is a api for getting exercises https://api.api-ninjas.com/v1/exercises
the other is a mongodb server that runs on port 3000 the url for the api calls is http://localhost:3000

## Installation

1. Clone the repository to your local machine:

git clone https://github.com/35michaellee/HealthPageFrontEnd.git


2.  Navigate to the project directory:Esparza_michael_HealthPage

3. install all dependenceies : npm install

4.  go to https://api.api-ninjas.com and create you own api key that is needed on excersie form located in the components file. 
5.Run your application with npm run dev


## Usage

Once the server is running, you can access the application in your web browser on location local host http://localhost:5173/

you may navigate to three seperate pages :main , exercises or grocer list 
thier urls are 
http://localhost:5173/GroceryList
where you can search for grocery items already on your list , delete them with a click of your button , add to the list , or reset the list to a standard list 




