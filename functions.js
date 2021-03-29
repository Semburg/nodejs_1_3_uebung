
function mathAround(x, y, str) {
    if (str === "+") {
        return x + y
    } else if (str === "-") {
        return x - y
    } else if (str === "*") {
        return x * y
    } else if(str==="/"){
        if(y===0){
            return "Divided by zero!!"
        }
        return x/y
    } else {
        return "some issue i occured"
    }
}

module.exports = {mathAround}