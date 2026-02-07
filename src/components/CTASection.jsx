import React from 'react';

function CTA() {
  return (
    <section className="cta">
      <div className="urgency">⏳ العرض محدود لأول 100 مشترك</div>
      
      <h2>أول 6 مستويات مجانية</h2>
      <p>ابدأ التجربة وتأكد بنفسك من مستوى التعليم</p>
      
      <div className="offer-box">
        <h3>🎁 هتحصل على:</h3>
        <ul className="offer-list">
          <li>دخول مجاني لأول 6 مستويات</li>
          <li>مشاريع عملية لكل مستوى</li>
          <li>كويزات تفاعلية للتقييم</li>
          <li>شهادة رقمية للإنجاز</li>
          <li>دعم فني مباشر</li>
        </ul>
        <button className="btn primary">سجل الآن مجانًا</button>
      </div>
    </section>
  );
}

export default CTA;