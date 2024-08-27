const sumAll = function(first, second) {
    let result = 0;
    if (typeof first != "number" || typeof second != "number"){
        result = "ERROR";
    } else if (first % 1 != 0 || second % 1 != 0 || first < 0 || second < 0){
        result = "ERROR"
    } else {
        if (second < first){
            for (let i = second;i<first+1;i++){
                result += i
            };
        }else{
            for (let i = first;i<second+1;i++){
                result += i
            };
        };
    };

    return result;
};

// Do not edit below this line
module.exports = sumAll;
