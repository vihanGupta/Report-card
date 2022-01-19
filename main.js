var English = "";
var Sceince = "";
var History = "";
var Physics = "";
var Chemestry =""; 
var Biology ="";
var Geography =""; 
var PoliticalSceince ="";
var Economics ="";
var HomeSceince ="";
var Arts="";
var EnvironmentSceince ="";
var Sanscrit="";
var Hindi = "";
var French ="";
var Math = "";
var Class = "";
function save()
{
    Name = document.getElementById("Name").value
console.log(Name)

English = document.getElementById("engMarks").value;
Sceince = document.getElementById("SceinceMarks").value;
History = document.getElementById("HistoryMarks").value ;
Physics = document.getElementById("PhysicsMarks").value;
Chemestry = document.getElementById("ChemestryMarks").value;
Biology = document.getElementById("BiologyMarks").value;
Geography = document.getElementById("GeographyMarks").value;
PoliticalSceince = document.getElementById("PoliticalsceinceMarks").value;
Economics = document.getElementById("EconomicsMarks").value;
HomeSceince = document.getElementById("HomeSceinceMarks").value;
Arts = document.getElementById("ArtsMarks").value;
EnvironmentSceince = document.getElementById("EnvironmentsceinceMarks").value;
Sanscrit = document.getElementById("SanscritMarks").value;
Hindi = document.getElementById("HindiMarks").value;
French = document.getElementById("FrenchMarks").value;
Math = document.getElementById("MathMarks").value;
Class = document.getElementById("classes").value;

var Card = [];
Card = [Name , English,Hindi, Math
,Sceince,History,Physics,
Chemestry,Biology,Geography,
PoliticalSceince,Economics,HomeSceince,
Arts,EnvironmentSceince,
Sanscrit,French,Class
];
console.log(Card);
localStorage.setItem(Name,JSON.stringify(Card));
}
function Get()
{
    Nam = document.getElementById("haha").value;
Report = JSON.parse(localStorage.getItem(Nam));
English = Report[1];
Sceince =Report[4];
History = Report[5];
Physics = Report[6];
Chemestry = Report[7];
Biology = Report[8];
Geography = Report[9];
PoliticalSceince = Report[10];
Economics = Report[11];
HomeSceince = Report[12];
Arts = Report[13];
EnvironmentSceince = Report[14];
Sanscrit = Report[15];
Hindi = Report[2];
French =Report[16];
Math = Report[3];
Class = Report[17]
console.log(Report);
document.getElementById("eng").innerHTML = English;
document.getElementById("Sceince").innerHTML = Sceince;
document.getElementById("History").innerHTML = History;
document.getElementById("Physics").innerHTML = Physics;
document.getElementById("Chemestry").innerHTML = Chemestry;
document.getElementById("Biology").innerHTML = Biology;
document.getElementById("Geography").innerHTML = Geography;
document.getElementById("Politicalsceince").innerHTML = PoliticalSceince;
document.getElementById("Economics").innerHTML = Economics;
document.getElementById("HomeSceince").innerHTML = HomeSceince;
document.getElementById("Arts").innerHTML = Arts;
document.getElementById("Environmentsceince").innerHTML = EnvironmentSceince;
document.getElementById("Sanscrit").innerHTML = Sanscrit;
document.getElementById("Hindi").innerHTML = Hindi;
document.getElementById("French").innerHTML = French;
document.getElementById("Math").innerHTML = Math;
document.getElementById("lol").innerHTML = Class;
}