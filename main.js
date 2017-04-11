
window.onload = function WindowLoad(event) {
    function load() {
	var savegame = JSON.parse(localStorage.getItem("save"));
	if (typeof savegame.cash !== "undefined") cash = savegame.cash;
	if (typeof savegame.Bank !== "undefined") Bank = savegame.Bank;
	if (typeof savegame.interestNum !== "undefined") interestNum = savegame.interestNum;
	if (typeof savegame.Rate !== "undefined") Rate = savegame.Rate;
	if (typeof savegame.amount !== "undefined") amount = savegame.amount;
	if (typeof savegame.ownedRates !== "undefined") ownedRates = savegame.ownedRates;
	if (typeof savegame.ownedamounts !== "undefined") ownedamounts = savegame.ownedamounts;
};
};
function interest(number){
	interestNum = interestNum + number;
	document.getElementById('interestNum').innerHTML = interestNum;
};
var cps = Bank * amount;
var Bank = 10;
var cash = 0;
var interestNum = 0;
var Rate = 5000;
var amount = 0.10;
var ownedRates = 1;
var ownedamounts = 1;
function buyRate(){
    var RateCost = Math.floor(5000 * Math.pow(2, ownedRates));
    if(cash >= RateCost){
        ownedRates += 1;
        Rate -= 100;
        cash -= RateCost;
        document.getElementById("Rate").innerHTML = Rate;
    };
    var nextRateCost = Math.floor(5000 * Math.pow(2, ownedRates));
    document.getElementById("RateCost").innerHTML = nextRateCost;
};
function buyamount(){
    var amountCost = Math.floor(5000 * Math.pow(2, ownedamounts));
    if(cash >= multiplierCost){
        ownedamounts += 1;
        amount += .05;
        cash -= amountCost;
        document.getElementById("amount").innerHTML = amount;
    };
    var nextamountCost = Math.floor(5000 * Math.pow(2, amountMultipliers));
    document.getElementById("amountCost").innerHTML = nextamountCost;
};
function convert(var1, var2){
	var2=var1;
	var1=var1-var1;
};
setInterval(function(){
	interest(cps);
}, Rate);
function save() {
var save = {
    cash: cash,
    Bank: Bank,
    interestNum: interestNum,
    cps: cps,
    Rate: Rate,
    amount: amount,
    ownedRates: ownedRates,
    ownedamounts: ownedamounts
}
	localStorage.setItem("save",JSON.stringify(save));
};
