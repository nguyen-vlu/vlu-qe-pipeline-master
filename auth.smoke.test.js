// auth.smoke.test.js
const { login } = require('./auth');

describe('Smoke Test - Chức năng Đăng nhập', () => {
  test('Đăng nhập thành công với tài khoản đúng (admin/123)', () => {
    const result = login('admin', '123');
    expect(result).toBe(true);
  });
});
