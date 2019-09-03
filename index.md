---
layout: default
---
<div class="page-content">
  <div class="mdl-grid">
    {% for post in site.posts %}

    <div class="section-highlight section--center mdl-grid mdl-grid--no-spacing mdl-shadow--2dp" style="width: 100%">

      <header class="section__play-btn mdl-cell mdl-cell--3-col-desktop mdl-cell--2-col-tablet mdl-cell--4-col-phone" {% if post.image %} style="background: url('{{ post.image }}') center/cover;" {% endif %}></header>

      <div class="mdl-card mdl-cell mdl-cell--9-col-desktop mdl-cell--6-col-tablet mdl-cell--4-col-phone">
        <div class="mdl-card__supporting-text">
          <h4>{{ post.title }}</h4>
          <p>{{ post.excerpt }}</p>
        </div>
        <div class="mdl-card__actions">
          <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="{{ post.url | prepend: site.baseurl }}">Read More</a>
        </div>
      </div>
    </div>

    {% endfor %}

    {% for app in site.apps %}
    {% assign app_url = app.url | absolute_url  %}

    <div class="mdl-card mdl-shadow--2dp mdl-cell mdl-cell--4-col mdl-cell--4-col-desktop mdl-cell--4-col-tablet mdl-cell--12-col-phone">
      <div class="mdl-card__title" style="background: url('{{ app.img }}') center/cover;">
        <h2 class="mdl-card__title-text">{{ app.name }}</h2>
      </div>
      <div class="mdl-card__supporting-text">
        <span>{{ app.date | date: "%b %-d, %Y" }}</span>
        <p>{{ app.excerpt }}</p>
      </div>
      <div class="mdl-card__actions mdl-card--border">
        <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="{{ app_url }}">Read More</a>
      </div>
      <div class="mdl-card__menu">
        <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect" id="app-{{ app.id }}">
          <i class="material-icons">share</i>
        </button>
        <ul class="mdl-menu mdl-js-menu mdl-menu--bottom-right" for="app-{{ app.id }}">
          <li><a href="https://www.facebook.com/dialog/share?app_id={{site.facebook_app_id}}&display=page&href={{ app_url }}&redirect_uri={{ site.baseurl }}" class="mdl-menu__item">Facebook</a></li>
          <li><a href="https://twitter.com/share?url={{ app_url }}&text={{ app.name }}&via={{ site.twitter_username }}" class="mdl-menu__item">Twitter</a></li>
          <li><a href="https://plus.google.com/share?url={{ app_url }}" class="mdl-menu__item">Google+</a></li>
        </ul>
      </div>
    </div>
    {% endfor %}

  </div>
</div>
