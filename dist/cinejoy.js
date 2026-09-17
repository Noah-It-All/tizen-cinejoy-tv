/* CineJoy DIAG build (temporary): deliberately inert.
 * Same manifest/keys/launch path as the real module, but the injected script
 * only paints a label and does NOTHING else: no observers, no intervals, no
 * key handling, no focus logic, no network hooks. If the player works under
 * this build, the full bundle conflicts with the player; if it still wedges,
 * the cause is TizenBrew's environment (or the site in it), not our code.
 * Chrome-47-safe ES5 by hand (no build step for this file).
 */
(function () {
  try {
    var host = '';
    try { host = window.location.hostname || ''; } catch (e) {}
    if (host.indexOf('cinejoy') === -1 && host !== 'localhost' && host !== '127.0.0.1') return;
    function add() {
      try {
        if (!document.getElementById('tj-diag') && document.body) {
          var el = document.createElement('div');
          el.id = 'tj-diag';
          el.textContent = 'DIAG build: bundle inert';
          el.setAttribute('style', 'position:fixed;left:12px;bottom:12px;z-index:2147483647;background:#000;color:#95FF50;border:2px solid #95FF50;border-radius:10px;padding:8px 14px;font:16px sans-serif;');
          document.body.appendChild(el);
        }
      } catch (e) {}
    }
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      setTimeout(add, 0);
    } else {
      try { document.addEventListener('DOMContentLoaded', add); } catch (e) {}
    }
    setTimeout(add, 2000);
  } catch (e) {}
})();
