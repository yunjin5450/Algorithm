function solution(common) {
    // 제한사항을 보면 common의 길이는 무조건 3이상이다.
    // 또한 등차, 등비가 아닌 경우가 없으므로
    // 인덱스 2번 1번의 차가 인덱스 1번 0번의 차와 같으면 등차수열
    // 다르면 등비수열이다.
    if (common[2] - common[1] === common[1] - common[0]) {
      // 즉, 등차는 마지막 값에 등차 값을 더해주고
      return common.pop() + common[1] - common[0];
    } else {
      // 등비는 마지막 값에 나눠서 구한 등비를 곱해주면 된다.
      // 나누셈에 ()를 친 이유는 계산 순서 때문이다.
      return common.pop() * (common[1] / common[0]);
    }
  }
  
  console.log(solution([1, 2, 3, 4])); // 5
  console.log(solution([2, 4, 8])); // 16 


// 다음에 올 숫자

// 문제 설명
// 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

// 제한사항
// 2 < common의 길이 < 1,000
// -1,000 < common의 원소 < 2,000
// 등차수열 혹은 등비수열이 아닌 경우는 없습니다.
// 공비가 0인 경우는 없습니다.

// 입출력 예

// common	          result
// [1, 2, 3, 4]	    5
// [2, 4, 8]	        16

// 입출력 예 설명

// 입출력 예 #1
// [1, 2, 3, 4]는 공차가 1인 등차수열이므로 다음에 올 수는 5이다.

// 입출력 예 #2
// [2, 4, 8]은 공비가 2인 등비수열이므로 다음에 올 수는 16이다.