function solution(s) {
    let answer = ''
    if(s.length%2 === 0) {
        const firstIndex = s.length/2 - 1
        const secondIndex = s.length/2
        const firstWord = s[firstIndex]
        const secondWord = s[secondIndex]
        answer = firstWord + secondWord
    }else{
        const word = s[(s.length-1)/2]
        answer = word
    }return answer
}
console.log(solution('qwer'))
// console.log(solution('abcde'))
// console.log(solution('32457'))
// console.log(solution('abcdefgfijklmn'))

//가운데 글자 가져오기

// 문제 설명
// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 제한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

// 입출력 예
// s	return
// "abcde"	"c"
// "qwer"	"we"