---
layout: default
---

[comment]: <> (### Programming and testing course)

[comment]: <> (<div class="video-container">)

[comment]: <> (  <iframe)

[comment]: <> (    src="https://www.youtube.com/embed/videoseries?list=PLoZfdp36DZcqq6PoJJVHlS_c_1G89bkh7&autoplay=1&start=251&cc_lang_pref=ru&cc_load_policy=1" )

[comment]: <> (    title="IT ликбез курс by Ilarion Halushka" )

[comment]: <> (    frameborder="0" )

[comment]: <> (    class="video-container")

[comment]: <> (    width="560")

[comment]: <> (    height="315")

[comment]: <> (    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>)

[comment]: <> (  </iframe>)

[comment]: <> (</div>)


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
