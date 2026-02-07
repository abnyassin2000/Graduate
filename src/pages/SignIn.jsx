import React, { useState } from 'react';
import '../styles/signin.css'; // CSS منفصل لصفحة تسجيل الدخول (من styles)

function SignIn() {
  const [rightPanelActive, setRightPanelActive] = useState(false); // حالة للتحكم في التحريك

  const handleRegisterClick = () => {
    setRightPanelActive(true); // تفعيل اللوحة اليمنى (التسجيل)
  };

  const handleLoginClick = () => {
    setRightPanelActive(false); // إلغاء تفعيل اللوحة اليمنى (الدخول)
  };

  return (
    <div className={`container ${rightPanelActive ? 'right-panel-active' : ''}`} id="container">
      {/* Register */}
      <div className="form-container register-container">
        <form>
          <h1>إنشاء حساب</h1>
          <input type="text" placeholder="الاسم" />
          <input type="email" placeholder="البريد الإلكتروني" />
          <input type="password" placeholder="كلمة المرور" />
          <button>تسجيل</button>
        </form>
      </div>

      {/* Login */}
      <div className="form-container login-container">
        <form>
          <h1>تسجيل الدخول</h1>
          <input type="email" placeholder="البريد الإلكتروني" />
          <input type="password" placeholder="كلمة المرور" />
          <button>دخول</button>
        </form>
      </div>

      {/* Overlay */}
      <div className="overlay-container">
        <div className="overlay">
          <div className="overlay-panel overlay-left">
            <h1>معاك حساب؟</h1>
            <p>سجّل دخولك من هنا</p>
            <button className="ghost" id="login" onClick={handleLoginClick}>تسجيل الدخول</button>
          </div>

          <div className="overlay-panel overlay-right">
            <h1>أول مرة هنا؟</h1>
            <p>أنشئ حسابك الآن</p>
            <button className="ghost" id="register" onClick={handleRegisterClick}>إنشاء حساب</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;