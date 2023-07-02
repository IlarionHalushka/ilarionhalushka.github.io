---
layout: post
title: Теорія тестування від А до Я.
permalink: /ua/testing-theory
redirect_from:
    - /testing-theory/ua
date: 2023-03-29
description: |
  Стаття для підготовки до співбесід QA з теорії тестування. 25 тем. Пояснення складних понять простими словами та на прикладах.
author: Ilarion Halushka
keywords:
    - testing
    - qa
    - theory
    - testing theory
    - теорія тестування
    - теория тестирования
    - interview
    - співбесіда
    - собеседование
tags: best, testing, qa, interview
hidden: true
---

------

**Питання на співбесідах Trainee/Junior/Middle Manual QA в середньому на 50% складаються з теорії тестування.**

## Навігація:

### 1. [Тестування. Якість ПЗ](#1-тестування-якість-пз-)
### 2. [Валідація vs Веріфікація](#2-валідація-vs-верифікація-)
### 3. [Цілі тестування](#3-цілі-тестування-)
### 4. [Етапи тестування](#4-етапи-тестування-)
### 5. [Тест план](#5-тест-план-)
### 6. [Тест-дизайн](#6-тест-дизайн-)
### 7. [Техніки тест-дизайну](#7-техніки-тест-дизайну-)
### 8. [Advanced (просунуті) техніки тест-дизайну](#8-просунуті-техніки-тест-дизайну)
### 9. [Бонусні та Авторські Техніки тест-дизайну](#9-бонусні-та-авторські-техніки-тест-дизайну-1)
### 10. [Exploratory vs Ad-hoc testing (Достідницьке vs Ад-хок тестування)](#10-exploratory-vs-ad-hoc-testing)
### 11. [Test Case](#11-test-case--)
### 12. [Check-list (Чек-лист)](#12-check-list-чек-лист--)
### 13. [Bug Report (Баг-репорт)](#13-bug-report-баг-репорт--)
### 14. [Severity vs Priority (Серйозність vs Пріоритет)](#14-severity-vs-priority-)
### 15. [Traceability Matrix (Матриця відповідності вимог)](#15-traceability-matrix-матриця-відповідності-вимог-)
### 16. [Defect / Error / Bug / Failure](#16-defect--error--bug--failure-)
### 17. [Рівні тестування (Levels of Testing)](#17-рівні-тестування-levels-of-testing-)
### 18. [Види / Типи тестування (Testing Types)](#18-види--типи-тестування-testing-types-)
### 19. [Принципи тестування (Principles of Testing)](#19-принципи-тестування-principles-of-testing-)
### 20. [Статичне та Диманічне тестування (Static and Dynamic testing)](#20-статичне-та-динамічне-тестування-)
### 21. [Вимоги (Requirements)](#21-вимоги-requirements-)
### 22. [Життєвий цикл багу](#22-життєвий-цикл-багу-)
### 23. [Життєвий цикл розробки ПЗ (SDLC)](#23-життєвий-цикл-розробки-пз-)
### 24. [Методології розробки](#24-методології-розробки-)

------

## 1. Тестування. Якість ПЗ <a target="_blank" rel="noreferrer" href="https://youtu.be/MlSrfLhgXHo?t=839" title="Youtube"><i class="fa fa-1x fa-youtube- square"></i></a>

### Тестування
— перевірка відповідності між реальною та очікуваною поведінкою системи.

### Тестування
— це одна з технік контролю якості, що включає активності:
* Test Management (планування робіт)
* Test Design (проектування тестів)
* Test Execution (виконання тестів)
* Test Analysis (аналіз результатів тестування)

### Якість ПЗ (Software Quality)
- це сукупність характеристик програмного забезпечення,
  що належать до його здатності задовольняти встановлені вимоги та очікування користувачів.

## 2. Валідація vs Верифікація <a target="_blank" rel="noreferrer" href="https://youtu.be/MlSrfLhgXHo?t=1110" title="Youtube"><i class="fa fa- 1x fa-youtube-square"></i></a>

### Верифікація (verification)
- Оцінка відповідності продукту вимогам (специфікації).

Відповідає на питання: "Чи система працює відповідно до вимог?"

### Валідація (validation)
- Оцінка відповідності продукту очікуванням користувачів.

Відповідає на питання: "Чи вимоги задовольняють очікування користувача?"

## 3. Цілі тестування <a target="_blank" rel="noreferrer" href="https://youtu.be/MlSrfLhgXHo?t=1236" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

