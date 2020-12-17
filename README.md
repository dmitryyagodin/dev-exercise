https://github.com/solita/dev-academy-2021

Your task is to implement a name application. The application should have an user interface. The user interface can be either a web application or an api. (It can even contain both if you have enough time and enthusiasm.)

The user interface should provide at least the first one of the following requirements, but again, you’re allowed to implement them all.

1. List names and amounts, order by amount, most popular first.
2. List names in alphabetical order.
3. Return the total amount of all the names.
4. Return the amount of the name given as a parameter.

The data for the application is stored in a json file (names.json). The material contains the top-10 of both male and female names in Solita. You can use the json file directly as your data source or you can store the data in a database if you wish.

Technologies which are used in the projects in Solita are, for example, Java, Kotlin, Clojure, TypeScript, C#, React, Angular, Vue.js, and Node.js. You can choose some of those or use your favorite technologies.

GitHub is a good choice for version control. You can attach the repository link to your dev academy application.

Be prepared to present your implementation of the name application in the possible interview. We would like to see how the application works and discuss together the technology choices you’ve made.


Progress log

14.12.2020

1.1 Started the project
1.2 Marked up the main elements
1.3 Introduced responsive elements (flex)
1.4 Searched for apropriate solutions and found this tutorial by Dylan Israel useful (see: https://youtu.be/ri5Nqe_IK50)

## 15.12.2020

2.1 Added data load to the table.
2.2. Added sorting by count by clicking on the column head
2.3 Added sorting by name by clicking on the column head
2.4 Added 2.1 and 2.2 functionality to an optional dropdown box (removed in 3.2)
2.5 Added CSS styling to the table (temporary)
2.6 Added the sorting icons (asc/desc) to the column heads
2.7 Added the search icon to the search button (removed in 3.2)
2.8 Added the table footer element and placed the total results row there
2.9 Created scripts folder and have placed the script part there as a separate file
2.10 Added the project to the github pages

## 16.12.2020
3.1 Added filterName function to filter table rows based on the input
3.2 Removed the search button and the dropdown box as redundant
3.3 Added radio buttons to switch from a default table view to a bar chart view
3.4 Placed all tools into a fieldset
3.5 Added "back to the top" element
3.6.1 Applied new fonts, shadow styling to the main elements, table borders off
3.6.2 Removed the legend element from the fieldset
3.7 - fix or move filter input that matches substrings => made case sensitive filtering
3.7.1 resized filter input to match the size of the rows

## 17.12.2020
4.1 Got rid of the radio buttons - excessive gold plating
4.2 Removed display flex - not neccessary for one table view
4.3 Added footer
4.4 Removed back-to-top arrow navigation as redundant for a short page
4.5 Reformatted script.js
4.6.1 Added up- and down-pointing triangles to define sorting states
4.6.2 Got rid of the external icons that were used to display sorting states

Backlog
- format README.md
- keep the filtered rows for sorting functions
- add input validation (only characters?)
