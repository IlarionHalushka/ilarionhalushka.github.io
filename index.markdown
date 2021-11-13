---
layout: default
---
### Best articles
<ul class="posts-list">
    <li>
        <a target="_blank" href="/How-To-Choose-Between-Multiple-Job-Offers">How To Choose Between Multiple Job Offers</a>
    </li>
    <li>
        <a target="_blank" href="/How-To-Make-Developers-Perform">How To Make Developers Perform.</a>
    </li>
    <li>
        <a target="_blank" href="/Why-Testers-Hate-Developers">Why Testers Hate Developers</a>
    </li>
    <li>
        <a target="_blank" href="/Do-Not-Ever-Accept-Counter-Offer">Do Not EVER Accept The Counter Offer.</a>
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
