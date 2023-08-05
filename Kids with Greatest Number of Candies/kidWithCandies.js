var kidsWithCandies = function(candies, extraCandies) { // declare funtion named kidsWithCandies that take two paramter candies and extraCandies. 
    const max = Math.max(... candies); // calculate Max number of candies amoung the kids. (...) is used to spread the elments of the candies. 
    const result = []; // this is where the boolean will be stored
    for (let i=0; i< candies.length; i++){ // loops through each arry starting at index 0. Loop will continue as long as i is less then the length oc candies. 
        if (candies[i]+extraCandies >= max){ // if candies and extra candies is more then Max push true. Example: if kid 1 have 2 candies and given 3 more they will have more then the rest in the group.
            result.push (true);
        }
        else{
            result.push(false);
        }
    }
    return result;
};