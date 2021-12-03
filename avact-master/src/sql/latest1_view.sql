create view latest1 as
select distinct on (st.bl)
t.date,  t.group_u25, t.group_25_34, t.group_35_44, t.group_45_54, t.group_55_64, t.group_65_74, t.group_75_84, t.group_a84, st.bl, st.shape
from
states_at_pgtype as st
left outer join
timeline1 as t
on
st.bl = t.lander
order by
st.bl, t.date desc
