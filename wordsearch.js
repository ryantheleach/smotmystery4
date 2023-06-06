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