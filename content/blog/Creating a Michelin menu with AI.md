---
date: 2024-07-11
title: Creating a Michelin menu with AI
---

We've been watching season three of [*The Bear*](https://www.themoviedb.org/tv/136315-the-bear) and it is totally nuts, filled with drama and psychology, and human relationships, and –when they can get around to it– cooking food.  This is a fantastic series, and as foodies, you can imagine that my wife and I really enjoy it.  The series is intense, following a classically-trained, at the top of his game chef as he "drops down" from a fancy restaurant to a steak sandwich shop and works back toward where he was before.

That’s not a spoiler, it’s the premise.  And this isn’t a review, it was just something in my mind as I experimented with this new tool called  [LobeChat](https://lobehub.com), which is an interface to #genAI inference servers such as #OpenAI’s #chatGPT, #Claude,   and  nearly any other commercial or #opensource system you can imagine.  I'm tweaking a #homelab hosted genAI inference server and this post is about experimenting with [[Ollama]] and a  Lobe chat  front end for easy access.  I haven’t formed a final opinion on this setup at this time, but the #LobeChat front end allows for the quick switching between inference servers and their hosted models.  While not being super easy to configure, once it works, the whole thing looks very easy for someone, i.e. a roommate or a spouse, to flip between models -*even in the same conversation*.

So let’s look at some results.  Of course, the results are about the models themselves, but the point here is that LobeChat made it easy to switch between them as I continued to develop the conversation.

## First prompt
This was with ChatGPT (4o, I think).  I needed something to test that an integration was working.  We had just watched *The Bear* so this is what I came up with: 

> as fast as you can, what's the best restaurant dinner menu with wine pairing that could win a Michelin 3 star award?


### Response
Crafting a Michelin 3-star worthy dinner menu with wine pairings involves high-quality ingredients, exquisite preparation, and a thoughtful combination of flavors. Here’s a conceptual menu that could impress:

**Amuse-Bouche:**
- *Oyster with Champagne Foam*
  - **Wine Pairing:** Champagne Brut

**Appetizer:**
- *Seared Scallops with Cauliflower Puree and Caviar*
  - **Wine Pairing:** Chablis, Premier Cru

**Soup:**
- *Cream of White Asparagus with Truffle Oil*
  - **Wine Pairing:** Viognier

**Fish Course:**
- *Poached Turbot with Fennel and Citrus Beurre Blanc*
  - **Wine Pairing:** Pouilly-Fumé

**Main Course:**
- *Roasted Duck Breast with Plum Sauce, Parsnip Mash, and Seasonal Vegetables*
  - **Wine Pairing:** Pinot Noir, preferably from Burgundy

**Cheese Course:**
- *A Selection of Artisan Cheeses with Honeycomb*
  - **Wine Pairing:** Vintage Port

**Dessert:**
- *Chocolate Lava Cake with Raspberry Coulis and Homemade Vanilla Bean Ice Cream*
  - **Wine Pairing:** Recioto della Valpolicella

**Mignardises:**
- *Petit Fours and Truffles*

This menu balances rich flavors with delicate preparation, offering a progression of dishes that showcase both technique and creativity. Each wine pairing is chosen to enhance the flavors of the dishes, aiming to create a harmonious dining experience that could captivate both critics and diners alike.

### Review

Not a bad first response, especially since I was just checking to see if the system worked.

## Prompt 2: Get ChatGPT to refine it

That was pretty boring.  I’m thinking early 90s fancy dining at best, but I wasn’t eating fancy back then and assume it was all shoulder pads, tuna steaks, and cocaine.  Continuing with ChatGPT, I posed the following in an attempt to refine our menu (in retrospect, I was generous with the stars):

> That's an incredibly boring menu.  At best 2 stars.  And that's in a region that is not known for its gastronomical excellence

### Response

Creating a truly innovative and Michelin 3-star worthy menu certainly demands a more avant-garde approach, pushing culinary boundaries with unique combinations and exceptional techniques. Let's elevate the original concept to something more daring and creative:

**Amuse-Bouche:**
- *Nitro-frozen Lime and Ginger Pearls with Micro Basil*
  - **Wine Pairing:** Small-batch Sake

**First Course:**
- *King Crab Tartare with Avocado Mousse, Mango Gel, and Edible Flowers*
  - **Wine Pairing:** Albariño

**Second Course:**
- *Foie Gras Au Torchon with Saffron Pear Compote and Brioche Crisp*
  - **Wine Pairing:** Sauternes

**Fish Course:**
- *Butter-Poached Monkfish with Leek Ash, Sea Beans, and a Lemon Verbena Emulsion*
  - **Wine Pairing:** White Burgundy

**Intermezzo:**
- *Cucumber and Elderflower Sorbet*

**Main Course:**
- *Sous-vide Venison Loin with Black Garlic Purée, Wild Mushrooms, and a Juniper Berry Reduction*
  - **Wine Pairing:** Barolo

**Cheese Course:**
- *A Selection of Aged Cheeses with a Fig and Walnut Tapenade*
  - **Wine Pairing:** Aged Madeira

**Dessert:**
- *Deconstructed Passion Fruit Tart with Coconut Foam, Crystallized Ginger, and Meringue Shards*
  - **Wine Pairing:** Late Harvest Riesling

**Petit Fours:**
- *Matcha Green Tea Macarons, Raspberry Pâte de Fruit*

This revised menu introduces more complex techniques and unusual ingredients, aiming to surprise and delight with every course. Wine pairings are carefully selected to complement and enhance these adventurous flavors, providing a sophisticated and memorable dining experience.


### Review 
Not bad!  It would be nice if the wines were more than broad regions, however, I do appreciate the ‘ñ’ in Albariño.  There’s nothing particularly innovative here; the fancy-sounding “Foie Gras Au Torchon with Saffron Pear Compote and Brioche Crisp” is a Thomas Keller recipe, so at least we’re pulling from the top now that I asked it to up its game.


## Prompt 3: Let's try a different model

Not only am I using a different model at this point, `llama3:instruct` running on a local system via [[Ollama]], but I am going to specify a food critic in order to change the menu.

### Prompt

> One more try: let's make a menu that would knock even James Beard out of his chair because it's so good

### Response 

You are absolutely right! That menu, while technically sound, lacks the daring, innovation, and personal touch needed to truly impress Michelin inspectors and earn those coveted three stars. It plays it too safe, relying on classic pairings and predictable dishes.  

To push towards that 3-star level, we need to think outside the box:

* **Ingredient Focus:**  Instead of "seasonal vegetables," source hyper-local, unique produce with a story. Maybe a heirloom tomato variety grown in volcanic soil, or foraged mushrooms with a distinct flavor profile.
* **Deconstruction & Fusion:** Take classic elements and reimagine them. A deconstructed apple pie might involve caramelized apple spheres, crumble as a powder, and a cider foam.  Fusion could bring Japanese umami to the duck dish, or Indian spices to the scallops.
* **Unexpected Textures:** Play with contrasts – crunchy, creamy, smooth, airy. Think smoked paprika meringue alongside the chocolate lava cake, or a black truffle "soil" under the turbot.

**Wine Pairings Should Be Equally Bold:** 
* Instead of a basic Chablis, consider an obscure producer from the Côte de Beaune known for mineral-driven wines.  
* The Pinot Noir could be a lesser-known region with unique terroir, like Slovenia's Primorska.
* Experiment with natural wines, or even sake pairings that complement specific dishes.

**The Presentation Matters:** 

Plating should be artistic, telling a story through the arrangement of colors, textures, and shapes. It’s about creating an immersive experience for the diner.


A Michelin-worthy menu isn't just about taste; it's about pushing boundaries, showcasing creativity, and offering a truly unforgettable journey through flavor. 

### Review

This is less of a menu than some advice for the aspiring chef.  Let’s try something different.
## Prompt 4: Let's go for Three Stars!

I felt like this was the time to go for the gusto, let's see how a different model -this time `gemma2` again using Ollama to perform inference- would respond, but also with all the history behind it.

### Prompt

I asked: 
> One more try:  let's make a menu that would knock even James Beard out of his chair because it's so good

While it's not a crazily-innovative menu, it has some classic touches of a what an American, Michelin-starred menu would look like, and 

### Response with gemma2

You want to blow James Beard away? This isn't about *ingredients*, it's about **experience**. 

**The Menu: A Symphony in Five Acts**

* **Act I: Awakening** -  Smoked Salmon "Caviar" with Beetroot Foam, Rye Crisp, and a single drop of Ossetra Caviar.
    - **Pairing:** Dry Riesling from Germany's Mosel Valley, expressing its slate minerality alongside the salmon's richness.

* **Act II: Earth & Sky** - Roasted Quail "Confit" with Black Truffle Jus, Heirloom Carrot "Clouds," and a dusting of Micro Thyme.
    - **Pairing:**  Oregon Pinot Noir, showcasing earthy notes that harmonize with the truffle while its bright acidity cuts through the richness.

* **Act III: Fire's Dance** - Charred Octopus with Smoked Paprika Aioli, Caramelized Onion Jam, and a drizzle of Chili Infused Olive Oil.
    - **Pairing:**  Spanish Albariño, crisp and mineral-driven, its citrus notes complementing the octopus while balancing the smoky paprika.

* **Act IV: Ocean's Bounty** - Pan-Seared Sea Scallops with Saffron Risotto "Foam," Dulse Crisp, and a single Pearl Oyster.
    - **Pairing:**  Chablis Premier Cru, its intense minerality mirroring the scallops' brininess, while subtle citrus notes elevate the saffron risotto.

* **Act V: Sweet Serenade** - Deconstructed Peach Cobbler with Lavender Honey Ice Cream, Toasted Almond Brittle, and a hint of Rosemary Extract.
    - **Pairing:**  Late Harvest Gewürztraminer from Alsace, its floral aroma echoing the lavender, while its sweetness complements the peach cobbler's richness.

**The Experience:**

* Each course is plated as a miniature work of art, using contrasting colors, textures, and temperatures. 
* The dining room itself is a sensory experience, with soft lighting, calming music, and subtle aromas that enhance each dish.
* Service is impeccable, with knowledgeable staff guiding guests through the tasting menu and explaining the inspiration behind each course.

This is not just food; it's a journey for the senses, a story told through flavor and texture, leaving James Beard speechless (and perhaps, slightly envious).

### Recap

Wow, what a different response!  This one could actually be a menu, with the wines having robust and specific descriptions.  I especially like how the wines are sourced from all over the globe, really picking best of breed in the selections.  As good as the wines are, however, the food does not look 3-star level to me.  The dishes sound really nice, and there’s a fair bit of molecular gastronomy in there.  However, aside from the poetic nature of the menu, I’m not sure this is a top-tier menu for a chef to execute.

Still, most of these items are good enough for a fake restaurant.  If this was to show up in a video game or a novel, I think most people would accept it and move on.