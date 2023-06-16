function chunkStr(str, char) {
    let out = str.match(/.{1,2}/g);
    if (out === null) return [""];
    if (out[out.length - 1].length < 2) out[out.length - 1] = out[out.length - 1] + char;
    return out;
}

function fourSquareEncode(cleartext, keyArr, defChar) {
    return prepArr(cleartext).map(
        ct =>
            chunkStr(ct, defChar)
                .map(x => fourSquareBiGram(x, encode(keyArr))).join(""));
}

function fourSquareDecode(ciphertext, keyArr, defChar) {
    return prepArr(ciphertext).map(
        ct =>
            chunkStr(ct, defChar)
                .map(x => fourSquareBiGram(x, decode(keyArr))).join(""));
}

function encode(squares) {
    return {
        "find1": squares[0],
        "out1": squares[1],
        "out2": squares[2],
        "find2": squares[3],
    };
}

function decode(squares) {
    return {
        "out1": squares[0],
        "find1": squares[1],
        "find2": squares[2],
        "out2": squares[3]
    };
}

function fourSquareBiGram(bigram, squares) {
    let char1 = bigram[0];
    let char2 = bigram[1];
    let loc1 = find(char1, squares.find1);
    let loc2 = find(char2, squares.find2);
    let out1 = squares.out1[loc1.r][loc2.c];
    let out2 = squares.out2[loc2.r][loc1.c];
    return out1 + out2;
}

function find(char, square) {
    for (let r = 0; r < square.length; r++) {
        for (let c = 0; c < square[r].length; c++) {
            if (square[r][c] == char) return { "r": r, "c": c };
        }
    }
    return null;
}

function strip(str) {
    return str.replace(/[^\x41-\x5A]/g, "");
}

function prepArr(userInput) {
    let inStr = String(userInput);
    let upper = inStr.toUpperCase();
    upper.trim();
    let lines = upper.split("\n");
    return lines.filter(l => l.trim().length != 0).map(l => strip(l));
}

function defaultAlphabet(ignoredChar) {
    const az = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return az.replaceAll(ignoredChar.toUpperCase(), "");
}

function createKey(str, ignoredChar) {
    str = String(str).toUpperCase();
    const az = defaultAlphabet(ignoredChar);
    var key = str + az;
    key = key.replaceAll(ignoredChar.toUpperCase(), "");
    key = removeDuplicateLetters(key);
    return key;
}

function removeDuplicateLetters(str) {
    let uniq = "";
    for (let i = 0; i < str.length; i++) {
        if (uniq.includes(str[i]) === false) {
            uniq += str[i]
        }
    }
    return uniq;
}

function multilineKeys(str, ignoredChar) {
    var out = prepArr(str, ignoredChar).map(s => createKey(s, ignoredChar));
    var defAz = defaultAlphabet(ignoredChar);
    for (i = out.length; i < 4; i++) {
        out.push(defAz)
    }
    return out;
}

function key2square(key) {
    if (key.length != 25) return null;
    var square = [[], [], [], [], []];
    square[0] = key.slice(0, 5).split("");
    square[1] = key.slice(5, 10).split("");
    square[2] = key.slice(10, 15).split("");
    square[3] = key.slice(15, 20).split("");
    square[4] = key.slice(20, 25).split("");
    return square;
}