create view latest as
select distinct on (st.bl)
t.date,  t.partly_vac, t.registered, st.bl, st.geom
from
states_at_pgtype as st
left outer join
timeline as t
on
st.bl = t.lander
order by
st.bl, t.date desc