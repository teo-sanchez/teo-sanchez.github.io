---
layout: page
title: teaching
page_title: "Teaching 💼"
permalink: /teaching/
description: Archive of the classes I was involved in as as teaching assistant. I completed <b>392</b> hours of teaching in Université Paris-Saclay, and I co-designed and taught three courses from the interdisciplinary teaching project on AI in Culture and Arts, between Hochschule München University of Applied Sciences and the Hochschule für Musik und Theater München.
nav: true
display_categories: [Master, Interdisciplinary, Bachelor]
horizontal: true
nav_order: 3
---
<div class="projects">
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
            {% if teaching.show %}
              {% include teachings_horizontal.html %}
            {% endif %}
          {% endfor %}
          </div>
        </div>
      {% else %}
        <div class="grid">
          {% for teaching in sorted_teaching %}
            {% if teaching.show %}
              {% include teachings.html %}
            {% endif %}
          {% endfor %}
        </div>
      {% endif %}
    {% endfor %}

  {% else %}
    {% assign sorted_teaching = site.teaching | sort: "importance" %}
    <!-- Generate cards for each teaching -->
    {% if page.horizontal %}
      <div class="container">
        <div class="row row-cols-1">
        {% for teaching in sorted_teaching %}
          {% if teaching.show %}
            {% include teachings_horizontal.html %}
          {% endif %}
        {% endfor %}
        </div>
      </div>
    {% else %}
      <div class="grid">
        {% for teaching in sorted_teaching %}
          {% if teaching.show %}
            {% include teachings.html %}
          {% endif %}
        {% endfor %}
      </div>
    {% endif %}

  {% endif %}

</div>


