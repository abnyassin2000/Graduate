import React from 'react';

function Benefits() {
  return (
    <section className="section">
      <div className="container">
        <h2 className="title">إزاي بنتعلم في CodeSteps؟</h2>
        <div className="grid">
          <div className="card">
            <h3>📖 شرح بسيط</h3>
            <p>معلومة قصيرة وواضحة تناسب السن</p>
          </div>
          <div className="card">
            <h3>⚡ تطبيق فوري</h3>
            <p>الطالب يطبّق بنفسه بعد كل خطوة</p>
          </div>
          <div className="card">
            <h3>🎯 كويزات ومهام</h3>
            <p>تثبيت المعلومة والتأكد من الفهم</p>
          </div>
          <div className="card">
            <h3>🔄 مراجعة مستمرة</h3>
            <p>الرجوع لأي مستوى في أي وقت</p>
          </div>
        </div>

        <div className="benefits">
          <div className="benefit-item">
            <div className="benefit-icon">🚀</div>
            <div className="benefit-text">ابدأ من الصفر، حتى لو ماعندكش أي خبرة</div>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">⏰</div>
            <div className="benefit-text">تعلم في أي وقت، بدون مواعيد ثابتة</div>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">🎓</div>
            <div className="benefit-text">شهادة إتمام بعد كل مستوى</div>
          </div>
          <div className="benefit-item">
            <div className="benefit-icon">💡</div>
            <div className="benefit-text">تطبيقات عملية ومشاريع حقيقية</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;