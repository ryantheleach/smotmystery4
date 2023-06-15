// function addDots(pigpenIn, toAdd) {
//     outPigPen = {};
//     for(const [k,v] of Object.entries(pigpenIn)) {
//         let newKey = String.fromCharCode(k.charCodeAt(0) + 9);
//         outPigPen[newKey] = v.concat(toAdd);
//     }   
//     return outPigPen;
// }

var pigpenA = {
    "a" : [[2,0], [2,1], [2,2], [1,2], [0,2]],
    "b" : [[0,0], [1,0], [2,0], [2,1], [2,2], [1,2], [0,2]],
    "c" : [[0,0], [1,0], [2,0], [2,1], [2,2]],
    "d" : [[0,0], [0,1], [0,2], [1,2], [2,2], [2,1], [2,0]],
    "e" : [[0,0], [0,1], [0,2], [1,2], [2,2], [2,1], [2,0], [1,0]],
    "f" : [[0,2], [0,1], [0,0], [1,0], [2,0], [2,1], [2,2]],
    "g" : [[0,0], [0,1], [0,2], [1,2], [2,2]],
    "h" : [[2,0], [1,0], [0,0], [0,1], [0,2], [1,2], [2,2]],
    "i" : [[2,0], [1,0], [0,0], [0,1], [0,2]],
};

var pigpenS = {
    "s" : [[0,0], [1,1], [2,2], [1,3], [0,4]],
    "t" : [[0,0], [1,1], [2,2], [3,1], [4,0]],
    "u" : [[0,2], [1,1], [2,0], [3,1], [4,2]],
    "v" : [[2,0], [1,1], [0,2], [1,3], [2,4]]
};

var pigPen = {...pigpenA, ...pigpenS};

function generateAnswersStandard(x) {
    return [x, x.split("").reverse().join("")];
}

var rotateStr = (x,n) => x.slice(n) + x.slice(0, n);

function generateAnswersSquare(x) {
    var len = x.length;
    var out = [];
    for(i=0; i<len; i++) {
        out.push(rotateStr(x, i));
    }
    return out.flatMap(generateAnswersStandard);
}

var wordsearch = [
"BEWARETHEACIDRAGES",
"SCOURVENTANXEMPLOY",
"AFURYENGAGEGLOATER",
"SPURGREEDSDOWNFALL",
"BASESTJEALOUSYFIND",
"TENTHOUGHTSOFABOVE",
"ALLTHEMEDINDISGUST",
"TIMEMAKEDEADCHEATS",
"OUSTEDRELICSOULTRA",
"IXPOSTERSOFTHEDEEP",
"RUFFIANSMOSTLYADEP",
"LOSSURRICKETTYSHIP",
"HAVEYOULASTEDOUTOR",
"SENSEDTOXICSEASIXS",
"YEHEARTSERVINGPART",
"THOUREADYTAXEDGOLD",
"FORTHEYAREHEXAPODS",
"ANDROTTENLYVICIOUS"];

wordsearch = wordsearch.map(x=>x.split(""));