1. Підвищити ймовірність того, що система:
* відповідатиме всім описаним вимогам.
* працюватиме правильно за будь-яких обставин.

2. Надання актуальної інформації про стан системи на даний момент.

## 4. Етапи тестування <a target="_blank" rel="noreferrer" href="https://youtu.be/MlSrfLhgXHo?t=1383" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

1. Аналіз продукту
1. Робота з вимогами
1. Розробка тест плану
1. Створення тестової документації
1. Тестування
1. Звіт результатів тестування (test report)
1. Стабілізація
1. Експлуатація

## 5. Тест план <a target="_blank" rel="noreferrer" href="https://youtu.be/OHJ3TzuLSC0?t=1613" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

**Test Plan** - це документ, що описує весь обсяг робіт з тестування.

Відповідає на запитання:

* Що?
* Коли?
* Критерії початку/закінчення тестування.
* Оточення (environment) dev/staging/production?
* Підходи/техніки/інструменти/види тестування?
* Браузери/версії/OS/розширення екрану?
* Хто? Обов'язки? Ресурси? Навчання?
* Терміни?
* Графік?
* Стратегія тестування.
* Посилання на документацію.
* Посилання на вимоги.


## 6. Тест дизайн <a target="_blank" rel="noreferrer" href="https://youtu.be/7a7vGZqwtCA?t=235" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

**Test design** — це етап процесу тестування ПЗ, на якому проектуються та створюються тест кейси, відповідно до критеріїв якості та цілей тестування.

* **Тест аналітик** — визначає «ЩО тестувати?»
* **Тест дизайнер** — визначає «ЯК тестувати?»
* **Реальність** — все робить 1 людина :)


## 7. Техніки тест дизайну <a target="_blank" rel="noreferrer" href="https://youtu.be/7a7vGZqwtCA?t=105" title="Youtube"><i class="fa fa- 1x fa-youtube-square"></i></a>

### Еквівалентний Поділ (Equivalence Partitioning) <a target="_blank" rel="noreferrer" href="https://youtu.be/7a7vGZqwtCA?t=1352" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

* Як приклад, у вас є діапазон допустимих значень від 1.00 до 10.00 доларів,
ви повинні вибрати одне будь-яке правильне значення всередині інтервалу, скажімо,
5.00, та будь-які невірні значення поза інтервалом, наприклад 0.99 та 11.00.

{% include lazyload.html
image_width="100%"
image_height="100%"
image_src="/assets/images/testing-theory/test-design-equvivalence.png"
image_alt="test design equvivalence"
image_title="test design equvivalence" %}

### Аналіз Граничних Значень (Boundary Value Analysis) <a target="_blank" rel="noreferrer" href="https://youtu.be/7a7vGZqwtCA?t=1661" title="Youtube"><i class= "fa fa-1x fa-youtube-square"></i></a>

– Як приклад, у вас є діапазон допустимих значень від 1.00 до 10.00 доларів.
- **Two value (двозначний) BVA**: валідні граничні значення 1.00, 10.00, і невалідні значення 0.99 та 10.01.
- **Three/Full value (тризначний) BVA**: валідні граничні значення 1.00, 1.01, 10.00, 9.99, і невалідні значення 0.99 та 10.01.

{% include lazyload.html
image_width="100%"
image_height="100%"
image_src="/assets/images/testing-theory/test-design-BVA.png"
image_alt="test design BVA"
image_title="test design BVA" %}

### Причина / Наслідок (Cause/Effect) <a target="_blank" rel="noreferrer" href="https://youtu.be/7a7vGZqwtCA?t=2555" title="Youtube"><i class= "fa fa-1x fa-youtube-square"></i></a>

- введення комбінацій умов (причин) для отримання відповіді (наслідку) від системи.
- Наприклад, ви перевіряєте можливість додавати клієнта:

**Причина**: необхідно заповнити поля "Ім'я", "Адреса", "Номер Телефону" і натиснути кнопку "Додати".

**Наслідок**: Після натискання на кнопку «Додати» система додає клієнта в базу даних і показує його айді на екрані.

### Передбачення помилки (Error Guessing) <a target="_blank" rel="noreferrer" href="https://youtu.be/7a7vGZqwtCA?t=2722" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

- використання знань про систему та здатність до
  інтерпретації специфікації (вимог) на рахунок того, щоб «передбачити»
  за яких умов система може видати помилку.

Наприклад, специфікація каже: "користувач повинен ввести код".

