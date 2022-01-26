# AVACT

dashboard of monitoring Austria covid-19 Vaccination program based on ages group.
Project by Zealandia Sarah Nurul Fatma and Ella Christie,
Student of Copernicus Master in Digital Earth EMJMD Programme 2021
in fulfilling SDI Service Implementation course from Salzburg University under Dr.Manfred Mittlböck and Associated Professor Barbara Hofer. 

## 	Introduction

This project aimed to **utilize spatial data infrastructure (SDI) and Open Data environment to produce an interactive dashboard providing information regarding the covid 19 global pandemic in 2021**. The project focuses on providing information relating to the covid 19 vaccination programme currently underway in Austria regarding vaccination numbers within different age groups. Additionally, allows the audience of the dashboard to understand more about the patterns and trends of people getting vaccinated within various age brackets and how this has altered over a temporal scale. The number of people who have received their first dose of vaccine within Austria will be recorded and analysed. It was the intention to produce an informative dashboard using a spatial data infrastructure to keep the public informed about the progress of the vaccination programme in Austria and possibly encouraging people to get registered.

When designing this project, **the aim was to create an SDI which was as open-source as possible**, with the hope that if a user wished to repeat this project, they would have access to the data and software needed to do so. The design, structure and implementation of this project are depicted in this reposatory, detailing the software and methods used to create the interactive dashboard.

### II.	Methodology

#### Data Collection
It was of utmost importance that the data obtained for this project was accurate, reliable, and up to date. The dataset of covid 19 vaccinations will be obtained directly from the Austrian government website, therefore ensuring its reliability. There are several open-source datasets available via the government relating to coronavirus in Austria; one specifically relating to the vaccination programme will be used to obtain the necessary data to create the dashboard. As the dataset will be written in German and not all data columns will be necessary to the project, it will be formatted in Microsoft Excel.

