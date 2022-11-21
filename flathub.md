---
layout: default
title:  Also on FlatHub
order:  94
---
<div >
  <div >
    <div >

      <header ></header>

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