var orionWords = [
    {"word":"ANGER", "rc":{"X":8, "Y":2}, "path": [[-1,-1], [1,0], [1,-1], [0,-1]]}, 
    {"word":"ANGER", "rc":{"X":9, "Y":0}, "path": [[1,1], [1,1], [-1,1], [-1,1]]}, 
    {"word":"ANGER", "rc":{"X":9, "Y":1}, "path": [[0,1], [1,1], [-1,1], [-1,1]]}, 
    {"word":"CURSE", "rc":{"X":1, "Y":1}, "path": [[1,1], [1,1], [1,1], [0,-1]]}, 
    {"word":"CURSE", "rc":{"X":1, "Y":1}, "path": [[1,1], [1,1], [1,-1], [0,1]]}, 
    {"word":"CURSE", "rc":{"X":1, "Y":1}, "path": [[1,1], [1,1], [1,-1], [1,-1]]}, 
    {"word":"FURIOUS", "rc":{"X":2, "Y":10}, "path": [[0,-1], [0,-1], [-1,0], [-1,0], [0,1], [0,1]]}, 
    {"word":"LOSER", "rc":{"X":7, "Y":12}, "path": [[1,0], [1,0], [0,1], [0,1]]}, 
    {"word":"LOSER", "rc":{"X":8, "Y":8}, "path": [[1,1], [0,-1], [-1,-1], [1,0]]}, 
    {"word":"LOSER", "rc":{"X":8, "Y":8}, "path": [[1,1], [0,-1], [-1,-1], [0,-1]]}, 
    {"word":"MEDDLER", "rc":{"X":6, "Y":6}, "path": [[0,1], [0,1], [1,0], [1,0], [-1,-1], [1,-1]]}, 
    {"word":"MEDDLER", "rc":{"X":6, "Y":6}, "path": [[0,1], [0,1], [1,0], [1,0], [0,-1], [1,0]]}, 
    {"word":"MEDDLER", "rc":{"X":6, "Y":6}, "path": [[0,1], [0,1], [1,0], [1,0], [0,-1], [0,-1]]}, 
    {"word":"MEDDLER", "rc":{"X":6, "Y":6}, "path": [[1,1], [-1,1], [1,0], [1,0], [0,-1], [1,0]]}, 
    {"word":"MEDDLER", "rc":{"X":6, "Y":6}, "path": [[1,1], [-1,1], [1,0], [1,0], [0,-1], [0,-1]]}, 
    {"word":"REVENGE", "rc":{"X":4, "Y":0}, "path": [[0,1], [1,0], [0,1], [0,1], [1,0], [1,-1]]}, 
    {"word":"REVENGE", "rc":{"X":4, "Y":0}, "path": [[0,1], [1,0], [0,1], [0,1], [1,0], [1,0]]}, 
    {"word":"REVENGE", "rc":{"X":4, "Y":0}, "path": [[0,1], [1,0], [0,1], [1,0], [0,1], [1,-1]]}, 
    {"word":"REVENGE", "rc":{"X":4, "Y":0}, "path": [[0,1], [1,0], [0,1], [1,0], [0,1], [1,0]]}, 
    {"word":"REVENGE", "rc":{"X":4, "Y":0}, "path": [[0,1], [1,0], [1,0], [0,1], [0,1], [-1,-1]]}, 
    {"word":"REVENGE", "rc":{"X":4, "Y":0}, "path": [[0,1], [1,0], [1,0], [0,1], [0,1], [1,-1]]}, 
    {"word":"REVENGE", "rc":{"X":4, "Y":0}, "path": [[0,1], [1,0], [1,0], [0,1], [0,1], [1,0]]}, 
    {"word":"REVENGE", "rc":{"X":4, "Y":1}, "path": [[-1,1], [1,0], [0,1], [0,1], [1,0], [1,-1]]}, 
    {"word":"REVENGE", "rc":{"X":4, "Y":1}, "path": [[-1,1], [1,0], [0,1], [0,1], [1,0], [1,0]]}, 
    {"word":"REVENGE", "rc":{"X":4, "Y":1}, "path": [[-1,1], [1,0], [0,1], [1,0], [0,1], [1,-1]]}, 
    {"word":"REVENGE", "rc":{"X":4, "Y":1}, "path": [[-1,1], [1,0], [0,1], [1,0], [0,1], [1,0]]}, 
    {"word":"REVENGE", "rc":{"X":4, "Y":1}, "path": [[-1,1], [1,0], [1,0], [0,1], [0,1], [-1,-1]]}, 
    {"word":"REVENGE", "rc":{"X":4, "Y":1}, "path": [[-1,1], [1,0], [1,0], [0,1], [0,1], [1,-1]]}, 
    {"word":"REVENGE", "rc":{"X":4, "Y":1}, "path": [[-1,1], [1,0], [1,0], [0,1], [0,1], [1,0]]}, 
    {"word":"REVENGE", "rc":{"X":4, "Y":1}, "path": [[1,1], [-1,0], [0,1], [0,1], [1,0], [1,-1]]}, 
    {"word":"REVENGE", "rc":{"X":4, "Y":1}, "path": [[1,1], [-1,0], [0,1], [0,1], [1,0], [1,0]]}, 
    {"word":"REVENGE", "rc":{"X":4, "Y":1}, "path": [[1,1], [-1,0], [0,1], [1,0], [0,1], [1,-1]]}, 
    {"word":"REVENGE", "rc":{"X":4, "Y":1}, "path": [[1,1], [-1,0], [0,1], [1,0], [0,1], [1,0]]}, 
    {"word":"REVENGE", "rc":{"X":5, "Y":3}, "path": [[-1,0], [-1,0], [0,1], [0,1], [1,0], [1,-1]]}, 
    {"word":"REVENGE", "rc":{"X":5, "Y":3}, "path": [[-1,0], [-1,0], [0,1], [0,1], [1,0], [1,0]]}, 
    {"word":"REVENGE", "rc":{"X":5, "Y":3}, "path": [[-1,0], [-1,0], [0,1], [1,0], [0,1], [1,-1]]}, 
    {"word":"REVENGE", "rc":{"X":5, "Y":3}, "path": [[-1,0], [-1,0], [0,1], [1,0], [0,1], [1,0]]}, 
    {"word":"TORTURE", "rc":{"X":0, "Y":15}, "path": [[1,1], [0,1], [0,1], [-1,0], [0,1], [0,1]]}, 
    {"word":"TORTURE", "rc":{"X":0, "Y":15}, "path": [[1,1], [0,1], [0,1], [-1,0], [0,1], [-1,-1]]}, 
    {"word":"TORTURE", "rc":{"X":0, "Y":15}, "path": [[1,1], [0,1], [0,1], [-1,0], [0,1], [1,1]]}, 
    {"word":"TORTURE", "rc":{"X":3, "Y":16}, "path": [[-1,-1], [1,0], [0,1], [-1,0], [0,1], [0,1]]}, 
    {"word":"TORTURE", "rc":{"X":3, "Y":16}, "path": [[-1,-1], [1,0], [0,1], [-1,0], [0,1], [-1,-1]]}, 
    {"word":"TORTURE", "rc":{"X":3, "Y":16}, "path": [[-1,-1], [1,0], [0,1], [-1,0], [0,1], [1,1]]}, 
    {"word":"TORTURE", "rc":{"X":3, "Y":16}, "path": [[1,1], [0,-1], [-1,0], [-1,0], [0,1], [0,1]]}, 
    {"word":"TORTURE", "rc":{"X":3, "Y":16}, "path": [[1,1], [0,-1], [-1,0], [-1,0], [0,1], [-1,-1]]}, 
    {"word":"TORTURE", "rc":{"X":3, "Y":16}, "path": [[1,1], [0,-1], [-1,0], [-1,0], [0,1], [1,1]]}, 
    {"word":"TORTURE", "rc":{"X":5, "Y":17}, "path": [[0,-1], [0,-1], [-1,0], [-1,0], [0,1], [0,1]]}, 
    {"word":"TORTURE", "rc":{"X":5, "Y":17}, "path": [[0,-1], [0,-1], [-1,0], [-1,0], [0,1], [-1,-1]]}, 
    {"word":"TORTURE", "rc":{"X":5, "Y":17}, "path": [[0,-1], [0,-1], [-1,0], [-1,0], [0,1], [1,1]]}, 
    {"word":"TRAITOR", "rc":{"X":17, "Y":14}, "path": [[0,-1], [0,-1], [-1,0], [-1,0], [0,1], [0,1]]}, 
    {"word":"TRAITORS", "rc":{"X":17, "Y":14}, "path": [[0,-1], [0,-1], [-1,0], [-1,0], [0,1], [0,1], [1,0]]}, 
    {"word":"TRAPPED", "rc":{"X":15, "Y":8}, "path": [[0,1], [0,1], [1,0], [1,0], [-1,-1], [1,-1]]}, 
    {"word":"TRAPPED", "rc":{"X":15, "Y":8}, "path": [[0,1], [0,1], [1,0], [1,0], [0,-1], [0,-1]]}, 
    {"word":"TRAPPED", "rc":{"X":16, "Y":7}, "path": [[1,0], [0,1], [1,0], [1,0], [-1,-1], [1,-1]]}, 
    {"word":"TRAPPED", "rc":{"X":16, "Y":7}, "path": [[1,0], [0,1], [1,0], [1,0], [0,-1], [0,-1]]}, 
    {"word":"VEXED", "rc":{"X":11, "Y":17}, "path": [[-1,0], [0,1], [-1,0], [0,1]]}, 
    {"word":"VEXED", "rc":{"X":11, "Y":17}, "path": [[-1,0], [-1,0], [0,1], [0,1]]}, ];

