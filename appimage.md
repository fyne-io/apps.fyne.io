---
layout: default
title:  AppImage
order:  96
store: AppImage
---
{% include nav.html %}
<div>
  {% assign applist = ''|split:''%}
  {% for app in site.apps %}
  {% if app.appimage %}
  {% assign applist = applist | push: app %}
  {% endif %}
  {% endfor %}
  {% assign applist = applist | sort: 'title' %}
	{% include list.html applist=applist %}
</div>
