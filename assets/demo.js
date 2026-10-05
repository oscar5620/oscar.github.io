// 教師預先提供：僅顯示本機輸入檢查結果，沒有 fetch、寄信或儲存。
const form = document.querySelector('#contactForm');
document.querySelector('#checkForm')?.addEventListener('click', () => {
  if (form.reportValidity()) {
    document.querySelector('#formStatus').textContent = '欄位檢查通過。這是前端示範，資料沒有寄送或儲存。';
  }
});
form?.addEventListener('submit', event => event.preventDefault());
