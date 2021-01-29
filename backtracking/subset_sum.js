let arr = [5, 10, 12, 13, 15, 18]


function someAll(arr) {
    return arr.reduce((total, curr) => total + curr ,0)
}

function main(arr) {


    let tmpArr = []

    rec(0)

    function rec(i) {
        // console.log(tmpArr);
        if (someAll(tmpArr) == 30) { console.log("Sucesso, arr:", tmpArr)}
        
        

        while(i < 6){
            console.log(tmpArr);

            // optimize code
            // if (someAll(tmpArr) > 30) break;
            
            tmpArr.push(arr[i])

            rec(i+1)

            tmpArr.pop()
            i++
        }
        

        
    }




}

main(arr)