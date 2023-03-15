---
layout: distill
title: Teachable Pianocktail
description: Design and realisation of the fictionnal pianocktail from the french author Boris Vian.
img: /assets/img/pianocktail/pianocktail.gif
importance: 1
category: art
---

Boris Vian is a prolific french artist that I particulary admire for his ability to have multiple life in one. He only lived 39 years but he was trained engineer (in Centrale Paris, now part of Paris-Saclay), a jazz trumpeter, a writer (mostyle known for this) and a song composer and interpret!

<div class="row justify-content-sm-center">
    <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/pianocktail/Boris_Vian.jpg' | relative_url }}" alt="" title="example image" width="500"/>
</div>
<div class="caption">
    Boris Vian in 1948. Source Wikipedia. Any resemblance to real and actual french president is purely coincidental.
</div>

In one of his most famous book "Froth on the Daydream" (L'écume des jours), his character Colin built a absurd and mythical instrument called Pianocktail: a piano that can prepare a cocktail depending on what is played.
He introduces the instrument to his friend Chick:

>  "— Would you like a drink? asked Colin. My pianocktail is finished, you could try it out.
> 
> — It works? asked Chick.
> 
> — Perfectly. I had trouble getting all the bugs out but the results go beyond my expectations. I got a truly astounding mix out of Black and Tan Fantasy.
> 
> — How did you make it work? asked Chick.
> 
> — With every note, said Colin, I’ve matched a spirit, liqueur or flavoring. The loud pedal corresponds to whipped egg and the soft pedal to ice. For seltzer water, you need to do a trill in the upper register. The quantities are in direct proportion with the duration: the 64th note equals a 16th part, a quarter note one part and a whole note four parts. When playing a slow tune, a leveling system is put to work so that the quantity is not increased—that would make for too abundant a cocktail—only the alcohol content. And, depending on the length of the tune, the part’s valence can be changed, reducing it for example to one one-hundredth to get a drink that takes into account all of the harmonies by means of a lateral regulator.
> 
> — That’s complicated, said Chick.
> 
> — Everything is controlled by electrical contacts and relays; I won’t give you the details, you know all that. And besides, what’s more, the piano really works.
> 
>  — That’s marvelous! said Chick.
> 
> — There’s only one problem, said Colin. The loud pedal for the whipped egg. I had to put in a special system of interlocking parts because when you play a tune that’s too "hot," pieces of omelet fall into the cocktail and it’s hard to swallow. I’ll modify that. For the time being, you just need to be careful. For the sour cream, it’s low G.
> 
> — I’m going to make myself one on Loveless Love, said Chick. It’ll be great.
> 
> — It’s still in the junk room that I turned into a workshop, said Colin, because the protection plates aren’t screwed in. Come on, let’s go. I’ll set it for two cocktails of about twenty centiliters, to start off with.
> 
> Chick sat down at the piano. At the end of the tune, part of the front panel opened up with a clap and a row of glasses appeared. Two of them were filled to the rim with an appetizing mixture.
> 
> — You scared me, said Colin. At one point you hit a wrong note. Luckily, it was in harmony.
> 
> — It accounts for the harmony? said Chick.
> 
> — Not all the time, said Colin. That would be too complicated. There are only a few constraints. Drink and come eat."

What strikes me is the arbitrary and bizarre rules that Colin designed to map music to ingredients. 
In this post, I'll describe the design process of my own interpretation of the pianocktail, trying to justify and inform the different phase of the design process to do something less arbitrary and more adpative to the player. Of course I'm not the first one to attempt building a pianocktail. I will first present a short reviews on the existing specimen, either functionnal or decorative (as the one used in the movie adaptation from Michel Gondry).

My first prototype was made very  quickly (two weeks) for an event in Cité Internationale Universitaire de Paris.
Finally, I'll present the design process of a second iteration that I called "teachable pianocktail" that use machine learning to map musical intentions to a cocktail recipee.

#   Reviews on the realisations and representations of pianocktails

TODO

<div class="row justify-content-sm-center">
    <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/pianocktail/gondry.jpg' | relative_url }}" alt="" title="example image" width="700"/>
</div>
<div class="caption">
    A decorative Pianocktail in the movie adaptation from Michel Grondy.  Colin  is played by Romain  Duris (on the right) and Chick is played  by Gad Elmaleh (playing the piano).
</div>

<div class="row justify-content-sm-center">
    <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/pianocktail/martin.png' | relative_url }}" alt="" title="example image" width="350"/>
</div>
<div class="caption">
    The real and functionnal pianocktail from Voel Martin, built on a real acoustic piano that do not use computation but electronic. Each ingredient is associated to a note.
</div>


<div class="row">
    <div class="col-sm mt-2 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/' | relative_url }}" alt="" title="example image"/>
    </div>
    <div class="col-sm mt-2 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/pianocktail/' | relative_url }}" alt="" title="example image"/>
    </div>
</div>
<div class="caption">
    On the right is the
</div>

<div class="row justify-content-sm-center">
<iframe width='100%' height='100%' frameborder='0' marginheight ='0' marginwidth='0' scrolling ='no' src='https://player.ina.fr/player/embed/I11236594/1/1b0bd203fbcd702f9bc9b10ac3d0fc21/wide/1' allow='fullscreen,autoplay'></iframe>
</div>
<div class="caption">
    Probably one of the first realization of a decorative pianocktail for the first movie adaptation of "Froth on the Daydream" by par Charles Belmont in 1968.
</div>

<div class="row justify-content-sm-center">
<iframe width="608" height="486" src="https://www.youtube.com/embed/Py7MyPRHTvI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
<div class="caption">
    The elecrtro-mechanical pianocktail (no computer involved) made by Voel Martin presented in the TV show "La boîte à musique de Mr. jean-François Zygel" in 2011. A more recent version of this pianocktail was played by the musician Mezerg (video available on YouTube).
</div>


# First prototype  

TODO

<div class="row justify-content-sm-center">
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/pianocktail/pianocktail-4.jpg' | relative_url }}" alt="" title="example image"/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/pianocktail/pianocktail-1.jpg' | relative_url }}" alt="" title="example image"/>
    </div>
    <div class="col-sm mt-3 mt-md-0">
        <img class="img-fluid rounded z-depth-1" src="{{ '/assets/img/pianocktail/pianocktail-6.jpg' | relative_url }}" alt="" title="example image"/>
    </div>
</div>
<div class="caption">
    Captions of the first prototype, presented at different events in Cité Internationale Universitaire de Paris.
</div>


# Second prototype: the teachable pianocktail

In progress... Here is the plan of the  design process:

### How do bar tender create cocktails? Applying computational thinking the cocktail creations
Interviews with a bar tender specialized in cocktail.

### Technical realization: reactive programming and on-board system.

### Inauguration and feedback