Тестувальник думатиме: «Що, якщо я не введу код?», «Що, якщо я введу неправильний код?»...

{% include lazyload.html
image_width="100%"
image_height="100%"
image_src="/assets/images/testing-theory/test-design-error-guessing.png"
image_alt="test design error guessing"
image_title="test design error guessing" %}

## 8. Просунуті техніки тест дизайну

`Здивуй інтерв'юера. Вааааау...`

### Попарне тестування (Pairwise Testing) <a target="_blank" rel="noreferrer" href="https://youtu.be/7a7vGZqwtCA?t=3271" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

- Формування таких наборів тестових даних, у яких кожне тестоване значення кожного з
  параметрів, що перевіряються, хоча б один раз поєднується з кожним тестованим значенням всіх інших параметрів, що перевіряються.

Звучить трохи складно, але на практиці використовувати цю техніку все дуже просто та логічно. Приклад на відео: 
<a target="_blank" rel="noreferrer" href="https://youtu.be/7a7vGZqwtCA?t=3271" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

- Суть техніки - ми не перевіряємо всі поєднання всіх значень, але перевіряємо ВСІ ПАРИ значень.

{% include lazyload.html
image_width="100%"
image_height="100%"
image_src="/assets/images/testing-theory/test-design-pair-wise.png"
image_alt="test design pair wise"
image_title="test design pair wise" %}

### Таблиця прийняття рішень (Decision table) <a target="_blank" rel="noreferrer" href="https://youtu.be/7a7vGZqwtCA?t=4291" title="Youtube"><i class=" fa fa-1x fa-youtube-square"></i></a>

- У таблицях рішень подано набір умов, одночасне виконання яких має призвести до певної дії/рішення/результату.

{% include lazyload.html
image_width="100%"
image_height="100%"
image_src="/assets/images/testing-theory/test-design-decision-table.png"
image_alt="test design decision table"
image_title="test design decision table" %}

### Діаграма (граф) станів-переходів (State Transition diagram) <a target="_blank" rel="noreferrer" href="https://youtu.be/7a7vGZqwtCA?t=4860" title="Youtube"> <i class="fa fa-1x fa-youtube-square"></i></a>

- Діаграма для опису поведінки системи.
- Система має кінцеву кількість станів та переходів між станами.
- Діаграма може бути переведена в Таблицю станів-переходів (або таблицю прийняття рішень).

{% include lazyload.html
image_width="100%"
image_height="100%"
image_src="/assets/images/testing-theory/test-design-state-transition-diagram.png"
image_alt="State transition diagram"
image_title="State transition diagram" %}

### Use case (користувацький сценарій) <a target="_blank" rel="noreferrer" href="https://youtu.be/7a7vGZqwtCA?t=5648" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

&nbsp;&nbsp;&nbsp; Це сценарій взаємодії користувача із системою для досягнення певної мети.

Use case містить:
* хто використовує систему (наприклад роль адмін/покупець/продавець).
* що користувач хоче зробити.
* цілі користувача.
* кроки, які виконує користувач.
* опис того, як система реагує на дії користувача.


## 9. Бонусні та авторські техніки тест дизайну

`Просвіти інтерв'юера. Розплющ йому очі.`

### Семі-Вичерпне тестування (Semi-Exhaustive Testing) <a target="_blank" rel="noreferrer" href="https://youtu.be/7a7vGZqwtCA?t=1077" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

- перевірка всіх можливих комбінацій вхідних значень.
  Зазвичай, застосування цього методу на практиці є недоцільним. (див. принцип тестування №2 Вичерпне тестування недосяжне (Exhaustive testing is impossible))

&nbsp;&nbsp;&nbsp; **Іноді** на практиці зустрічаються випадки, коли стандартні техніки не дають достатнього рівня впевненості у працездатності системи.
Наприклад, в системах, пов'язаних з медициною або авіа сферами, **іноді** варто застосовувати Semi-Exhaustive Testing.

&nbsp;&nbsp;&nbsp; Не забуваємо про принцип тестування №6 Тестування залежить від контексту (Testing is context dependent).
Думаємо головою, коли застосування цієї техніки є доречним, а коли ні.

### Блок-схема (block scheme/diagram) <a target="_blank" rel="noreferrer" href="https://youtu.be/7a7vGZqwtCA?t=6404" title="Youtube"><i class ="fa fa-1x fa-youtube-square"></i></a>

