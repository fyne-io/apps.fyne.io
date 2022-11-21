---
layout: default
title:  Also on Google Play
order:  92
---
<div class="page-content">
  <div>
    <div>

      <header></header>

      <div>
        <div >
          <h4>Welcome to Fyne Apps - Available on the Google Play Store</h4>
          <p>These applications are also available for your Android smart phone or tablet devices
            directly from the Google Play Store app.</p>
        </div>
      </div>
    </div>

    {% assign applist = ''|split:''%}
    {% for app in site.apps %}
    {% if app.googleid %}
    {% assign applist = applist | push: app %}
    {% endif %}
    {% endfor %}

    {% assign applist = applist | sort: 'title' %}
	{% include list.html applist=applist %}

</div>
