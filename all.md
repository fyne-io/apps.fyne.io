---
layout: default
title:  All Apps
order:  2
---
<div>
  {% include nav.html %}
  <div >
    <div class="title wf-section">
    <div class="fy_container w-container">
      <div class="title-text-container">
        <h1 class="h1">Apps</h1>
        <div class="text-large">Just some of the amazing apps created using Fyne.<a href="https://developer.fyne.io/submit/" class="link-2"><br>Submit yours here</a>
        </div>
      </div>
    </div>
  </div>
  

    {% assign applist = site.apps | sort_natural: 'title' %}
	{% include list.html applist=applist %}

</div>
