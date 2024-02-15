// https://qiita.com/mimoe/items/855c112625d39b066c9a
export function hiraganaToKatakana(str) {
    if (!str) return "no name"
    return str.toString()
    .replace(/[\u3041-\u3096]/g, function (match) {
        var chr = match.charCodeAt(0) + 0x60;
        return String.fromCharCode(chr);
    })
    .replace("・", "")
    // .replace("-", " ")
}

export function checkStringIncludes(str1, str2) {
    // Might need toLocaleLowerCase when localizing
    const Str1 =  hiraganaToKatakana(str1).toLowerCase()
    const Str2 = hiraganaToKatakana(str2).toLowerCase()
    return Str1.includes(Str2)
}