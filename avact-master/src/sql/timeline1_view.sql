create view timeline1 as (
SELECT distinct on (date, lander)
date, partly_vac, registered, lander, group_u25, group_25_34, group_35_44, group_45_54, group_55_64, group_65_74, group_75_84, group_a84
FROM
s1078805.covid19_vac
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
