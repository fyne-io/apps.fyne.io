---
layout: default
title:  Newest additions
order:  1
---
<div class="page-content">
  <div class="mdl-grid">
    <div class="section-highlight section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp" style="width: 100%">

      <header class="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone" style="background: url('/assets/img/FyneSquare.png') center/cover;"></header>

      <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
        <div class="mdl-card__supporting-text">
          <h4>Welcome to Fyne Apps - Latest Additions</h4>
          <p>A listing of apps built using Fyne that you can download on run on your Windows, macOS, Linux or BSD computer
as well as iOS and Android mobile devices.</p>
		  <p>This page shows the latest additions to the listing, you can also see
            <a href="/all">all the apps</a> to find your favourite.</p>
        </div>
      </div>
    </div>

    {% assign applist = site.apps | sort: 'date' | reverse %}
	{% include list.html applist=applist limit=12 %}

</div>
