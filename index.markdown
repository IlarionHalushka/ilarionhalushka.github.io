---
layout: default
---

### Programming and testing course

<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/videoseries?list=PLoZfdp36DZcqq6PoJJVHlS_c_1G89bkh7&autoplay=0&start=251&cc_lang_pref=ru&cc_load_policy=1"
    title="Software Testing Course by Ilarion Halushka"
    frameborder="0"
    class="video-container"
    width="560"
    height="315"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
  </iframe>
</div>


### Best articles
<ul class="posts-list">
    <li>
        <a target="_blank" href="/How-To-Choose-Between-Multiple-Job-Offers/">How To Choose Between Multiple Job Offers</a>
    </li>
    <li>
        <a target="_blank" href="/Do-Not-Ever-Accept-Counter-Offer/">Do Not EVER Accept The Counter Offer</a>
    </li>
    <li>
        <a target="_blank" href="/How-To-Make-Developers-Perform/">How To Make Developers Perform</a>
    </li>
    <li>
        <a target="_blank" href="/Why-Testers-Hate-Developers/">Why Testers Hate Developers</a>
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
