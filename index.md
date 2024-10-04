---
layout: default
title:  Newest additions
order:  1
---
<div> 
  {% include nav.html %}

  <div class="wf-section">
    <div class="fy_container">
      <div class="featured-card">
        {% include carousel.html height="33" unit="%" duration="7" %}
      </div>
    </div>
  </div>

  <div class="wf-section">
    <div class="fy_container">
      <h3>New (9)</h3>
    </div>
  </div>

  {% assign applist = site.apps | sort: 'date' | reverse %}
	{% include list.html applist=applist limit=9 %}  

{% assign seconds = site.updated_days | times: 24 | times: 60 | times: 60 %}
{% assign since = 'now' | date: '%s' | minus: seconds %}
{% assign list = '' | split: ',' %}
    
{% assign applist = site.apps | sort: 'updated' | reverse %}
{% for app in applist %}
  {% assign last = app.updated | date: '%s' | plus: 0 %}
  {% if last > since %}
    {% assign list = list | push: app %}
  {% endif %}
{% endfor %}

  <div class="wf-section">
    <div class="fy_container">
      <h3>Recently Updated ({{ list | size }})</h3>
    </div>
  </div>

	{% include list.html applist=list limit=3 %}  


  <div class="fy_container">
    <a href="/all.html" class="w-button" style="
    font-family: Poppins, sans-serif;
    font-size: 20px;
    font-weight: 600;
    border-radius: 8px;
    padding: 10pt;
    width: 100%;
    text-align: center;">All Apps ({{ applist | size }})</a>
  </div>
</div>
