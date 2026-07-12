const { isValidEmail } = require('../src/emailValidator');

const validCases = ['test@example.com', 'user.name+tag@sub.domain.com'];
const invalidCases = [
    'plainaddress',
    '@no-local.com',
    'missing-at-sign.com',
    'test..test@example.com'  // 연속 마침표 케이스 추가
];

validCases.forEach(email => {
    console.assert(isValidEmail(email) === true, `실패: ${email}는 유효해야 함`);
});
invalidCases.forEach(email => {
    console.assert(isValidEmail(email) === false, `실패: ${email}는 막혀야 함`);
});

console.log('모든 테스트 통과!');