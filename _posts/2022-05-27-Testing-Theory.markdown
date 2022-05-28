---
layout: post
title: Теория тестирования от А до Я.
permalink: /testing-theory
date: 2021-08-24
description: |
    
author: Ilarion Halushka
keywords:
    - 
tags: 
---

**`После прочтения + понимания + изучения + конспектирования + заучивания этой статьи курсы тестировщиков уже не нужны.`** 

## 1. Определения

**Тестирование ПО** — проверка соответствия между реальным и ожидаемым поведением программы.

**Тестирование**  — это одна из техник контроля качества, включающая в себя активности по:
* Test Management (планированию работ) 
* Test Design (проектирование тестов) 
* Test Execution (выполнение тестов)
* Test Analysis (анализ результатов тестирования)

**Качество ПО (Software Quality)** 
— это совокупность характеристик программного обеспечения, 
относящихся к его способности удовлетворять установленные и предполагаемые потребности.

## 2. Валидация vs Верификация

**Верификация (verification)** — оценка соответствия продукта требованиям (спецификации).

Отвечает на вопрос: "Система работает в соответствии с требованиями?"

**Валидация (validation)** — оценка соответствия продукта ожиданиям и требованиям пользователей.

Отвечает на вопрос: "Требования удовлетворяют ожидания пользователя?"

## 3. Цели тестирования
1. Повысить вероятность того, что приложение:
* будет соответствовать всем описанным требованиям.
* будет работать правильно при любых обстоятельствах.

2. Предоставление актуальной информации о состоянии продукта на данный момент.

## 4. Этапы тестирования
1. Анализ продукта
1. Работа с требованиями
1. Разработка тест плана
1. Создание тестовой документации
1. Тестирование
1. Отчет о тестировании
1. Стабилизация
1. Эксплуатация

## 5. Тест план <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

**Test Plan** — это документ, описывающий весь объем работ по тестированию

Отвечает на вопросы:

* Что?
* Когда?
* Критерии начала/окончания тестирования.
* Окружение (environment) dev/staging/production?
* Подходы/техники/инструменты/виды тестирования?
* Браузеры/версии/OS/разрешения экрана?
* Кто? Обязанности? Ресурсы? Обучение?
* Сроки? 
* График?
* Стратегия тестирования.
* Ссылки на документацию.
* Ссылки на требования.


## 6. Тест дизайн <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

**Test design** — это этап процесса тестирования ПО, на котором проектируются и создаются тест кейсы, в соответствии с критериями качества и целями тестирования.

* **Тест аналитик** — определяет «ЧТО тестировать?»
* **Тест дизайнер** — определяет «КАК тестировать?»
* **Реальность** — все делает 1 человек :)


## 7. Техники тест дизайна <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

1. **Исчерпывающее тестирование (Exhaustive Testing)** <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>
  - проверка всех возможных комбинаций входных значений. 
  На практике применение этого метода не представляется возможным. (см. принцип тестирования №2)

1. **Эквивалентное Разделение (Equivalence Partitioning)** <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>
   - Как пример, у вас есть диапазон допустимых значений от 1.00 до 10.00 долларов, 
   вы должны выбрать одно любое верное значение внутри интервала, скажем, 
   5.00, и любые неверные значения вне интервала, например 0.99 и 11.00.

{% include lazyload.html 
image_width="100%" 
image_height="100%"
image_src="/assets/images/testing-theory/test-design-equvivalence.png" 
image_alt="Bug lifecycle" 
image_title="Bug lifecycle" %}


1. **Анализ Граничных Значений (Boundary Value Analysis)** <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>
- Как пример, у вас есть диапазон допустимых значений от 1.00 до 10.00 долларов.
- **Two value (двузначный) BVA**: валидные граничные значения 1.00, 10.00, и невалидные значения 0.99 и 10.01. 
- **Three/Full value (трехзначный) BVA**: валидные граничные значения 1.00, 1.01, 10.00, 9.99, и невалидные значения 0.99 и 10.01.

{% include lazyload.html
image_width="100%"
image_height="100%"
image_src="/assets/images/testing-theory/test-design-BVA.png"
image_alt="Bug lifecycle"
image_title="Bug lifecycle" %}

1. **Причина / Следствие (Cause/Effect)** <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>
- ввод комбинаций условий (причин), для получения ответа от системы (следствие). 
- Например, вы проверяете возможность добавлять клиента:
- **Причина**: необходимо заполнить поля «Имя», «Адрес», «Номер Телефона» и нажать кнопку «Добавить».
- **Следствие**: После нажатия на кнопку «Добавить», система добавляет клиента в базу данных и показывает его номер на экране.

