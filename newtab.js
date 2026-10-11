(function () {
  "use strict";

  var forms = Array.prototype.slice.call(document.querySelectorAll("form[data-url]"));
  var KEY = "ego-start:last";
  var current = forms[0] || null;

  function store(key) { try { localStorage.setItem(KEY, key); } catch (e) {} }
  function read() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }

  function run(form) {
    var input = form.querySelector("input");
    if (!input) return;
    var q = input.value.trim();
    if (!q) { input.focus(); return; }
    store(form.dataset.key);
    var extra = form.dataset.extra || "";
    window.location.href = form.dataset.url + encodeURIComponent(q) + extra;
  }

  forms.forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      run(form);
    });
    form.addEventListener("focusin", function () {
      current = form;
      store(form.dataset.key);
    });
  });

  // 记住上次使用的引擎，加载后自动聚焦，打开新标签即可直接输入
  var last = read();
  var preferred = null;
  for (var i = 0; i < forms.length; i++) {
    if (forms[i].dataset.key === last) preferred = forms[i];
  }
  if (preferred) current = preferred;
  if (current) {
    var inp = current.querySelector("input");
    if (inp) setTimeout(function () { inp.focus(); }, 120);
  }

  // "/" 聚焦搜索，Esc 退出
  document.addEventListener("keydown", function (e) {
    var t = e.target;
    var typing = !!t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA" || t.isContentEditable);
    if (e.key === "/" && !typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
      e.preventDefault();
      var target = current || forms[0];
      if (target) { var el = target.querySelector("input"); if (el) el.focus(); }
    } else if (e.key === "Escape" && typing) {
      t.blur();
    }
  });
})();
