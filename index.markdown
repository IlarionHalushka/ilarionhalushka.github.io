---
layout: default
---
### Best articles ⭐
<ul class="posts-list">
  {% for post in site.posts %}
    {% for tag in post.tags %}
        {% if tag == 'best' %}
            <li>
                ⭐ <a href="{{ post.url }}">{{ post.title }}</a>
            </li>
        {% endif %}
    {% endfor %}
  {% endfor %}
</ul>

### List of articles
<ul class="posts-list">
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