1. **Предугадывание ошибки (Error Guessing)** <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>
- использование знаний системы и способность к 
   интерпретации спецификации на предмет того, чтобы «предугадать» 
   при каких входных условиях система может выдать ошибку.
- Например, спецификация говорит: «пользователь должен ввести код».
- Тестировщик будет думать: «Что, если я не введу код?», «Что, если я введу неправильный код?»...

{% include lazyload.html
image_width="100%"
image_height="100%"
image_src="/assets/images/testing-theory/test-design-error-guessing.png"
image_alt="Bug lifecycle"
image_title="Bug lifecycle" %}

## 8. Продвинутые техники тест дизайна

`Удиви интервьюера`

1. **Попарное тестирование (Pairwise Testing)** <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>
- Формирование таких наборов тестовых данных, в которых каждое тестируемое значение каждого из
  проверяемых параметров хотя бы единожды сочетается с каждым тестируемым значением всех остальных проверяемых параметров.
- Суть техники — мы не проверяем все сочетания всех значений, но проверяем все пары значений.

{% include lazyload.html
image_width="100%"
image_height="100%"
image_src="/assets/images/testing-theory/test-design-pair-wise.png"
image_alt="Bug lifecycle"
image_title="Bug lifecycle" %}

2. **Таблица принятия решений (Decision table)** <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>
- В таблицах решений представлен набор условий, одновременное выполнение которых должно привести к определенному действию/решению.

{% include lazyload.html
image_width="100%"
image_height="100%"
image_src="/assets/images/testing-theory/test-design-decision-table.png"
image_alt="Bug lifecycle"
image_title="Bug lifecycle" %}

3. **Диаграмма (граф) состояний-переходов (State Transition diagram)** <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>
- диаграмма для описания поведения системы. 
- Система имеет конечное число состояний и переходов между ними.
- Диаграмма может быть переведена в Таблицу состояний-переходов (или в таблицу принятия решений).

{% include lazyload.html
image_width="100%"
image_height="100%"
image_src="/assets/images/testing-theory/test-design-state-transition-diagram.png"
image_alt="Bug lifecycle"
image_title="Bug lifecycle" %}

4. **Use case (пользовательские сценарии)** <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

&nbsp;&nbsp;&nbsp; Это сценарий взаимодействия пользователя с системой для достижения цели.

Use case содержит:
* кто использует систему (например роль админ/покупатель/продавец).
* что пользователь хочет сделать.
* цели пользователя.
* шаги, которые выполняет пользователь.
* описание того, как система реагируют на действия пользователя.


## 9. Бонусные и авторские техники тест дизайна

`Просвети интервьюера. Открой ему глаза.`

1 - **Блок-схема (block scheme/diagram)** <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

&nbsp;&nbsp;&nbsp; Блок-схему можно использовать как технику тест дизайна, составляя тест-кейсы по логике схемы.

{% include lazyload.html
image_width="100%"
image_height="100%"
image_src="/assets/images/testing-theory/test-design-block-schema.png"
image_alt="Bug lifecycle"
image_title="Bug lifecycle" %}

2 - **Шляпы / роли** <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

&nbsp;&nbsp;&nbsp; Техника "Шляпы / роли" чем-то схожа с техникой составления тест кейсов по Use Case.

&nbsp;&nbsp;&nbsp; Надеваем шляпу определенной роли пользователя и представляем себя в его роли.
   
&nbsp;&nbsp;&nbsp; Пример: надеваем шляпу Кастинг Директора и размышляем как новый функционал будет работать для этой роли. 
Представляем, какие могут быть зависимости и особенности системы для Кастинг Директора.
Размышляем, какие бизнес цели преследует Кастинг директор в нашей системе.

{% include lazyload.html
image_width="100%"
image_height="100%"
image_src="/assets/images/testing-theory/test-design-hats-roles.png"
image_alt="Bug lifecycle"
image_title="Bug lifecycle" %}


3 - **Разговорчики-driven (talks-driven)** <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

&nbsp;&nbsp;&nbsp; О "Разговорчики-driven", "Analytics-driven", "Bug-driven" я пока нигде не слышал.

`Каждый имеет право придумать свою технику тест дизайна.` © Илларион

&nbsp;&nbsp;&nbsp; **Разговорчики-driven (talks-driven)** - собираем в одной комнате/звонке одного или нескольких
программистов, менеджеров, клиентов, тестировщиков и тд. И начинаем допрос о конкретной функции или всей системе.

&nbsp;&nbsp;&nbsp; Если фантазия не работает, то задаем Wh-вопросы:

