---
layout: default
title:  Flathub
order:  94
store: Flathub
---
{% include nav.html %}
<div>
  {% assign applist = ''|split:''%}
  {% for app in site.apps %}
  {% if app.flathub %}
  {% assign applist = applist | push: app %}
  {% endif %}
  {% endfor %}
  {% assign applist = applist | sort: 'title' %}
	{% include list.html applist=applist %}
</div>
