---
layout: default
title:  Google Play
order:  92
category: Google Play
---
{% include nav.html %}
<div>
  {% assign applist = ''|split:''%}
  {% for app in site.apps %}
  {% if app.googleid %}
  {% assign applist = applist | push: app %}
  {% endif %}
  {% endfor %}
  {% assign applist = applist | sort: 'title' %}
	{% include list.html applist=applist %}
</div>
