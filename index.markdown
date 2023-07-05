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
        <a target="_blank" href="/Why-Testers-Hate-Developers/">Why Testers Hate Developers</a>
    </li>
</ul>

[//]: # (# Programming and testing course)

[//]: # ()
[//]: # (<div class="video-container" id="video-container">)

[//]: # (  <iframe)

[//]: # (    id="lazy-iframe")

[//]: # (    title="Software Testing Course by Ilarion Halushka")

[//]: # (    frameborder="0")

[//]: # (    class="video-container")

[//]: # (    width="560")

[//]: # (    height="315")

[//]: # (    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>)

[//]: # (  </iframe>)

[//]: # (</div>)

[//]: # (<script async>)

[//]: # (  const myElement = document.querySelector&#40;'#video-container'&#41;;)

[//]: # (  const lazyIframe = document.querySelector&#40;"#lazy-iframe"&#41;;)

[//]: # ()
[//]: # (  const options = {)

[//]: # (    rootMargin: '50px',)

[//]: # (    threshold: 0.01)

[//]: # (  };)

[//]: # ()
[//]: # (  const callback = function&#40;entries, observer&#41; {)

[//]: # (    entries.forEach&#40;entry => {)

[//]: # (      if &#40;entry.isIntersecting&#41; {)

[//]: # (        lazyIframe.src = "https://www.youtube.com/embed/videoseries?list=PLoZfdp36DZcqq6PoJJVHlS_c_1G89bkh7&autoplay=0&start=251&cc_lang_pref=ru&cc_load_policy=1";)

[//]: # (        lazyIframe.style.display = "block";)

[//]: # (        console.log&#40;'Element is visible'&#41;;)

[//]: # (        observer.unobserve&#40;entry.target&#41;;)

[//]: # (      })

[//]: # (    }&#41;;)

[//]: # (  };)

[//]: # ()
[//]: # (  const observer = new IntersectionObserver&#40;callback, options&#41;;)

[//]: # (  observer.observe&#40;myElement&#41;;)

[//]: # (</script>)


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
