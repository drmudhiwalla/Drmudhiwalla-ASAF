(function () {
  'use strict';

  var COLORS = {
    green:  '#16A34A',
    amber:  '#F59E0B',
    red:    '#EF4444',
    blue:   '#2563EB',
    indigo: '#6366F1',
    violet: '#8B5CF6',
    cyan:   '#0891B2',
    teal:   '#0D9488',
    orange: '#EA580C',
    rose:   '#E11D48',
    slate:  '#475569'
  };

  var ICONS = {
    pulse:    '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    scale:    '<path d="M12 5.5a8.5 8.5 0 0 1 8.5 8.5"/>' +
              '<path d="M12 14a8.5 8.5 0 0 0 8.5 8.5"/>' +
              '<path d="M12 14a8.5 8.5 0 0 1-8.5 8.5"/>' +
              '<path d="M12 5.5a8.5 8.5 0 0 0-8.5 8.5"/>' +
              '<line x1="12" y1="1" x2="12" y2="14"/>' +
              '<circle cx="12" cy="4" r="2.2"/>',
    moon:     '<path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/>',
    bed:      '<path d="M2 18v-6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6"/>' +
              '<path d="M2 18h20"/>' +
              '<path d="M6 10V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v3"/>' +
              '<path d="M6 21v-3M18 21v-3"/>',
    clock:    '<circle cx="12" cy="12" r="9"/>' +
              '<polyline points="12 7 12 12 15.5 14"/>',
    brain:    '<path d="M9.5 4.5a2.8 2.8 0 0 0-2.7 2.4A2.8 2.8 0 0 0 4 9.5c0 .6.2 1.1.5 1.6A2.8 2.8 0 0 0 5 18a2.8 2.8 0 0 0 4.5 2 3.2 3.2 0 0 0 5 0 2.8 2.8 0 0 0 4.5-2 2.8 2.8 0 0 0 .5-6.9A2.8 2.8 0 0 0 17 8a2.8 2.8 0 0 0-2.7-3.5c-1 0-1.9.5-2.3 1.3A3 3 0 0 0 9.5 4.5Z"/>' +
              '<path d="M12 8v8M9 10v4M15 10v4"/>',
    users:    '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>' +
              '<circle cx="9" cy="7" r="4"/>' +
              '<path d="M22 21v-2a4 4 0 0 0-3-3.9"/>' +
              '<path d="M16 3.1a4 4 0 0 1 0 7.8"/>',
    medical:  '<path d="M12 5v14M5 12h14"/>',
    ruler:    '<rect x="2" y="10" width="20" height="6" rx="2" transform="rotate(-90 12 13)"/>' +
              '<path d="M5 12l1-1M9 12l1-1M13 12l1-1M17 12l1-1M7 9.5v1M11 9.5v1M15 9.5v1"/>',
    dumbbell: '<path d="M6.5 6.5v11M17.5 6.5v11"/>' +
              '<path d="M3 9.5L6.5 6.5 10 10 14 6 17.5 9.5 21 6v12l-3.5-3.5L14 18l-4-4-3.5 3.5L3 14z"/>',
    person:   '<circle cx="12" cy="5" r="3"/>' +
              '<path d="M5.5 22c0-5 2.9-8 6.5-8s6.5 3 6.5 8"/>',
    heart:    '<path d="M12 21C7 17 3 13.5 3 9.5 3 6.9 5 5 7.5 5c1.8 0 3.2.9 4.5 2.6C13.3 5.9 14.7 5 16.5 5 19 5 21 6.9 21 9.5c0 4-4 7.5-9 11.5Z"/>'
  };

  var CHECK_SVG = '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>';

  function esc(v) {
    return String(v == null ? '' : v).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  function gaugeSVG(frac) {
    var f = Math.max(0, Math.min(1, frac));
    var ang = Math.PI * (1 - f);
    var nx = 120 + (92 - 38) * Math.cos(ang);
    var ny = 120 - (92 - 38) * Math.sin(ang);
    var px = 120 + 92 * Math.cos(ang);
    var py = 120 - 92 * Math.sin(ang);
    px = px.toFixed(1); py = py.toFixed(1); nx = nx.toFixed(1); ny = ny.toFixed(1);
    return ''
      + '<svg width="230" height="140" viewBox="0 0 240 140" aria-hidden="true">'
      + '<defs><linearGradient id="repGrad" x1="0" y1="0" x2="1" y2="0">'
      + '<stop offset="0%" stop-color="' + COLORS.green + '"/>'
      + '<stop offset="45%" stop-color="' + COLORS.amber + '"/>'
      + '<stop offset="100%" stop-color="' + COLORS.red + '"/>'
      + '</linearGradient></defs>'
      + '<path d="M 28 120 A 92 92 0 0 1 212 120" fill="none" stroke="url(#repGrad)" stroke-width="17" stroke-linecap="round"/>'
      + '<circle cx="' + px + '" cy="' + py + '" r="8" fill="#FFFFFF" stroke="#0F172A" stroke-width="3"/>'
      + '<line x1="120" y1="120" x2="' + nx + '" y2="' + ny + '" stroke="#0F172A" stroke-width="5" stroke-linecap="round"/>'
      + '<circle cx="120" cy="120" r="9" fill="#0F172A"/><circle cx="120" cy="120" r="3.5" fill="#FFFFFF"/>'
      + '<text x="28" y="139" font-size="11" font-weight="600" fill="#64748B" letter-spacing="1" text-anchor="middle">LOW</text>'
      + '<text x="212" y="139" font-size="11" font-weight="600" fill="#64748B" letter-spacing="1" text-anchor="middle">HIGH</text>'
      + '</svg>';
  }

  function riskBar(frac) {
    var filled = Math.round(Math.max(0, Math.min(1, frac)) * 5);
    var segs = '';
    for (var i = 0; i < 5; i++) {
      segs += '<span class="report-risk-seg' + (i < filled ? ' filled' : '') + '"></span>';
    }
    return '<div class="report-risk-bar">' + segs + '</div>';
  }

  function card(item) {
    var icon = ICONS[item.icon] || ICONS.pulse;
    var color = item.color && COLORS[item.color] ? COLORS[item.color] : COLORS.blue;
    var tbg = color + '1f';
    var svg = '<svg viewBox="0 0 24 24" fill="none" stroke="' + color + '" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round">' + icon + '</svg>';
    var badge = item.badge ? '<span class="report-badge" style="background:' + (item.badgeColor || color) + '">' + esc(item.badge) + '</span>' : '';
    var val = '<div class="report-item-val">' + esc(item.value) + (item.unit ? '<span>' + esc(item.unit) + '</span>' : '') + '</div>';
    var sub = item.sub ? '<div class="report-item-sub">' + esc(item.sub) + '</div>' : '';
    return '<div class="report-item">'
      + '<div class="report-item-ic" style="background:' + tbg + '">' + svg + '</div>'
      + '<div class="report-item-info">'
      + '<div class="report-item-top"><span class="report-item-name">' + esc(item.name) + '</span>' + badge + '</div>'
      + val + sub
      + '</div></div>';
  }

  function recoList(items) {
    var html = '';
    for (var i = 0; i < items.length; i++) {
      html += '<div class="report-reco-item"><div class="report-reco-ic">' + CHECK_SVG + '</div><p>' + esc(items[i]) + '</p></div>';
    }
    return '<div class="report-reco-grid">' + html + '</div>';
  }

  function catGrid(categories, activeText) {
    var html = '';
    for (var i = 0; i < categories.length; i++) {
      var c = categories[i];
      var col = c.color && COLORS[c.color] ? COLORS[c.color] : COLORS.blue;
      if (c.text === activeText) {
        html += '<div class="report-cat active" style="background:' + col + '">' + esc(c.text) + '</div>';
      } else {
        html += '<div class="report-cat" style="color:' + col + ';border-color:' + col + '">' + esc(c.text) + '</div>';
      }
    }
    return '<div class="report-cats">' + html + '</div>';
  }

  function build(cfg) {
    var date = new Date();
    var dateStr = date.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    var timeStr = date.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
    var chipColor = cfg.chipColor && COLORS[cfg.chipColor] ? COLORS[cfg.chipColor] : COLORS.blue;
    var heroSub = cfg.sub ? '<div class="report-hero-sub">' + esc(cfg.sub) + '</div>' : '';
    var reco = cfg.reco && cfg.reco.length ? recoList(cfg.reco) : '';
    var note = cfg.note ? '<div class="report-note">' + esc(cfg.note) + '</div>' : '';
    var download = cfg.download !== false;

    var html = ''
      + '<div class="report-card">'
      + '<div class="report-head">'
      + '<div><div class="report-brand">DrMudhiwalla <em>HealthTech</em></div>'
      + '<div class="report-brand-tag">Pvt Ltd&nbsp;&nbsp;·&nbsp;&nbsp;Diagnostic &amp; Wellness Screening</div></div>'
      + '<div class="report-head-right"><div class="report-title">Screening Report</div>'
      + '<div class="report-under">' + esc(cfg.report || 'Assessment Report') + '</div>'
      + '<div class="report-head-date">' + dateStr + ' · ' + timeStr + '</div></div>'
      + '</div>'
      + '<div class="report-accent"></div>'
      + '<div class="report-body">'
      + '<div class="report-hero">'
      + '<div><div class="report-hero-kicker">' + esc(cfg.kicker || 'Assessment Report') + '</div>'
      + '<div class="report-hero-name">' + esc(cfg.title) + '</div>'
      + heroSub
      + '</div>'
      + (cfg.chip ? '<span class="report-chip" style="background:' + chipColor + '">' + esc(cfg.chip) + '</span>' : '')
      + '</div>'
      + '<div class="report-overall">'
      + '<div>'
      + '<div class="report-gauge">' + gaugeSVG(cfg.frac) + '</div>'
      + '<div class="report-gauge-score">' + esc(cfg.scoreText) + (cfg.scoreUnit ? '<span>' + esc(cfg.scoreUnit) + '</span>' : '') + '</div>'
      + '<div class="report-gauge-cap">' + esc(cfg.cap || '') + '</div>'
      + '</div>'
      + '</div>'
      + (cfg.categories && cfg.categories.length
          ? '<div class="report-sec"><span class="report-sec-title">Category Overview</span></div>'
            + catGrid(cfg.categories, cfg.chip)
          : '')
      + (reco
          ? '<div class="report-sec"><span class="report-sec-title">Key Recommendations</span></div>'
            + '<div class="report-reco"><div class="report-reco-title">Personalised Plan</div>' + reco + '</div>'
          : '')
      + note
      + (download
          ? '<div class="report-actions">'
            + '<button type="button" class="report-btn report-btn-primary" data-repdl>Download Result</button>'
            + '<button type="button" class="report-btn report-btn-back" data-repclose>Back to Home</button>'
            + '</div>'
          : '')
      + '</div>'
      + '<div class="report-foot">'
      + '<div class="report-disc">This report is generated from the screening questionnaire you completed. '
      + 'It is for general wellness awareness and does not replace a professional medical diagnosis. '
      + 'Please consult a qualified doctor for any health concerns.</div>'
      + '<div class="report-company">'
      + '<strong>DrMudhiwalla HealthTech Pvt Ltd</strong><br/>'
      + '<a style="color:#64748B;text-decoration:none" href="https://www.drmudhiwalla.com">www.drmudhiwalla.com</a> · +91 98765 43210'
      + '</div>'
      + '</div>'
      + '</div>';

    var el = document.getElementById('reportCard');
    if (!el) return;
    el.innerHTML = html;

    var dl = el.querySelector('[data-repdl]');
    if (dl) {
      dl.addEventListener('click', function () {
        var title = (cfg.pdf && cfg.pdf.title) || cfg.title || 'Result';
        var fallback = function () {
          if (typeof window.downloadPDF === 'function' && cfg.pdf) {
            window.downloadPDF(cfg.pdf.title, cfg.pdf.text);
          }
        };
        if (typeof window.html2canvas === 'function') {
          downloadCardPDF(el, title, fallback);
        } else {
          fallback();
        }
      });
    }

    var close = el.querySelector('[data-repclose]');
    if (close) {
      close.addEventListener('click', function () {
        if (cfg.backUrl) {
          window.location.href = cfg.backUrl;
          return;
        }
        var overlay = document.getElementById('scoreOverlay');
        if (overlay) overlay.classList.remove('active');
      });
    }
  }

  window.openAssessmentReport = function (cfg) {
    build(cfg);
    if (cfg.scrollTop !== false) {
      var overlay = document.getElementById('scoreOverlay');
      if (overlay) {
        overlay.classList.add('active');
        var card = document.getElementById('reportCard');
        if (card) card.scrollTop = 0;
      }
    }
  };

  function downloadCardPDF(cardEl, title, onFail) {
    var clone = cardEl.cloneNode(true);
    clone.style.maxHeight = 'none';
    clone.style.overflow = 'visible';
    clone.style.position = 'fixed';
    clone.style.left = '-100000px';
    clone.style.top = '0';
    clone.style.width = '760px';
    clone.style.zIndex = '-1';
    clone.style.boxShadow = 'none';
    var actions = clone.querySelector('.report-actions');
    if (actions) actions.style.display = 'none';
    document.body.appendChild(clone);

    function cleanup() {
      if (clone && clone.parentNode) clone.parentNode.removeChild(clone);
    }

    html2canvas(clone, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
      windowWidth: 900
    }).then(function (canvas) {
      cleanup();
      var J = window.jspdf;
      if (!J || !J.jsPDF) {
        if (onFail) onFail();
        return;
      }
      var pdf = new J.jsPDF({ unit: 'mm', format: 'a4' });
      var pw = pdf.internal.pageSize.getWidth();
      var ph = pdf.internal.pageSize.getHeight();
      var margin = 12;
      var availW = pw - margin * 2;
      var availH = ph - margin * 2;
      var rendered = 0;
      var first = true;
      while (rendered < canvas.height) {
        var sliceH = Math.min(availH, (canvas.height - rendered) * availW / canvas.width);
        var srcH = Math.round(sliceH * canvas.width / availW);
        var pv = document.createElement('canvas');
        pv.width = canvas.width;
        pv.height = srcH;
        pv.getContext('2d').drawImage(canvas, 0, rendered, canvas.width, srcH, 0, 0, canvas.width, srcH);
        if (!first) pdf.addPage();
        pdf.addImage(pv.toDataURL('image/jpeg', 0.95), 'JPEG', margin, margin, availW, sliceH);
        rendered += srcH;
        first = false;
      }
      pdf.save((title || 'Result').toLowerCase().replace(/\s+/g, '-') + '-result.pdf');
    }).catch(function () {
      cleanup();
      if (onFail) onFail();
    });
  }

  window.ReportIcons = ICONS;
  window.ReportColors = COLORS;
})();