Objective
===

Create a page that displays user trophies. Created using weback and react.

Steps Taken
===

Parse through a heavily nested amount of data to produce desired trophies and content. This was accomplished by transforming the large amount of data into smaller bite size pieces in the Categories component. Those pieces were then fed down into smaller more specialized components of Category and Trophy. Category conditionally renders each trophy with a classname when the "show more" button is pressed. This classname is then used to hide and show trophies and adjust the size of the grid. Trophy information is brought up when clicked in a modal.

Reflection / Changes
===

This was a fun exercise. The challenge here was changing the number of items in the list shown depending on screen size. CSS does a really good job of this with media queries, but CSS does not know the amount of things in a list. React is good at conditional rendering and knowing the amount of things in a list, but does not do well with media queries and forced updates (very inefficient). This was why the button to "show more" did not disappear after all trophies in a category were already shown. In the future, this would require a listener on window resize in componentDidMount() with throttled forced updates (pretty nasty) to conditionally render that button when it is no longer needed.
