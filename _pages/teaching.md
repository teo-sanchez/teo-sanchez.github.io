---
layout: page
title: teaching
permalink: /teaching/
description: Archive of the class I was involved in. I completed <b>392</b> hours of teaching so far.
nav: true
display_categories: [Licence 1, Licence 2, Licence 3, Master 1]
horizontal: true
nav_order: 3
---
<div class="teachings">
  {% if site.enable_teaching_categories and page.display_categories %}
  <!-- Display categorized teaching -->
    {% for category in page.display_categories %}
      <a id="{{category}}"><h2 class="category">{{category}}</h2></a>
      {% assign categorized_teaching = site.teaching | where: "category", category %}
      {% assign sorted_teaching = categorized_teaching | sort: "importance" %}
      <!-- Generate cards for each teaching -->
      {% if page.horizontal %}
        <div class="container">
          <div class="row row-cols-1">
          {% for teaching in sorted_teaching %}
            {% include teachings_horizontal.html %}
          {% endfor %}
          </div>
        </div>
      {% else %}
        <div class="grid">
          {% for teaching in sorted_teaching %}
            {% include teachings.html %}
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}

  {% else %}
  <!-- Display teachings without categories -->
    {% assign sorted_teaching = site.teaching | sort: "importance" %}
    <!-- Generate cards for each teaching -->
    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1">
        {% for teaching in sorted_teaching %}
          {% include teachings_horizontal.html %}
        {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="grid">
        {% for teaching in sorted_teaching %}
          {% include teachings.html %}
        {% endfor %}
      </div>
    {% endif %}

  {% endif %}

</div>