&nbsp;&nbsp;&nbsp; Блок-схему можна використовувати як техніку тест-дизайну, складаючи тест-кейси за логікою схеми.

{% include lazyload.html
image_width="100%"
image_height="100%"
image_src="/assets/images/testing-theory/test-design-block-schema.png"
image_alt="test design block schema"
image_title="test design block schema" %}

### Капелюхи / ролі <a target="_blank" rel="noreferrer" href="https://youtu.be/7a7vGZqwtCA?t=6300" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

&nbsp;&nbsp;&nbsp; Техніка "Капелюхи / ролі" чимось схожа на техніку складання тест кейсів по Use Case.

&nbsp;&nbsp;&nbsp; Принцип: одягаємо капелюх певної ролі користувача і уявляємо себе в його ролі.

&nbsp;&nbsp;&nbsp; Приклад: "одягаємо" капелюх Кастинг Директора і розмірковуємо, як новий функціонал працюватиме для цієї ролі.
Представляємо, які можуть бути залежності та особливості системи для Кастинг Директора.
Розмірковуємо, які цілі переслідує Кастинг директор в нашій системі та як поведінка системи має відрізнятися від інших ролей.
Потім "одягаємо" капелюх Актора, Агента, Адміна....

{% include lazyload.html
image_width="100%"
image_height="100%"
image_src="/assets/images/testing-theory/test-design-hats-roles.png"
image_alt="test design hats roles"
image_title="test design hats roles" %}


## Техніки тест дизайну, про які поки що ніде не чув:

`Кожен має право придумати свою техніку тест дизайну. Тестування - це не бездумне застосування всім відомих технік.` © Іларіон

&nbsp;&nbsp;&nbsp; Про техніки "Talks-driven" (балачки-driven), "Analytics-driven", "Bug-driven" я поки що ніде не чув.

&nbsp;&nbsp;&nbsp; ⚠️ Інтерв'юери можуть бути відмінниками, які обмежуються лише книжковими поняттями та не виходять за рамки (thinking out of the box).
Тому будьте обережні з озвучуванням цих технік інтерв'юеру, особливо, якщо у вас проблеми з поясненням та прикладами)) 
Не обмежуйте себе існуючими техніками, думайте, фантазуйте.


### Балачки-driven (talks-driven) <a target="_blank" rel="noreferrer" href="https://youtu.be/7a7vGZqwtCA?t=6880" title="Youtube"><i class= "fa fa-1x fa-youtube-square"></i></a>

&nbsp;&nbsp;&nbsp; Збираємо в одній кімнаті/дзвінку одного або кількох
програмістів, менеджерів, клієнтів, тестувальників, тощо. І починаємо допит про конкретну функцію або всю систему.

&nbsp;&nbsp;&nbsp; Якщо фантазія не працює, то задаємо Wh-питання:

what, when, where, who, whom, which, whose, why and how -
що, коли, де, хто, кому, який, чий, чому, як

&nbsp;&nbsp;&nbsp; Для просунутих: спочатку збираємо всіх по одному, а потім по кілька людей.
Не випускаємо, поки не отримаємо всі відповіді та не вирішимо які тести проектувати.


### Аналітика-driven (analytics-driven) <a target="_blank" rel="noreferrer" href="https://youtu.be/7a7vGZqwtCA?t=7075" title="Youtube"><i class= "fa fa-1x fa-youtube-square"></i></a>

&nbsp;&nbsp;&nbsp; Якщо на проекті використовується аналітика, наприклад при натисканні на кнопки
або при відкритті сторінки відправляються події (events) в систему для аналітики, то дані аналітики
можна використовувати для складання тест кейсів.

&nbsp;&nbsp;&nbsp; Ми знаємо, куди користувачі частіше всього натискають, на яких сторінках проводять більше всього часу.
Чому б базуючись на цих даних не складати тест кейси?


### Баг-дрівен (bug-driven) <a target="_blank" rel="noreferrer" href="https://youtu.be/7a7vGZqwtCA?t=7309" title="Youtube"><i class= "fa fa-1x fa-youtube-квадрат"></i></a>

&nbsp;&nbsp;&nbsp; Принцип тестування №4 Скупчення дефектів (Defects clustering) свідчить, що "більшість дефектів міститься у невеликій кількості модулів".

&nbsp;&nbsp;&nbsp; Грунтуючись на знайдених раніше багах і зверненнях клієнтів у службу підтримки,
можна визначити "хворі" місця системи та сконцентрувати тест кейси на цих модулях системи.

