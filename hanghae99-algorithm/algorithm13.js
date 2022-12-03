// 첫번째 방법

function solution(a, b) {
    let answer = '';
    //getDay() 메서드는 0 ~ 6 (일 ~ 토) 사이의 숫자를 반환 합니다.
    //반환되는 순서에 맞게 days 배열의 요소 값을 지정해줍니다.     
    const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    
    //getDay()메서드를 사용해서 2016년 a월 b일이 무슨 요일인지 숫자로 반환 값을 받습니다.
    //반환되는 값이 days 배열의 index값으로 사용되기때문에 변수명을 dayIndex라고 선언합니다. 
    const dayIndex = new Date(2016, a-1, b).getDay();
    
    //days[dayIndex]가 2016년 a월 b일의 요일을 뜻하기 때문에 solution의 반환되는 answer     에 값을 할당 시킵니다.
    answer = days[dayIndex];
    
    return answer;
}

// 두번 째 방법

function solution(a,b) {
    
    //date 클래스의 toDateString 메서드를 사용해서 문자열 타입으로 날짜 값을 구한다음에 ex) new Date(2016, 0, 2).toDateString() === 'Sat Jan 02 2016'
    //spilt 메서드를 사용하서 문자열을 분리합니다. 띄어쓰기(' ') 기준으로 분리 
    //split은 조건에따라 분리된 문자들을 각 요소로 가지는 배열을 반환합니다. ex) 'Sat Jan 02 2016'.split(' ') === ['Sat', 'Jan', '02', '2016']
    //반환된 배열에서 필요한 값은 배열의 첫번째 요소입니다. ex) ['Sat', 'Jan', '02', '2016'][0] === 'Sat';
    // 그리고 그 첫번째 요소의 값을 대문자화 시킵니다.  ex) 'Sat'.toUpperCase() == 'SAT';
    
    const answer = new Date(2016, a-1, b).toDateString().split(' ')[0].toUpperCase();
    
    return answer;
}

//2016년

// 문제 설명
// 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수, solution을 완성하세요. 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT
// 입니다. 예를 들어 a=5, b=24라면 5월 24일은 화요일이므로 문자열 "TUE"를 반환하세요.

// 제한 조건
// 2016년은 윤년입니다.
// 2016년 a월 b일은 실제로 있는 날입니다. (13월 26일이나 2월 45일같은 날짜는 주어지지 않습니다)

// 입출력 예
// a	b	result
// 5	24	"TUE"