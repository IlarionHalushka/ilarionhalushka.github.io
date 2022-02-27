---
layout: post
title: Missing Parts From The Clean Code Book
date: 2021-08-24
description: |
    
author: Ilarion Halushka
keywords:
    - development
    - code
tags: development, code
---

## No Third Party Libraries
&nbsp;&nbsp;&nbsp; Use as few third party libraries as possible.
If you don't understand the code of
  the third party library, then try not use it. The maintainer may give up supporting the lib
  and you will be left one on one with the library code.

&nbsp;&nbsp;&nbsp;  Also using third-party libs exposes you to vulnerabilities.
  Recent cases with vulnerabilities in open source libraries:
  [CPU loading to 100%](https://www.theverge.com/2022/1/9/22874949/developer-corrupts-open-source-libraries-projects-affected),
  [crypto-currency mining](https://blog.sonatype.com/newly-found-npm-malware-mines-cryptocurrency-on-windows-linux-macos-devices).
  
## Write Database Independent Code
&nbsp;&nbsp;&nbsp; Write code as if you are going to replace the database in the near future. 
If you currently have NoSQL DB, imagine that in one month you will have to switch to SQL DB.
  Write code according to this thought, layer your code structure.

## Make Abstractions from 3rd party systems
* Write code as if you will replace third party service in one month.
Let's say you use stripe.....
  
## Write Cloud Independent Code
* Write code as if you will move from one cloud to another, or from cloud to self-hosted servers.
Amazon -> Google

## Write Extendable Code
* Write code as if you will need to support multiple similar third party services.
POS.
  
## Write Framework Independent Code
* Write code as if you will move from you top-notch high-tech modern hype framework
to another top-notch high-tech modern hype framework.
  
## Care About Code
* Write code as if you will have to maintain it for the rest of your life. 
Remember that code is written once and read hundreds or even thousands times.
  
## Don't start coding until have a solution
* If you can't solve the problem in your mind, don't start coding.
Think it through. Give your brain some time to process this information.
  Switch to another task. Go to sleep.
  
## Do Not Hurry
* Do not sacrifice code quality, when you are pushed to work faster.
You know you are going to pay for bad code. 
Writing poor code is like shooting self in foot.

## Sometimes You Can Write Bad Code
* Sometimes life pushes us to compromise code quality over business needs.
In book it is mentioned that tech debt stays there forever. 
  Which is not 100% true. 
  Let's say we are waiting for another team or third party service to release a new feature.
  Until that happens, we write some quick ugly work-around which stays there for 1-2 weeks and then will be deleted.
  
## Never Ending Loop Of Poorly Written Code
* Working on a project which already has violated all the Clean Code concepts makes us
write bad code ourselves.
  I experienced this once, when I was just too scared to touch somebody else's code.
  I could say it was selfish to just my fix and let the code stay. 
  But why would I want to wake up at night or on weekends to fix the bugs that 
  I potentially introduced by refactoring.
  
## Keep dependencies up to date
* Invest time into libraries/frameworks updates. The sooner the better.

## Working With Dates Becomes Messy
* Unify working with dates. Preferably use UTC timezone everywhere.
Use same class/library for working with dates.
  
## The Earlier The Better
* Enforce code quality from day 1.
Also when someone else joins the team, perform as ///////
  code reviews as possible.
  
## Automate Repetitive Tasks
* Automate the process. When you hear multiple times different people say
"Oh I forgot to update, I forgot to run, I forgot to...".
  It means that probably the problem is not with people,
  but with not automated process. Avoid routine tasks.
  
* Keep documentation up to date.

* Make small pull requests with descriptions, .....

* Small commits.
The bigger the commit the harder it is to review it, the chance of missing something is higher,
  and temptation to close eyes on something is also higher.
Funny joke go between the programmers: "the smallest pull request gets most comments".

* Task names in commits.

* Descriptions of pull requests.

* Meaningful commit messages, and branch names.

* Squash commits when it makes sense.
  There is no use in commits with message "address code review comments" or "fix tests".

* Culture of code reviews. Some people say that code reviews are not needed
and the issues raised during code review indicate that there was a bad planning/design of a feature.
  I tend to think that code reviews are a great tool to learn code of other people, 
  suggest better cleaner and clearer ways of writing, try to find bugs,
  suggest how the code can be reused, etc.
  
* Api versioning. Go with API versioning from the very beginning of designing your system.

* Use .env configurations for different environments.

* App should be able to run in multiple processes, not using shared state.
In other words it should be stateless.
  
* Keep local / staging / production envs as much similar as possible.

* 
