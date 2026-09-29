/* ASAF site-wide footer + contact modal
   Injects the same footer used on index.html into every page.
   Loaded via <script src="site-footer.js"></script> (adjust the src for
   pages inside subfolders, e.g. page/index.html).                        */
(function () {
  'use strict';

  var FOOTER_HTML = [
    '<footer class="site-footer">',
    '    <div class="footer-arrow">',
    '        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">',
    '            <path d="M7 13l5 5 5-5"/>',
    '        </svg>',
    '    </div>',
    '    <div class="footer-container">',
    '        <div class="footer-main">',
    '            <div class="footer-brand-area">',
    '                <a href="index.html" class="footer-logo-block">',
    '                    <div class="logo-title">DrMudhiwalla</div>',
    '                    <div class="logo-subtitle">HealthTech <span class="pvt-ltd">Pvt Ltd</span></div>',
    '                </a>',
    '                <div class="footer-corporate">',
    '                    <p class="footer-corporate-inline">CIN: U86201DL2025PTC451980</p>',
    '                    <p class="footer-corporate-inline">GST: 07AALCD8789M1ZL</p>',
    '                </div>',
    '            </div>',
    '            <div class="footer-columns">',
    '                <div class="footer-col reveal">',
    '                    <h3 class="footer-heading" onclick="toggleFooterCol(this)">Products<span class="footer-plus">+</span></h3>',
    '                    <ul class="footer-links">',
    '                        <li><a href="index.html">Health Infrastructure</a></li>',
    '                        <li><a href="assessments.html">Health Tools</a></li>',
    '                        <li><a href="health-insights.html">Health Insights</a></li>',
    '                    </ul>',
    '                </div>',
    '                <div class="footer-col reveal">',
    '                    <h3 class="footer-heading" onclick="toggleFooterCol(this)">Industries<span class="footer-plus">+</span></h3>',
    '                    <ul class="footer-links">',
    '                        <li><a href="bank-model.html">Banks</a></li>',
    '                        <li><a href="corporates.html">Corporates &amp; MSMEs</a></li>',
    '                        <li><a href="gym-model.html">Gyms</a></li>',
    '                        <li><a href="community-screening.html">Community Screening</a></li>',
    '                    </ul>',
    '                </div>',
    '                <div class="footer-col reveal">',
    '                    <h3 class="footer-heading" onclick="toggleFooterCol(this)">Health Tools<span class="footer-plus">+</span></h3>',
    '                    <ul class="footer-links">',
    '                        <li><a href="assessments.html">View All Tools</a></li>',
    '                        <li><a href="sleep.html">Sleep Assessment</a></li>',
    '                        <li><a href="stress.html">Stress Assessment</a></li>',
    '                        <li><a href="sedentary.html">Sedentary Assessment</a></li>',
    '                        <li><a href="ghq.html">GHQ-12 Assessment</a></li>',
    '                        <li><a href="bri.html">BRI Calculator</a></li>',
    '                        <li><a href="bp-category.html">BP Category</a></li>',
    '                    </ul>',
    '                </div>',
    '                <div class="footer-col reveal">',
    '                    <h3 class="footer-heading" onclick="toggleFooterCol(this)">About<span class="footer-plus">+</span></h3>',
    '                    <ul class="footer-links">',
    '                        <li><a href="about-founder.html">DrMudhiwalla</a></li>',
    '                        <li><a href="our-approach.html">Our Approach</a></li>',
    '                        <li><a href="corporate-info.html">Corporate Information</a></li>',
    '                        <li><a href="#" onclick="document.getElementById(\'contactModal\').classList.add(\'active\'); return false;">Contact</a></li>',
    '                        <li><a href="careers.html">Careers</a></li>',
    '                        <li><a href="early-backers.html">Early Backers</a></li>',
    '                    </ul>',
    '                </div>',
    '            </div>',
    '        </div>',
    '        <p class="footer-legal"><a href="privacy-policy.html">Privacy Policy</a> &nbsp;|&nbsp; <a href="terms-conditions.html">Terms &amp; Conditions</a> &nbsp;|&nbsp; <a href="medical-disclaimer.html">Medical Disclaimer</a></p>',
    '    </div>',
    '</footer>'
  ].join('\n');

  var MODAL_HTML = [
    '<div class="contact-modal" id="contactModal" style="display:none;">',
    '    <div class="contact-modal-card">',
    '        <button class="contact-modal-close" onclick="document.getElementById(\'contactModal\').classList.remove(\'active\')">&times;</button>',
    '        <h3>Contact Us</h3>',
    '        <p>Reach us on your preferred channel</p>',
    '        <div class="contact-modal-icons">',
    '            <a href="https://wa.me/919707010270" class="contact-modal-icon whatsapp" aria-label="WhatsApp" target="_blank" rel="noopener">',
    '                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
    '            </a>',
    '            <a href="mailto:sanjeet@drmudhiwalla.com" class="contact-modal-icon email" aria-label="Email">',
    '                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
    '            </a>',
    '            <a href="https://www.linkedin.com/company/drmudhiwalla/" class="contact-modal-icon linkedin" aria-label="LinkedIn" target="_blank" rel="noopener">',
    '                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/></svg>',
    '            </a>',
    '        </div>',
    '    </div>',
    '</div>'
  ].join('\n');

  // links inside the footer are relative to the site root; fix them up when
  // this file is loaded from a subfolder such as page/
  var base = (function () {
    var s = document.currentScript;
    var src = (s && s.getAttribute('src')) || 'site-footer.js';
    var m = src.match(/^(.*)site-footer\.js$/);
    return m ? m[1] : '';
  })();

  function inject() {
    if (!document.getElementById('contactModal')) {
      document.body.insertAdjacentHTML('beforeend', MODAL_HTML);
    }

    if (!document.querySelector('footer.site-footer')) {
      document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);
    }

    // The injected footer lands after each page's reveal-on-scroll
    // IntersectionObserver has already run, so anything still carrying
    // .reveal/.zoom would be stuck at opacity:0 and look like a missing
    // footer. Show it straight away.
    document.querySelectorAll('footer.site-footer .reveal, footer.site-footer .zoom')
      .forEach(function (el) { el.classList.add('visible'); });

    if (base) {
      var scope = document.querySelector('footer.site-footer');
      scope.querySelectorAll('a[href]').forEach(function (a) {
        var h = a.getAttribute('href');
        if (h && h !== '#' && !/^(https?:|mailto:|tel:|#)/.test(h) && h.indexOf(base) !== 0) {
          a.setAttribute('href', base + h);
        }
      });
    }

    // make sure the footer is actually reachable: the arrow scrolls to top,
    // and the whole site needs styles.css for .site-footer to look right
    document.querySelectorAll('footer.site-footer a').forEach(function (a) {
      if (a.getAttribute('href') === '#') a.setAttribute('href', '#');
    });
  }

  window.toggleFooterCol = function (heading) {
    if (window.innerWidth > 768) return;
    heading.parentElement.classList.toggle('open');
  };

  // close the modal on Escape or on a click outside the card
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      var m = document.getElementById('contactModal');
      if (m) m.classList.remove('active');
    }
  });
  document.addEventListener('click', function (e) {
    var m = document.getElementById('contactModal');
    if (!m || !m.classList.contains('active')) return;
    if (e.target === m) m.classList.remove('active');
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', inject);
  } else {
    inject();
  }
})();
