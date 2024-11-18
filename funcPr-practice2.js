// 2. 이름 목록 변환하기
const names = ['alice', 'bob', 'charlie'];

// 모든 이름을 대문자로 변환
const uppercasedNames = names.map(name => name.toUpperCase());
// 출력값 => [ 'ALICE', 'BOB', 'CHARLIE' ]
console.log(uppercasedNames);

// 첫 글자만 대문자로 변환
const capitalStartNames = names.map(
  name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
);
// 출력값 => [ 'Alice', 'Bob', 'Charlie' ]
console.log(capitalStartNames);
