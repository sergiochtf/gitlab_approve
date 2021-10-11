
const timer = setInterval(() => {
  const existBtnApprove = document.getElementsByClassName('js-mr-approvals').length > 0;
  if(existBtnApprove) {
    clearTimeout(timer);
    document.getElementsByClassName('js-mr-approvals')[0].parentElement.parentElement.remove()
  }
}, 150);