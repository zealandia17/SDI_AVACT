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


The original covid 19 vaccination dataset had a total of 66 columns of information provided, many of which were irrelevant for the intended dashboard. It was decided that **NodeRed** would be used to refine the data used in the project. Columns including the type of vaccine received and any vaccination data regarding the second dose of the vaccine were to be removed. The reason for the latter being removed was due to concerns that one person could be counted twice in the table, leading to an inaccurate dashboard. We created two table based on Austrian Covid19 data; _timeline table_ and _latest table_. Timeline table containing all the vaccination record from the first innitial time, therefore we could create a timeline graph from it and a cummulative number of vaccinated people over a time in dashboard




Node-RED
Node-RED is used to automatically receive the daily vaccination data from the Austrian government website into a database, within this browser-based wiring editor, all data that needed could be updated every day. Node-Red allows the user to schedule data injection repetition. Moreover, with JavaScript functions, the data could be clean and manipulate directly, therefore when received in the database, the data is ready for use. 

PostgreSQL
Following the theme of utilising open-source software, when possible, PostgreSQL via PG Admin 4 will be used to create and store the necessary data for the creation of the dashboard. Tables will be created to host both the government covid 19 vaccination data and spatial data relating to Austria’s state boundaries. SQL code will be implemented to create different views of the created tables to show various outlooks of the vaccination program such as a timeline of the vaccinations or just showing the last updated information.

QGIS (adding spatial information)
QGIS as GIS analysis open-source software gives a variety of GIS analysis functions, one of them is spatial data manipulation and management. Since the tabular data will be displayed as a map, spatial information must be added to achieve this goal. To achieve this, QGIS is being used to merge both of them and manage it to have interoperability function and well documented following the standard of OGC data spatial. 

Publishing (GeoServer)
To ensure that the created and formatted vaccination data is accessible, all features will be published as web feature services using GeoServer. Although this stage is not necessary when using Tableau to build a dashboard as the Postgres server can be linked to it directly, it has still been included if a user wishes to follow this methodology with a different dashboard builder. 

Metadata
Since the dashboard created will monitor the entire course of the vaccination program, metadata is essential to catalogue the information used in this project and categorize it so it can be searched and accessed by users in the future. The metadata records will be recorded and stored on GeoNetwork via the ZGIS student portal.




Dashboard
To disperse the daily vaccination information to the public and government, an interactive dashboard is one of the solutions. From the dashboard, users could get the recent cumulative progress of Austria’s vaccination program, furthermore, detailed information particularly in age groups from each state is provided as well. There is plenty dashboard provider, Tableau as one of statistical analysis software offers ‘Tableau Public’ as a website for their user publish their analysis through the internet. By this platform, all the necessary data visualization possibly to be shown additionally allows interactive function such map layer data selection by the audience. 