what, when, where, who, whom, which, whose, why and how -
что, когда, где, кто, кому, какой, чей, почему, как

Для продвинутых: сначала собираем всех по одному, а потом по несколько человек. 
Не выпускаем, пока не получим все ответы и не решим какие тесты проектировать.


4 - **Аналитика-driven (analytics-driven)** <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

&nbsp;&nbsp;&nbsp; Если на проекте используется аналитика, например при кликах на кнопки
или при открытии страниц отправляются ивенты (events) в систему для аналитики, то можно
использовать данные аналитики для составления тест кейсов.

&nbsp;&nbsp;&nbsp; Мы знаем куда пользователи чаще всего кликают, на каких страницах проводят больше всего времени.
Почему бы основываясь на этих данных не составить тест кейсы?


5 - **Баг-driven (bugs-driven)** <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

&nbsp;&nbsp;&nbsp; Принцип тестирования №4 Скопление дефектов (Defects clustering) гласит, что "бОльшая часть дефектов .... содержится в небольшом количестве модулей".

&nbsp;&nbsp;&nbsp; Основываясь на найденных ранее багах и на обращениях клиентов в службу поддержки,
можно определить "больные" места системы и сконцентрировать тест кейсы на этих модулях системы.

&nbsp;&nbsp;&nbsp; Дополнительно над найденными багами можно посидеть и подумать
"а может ли аналогичный баг быть в другой части системы?".


## 10. Exploratory vs Ad-hoc testing

**Исследовательское тестирование (exploratory testing)** <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>
- это одновременное изучение системы, проектирование тестов (тест дизайн) и тестирование.
- Данная техника базируется на опыте тестировщика (experience based).
- Пример: приходит тестировщик на новый проект и начинает одновременно изучать сайт,
  писать чек-лист и проходить этот чек-лист (тестировать).

**Ad-hoc тестирование** <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>
- Перевод от автора статьи - "тестирование от балды".
- Вид тестирования, который выполняется без подготовки к тестам, без определения ожидаемых результатов, проектирования тестовых сценариев.
- Неформальное, импровизационное тестирование.


## 10. Test Case (тестовый случай) <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>
&nbsp;&nbsp;&nbsp; **Test Case** — это артефакт/документ, описывающий совокупность шагов, 
конкретных условий и параметров, необходимых для проверки тестируемой функции.

&nbsp;&nbsp;&nbsp; **Test Case** - это описание проверки работы системы, которое может выполнить любой человек из команды.

&nbsp;&nbsp;&nbsp; **Тест кейс состоит из**:
* ID (идентификатор)
* Title (название)
* Type (тип)
* Priority (приоритет)
* Preconditions (предусловия)
* Steps (шаги)
* Expected Result (ожидаемый результат)
* Post conditions (пост условия) - например очистка данных или возвращение системы в первоначальное состояние.

Тест кейсы разделяются на позитивные и негативные:
* **Позитивный тест кейс** использует только корректные данные и проверяет, что приложение правильно выполнило вызываемую функцию.
* **Негативный тест кейс** оперирует как корректными, так и некорректными данными (минимум 1 некорректный параметр) 
  и ставит целью проверку исключительных ситуаций (срабатывание валидаторов), а также проверяет, 
  что вызываемая приложением функция не выполняется при срабатывании валидатора.

Примеры и лучшие практики создания тест кейсов - <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>


## 11. Check-list (Чек-лист) <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

&nbsp;&nbsp;&nbsp; **Check list** — это документ, описывающий что должно быть протестировано.

&nbsp;&nbsp;&nbsp; **Check list** — список пунктов, которые нужно протестировать.

* Чек-лист может быть абсолютно разного уровня детализации.
* Как правило, чек-лист содержит только действия (шаги) без ожидаемого результата.
* Чек-лист менее формализован чем тест кейс.

Примеры и лучшие практики создания чек-листов - <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>


## 12. Bug report (баг репорт) <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

&nbsp;&nbsp;&nbsp; **Bug Report** — 
это документ, описывающий последовательность действий, которые привели к некорректной работе системы, с указанием причин и ожидаемого результата.

&nbsp;&nbsp;&nbsp; **Основные составляющие Bug report**:
* ID (идентификатор)
* Название (Title) 
* Короткое описание (Summary)
* Проект (Project)
* Компонент приложения (Component)
* Номер версии (Version)
* Серьезность (Severity)
* Приоритет (Priority)
* Статус (Status)
* Автор (Author)
* Назначен на (Assignee)
* Окружение (Environment)
* App/build version (версия билда/приложения)
* Шаги воспроизведения (Steps to Reproduce)
* Фактический Результат (Actual Result)
* Ожидаемый результат (Expected Result)