&nbsp;&nbsp;&nbsp; Додатково можна посидіти над знайденими багами та подумати
"А може аналогічний баг бути в іншій частині системи?".


## 10. Exploratory vs Ad-hoc testing

### Дослідницьке тестування (exploratory testing) <a target="_blank" rel="noreferrer" href="https://youtu.be/7a7vGZqwtCA?t=6002" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>
- це одночасне вивчення системи, проектування тестів (тест дизайн) та безпосередньо тестування.
- Ця техніка базується на досвіді тестувальника (experience based).
- Приклад: приходить тестувальник на новий проект і починає одночасно вивчати сайт,
  писати чек-лист та проходити цей чек-лист (тестувати).

### Ad-hoc тестування <a target="_blank" rel="noreferrer" href="https://youtu.be/7a7vGZqwtCA?t=6571" title="Youtube"><i class="fa fa- 1x fa-youtube-square"></i></a>
- Переклад від автора статті – "тестування від балди".
- Вид тестування, що виконується без підготовки до тестів, без визначення очікуваних результатів, без проектування тестових сценаріїв.
- неформальне, імпровізаційне тестування.


## 11. Test Case <a target="_blank" rel="noreferrer" href="https://youtu.be/OHJ3TzuLSC0?t=4013" title="Youtube"><i class=" fa fa-1x fa-youtube-square"></i></a> <a target="_blank" rel="noreferrer" href="https://youtu.be/MlSrfLhgXHo?t=4279" title= "Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>
#### Test Case
- це тестовий артефакт/документ, що описує сукупність кроків,
  конкретних умов і параметрів, необхідних для перевірки функції, що тестується.

#### Test Case
- це опис перевірки роботи системи, який може виконати будь-яка людина з команди.

#### Test Case
- це опис перевірки системи на відповідність вимогам.

#### Тест кейс складається з:
* ID (ідентифікатор)
* Title (назва)
* Type (тип)
* Priority (пріоритет)
* Preconditions (передумови)
* Steps (кроки)
* Expected Result (очікуваний результат)
* Post conditions (пост умови) - наприклад, очищення даних або повернення системи в початковий стан.

### Тест кейси поділяються на позитивні та негативні:
* **Позитивний тест кейс** використовує тільки коректні дані і перевіряє, що програма правильно виконала функцію, що викликається.
* **Негативний тест кейс** оперує як коректними, так і некоректними даними (мінімум 1 некоректний параметр)
  і ставить за мету перевірку виняткових ситуацій (спрацювання валідаторів), а також перевіряє,
  що функція, що викликається системою, не виконується при спрацьовуванні валідатора.

Приклади та найкращі практики створення тест кейсів - <a target="_blank" rel="noreferrer" href="https://youtu.be/OHJ3TzuLSC0?t=4252" title="Youtube"><i class="fa fa -1x fa-youtube-square"></i></a>


## 12. Check-list (Чек-лист) <a target="_blank" rel="noreferrer" href="https://youtu.be/OHJ3TzuLSC0?t=2675" title="Youtube"><i class ="fa fa-1x fa-youtube-square"></i></a> <a target="_blank" rel="noreferrer" href="https://youtu.be/MlSrfLhgXHo?t=4469" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

### Check list
— це документ, який описує, **що** має бути протестовано.

* Чек-лист може бути абсолютно різного рівня деталізації.
* Як правило, чек-лист містить тільки дії (кроки) без очікуваного результату.
* Чек-лист менш формалізований ніж тест кейс.
* Чек-лист набагато легше підтримувати, ніж тест кейси.
* Пункти чек-листа відповідають на питання "що тестувати?", а конкретні кроки та деталі "як тестувати?" описують в тест кейсах.

Приклади та найкращі практики створення чек-листів - <a target="_blank" rel="noreferrer" href="https://youtu.be/OHJ3TzuLSC0?t=2798" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>


## 13. Bug report (баг репорт) <a target="_blank" rel="noreferrer" href="https://youtu.be/OHJ3TzuLSC0?t=7154" title="Youtube"><i class=" fa-1x fa-youtube-square"></i></a> <a target="_blank" rel="noreferrer" href="https://youtu.be/MlSrfLhgXHo?t=4504" title= "Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

### Bug Report
— це документ, який описує послідовність дій, що призвели до некоректної роботи системи, із зазначенням причин та очікуваного результату.

