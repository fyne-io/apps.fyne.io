---
layout: default
title:  Fyne Apps Listing
---
<div class="page-content">
  <div class="mdl-grid">
    <div class="section-highlight section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp" style="width: 100%">

      <header class="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone" style="background: url('/assets/img/FyneSquare.png') center/cover;"></header>

      <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
        <div class="mdl-card__supporting-text">
          <h4>Welcome to Fyne Apps</h4>
          <p>A listing of apps built using Fyne that you can download on run on your Windows, macOS, Linux or BSD computer
as well as iOS and Android mobile devices.</p>
        </div>
      </div>
    </div>

    {% assign applist = site.apps | sort: 'date' | reverse %}
    {% for app in applist %}
    {% if app.disabled %}
      {% continue %}
    {% endif %}
    {% assign app_url = app.url | absolute_url  %}

    <div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone">
      <div class="mdl-card__title" style="{% if app.icon %}background: url({{ app.icon }}) no-repeat center/contain; background-color: #c0c0c0;{% else %}background: url({{ app.screenshot1 }}) center/cover;{% endif %}">
        <h2 class="mdl-card__title-text"><a href="{{ app_url }}">{{ app.title }}</a></h2>
      </div>
      <div class="mdl-card__supporting-text">
        <span>{{ app.date | date: "%b %-d, %Y" }}</span>
        <p>{{ app.excerpt }}</p>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="{{ app_url }}">Read More</a>
      </div>
      <div class="mdl-card__menu">
        <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" id="app-{{ app.appid }}">
          <i class="material-icons">share</i>
        </button>
        <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="app-{{ app.appid }}">
          <li><a href="https://www.facebook.com/dialog/share?app_id={{site.facebook_app_id}}&display=page&href={{ app_url }}&redirect_uri={{ site.baseurl }}" class="mdl-menu__item">Facebook</a></li>
          <li><a href="https://twitter.com/share?url={{ app_url }}&text={{ app.title }}&via={{ site.twitter_username }}" class="mdl-menu__item">Twitter</a></li>
          <li><a href="https://plus.google.com/share?url={{ app_url }}" class="mdl-menu__item">Google+</a></li>
        </ul>
      </div>
    </div>
    {% endfor %}

  </div>
</div>