function findPigPenBounds(){
    var bounds = {};   
     for(const [k, v] of Object.entries(pigPen)) {
        var rMax, cMax, rMin, cMin = 0;
        const r = 0; // indexes in pigpen, row = 0, columns = 1;
        const c = 1;
        rMin = v.reduce((curMin, coOrd) => curMin < coOrd[r] ? curMin : coOrd[r], v[0][r]);
        rMax = v.reduce((curMax, coOrd) => curMax > coOrd[r] ? curMax : coOrd[r], v[0][r]);
        cMin = v.reduce((curMin, coOrd) => curMin < coOrd[c] ? curMin : coOrd[c], v[0][c]);
        cMax = v.reduce((curMax, coOrd) => curMax > coOrd[c] ? curMax : coOrd[c], v[0][c]);

        bounds[k] = [[rMin,cMin], [rMax, cMax]];
     }
     return bounds;
}

function lookup(pigPenShape, wordsearch, r, c) {
    return pigPenShape.map(coords => wordsearch[r + coords[0]][c + coords[1]]).join("");
}

function bruteforce() {
    var bounds = findPigPenBounds();
    // foreach pigpen shape
    var answers = {};
    var sanity = 0;
    var results = {};
    for(const [k,v] of Object.entries(pigPen)) {
        var bounding = bounds[k];
        var section = "";
        results[k] = [];
        for(r = bounding[0][0]; r < wordsearch.length - bounding[1][0]; r++) {
            for(c = bounding[0][1]; c < wordsearch[r].length - bounding[1][1]; c++) {
                // for each top left position of each pigpen shape.
                var word = lookup(v, wordsearch, r, c);
                var alternatives = [];
                if(k=="e") {
                    alternatives = generateAnswersSquare(word);
                } else {
                    alternatives = generateAnswersStandard(word);
                }
                    var line = r + ":" + c + "["+ alternatives.join(", ")+"] \n";
                    section = section + line;
                    results[k].push({"r":r, "c":c, "words":alternatives});
            }
            section = section + "\n"
        }
        answers[k] = section;
    }
    return [answers, results];
}