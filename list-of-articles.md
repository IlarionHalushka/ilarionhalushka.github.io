List of Articles / ideas / topics for blog ilarion halushka github jelly:
* Data mining vacancies +++
* Machine learning on web
* How I taught my friends +++
* What should software tester know in 2020
* Automation web
* Automation mobile
* Time management +++
* Books I read +++
* Manual -> Automation -> Developer
* Google Summer of Code experience https://ranvir.xyz/blog/gsoc_2017/+++
* Test UA startups hackathon
* Plans for 2021
* Technologies to learn +++
* Thoughts about relocation Pros and cons+++
* Algorithms
* Machine learning React Native
* My resume
* Job search, choosing best vacancy+++
* Interview experience
* How upgrading PC saved time
* Working remotely
* Pimp up career
* Month of stack overflow answers
* Coding as a habit
* Why I like testers
* Why I don’t like testers
* Perfect bug report
* Tools for manual testing
* Don’t type commands from inet into terminal https://www.parallels.com/blogs/sharing-your-parallels-desktop-virtual-machine-between-multiple-mac-user-accounts
* Learning languages +++
* Pollyjs
* Nest js
* Other technologies which I know
* What should every BE developer know ~~~~
* Books to read for BE developer. ~~~~~
* Code review
* Commenting code
* Code smells
* Building my own app for learning QA
* Stack overflow answers turn to articles
* What every developer should know
* What every qa engineer should know
* Examples of using technologies
* Finding first job in IT+++++
* Path to Junior QA
* Salary review ~~~~~
* How I became independent consultant
* How to work on two jobs
* Become professional developer. About clean coder.
* Why bringing an offer to your employer is a bad move.
* Relations with employer are similar to relations with girlfriend.
* Interview Experience NodeJS
* How working for FAANG is imposed by society
* Why qa automation switch to development


Add google analytics +++
Add search +++
Add comments +++
Add about me page+++
Add social links +++
Add Footer +++
Favicon+++
Pass google audit +++
Sitemap file +++
SEO +++
Optimisations +++
Image lazy loading +++
Ability to share post in social networks+++
Think of creative images for articles +++
Add menu +++
Add section in menu `best 10 articles` +++
Language - about me in UA/RU/EN +++
Add to articles “5 mins read” +++
Add tags +++
Add suggestions what to read next
Pagination
Optimize images https://tinypng.com/
Text header animation
Add articles filtering by tags
Run all articles through chat gpt
Add suggestions what to read next
Partytown load analytics in separate workers

load youtube video facade https://gtmetrix.com/reports/ilarionhalushka.github.io/X1tXEHHO/ Some third-party embeds can be lazy loaded. Consider replacing them with a facade until they are required.
youtube video thumbnail

<!DOCTYPE html>
<html>
  <head>
    <title>Load YouTube Video Thumbnail</title>
  </head>
  <body>
    <div id="video-container">
      <img id="thumbnail" src="https://i.ytimg.com/vi/VIDEO_ID/mqdefault.jpg">
    </div>

    <script>
      const videoContainer = document.querySelector('#video-container');
      const thumbnail = document.querySelector('#thumbnail');

      videoContainer.addEventListener('click', () => {
        const iframe = document.createElement('iframe');
        iframe.setAttribute('src', `https://www.youtube.com/embed/VIDEO_ID?autoplay=1`);
        iframe.setAttribute('frameborder', '0');
        iframe.setAttribute('allowfullscreen', '');

        videoContainer.innerHTML = '';
        videoContainer.appendChild(iframe);
      });
    </script>
  </body>
</html>
    


https://www.webpagetest.org/

https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect


Tags cloud
https://dev.to/alvaromontoro/create-a-tag-cloud-with-html-and-css-1e90



useful article for optimization:
https://blog.webjeda.com/jekyll-speed/
it also has seo optimization article and CDN setup


Sitemap online generation with spider robots
https://xmlsitemapgenerator.org/Free/download.aspx?job=af62b155-5086-4cb0-a6d2-25c53444578c

seo optimization
https://blog.webjeda.com/optimize-jekyll-seo/

