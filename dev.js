import CommonWords from "./CommonWords";
import UncommonWords from "./UncommonWords";
import RareWords from "./RareWords";

var allWordDict = CommonWords.concat(UncommonWords).concat(RareWords).reduce(function (ac, cr) {
    ac[cr] = true;
    return ac;
}, {})

var vietnamese = {
    RareWords: RareWords,
    CommonWords: CommonWords,
    UncommonWords: UncommonWords,
    allWordDict: allWordDict,
    tokenizeByWord: function (text) {
        return tokenizeByWord(text, allWordDict)
    }
}

window.absol = window.absol ||{};
window.absol.vietnamese = vietnamese;