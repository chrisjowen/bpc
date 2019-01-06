var csv = require('csv');
var fs = require('fs');


let csvToJSON = function (file, output, mappingReduceFn, append = false) {
    let writeFile = function (data, output) {
        fs.writeFileSync(output, JSON.stringify(data))
    }

    let appendFile = function(jsonData, output) {
        if(!fs.existsSync(output)) {
           return writeFile(jsonData, output)
        }

        fs.readFile(output, 'utf8', function (err, data){
            let existing = JSON.parse(data)
            writeFile(existing.concat(jsonData), output)
        })
    } 


    fs.readFile(file, 'utf8', function (err, data) {
        csv.parse(data, function (err, data) {
            let jsonData = mappingReduceFn(data)
            return append ? appendFile(jsonData, output) : writeFile(jsonData, output)
        })
    });
}


let data = [
    { data: "./src/data/Balu Mohan-Table 1.csv", domain: "1" },
    { data: "./src/data/Pradeep Namblat-Table 1.csv", domain: "2" },
    { data: "./src/data/Santhosh Mahendiran-Table 1.csv", domain: "3" },
    { data: "./src/data/Sugata Sarkar-Table 1.csv", domain: "4" },
]



let mapReduceFn = function (context) {
    return function (items) {
        return items.filter((item) => item[0] != null || item[0]=="")
            .map((item) => {
                return {
                    name: item[0],
                    psid: item[1],
                    domain: context.domain,
                    tests: [{
                        date: "01/12/2018",
                        type: "ITAM",
                        score: item[2]
                    }],
                    training: []
                }
            })
    }
}

let append = false;
data.forEach((item) => {
    csvToJSON(item.data, "./src/data/testers.json", mapReduceFn(item), append)
    append = true;
})
