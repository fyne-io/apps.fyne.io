---
layout: default
title:  Newest additions
order:  1
---
<div> 
  {% include nav.html %}
  {% assign applist = site.apps | sort: 'date' | reverse %}
	{% include list.html applist=applist limit=12 %}

<div class="footer wf-section">
    <div class="fy_container">
      <div class="footer-section">
        <div>
          <div class="subheader">info</div>
          <div class="label">
            <a href="mailto:info@fynelabs.com" target="_blank">info@fynelabs.com</a><br>
            <a href="https://apps.fyne.io/feed.xml" target="_blank">Subscribe via RSS</a>
          </div>
        </div>
        <div>
          <div class="subheader">Made a Fyne app?</div>
          <div class="label">
            <a href="mailto:info@fynelabs.com" target="_blank">Submit an App</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
