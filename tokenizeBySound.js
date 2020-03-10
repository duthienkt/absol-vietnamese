export default function tokenizeBySound(text) {
    var res = [];
    var rex = /([^,\s\.]+(((\.|\,)[^,\s\.]+))?)|([\,\.\s]+)/g;
    var matched = rex.exec(text);
    while (matched) {
        if (matched[1])
            res.push({
                text: matched[0],
                type: 'miniword'
            })
        else
            res.push({
                text: matched[0],
                type: 'break'
            })
        matched = rex.exec(text);
    }
    return res;
}