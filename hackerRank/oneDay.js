/* function greeting(parameterVariable) {
    console.log('Hello World!')
    console.log(parameterVariable)
}
greeting('Welcome to javaScript 10 Day!') */

function vowelAndConsonant(s) {

    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u') {
            console.log(s[i])
        }

    }

}

vowelAndConsonant('javascriptloops')