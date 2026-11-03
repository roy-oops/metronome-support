// 邮箱不直接写在网页里，打开时再拼出来，免得被抓取邮箱的程序收走
document.querySelectorAll('a.email').forEach(function (a) {
  var address = a.dataset.u + '@' + a.dataset.d;
  a.href = 'mailto:' + address;
  a.textContent = address;
});
