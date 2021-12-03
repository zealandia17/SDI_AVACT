create view timeline as (
SELECT distinct on (date, lander)
date, partly_vac, registered, lander
FROM
s1078795.covid19_vac
where 
(lander = 'Burgenland'
or
lander = 'Kärnten'
or
lander = 'Niederösterreich'
or
lander = 'Oberösterreich'
or
lander = 'Salzburg'
or
lander = 'Steiermark'
or
lander = 'Tirol'
or
lander = 'Vorarlberg'
or
lander = 'Wien'))