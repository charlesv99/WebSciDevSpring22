 first I copied my server js and set up the file structure for the Lab
 new angular and node express project

 Edited my Node to access different collection and add functions for each additional apis.
 Thank wrote a short python script similar to the one i used last labe to call all the apis
 sort the information into a schema and that call the post function to fill the DB.

https://heynode.com/tutorial/etl-transform-data/?code=def5020071c54c9b34cb5d051e9c4ebe297d37549691e4b03e66f63581687b21d99cd327936d65b174ed0540cebc5a2d30b95cb6fbce1b95bae6758b5e168972afea4332ef8c94d669d6d9a5c29acefeb4bbdc967efa8a98669d0816a42fa4b52d596d54188a645c1ed8fe489c86c054dde0d0d4b5ce135bc787aff946d3edb91b4ffb9142d63c4b065586c97eaa4f7474110acbb1e5b4403a1c422a68df2cce63a341bb223159a2fb20406dc77f2117141c782a023ee31b0add20aafa7f7acdff9590b48e04f083a03597b995d49e4908422a4d78f0907b18a1a6ddc83b410e19223a501e9958cfed3a0a789c6a9a119f6a8b8f6327ec7a232f247eea242e177304f22e91da3fe2eb009a2ded6445f3e35b0ffcd00011cbb474381f55f91526270eafbfc88ea316cbca3782f4f1144e620d4ca2a93181cf3432fd861380a5739b40b5666e399dbf6d3c639a23cecd0db98f561eeee8519ba700b34ac9ddf2aca4f475d12a57d54be56c46d73cccde17f1fa2542342d3831bf89db002c3bbe518b0cbd37d2c2291503839d21f612bc6cdb68063a6d6a39095fb9&state=%7B%7D&new_user=1
 https://www.youtube.com/watch?v=bdS03tgD2QQ&t=8s this is part 4 of a good tutorial series.
was confusing since she just did it in seperate javascripts

https://api.fisenko.net/v1/quotes/en/random
https://api.quotable.io/random
https://zenquotes.io/api/random
http://quotes.stormconsultancy.co.uk/random.json

Schema:
{
    '_id': 1,
    'quote': "",
    'author': ""
}

I wrote a python script that uses my node api and request module to call the apis filter theme apply the schema and send to the DBwi
with my node REST api.
Than generated a component and copied parts of the pt3 from lab 5
to be usable for pt in lab 6.

the python scripts takes longer then 60 seconds so compass times oout
I just seperated it into pieces