### Основні складові Bug report:
* ID (ідентифікатор)
* Назва (Title)
* Короткий опис (Summary)
* Проект (Project)
* Компонент програми (Component)
* Номер версії (Version)
* Серйозність (Severity)
* Пріоритет (Priority)
* Статус (Status)
* Автор (Author)
* Виконавець (Assignee)
* Оточення (Environment: dev/test/staging/prod/etc.)
* App/build version (версія білда/додатку)
* Кроки відтворення (Steps to Reproduce)
* Фактичний Результат (Actual Result)
* Очікуваний результат (Expected Result)


### Додаткові складові Bug report:
* Screenshots (скріншоти) <a target="_blank" rel="noreferrer" href="https://youtu.be/4iIryVM77HM?t=5325" title="Youtube"><i class="fa fa-1x fa -youtube-square"></i></a>
* Video (відео)
* Credentials (login + password)
* Browser console errors (логи з браузера)
* Mobile app logs (логи з мобілки)
* Server logs (логи з сервера)


* API Requests (АПІ запити)
* Analytics events (івенти з аналітики)
* Database data (дані з бази даних)
* Database queries (запити до бази)


* Date and time (дата та час)
* Comments/Notes (коментарі/нотатки)
* Link tasks/bugs (підв'язка інших задач/багів до поточного)


* HAR archive - архів з усіма запитами в Network <a target="_blank" rel="noreferrer" href="https://youtu.be/4iIryVM77HM?t=5112" title="Youtube"><i class="fa fa-1x fa-youtube -square"></i></a>

## 14. Severity vs Priority <a target="_blank" rel="noreferrer" href="https://youtu.be/MlSrfLhgXHo?t=4938" title="Youtube"><i class="fa fa- 1x fa-youtube-square"></i></a>

### Серйозність (Severity)
- Це атрибут, що характеризує вплив дефекту на працездатність програми.

В теорії Severity виставляється тестувальником.

### Градація Severity:
* S1 Блокер (Blocker)
* S2 Критична (Critical)
* S3 Значна (Major)
* S4 Незначна (Minor)
* S5 Тривіальна (Trivial)

### Пріоритет (Priority)
- це атрибут, що вказує на черговість виконання завдання чи усунення дефекту.

Чим вище пріоритет, тим швидше потрібно виправити дефект.

В теорії Priority виставляється менеджером, тимлідом чи замовником.

### Градація Priority:
* P1 Високий (High)
* P2 Середній (Medium)
* P3 Низький (Low)

Реальність: на всіх проектах, де я працював, був лише priority :)

Реальність: на різних проектах різні градації.

Приклад питання на співбесіді про Severity / Priority - <a target="_blank" rel="noreferrer" href="https://youtu.be/OHJ3TzuLSC0?t=10280" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>


## 15. Traceability matrix (Матриця відповідності вимог) <a target="_blank" rel="noreferrer" href="https://youtu.be/MlSrfLhgXHo?t=5157" title="Youtube"><i class= "fa fa-1x fa-youtube-square"></i></a>

&nbsp;&nbsp;&nbsp; **Traceability matrix** - це двовимірна таблиця,
що містить відповідність функціональних вимог та тест кейсів.

У заголовках колонок таблиці розташовані вимоги,
а в заголовках рядків – ID тест кейсів.

На перетині — позначка, що означає, що вимога поточної колонки покрита тестовим сценарієм поточного рядка.

## 16. Defect / Error / Bug / Failure <a target="_blank" rel="noreferrer" href="https://youtu.be/MlSrfLhgXHo?t=5475" title="Youtube"><i class= "fa fa-1x fa-youtube-square"></i></a>

### Дефект (він же баг)
— це невідповідність фактичного результату очікуваному результату, описаного у вимогах.

### Bug (defect)
— помилка програміста (або іншого члена команди), тобто коли в програмі
щось йде не так, як планувалося і програма виходить з-під контролю.

Наприклад, коли ніяк не контролюються дані введені користувачем,
в результаті невірні дані викликають краші (crash) або інші "приколи" в роботі програми.
Або програма розроблена так, що вона не відповідає тому, що від неї очікується.

### Error (Помилка)
- дія, яка призвела до неправильного результату.

Приклад 1 - вводить літери в поля, де потрібно вводити цифри (вік, кількість товару тощо). Error: "поле має містити лише цифри".

Приклад 2 - реєструється зі вже існуючим в системі емейлом. Error: "цей емейл вже використовується".

