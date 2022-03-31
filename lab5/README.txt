Prior to Starting the Lab I had to fix my Lab4. It worked on my end while working but seemed to not work after.
I decided to start from scrath and refresh with some tutorials. This one helped immensly
https://www.youtube.com/watch?v=RSJxWJ6dCL4
i installed 
express, cors, and axios via npm install
I used these api calls
https://github.com/andjosh/thecolorapi/blob/7929bcef5bcd258165ff9f751b311e3ff37e3f0a/lib/cutils.js#L37
https://api.fisenko.net/v1/quotes/en/random
I created a component to hold my main content - the quote and button
and a seperate component for the data base calls for Part 3.
 with the quote component i created a function that gets called on button click that alters quote text and color scheme by calling my 
 node server endpoints.

 I than started to do some research on mongodb
 I am struggling with how to connect mongodb efficiently

I than realized i was calling my mongo completely wrong.
I than began to work on my DB node calls 

Finally i began the pt3 component which included 4 buttons and input field and a text area field that I used with corresponding ts functions to call my api.