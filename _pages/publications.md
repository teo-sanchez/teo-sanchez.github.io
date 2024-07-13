---
layout: page
permalink: /publications/
title: "publications"
page_title: "Publications 📄"
description: Publications in reverse chronological orders
years: [2024, 2023, 2022, 2021, 2020, 2014]
nav: true
nav_order: 1
---
<!-- _pages/publications.md -->
<div class="publications">

{%- for y in page.years %}
  <h2 class="year">{{y}}</h2>
  {% bibliography -f papers -q @*[year={{y}}]* %}
{% endfor %}

</div>