&nbsp;&nbsp;&nbsp; **Дополнительные составляющие Bug report**:
* Screenshots (скриншоты) <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>
* Video (видео)
* Credentials (login + password)
* Browser console errors (логи с браузера)
* Mobile app logs (логи с мобилки)
* Server logs (логи с сервера)


* Requests (запросы)
* Analytics events (ивенты с аналитики)
* Database data (данные из базы данных)
* Database queries (запросы в базу)


* Date and time (дата и время)
* Comments/Notes (комментарии/заметки)
* Link tasks/bugs (подвязка других задач/багов к текущему)


* HAR archive <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>


## 13. Severity vs Priority <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

&nbsp;&nbsp;&nbsp; **Серьезность (Severity)** — это атрибут, характеризующий влияние дефекта на работоспособность приложения.

Severity выставляется тестировщиком.


**Градация Severity:**
* S1 Блокирующая (Blocker)
* S2 Критическая (Critical)
* S3 Значительная (Major)
* S4 Незначительная (Minor)
* S5 Тривиальная (Trivial)

&nbsp;&nbsp;&nbsp; **Приоритет (Priority)** — это атрибут, указывающий на очередность выполнения задачи или устранения дефекта. 
Чем выше приоритет, тем быстрее нужно исправить дефект.

Priority выставляется менеджером, тимлидом или заказчиком.

Реальность: на всех проектах, где я работал, был только priority :)

**Градация Priority:**
* P1 Высокий (High)
* P2 Средний (Medium)
* P3 Низкий (Low)

Пример вопроса на собеседовании про Severity / Priority - <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>


## 14. Traceability matrix (Матрица соответствия требований)

&nbsp;&nbsp;&nbsp; **Traceability matrix** - это двумерная таблица, 
содержащая соответствие функциональных требований и тест кейсов.

В заголовках колонок таблицы расположены требования, 
а в заголовках строк — ID тест кейсов. 

На пересечении — отметка, означающая, что требование текущей колонки покрыто тестовым сценарием текущей строки.


## 15. Defect / Error / Bug / Failure

&nbsp;&nbsp;&nbsp; **Дефект (он же баг)** — это несоответствие фактического результата ожидаемому результату, описанному в требованиях.

&nbsp;&nbsp;&nbsp; **Bug (defect)** — ошибка программиста (или другого члена команды), то есть когда в программе, 
что-то идёт не так как планировалось и программа выходит из-под контроля.

Например, когда никак не контролируется ввод пользователя,
в результате неверные данные вызывают краши или иные «приколы» в работе программы. 
Либо внутри программа построена так, что изначально не соответствует тому, что от неё ожидается.

&nbsp;&nbsp;&nbsp; **Error** — ошибка пользователя, то есть он пытается использовать программу иным способом.

Пример — вводит буквы в поля, где требуется вводить цифры (возраст, количество товара и т.п.).

&nbsp;&nbsp;&nbsp; **Failure** — сбой (причём необязательно аппаратный) в работе компонента, всей программы или системы. 

То есть, существуют такие дефекты, которые приводят к сбоям и существуют такие, которые не приводят. 
UI-дефекты например. Но аппаратный сбой, никак не связанный с software, тоже является failure.



## 16. Уровни Тестирования (Levels of testing)
1. **Модульное тестирование (Unit Testing)**
   Тестирование объектов, классов, функций и т.д., обычно выполняемое программистами.

2. **Интеграционное тестирование (Integration Testing)**
   Тестирование взаимодействия между классами, функциями, модулями. Например тестирование API через Postman. <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

3. **Системное тестирование (System Testing)**
   Проверка как функциональных, так и не функциональных требований в системе. 
   
4. **Приемочное тестирование (Acceptance Testing)**
   Проверка соответствия системы требованиям и проводится с целью:
   * определения удовлетворяет ли система приемочным критериям;
   * вынесения решения заказчиком/менеджером принимается приложение или нет.


## 17. Виды / типы тестирования (Testing types)

##### 17.1. Функциональные виды тестирования
* Функциональное тестирование (**Functional testing**)
* Тестирование пользовательского интерфейса (**GUI Testing**)
* Тестирование безопасности (**Security and Access Control Testing**)
* Тестирование взаимодействия (**Interoperability Testing**)


##### 17.2. Нефункциональные виды тестирования
* Все виды тестирования производительности (**Performance**):
    + нагрузочное тестирование (**Load Testing**) - много пользователей.
    + стрессовое тестирование (**Stress Testing**) - очень много данных и/или пользователей (пиковые значения).
    + объемное тестирование (**Volume Testing**) - много данных.
    + тестирование стабильности или надежности (**Stability / Reliability Testing**)


