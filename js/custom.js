
//copy按钮
document.querySelectorAll('pre > code').forEach(function (codeBlock) {
  var flag = true;
  if (codeBlock.children[0].className == 'lnt') {
    flag = false;
  }
  var button = document.createElement('button');
  button.className = 'highlight-copy-btn';
  button.type = 'button';
  button.innerText = 'Copy';

  var pre = codeBlock.parentNode;
  if (flag) {
    // if (pre.parentNode.classList.contains('highlight')) {
    // var highlight = pre.parentNode;
    var highlight = pre.parentNode;
    while (highlight.className != 'highlight') {
      highlight = highlight.parentNode;
    }

    highlight.appendChild(button);
  }
});
function addCopyButtons(clipboard) {
  document.querySelectorAll('pre > code').forEach(function (codeBlock) {
    var flag = true;
    if (codeBlock.children[0].className == 'lnt') {
      flag = false;
    }
    var button = document.createElement('button');
    button.className = 'highlight-copy-btn';
    button.type = 'button';
    button.innerText = 'Copy';

    button.addEventListener('click', function () {
      clipboard.writeText(codeBlock.innerText).then(function () {
        /* Chrome doesn't seem to blur automatically,
           leaving the button in a focused state. */
        button.blur();

        button.innerText = 'Copied!';

        setTimeout(function () {
          button.innerText = 'Copy';
        }, 2000);
      }, function (error) {
        button.innerText = 'Error';
      });
    });

    if (flag) {
      var pre = codeBlock.parentNode;
      var highlight = pre.parentNode;
      while (highlight.className != 'highlight') {
        highlight = highlight.parentNode;
      }
      highlight.appendChild(button);
    }
  });
}
if (navigator && navigator.clipboard) {
  addCopyButtons(navigator.clipboard);
} else {
  var script = document.createElement('script');
  script.src = 'https://cdnjs.cloudflare.com/ajax/libs/clipboard-polyfill/2.7.0/clipboard-polyfill.promise.js';
  script.integrity = 'sha256-waClS2re9NUbXRsryKoof+F9qc1gjjIhc2eT7ZbIv94=';
  script.crossOrigin = 'anonymous';
  script.onload = function () {
    addCopyButtons(clipboard);
  };

  document.body.appendChild(script);
}

//copy按钮

/* 站点运行时间 */
function runtime() {
	window.setTimeout("runtime()", 1000);
	/* 请修改这里的起始时间 */
    let startTime = new Date('11/11/2021 15:00:00');
    let endTime = new Date();
    let usedTime = endTime - startTime;
    let days = Math.floor(usedTime / (24 * 3600 * 1000));
    let leavel = usedTime % (24 * 3600 * 1000);
    let hours = Math.floor(leavel / (3600 * 1000));
    let leavel2 = leavel % (3600 * 1000);
    let minutes = Math.floor(leavel2 / (60 * 1000));
    let leavel3 = leavel2 % (60 * 1000);
    let seconds = Math.floor(leavel3 / (1000));
    let runbox = document.getElementById('run-time');
    runbox.innerHTML = '本站已运行⏲<i class="far fa-clock fa-fw"></i> '
        + ((days < 10) ? '0' : '') + days + ' 天 '
        + ((hours < 10) ? '0' : '') + hours + ' 时 '
        + ((minutes < 10) ? '0' : '') + minutes + ' 分 '
        + ((seconds < 10) ? '0' : '') + seconds + ' 秒 ';
}
runtime();

//站点运行时间
