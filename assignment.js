//https://github.com/atika-yasmin/assignment.js

//Question-01
function kilometerToMeter(kilometer){
    var meter = kilometer*1000;
    if(kilometer < 0){
        return "This is not valid.";
    }
    else{
        return meter;
    }
}
//console.log(kilometerToMeter(10));

//Question-02
function budgetCalculator(watch, phone, laptop){
    var totalbudget = (watch * 50) + (phone * 100) + (laptop * 500);
    if (watch < 0 || phone < 0 || laptop < 0)
    {
        return "Please enter right amount."
    }
    else
    {
        return totalbudget;
    }
}
//console.log(budgetCalculator(3,5,2));

//Question-03
function hotelCost(days){
    var first10days, second10days, remainingDays;
    var totalCost=0;
    if(days < 0 || days == null){
        return "Days cannot be negative.";
    }
    else{
        if(days <= 10){
            totalCost = days * 100;
        }
        else if(days >10 && days <= 20){
            first10days = 10 * 100;
            remainingDays = days - 10;
            totalCost = first10days + (remainingDays*80);
        }
        else{
            first10days = 10 * 100;
            second10days = 10 * 80;
            remainingDays = days - 20;
            totalCost = first10days + second10days + (remainingDays*50);
        }
    }
    return totalCost;
}
//console.log(hotelCost(23));

//Question-04
function megaFriend(friendsName) {
    var newFriendsName,i;
    var largestName = friendsName[0];
    if(friendsName.length === 0)
    {
        return "Please inter a valid array.";
    }
    else{
        for(i=0; i<friendsName.length; i++){
            newFriendsName = friendsName[i];
            if(typeof newFriendsName != "string"){
                return "Only string is accepted."
            }
            else if(largestName.length < newFriendsName.length){
                largestName = newFriendsName;
            }
        }
    }
    return largestName;
}
//var NameList = ["rozerin", "atika", "arif", "mobasshira", "khusbu", "roshni"];
//console.log(megaFriend(NameList));

