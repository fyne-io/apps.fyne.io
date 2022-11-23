---
layout: default
title:  Also on FlatHub
order:  94
---
<div class="page-content">
  <div class="mdl-grid">
    <div class="section-highlight section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp" style="width: 100%">

      <header class="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone" style="background: url('/assets/img/FyneSquare.png') center/cover;"></header>

      <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
        <div class="mdl-card__supporting-text">
          <h4>Welcome to Fyne Apps - Available on FlatHub</h4>
          <p>These applications are also available for your Linux devices
            directly from the FlatHub system.</p>
        </div>
      </div>
    </div>

    {% assign applist = ''|split:''%}
    {% for app in site.apps %}
    {% if app.flathub %}
    {% assign applist = applist | push: app %}
    {% endif %}
    {% endfor %}

    {% assign applist = applist | sort: 'title' %}
	{% include list.html applist=applist %}

</div>
