import tokenizeBySound from "./tokenizeBySound";

function subWord(tokens, i, l) {
    var res = '';
    var token;
    var end = i + l;
    while (i < end) {
        token = tokens[i];
        res += token.type == 'break' ? ' ' : token.text;
        ++i;
    }
    return res;
}


function breakWord(tokens, wordDict) {
    var res = [];
    var lastText;

    var token;
    var cText;
    var i = 0;
    while (i < tokens.length) {
        token = tokens[i];
        if (token.type == 'break') {
            res.push(token);
            ++i;
        }
        else {
            for (var l = Math.min(20, tokens.length - i); l > 0; --l) {
                lastText = subWord(tokens, i, l);
                if (l == 1 || wordDict[lastText] || wordDict[lastText.toLowerCase()]) {
                    res.push({ text: lastText, type: 'word' });
                    i += l;
                    break;
                }
            }
        }
    }
    return res;
}


export default function tokenizeByWord(text, wordDict) {
    if (wordDict instanceof Array) {
        wordDict = wordDict.reduce(function (ac, cr) {
            ac[cr] = true;
            return ac;
        }, {});
    }
    var tokens = tokenizeBySound(text);
    return breakWord(tokens, wordDict);
}