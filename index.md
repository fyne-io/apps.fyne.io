---
layout: default
title:  Newest additions
order:  1

featured: 
  - link: /apps/com.fynelabs.nomad.html
    image: /assets/images/carousel/nomad.png
  - link: /apps/rymdport.html
    icon: https://raw.githubusercontent.com/Jacalz/rymdport/main/internal/assets/icons/icon-512.png
    color: "#1e3c6d"
    name: Rymdport
    name-color: "#ffffff"
  - link: /apps/me.ankushjadhav.fynesweeper.html
    image: /assets/images/carousel/fynesweeper.png
  - link: /apps/com.pomadorik.html
    icon: https://github.com/Nikeweke/pomadorik/blob/master/icon/app-icon.png?raw=true
    color: "#0a7b0b"
    name: Pomadorik
    name-color: "#ff5f3a"
  - link: /apps/com.github.alexballas.go2tv.html
    image: /assets/images/carousel/go2tv.png

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
