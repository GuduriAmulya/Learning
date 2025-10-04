# This is a Shop site 
with categories fruits, electronics and clothing, has functionalities like rendering the products in cards, Add to Cart feature.
One HTML page (products.html)  dynamically show different categories depending on what’s in the URL. window.location.href = `products.html?category=${encodedCategory}`;

Instead of making separate pages for every product category, we use the same page (products.html) and pass the selected category through the URL. The page reads the category from the URL, filters the products, and displays only the relevant items. This makes the app more dynamic, shareable, and easy to maintain.”