The data that has been used in this project is _‘timeline-eimpfpass’_ in CSV format, which generally contains the daily number of vaccinations of each state. The daily vaccination number is divided by _age group, gender, and vaccine brand_. During this process, data cleaning is the main task in order to create database that automatically updated. Two datasets were obtained for this project: _ a covid 19 vaccination dataset obtained from the Austrian government website_ and _a spatial dataset providing the state boundaries of Austria_ obtained. For ease of access, the link to the covid 19 vaccination data is provided here available for download: [Covid 19 vaccination dataset](https://www.data.gv.at/katalog/dataset/covid-19-schutzimpfungen-eingetragene-impfungen-im-e-impfpass/resource/4ef9e0c2-f583-4d73-b459-8f897fe586ad) and [Austria state boundaries data set](https://www.data.gv.at/katalog/dataset/bec16f39-2f2f-375a-aa6c-f122d15245d7).

_the original vaccination data from Austrian Government Open Data in CSV format_
<img width="930" alt="timeline-eimpfpass" src="https://user-images.githubusercontent.com/73959689/151168682-bad3084e-4cd7-4afc-a0d8-f2a9e0d11c67.PNG">



The original covid 19 vaccination dataset had a total of 66 columns of information provided, many of which were irrelevant for the intended dashboard. It was decided that **NodeRed** would be used to refine the data used in the project. Columns including the type of vaccine received and any vaccination data regarding the second dose of the vaccine were to be removed. The reason for the latter being removed was due to concerns that one person could be counted twice in the table, leading to an inaccurate dashboard. 


#### Node-RED
Node-RED is used to _automatically receive the daily vaccination data from the Austrian government website into a database_, within this browser-based wiring editor, all data that needed could be updated every day. Node-Red allows the user to schedule data injection repetition. Moreover, with JavaScript functions, the data could be clean and manipulate directly, therefore when received in the database, the data is ready for use. In order to receive input data every day, an automatic data mining system might be built before, through Node-Red this can be achieved by creating a data flow injection in particular time specification, generally, the flow from the source’s HTTP link then must be cleaned up before being injected into database. As we can see before, the vaccination data from the Austrian government is in table format due to data processing easiness purpose, CSV format is chosen. The data cleaning process is performed directly in Node-Red by applying some [JavaScript functions inside the function node](https://github.com/zealandia17/SDI_AVACT/tree/main/avact-master/src/js). Function node is containing the JavaScript functions to get every necessary column’s variable into the database. At this stage, gender columns for each group are merged. Since thevalue for _‘KeineZuordnung’_ which contain no-state data is giving an error, this value must be cleaned before. To make the CSV can be read in PostgreSQL, SQL statement must be included. Through SQL statement, only selected columns and values will be put into table in PostgreSQL database.  In case of data backing up, we provided two locations of the database with each function node. All the necessary columns then stored in PostgreSQL database.

_Node-RED workflow_

![NodeRED workflow](https://user-images.githubusercontent.com/73959689/151171633-c05d6baa-06c2-41c6-a9d0-6b2162f39da3.png)


#### PostgreSQL
Following the theme of utilising open-source software, PostgreSQL via PG Admin 4 is used to create and store the necessary data for the creation of the dashboard. Tables is created to host both t_he government covid 19 vaccination data and spatial data relating to Austria’s state boundaries_. SQL code will be implemented to create different **views** of the created tables to show various outlooks of the vaccination program such as a timeline of the vaccinations or just showing the last updated information. A _covid 19 vaccination table_  was created in pgAdmin4 to host all of the data which was being kept from the original government dataset (previously processed in NodeRed as described above). Each of the new columns was created to match the changed names of the original column headings in German. Each column was assigned a specific data type correlating with the information contained within the column, for example, the date column was given the _‘timestamp with time zone’_ data type as it provides a clear record of the precise moment in which data was recorded. 

_covid19 vaccination table_
![covid19 vaccination table1](https://user-images.githubusercontent.com/73959689/151173783-49ce700b-1991-4aa3-8443-0834105e7c9b.png)



_Creating columns process_
![create column in postgresql](https://user-images.githubusercontent.com/73959689/151173927-5b51d347-05d3-4c49-98fc-5624390f8e8c.png)



Creating different views of the covid 19 vaccination table was a crucial step in being able to depict different kinds of information from the same data. **Two views were created to show both a timeline of the vaccination program and to only show the latest information regarding the number of people who had received their first vaccination**. The **latest view** combined columns from both the _covid 19 vaccination table and the states table containing the geospatial information of Austria’s state boundaries_. The _‘select distinct on’_ function was implemented into the code to only show the figures of people _partly vaccinated and registered per state on the last date the table was updated_. To merge both the spatial and covid 19 data, the [_left join_](https://github.com/zealandia17/SDI_AVACT/blob/main/avact-master/src/sql/latest1_view.sql) using one table, the dashboard will be able to highlight different points of key information.

_latest table in poesgreSQL_
![latest table in postgresql](https://user-images.githubusercontent.com/73959689/151174869-432d353a-2fa4-469a-9961-2c9e30d9af09.png)

The **timeline view** was created to show the _progression of people registered and partly vaccinated from the beginning of the programme in December 2020 to the most recent updated information_. The aim of this was to create a time-lapse that users could view the progression of people being vaccinated from the start of the programme to the most recent update, or view information for specific dates and periods of time e.g. how many people were vaccinated in the first week or month. Similarly to the latest view, the ‘select distinct feature’ was utilised; however, this was due to errors in the government dataset obtained where some records were recorded more than once. To prevent repeat data from being entered into the dashboard leading to inaccurate results, the [_‘select distinct feature’_](https://github.com/zealandia17/SDI_AVACT/blob/main/avact-master/src/sql/timeline1_view.sql) was used to only show the first record of vaccinations for states which had more than one entry for the same date. 


_timeline table in postgreSQL_

![timeline table in postgresql](https://user-images.githubusercontent.com/73959689/151176031-9f2415ba-c8a6-4188-a1ac-d39afc3ad074.png)




#### Publishing in Dashboard (Tableau)

To disperse the daily vaccination information to the public and government, an interactive dashboard is one of the solutions. From the dashboard, users could get the recent cumulative progress of Austria’s vaccination program, furthermore, detailed information particularly in age groups from each state is provided as well. There is plenty dashboard provider, Tableau as one of statistical analysis software offers ‘Tableau Public’ as a website for their user publish their analysis through the internet. By this platform, all the necessary data visualization possibly to be shown additionally allows interactive function such map layer data selection by the audience. 
We created two table based on Austrian Covid19 data; _timeline table_ and _latest table_. _Timeline table_ containing all the vaccination record from the first innitial time, therefore we could create a timeline graph from it and a cummulative number of vaccinated people over a time in dashboard. _Latest table_ intended as input for pop-up for the map as the daily update of vaccination people, in this table only the latest date will be shown. 

_timeline table_

<img width="855" alt="timeline table" src="https://user-images.githubusercontent.com/73959689/151167654-7c236550-5ae8-4a8f-aae3-d3f958a5d97a.PNG">








_latest table_

<img width="511" alt="latest table" src="https://user-images.githubusercontent.com/73959689/151167743-cadd3b2d-cd85-4d40-b5ec-ca8efdbe43e0.PNG">



Tableau is a very straight forward and simple to use dashboard builder with easy connection management between user database and data analysis. Tableau itself provides Tableau Public as a platform to showcase the user data analysis result. There are three main steps to create dashboard in Tableau: _data connection_, _data analysis_, and _dashboard creation_. First _data connection_ step is aimed to securing all the data could be accessed and connected to each others. In this project, connection to PostgreSQL links were created. In this project we mainly use four tables from PostgreSQL; **vaccination timeline, vaccination the latest day, state boundaries, and age group population** . Each table might have a common column which connecting each other, in this case we use **state column** as a **join column**. 

_Data sources connection in Tableau_

![connection tableau](https://user-images.githubusercontent.com/73959689/151184194-05948741-a096-4ebb-97d2-fde089bc4d51.png)


_Data analysis_ process then divided to each data visualization that will be shown in dashboard; _map, bar chart, and line chart_. For map layers, Tableau just launching their new tool _‘Layer Control’_ in late June 2021 which aimed to allows map layer selection. In this project we create **nine layers**, which covered all the age group (eight groups) and one for the cumulative overview. Every map is created using **state boundaries layer joint with such vaccination number column**. Data normalization also was performed for each map by dividing the latest vaccination number for each group with the respected population, instead the cumulative vaccination layer we choose to showing the actual number for each state. **A pop-up window is provided to give the detailed vaccination information such as the selected state, date of data, and the first dose percentage/number. **

_Pop-up window on map_

![pop up map](https://user-images.githubusercontent.com/73959689/151184347-7902ad84-57be-49a8-9f27-9a2f064eec51.png)


A Timeline _cummulative first dose line chart_ was created in order to show how the actual trend of vaccination in Austria, input data for this chart we used the _timeline view_ table from database which querying the _‘partly_vac’_ column as the number of first dose vaccination progress and the date timeline. **Additional date filter also possible to perform**, in case of audience would to know the vaccination development at some particular period of time.


_Timeline of vaccination first dose_

![line chart](https://user-images.githubusercontent.com/73959689/151184685-ef2fe417-7268-45ac-a650-9e1efbb8e983.png)


The last chart is the _First dose vaccination per age group bar chart_ which aimed to show the recent number of vaccinations in particular age group by selecting all age group column for _latest layer_. Following the previous chart, **a filter tool also applied in order to allows audience select particular age group**. 

_Bar chart of each group_
![bar chart](https://user-images.githubusercontent.com/73959689/151184856-27213e64-aa56-4c2a-a972-e35415064260.png)

A dashboard sheet shows how the actual dashboard will be shown. To create it can be done by drag and drop from the previous data analysis sheet layers. Some additional text is added to give the description of the project. In order dashboard could be pulling out to the audience, saving dashboard into Tableau Public was performed as the latest step. Figure 26 shows the final dashboard webpage shows whereas could be accessed through link: [avact](https://public.tableau.com/app/profile/zealandia.sarah/viz/avact/Dashboard1). 


_Dashboard UI_
![dashboard](https://user-images.githubusercontent.com/73959689/151185105-dbc02878-211f-4733-bef5-cccceba4b4d7.png)



![dashboard1](https://user-images.githubusercontent.com/73959689/151185181-85a896e5-7bcb-4bef-826a-54073abc0980.png)

