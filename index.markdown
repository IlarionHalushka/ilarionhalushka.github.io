---
layout: default
---

### BEST OF THE BEST ARTICLE

<ul class="posts-list">

<li>
       <a target="_blank" href="/help-ukraine">🇺🇦 Кібервійна Cyberwarfare 🇺🇦 Методи боротьби</a>
    </li>
</ul>


### Best articles
<ul class="posts-list">
    <li>
        <a target="_blank" href="/How-To-Choose-Between-Multiple-Job-Offers">How To Choose Between Multiple Job Offers</a>
    </li>
    <li>
        <a target="_blank" href="/Do-Not-Ever-Accept-Counter-Offer">Do Not EVER Accept The Counter Offer</a>
    </li>
    <li>
        <a target="_blank" href="/How-To-Make-Developers-Perform">How To Make Developers Perform</a>
    </li>
    <li>
        <a target="_blank" href="/Why-Testers-Hate-Developers">Why Testers Hate Developers</a>
    </li>
</ul>

### List of articles
<ul class="posts-list">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
