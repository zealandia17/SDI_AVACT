var date = msg.payload.date;
var state_id = msg.payload.stateid;
var registered = msg.payload.regist;
var partly_vac = msg.payload.partly_vac;
var lander = msg.payload.state;

var pop = 0;
if (msg.payload.population !== undefined){
    pop = msg.payload.population;
    }


var group_U25_m = msg.payload.group_u25_m1;
var group_U25_w = msg.payload.group_u25_w1;
var group_U25_d = msg.payload.group_u25_d1;
var group_25_34_m = msg.payload.group_25_34_m1;
var group_25_34_w = msg.payload.group_25_34_w1;
var group_25_34_d = msg.payload.group25_34_d1;
var group_35_44_m = msg.payload.group35_44_m1;
var group_35_44_w = msg.payload.group35_44_w1;
var group_35_44_d = msg.payload.group35_44_d1;
var group_45_54_m = msg.payload.group45_54_m1;
var group_45_54_w = msg.payload.group45_54_w1;
var group_45_54_d = msg.payload.group45_54_d1;
var group_55_64_m = msg.payload.group55_64_m1;
var group_55_64_w = msg.payload.group55_64_w1;
var group_55_64_d = msg.payload.group55_64_d1;
var group_65_74_m = msg.payload.group65_74_m1;
var group_65_74_w = msg.payload.group65_74_w1;
var group_65_74_d = msg.payload.group65_74_d1;
var group_75_84_m = msg.payload.group75_84_m1;
var group_75_84_w = msg.payload.group75_84_w1;
var group_75_84_d = msg.payload.group75_84_d1;
var group_a84_m = msg.payload.groupo84_m1;
var group_a84_w = msg.payload.groupo84_w1;
var group_a84_d = msg.payload.groupo84_d1;

var vac_pfizer = msg.payload.pfizer1;
var vac_moderna = msg.payload.moderna1;
var vac_astraz = msg.payload.astrazeneca1;

var group_u25 =  group_U25_m + group_U25_w + group_U25_d;
var group_25_34 = group_25_34_m + group_25_34_w + group_35_44_d;
var group_35_44 = group_35_44_m + group_35_44_m + group_35_44_d;
var group_45_54 = group_45_54_m + group_45_54_w + group_45_54_d;
var group_55_64 = group_55_64_m + group_55_64_w + group_55_64_d;
var group_65_74 = group_65_74_m + group_65_74_w + group_65_74_d;
var group_75_84 = group_75_84_m + group_75_84_w + group_75_84_d;
var group_a84 = group_a84_m + group_a84_w + group_a84_d;


var insertStatement = "";

var deleteStatement = "delete from s1078805.covid19_vac";
var updateMviewStatement = "";

if (lander !== "KeineZuordnung"){


insertStatement += "INSERT INTO s1078805.covid19_vac (state_id, date, registered, partly_vac, lander, pop, group_u25, group_25_34, group_35_44, group_45_54, group_55_64, group_65_74, group_75_84, group_a84, vac_moderna, vac_pfizer, vac_astraz) VALUES ('" +state_id+ "','" +date+ "','" +registered+ "','" +partly_vac+ "','" +lander+ "','" +pop+ "','" +group_u25+ "','" +group_25_34+ "','" +group_35_44+ "','" +group_45_54+ "','" +group_55_64+ "','" +group_65_74+ "','" +group_75_84+ "','" +group_a84+ "','" +vac_moderna+ "','" +vac_pfizer+ "','" +vac_astraz+ "')";



msg.payload = insertStatement;
return msg;}
