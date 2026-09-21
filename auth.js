// auth.js
function login(username, password) {
  if (!username) {
    throw new Error("Username không được để trống");
  }
  if (!password) {
    throw new Error("Password không được để trống");
  }

  // Giả lập kiểm tra tài khoản bị khóa
  if (username === "locked_account") {
    throw new Error("Tài khoản đã bị khóa");
  }

  // Giả lập kiểm tra mật khẩu chứa ký tự đặc biệt
  const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
  if (specialChars.test(password)) {
    throw new Error("Mật khẩu không hợp lệ (chứa ký tự đặc biệt)");
  }

  // Đăng nhập đúng
  if (username === "admin" && password === "123") {
    return true;
  }

  // Sai thông tin đăng nhập
  return false;
}

module.exports = { login };
