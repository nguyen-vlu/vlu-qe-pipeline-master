// auth.regression.test.js
const { login } = require('./auth');

describe('Regression Test - Chức năng Đăng nhập', () => {
  
  test('Trả về false khi sai mật khẩu', () => {
    const result = login('admin', 'wrong_password');
    expect(result).toBe(false);
  });

  test('Trả về false khi sai tên đăng nhập', () => {
    const result = login('wrong_user', '123');
    expect(result).toBe(false);
  });

  test('Ném lỗi khi để trống username', () => {
    expect(() => login('', '123')).toThrow('Username không được để trống');
  });

  test('Ném lỗi khi để trống password', () => {
    expect(() => login('admin', '')).toThrow('Password không được để trống');
  });

  test('Ném lỗi khi mật khẩu chứa ký tự đặc biệt', () => {
    expect(() => login('admin', '123@#$')).toThrow('Mật khẩu không hợp lệ (chứa ký tự đặc biệt)');
  });

  test('Ném lỗi khi đăng nhập vào tài khoản bị khóa', () => {
    expect(() => login('locked_account', '123')).toThrow('Tài khoản đã bị khóa');
  });

});