* Тестирование установки (**Installation testing**)
* Тестирование удобства пользования (**Usability Testing**)
* Тестирование на отказ и восстановление (**Failover and Recovery Testing**)
* Конфигурационное тестирование (**Configuration Testing**)


##### 17.3. Связанные с изменениями виды тестирования
* Дымовое тестирование (**Smoke Testing**)
* Регрессионное тестирование (**Regression Testing**)
* Повторное тестирование (**Re-testing**)
* Тестирование сборки (**Build Verification Test**)
* Санитарное тестирование или проверка согласованности/исправности (**Sanity Testing**)


{% include lazyload.html image_width="100%" image_height="100%" image_src="https://hsto.org/files/bd6/dcb/bb7/bd6dcbbb7d7c44a485b65ae29b4c0ae4.png" image_alt="Testing types" image_title="Testing types" %}


## 18. Принципы тестирования (Principles of testing)

**1. Тестирование демонстрирует наличие дефектов** (Testing shows presence of defects)

Тестирование может показать, что дефекты присутствуют, но не может доказать, что их нет. 

[comment]: <> (Тестирование снижает вероятность наличия дефектов,)

[comment]: <> (находящихся в программном обеспечении, но, )

[comment]: <> (даже если дефекты не были обнаружены, это не доказывает его корректности.)


**2. Исчерпывающее тестирование недостижимо** (Exhaustive testing is impossible)

Полное тестирование с использованием всех комбинаций вводов и предусловий физически невыполнимо, за исключением тривиальных случаев.

**3. Раннее тестирование** (Early testing)

Чтобы найти дефекты как можно раньше,
активности по тестированию должны быть начаты как можно раньше в жизненном цикле разработки.

**4. Скопление дефектов** (Defects clustering)

Как правило, большая часть дефектов, 
обнаруженных при тестировании, содержится в небольшом количестве модулей.

**5. Парадокс пестицида** (Pesticide paradox)

Если одни и те же тесты будут прогоняться много раз, 
в конечном счете этот набор тестовых сценариев больше не будет находить новых дефектов.

**6. Тестирование зависит от контекста** (Testing is concept depending)

Тестирование выполняется по-разному в зависимости от контекста.

**7. Заблуждение об отсутствии ошибок** (Absence-of-errors fallacy)

Обнаружение и исправление дефектов не помогут, 
если созданная система не подходит пользователю и не удовлетворяет его ожиданиям и потребностям.



## 19. Cтатическое и динамическое тестирование

&nbsp;&nbsp;&nbsp; **Статическое (static) тестирование** производится **БЕЗ** запуска кода продукта.

Примеры: тестирование требований/документации, код ревью, статические анализаторы кода.

&nbsp;&nbsp;&nbsp; **Динамическое (dynamic) тестирование** производится **С** запуском кода продукта.


## 20. Требования (requirements)

&nbsp;&nbsp;&nbsp; **Требования** - это спецификация (описание) того, что должно быть реализовано.

Требования описывают то, что необходимо реализовать, 
без детализации технической стороны решения. Что, а не как.

**Требования к требованиям**:
1. корректность
1. недвусмысленность
1. полнота
1. непротиворечивость
1. упорядоченность по важности и стабильности
1. проверяемость (тестопригодность)
1. модифицируемость
1. трассируемость
1. понимаемость


## 21. Жизненный цикл бага

{% include lazyload.html image_width="50%" image_height="50%" image_src="/assets/images/testing-theory/bug-lifecycle.png" image_alt="Bug lifecycle" image_title="Bug lifecycle" %}


## 22. Жизненный цикл разработки ПО

**Software Development Life Cycle (SDLC):**
0. Идея (Idea)
1. Сбор и анализ требований (Planning and Requirement Analysis)
2. Документирование требований (Defining Requirements)
3. Дизайн (Design Architecture)
4. Разработка (Developing)
5. Тестирование (Testing)
6. Внедрение/развертывание (Deployment)
7. Поддержка (Maintenance)
8. Смерть (Death)

## 23. Методологии разработки <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

Waterfall <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

V-model <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

Spiral <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

Kanban <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

Scrum <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

Scrum-ban <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UC-nnrcFlfveeW8iBRJe_XXQ" title="Youtube"><i class="fa fa-1x fa-youtube-square"></i></a>

## To be continued... TODO

Источники:
https://dou.ua/forums/topic/13389, 
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



