---
layout: default
---

# Best articles
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
        <a target="_blank" href="/Soft-Skills-of-Senior-Developer/">Soft Skills of Senior Engineer</a>
    </li>
</ul>

# IT courses

<div class="video-container" id="video-container">
  <iframe
    id="lazy-iframe"
    title="Software Testing Course by Ilarion Halushka"
    frameborder="0"
    class="video-container"
    width="560"
    height="315"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
  </iframe>
</div>

<script async>
  const myElement = document.querySelector('#video-container');
  const lazyIframe = document.querySelector("#lazy-iframe");

  const options = {
    rootMargin: '50px',
    threshold: 0.01
  };

  const callback = function(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        lazyIframe.src = "https://www.youtube.com/embed/M1kwub3H0AI?autoplay=0&start=1269&cc_lang_pref=ru&cc_load_policy=1";
        lazyIframe.style.display = "block";
        console.log('Element is visible');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(callback, options);
  observer.observe(myElement);
</script>


# List of articles
<ul class="posts-list">
  {% for post in site.posts %}
    {% if post.hidden != true %}
        <li>
          <a href="{{ post.url }}">{{ post.title }}</a>
        </li>
    {% endif %}
  {% endfor %}
</ul>
