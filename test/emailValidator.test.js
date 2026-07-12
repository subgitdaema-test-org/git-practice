const { isValidEmail } = require('../src/emailValidator');

const validCases = ['test@example.com', 'user.name+tag@sub.domain.com'];
const invalidCases = ['plainaddress', '@no-local.com', 'missing-at-sign.com'];

validCases.forEach(email => {
    console.assert(isValidEmail(email) === true, `실패: ${email}는 유효해야 함`);
});
invalidCases.forEach(email => {
    console.assert(isValidEmail(email) === false, `실패: ${email}는 막혀야 함`);
});

console.log('모든 테스트 통과!');