### Failure
- збій (причому необов'язково апаратний) у роботі компонента, всієї програми чи системи.

Існують такі дефекти, які призводять до збоїв. І існують такі, що не призводять.
Наприклад UI-дефекти. Але апаратний збій, що ніяк не пов'язаний із software, теж є failure.



## 17. Рівні тестування (Levels of testing) <a target="_blank" rel="noreferrer" href="https://youtu.be/MlSrfLhgXHo?t=5979" title="Youtube"><i class= "fa fa-1x fa-youtube-square"></i></a>
### 1. Модульне тестування (Unit Testing)
   Тестування класів, функцій, модулів в коді. Зазвичай виконується програмістами.

### 2. Інтеграційне тестування (Integration Testing)
   Тестування взаємодії між кількома класами, функціями, модулями. Наприклад, тестування API через Postman. <a target="_blank" rel="noreferrer" href="https://youtu.be/M1kwub3H0AI" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i ></a>

### 3. Системне тестування (System Testing)
   Перевірка як функціональних, так і нефункціональних вимог системи.

### 4. Приймальне тестування (Acceptance Testing)
   Перевірка відповідності системи вимогам та проводиться з метою:
   * визначення чи задовольняє система приймальним (acceptance) критеріям;
   * винесення рішення замовником/менеджером приймається програма чи ні.

## 18. Види / Типи тестування (Testing types) <a target="_blank" rel="noreferrer" href="https://youtu.be/MlSrfLhgXHo?t=6509" title="Youtube"><i class ="fa fa-1x fa-youtube-square"></i></a>

### 18.1. Функціональні види тестування
* Функціональне тестування (**Functional testing**)
* Тестування графічного інтерфейсу користувача (**GUI Testing**)
* Тестування безпеки (**Security and Access Control Testing**)
* Тестування взаємодії (**Interoperability Testing**)


### 18.2. Нефункціональні види тестування
* Усі види тестування продуктивності (**Performance**):
    + Навантажувальне тестування (**Load Testing**) – багато користувачів.
    + Стресове тестування (**Stress Testing**) - дуже багато даних та/або користувачів (пікові значення).
    + Об'ємне тестування (**Volume Testing**) - багато даних.
    + Тестування стабільності або надійності (**Stability / Reliability Testing**)


* Тестування встановлення (**Installation testing**)
* Тестування зручності користування (**Usability Testing**)
* Тестування на відмову та відновлення (**Failover and Recovery Testing**)
* Конфігураційне тестування (**Configuration Testing**)


### 18.3. Пов'язані зі змінами види тестування
* Димове тестування (**Smoke Testing**)
* Регресійне тестування (**Regression Testing**)
* Повторне тестування (**Re-testing**)
* Тестування збірки (**Build Verification Test**)
* Санітарне тестування або перевірка узгодженості/справності (**Sanity Testing**)


{% include lazyload.html image_width="100%" image_height="100%" image_src="/assets/images/testing-theory/testing-types.png" image_alt="Testing types" image_title="Testing types" %}


## 19. Принципи тестування (Principles of testing) <a target="_blank" rel="noreferrer" href="https://youtu.be/MlSrfLhgXHo?t=8559" title="Youtube"><i class= "fa fa-1x fa-youtube-square"></i></a>

### 1. Тестування демонструє наявність дефектів (Testing shows presence of defects)

Тестування може показати, що дефекти в системі є, але не може довести, що їх немає.

### 2. Вичерпне тестування недосяжне (Exhaustive testing is impossible)

Повне тестування всіх комбінацій вводів і передумов фізично нездійсненно, крім виняткових випадків.

### 3. Раннє тестування (Early testing)

Щоб знайти дефекти якомога раніше,
активності з тестування мають бути розпочаті якомога раніше у життєвому циклі розробки.

### 4. Скупчення дефектів (Defects clustering)

Як правило, більшість дефектів,
виявлених при тестуванні, міститься в невеликій кількості модулів.

### 5. Парадокс пестициду (Pesticide paradox)

Якщо одні й ті самі тести проганятимуться багато разів,
зрештою, цей набір тестових сценаріїв більше не знаходитиме нових дефектів.

### 6. Тестування залежить від контексту (Testing is context dependent)

Тестування виконується по-різному, залежно від контексту.

### 7. Омана про відсутність помилок (Absence-of-errors fallacy)

Виявлення та виправлення дефектів не допоможуть,
якщо створена система не підходить користувачеві та не задовольняє його очікуванням та потребам.


## 20. Статичне та динамічне тестування <a target="_blank" rel="noreferrer" href="https://youtu.be/MlSrfLhgXHo?t=8347" title="Youtube"><i class="fa fa -1x fa-youtube-square"></i></a>

### Статичне (static) тестування
Здійснюється **БЕЗ** запуску коду програми.

Приклади: тестування вимог/документації, код ревью, статичні аналізатори коду.

### Динамічне (dynamic) тестування
Здійснюється **З** запуском коду програми.

## 21. Вимоги (requirements) <a target="_blank" rel="noreferrer" href="https://youtu.be/MlSrfLhgXHo?t=9236" title="Youtube"><i class="fa fa -1x fa-youtube-square"></i></a>

&nbsp;&nbsp;&nbsp; **Вимоги** - це специфікація (опис) того, що має бути реалізовано.

Вимоги описують те, що необхідно реалізувати,
без деталізації технічного боку рішення. "Що", а не "як".

### Вимоги до вимог:
1. коректність
1. недвозначність
1. повнота
1. несуперечність
1. упорядкованість за важливістю та стабільністю
1. перевірюваність (тестопридатність)
1. модифікованість
1. трасування
1. зрозумілість


## 22. Життєвий цикл багу <a target="_blank" rel="noreferrer" href="https://youtu.be/MlSrfLhgXHo?t=9736" title="Youtube"><i class="fa fa- 1x fa-youtube-square"></i></a>

{% include lazyload.html image_width="50%" image_height="50%" image_src="/assets/images/testing-theory/bug-lifecycle.png" image_alt="Bug lifecycle" image_title="Bug lifecycle" %}


## 23. Життєвий цикл розробки ПЗ <a target="_blank" rel="noreferrer" href="https://youtu.be/MlSrfLhgXHo?t=9986" title="Youtube"><i class="fa fa -1x fa-youtube-square"></i></a>

**Software Development Life Cycle (SDLC):**
0. Ідея (Idea)
1. Збір та аналіз вимог (Planning and Requirement Analysis)
2. Документування вимог (Defining Requirements)
3. Дизайн (Design Architecture)
4. Розробка (Developing)
5. Тестування (Testing)
6. Впровадження/розгортання (Deployment)
7. Підтримка (Maintenance)
8. Смерть (Death)

## 24. Методології розробки <a target="_blank" rel="noreferrer" href="https://youtu.be/wzR0XVLlvSQ?t=1621" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>


Waterfall <a target="_blank" rel="noreferrer" href="https://youtu.be/wzR0XVLlvSQ?t=1718" title="Youtube"><i class="fa fa-1x fa-youtube-square "></i></a>


V-model <a target="_blank" rel="noreferrer" href="https://youtu.be/wzR0XVLlvSQ?t=1859" title="Youtube"><i class="fa fa-1x fa-youtube -square"></i></a>


Spiral <a target="_blank" rel="noreferrer" href="https://youtu.be/wzR0XVLlvSQ?t=2097" title="Youtube"><i class="fa fa-1x fa-youtube-square "></i></a>


Kanban <a target="_blank" rel="noreferrer" href="https://youtu.be/wzR0XVLlvSQ?t=2765" title="Youtube"><i class="fa fa-1x fa-youtube-square "></i></a>


Scrum <a target="_blank" rel="noreferrer" href="https://youtu.be/wzR0XVLlvSQ?t=4222" title="Youtube"><i class="fa fa-1x fa-youtube-square "></i></a>


Scrum-ban <a target="_blank" rel="noreferrer" href="https://youtu.be/MlSrfLhgXHo?t=174" title="Youtube"><i class="fa fa-1x fa-youtube -square"></i></a>


## Пропозиції та побажання

&nbsp;&nbsp;&nbsp; Завжди радий отримувати конструктивну критику щодо контенту лекцій та цієї статті. Не соромтеся 🤗 ☀️


Джерела:
стаття на доу https://dou.ua/forums/topic/13389
www.protesting.ru,
bugscatcher.net,
qalight.com.ua,
thinkingintests.wordpress.com,
книга ISTQB,
www.quizful.net,
bugsclock.blogspot.com,
www.zeelabs.com,
devopswiki.net,
hvorostovoz.blogspot.com.


<script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="IlarionHalushka" data-color="#0a0641" data-emoji="" data-font="Cookie" data-text="Віддячити автору" data-outline-color="#ffffff" data-font-color="#ffffff" data-coffee-color="#FFDD00" ></script>
