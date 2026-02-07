import React from 'react';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="trust-badge">
          <div className="dot"></div>
          <span>✨ أكثر من 500 طالب بيتعلموا دلوقتي</span>
        </div>
        
        <h1>تعلم البرمجة خطوة بخطوة</h1>
        <p>
          منصة تعليمية للأطفال من 12 سنة<br />
          بدون فيديوهات – بتعتمد على الفهم، التطبيق، والمراجعة المستمرة
        </p>
        
        <button className="btn primary">ابدأ مجانًا</button>
        
        <div className="social-proof">
          <div className="avatars">
            <div className="avatar">أ</div>
            <div className="avatar">م</div>
            <div className="avatar">ك</div>
            <div className="avatar">ر</div>
            <div className="avatar">+</div>
          </div>
          <div className="social-text">
            انضم لـ <strong>500+ طالب</strong> بدأوا رحلتهم
          </div>
        </div>

        <div className="stats">
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">طالب نشط</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">1,200+</span>
            <span className="stat-label">مشروع منجز</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">95%</span>
            <span className="stat-label">معدل الرضا</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;