---
layout: default
title:  Newest additions
order:  1
---
<div> 
  {% include nav.html %}
  {% assign applist = site.apps | sort: 'date' | reverse %}
	{% include list.html applist=applist limit=12 %}  

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
