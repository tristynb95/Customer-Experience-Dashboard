import { Shift } from './types';

export const FULL_CSV_DATA = `Surveys,,,,,,,,,,,,,Shift Data,,,,
Survey ID,Bakery,Visit Date,Visit Time,NPS Rating (0-10),Drink (1-5),Service (1-5),Food (1-5),Recommendation (1-5),Cleanliness (1-5),Efficiency (1-5),Did anyone exceed your expectations or is there anything else you'd like to tell us? (optional),,Date,Day,Name,Shift Start,Shift End
348875,Marlow,26/01/2026,11:00,10,5,5,,5,4,5,Toilet needs better cleaning and should have a hook for bags and coat.,,01/09/25,Monday,Mya Hanif,05:23,13:01
346215,Marlow,24/01/2026,10:00,9,5,5,5,5,5,5,,,01/09/25,Monday,Emily Payne,05:26,15:39
346232,Marlow,24/01/2026,13:00,10,4,5,5,5,5,5,very great team especially during an extremely busy rush,,01/09/25,Monday,Ayako Chan,06:00,13:00
346257,Marlow,24/01/2026,11:30,8,5,5,5,5,3,5,,,01/09/25,Monday,Isabelle Smith,08:24,18:51
346278,Marlow,24/01/2026,15:00,10,,5,5,5,5,5,,,01/09/25,Monday,Elayna Eaton,09:00,14:30
346297,Marlow,24/01/2026,14:30,10,5,5,5,5,5,5,,,01/09/25,Monday,Matthew Reed,11:23,16:40
345797,Marlow,22/01/2026,09:30,10,5,5,5,5,5,5,Please could I just mention that it would be helpful if there was a hook on the door in the toilet so you could hang your coat up. Of this winter time and far easier to use the toilet when your coat is off I had to leave my coat on the floor not pleasant.,,01/09/25,Monday,George Starkey,12:55,18:47
345856,Marlow,22/01/2026,17:30,10,5,5,5,5,5,5,"The only two female staff, one who served and one who made the coffee - were so helpful & pleasant, very engaging at the end of what I know would have been a very long & busy day (5.20pm). They were more than happy to engage in conversation as if it was the start of their day. Both are a credit to Gail’s, I just wish I had taken both of their names so that they could be identified as outstanding.",,02/09/25,Tuesday,Emily Payne,05:28,12:09
345440,Marlow,20/01/2026,12:30,10,5,5,,,5,5,,,02/09/25,Tuesday,Isabelle Smith,05:30,14:00
345443,Marlow,20/01/2026,14:30,9,4,5,4,5,5,5,,,02/09/25,Tuesday,George Starkey,05:59,13:50
344977,Marlow,18/01/2026,12:30,7,3,5,3,5,4,5,,,02/09/25,Tuesday,Nias Lenard-Swales,08:00,16:37
344479,Marlow,16/01/2026,13:00,10,5,5,5,5,5,5,They were very busy.,,02/09/25,Tuesday,Maja Placzkowska,08:53,15:19
344073,Marlow,14/01/2026,12:30,7,3,5,1,5,4,5,"All staff are wonderful and efficient but also patient with slow decisions from customers. The chicken club was new so I tried it and disliked it so much I won’t buy it again. Too much processed sliced chicken would prefer real chicken breast please. Next time I visit I’ll go back to the Parmesan chicken burger. Also looked for the chicken fresh salad but it wasn’t on the shelf so limited options for salads. Room for improvement in the actual food available as well as needing better quality meat as I am paying over £8 for a sandwich, please",,02/09/25,Tuesday,Darcy Collins,10:00,19:00
344079,Marlow,14/01/2026,07:00,10,5,5,5,5,5,5,Very polite and friendly customer service,,02/09/25,Tuesday,Mya Hanif,11:30,19:00
343375,Marlow,10/01/2026,16:30,8,3,4,3,4,4,4,,,03/09/25,Wednesday,Maja Placzkowska,05:30,14:00
343465,Marlow,10/01/2026,15:30,8,4,5,3,4,5,4,,,03/09/25,Wednesday,Jake Eckle,05:30,15:30
343621,Marlow,08/01/2026,11:30,8,,5,5,5,5,5,The man who served me was very welcoming and helpful.,,03/09/25,Wednesday,Nias Lenard-Swales,05:58,13:09
342735,Marlow,06/01/2026,16:30,7,4,5,4,5,5,5,,,03/09/25,Wednesday,Tristen Bayley,08:00,19:00
342578,Marlow,05/01/2026,11:30,9,5,5,5,5,5,5,Didn’t notice name badges,,03/09/25,Wednesday,George Starkey,09:00,19:00
342587,Marlow,05/01/2026,14:00,7,2,5,5,5,5,5,Our 2 flat white coffees were not hot in temperature,,03/09/25,Wednesday,Callum Radler,11:30,16:30
342488,Marlow,04/01/2026,10:30,8,5,5,4,5,5,4,,,04/09/25,Thursday,Tristen Bayley,05:30,12:00
342546,Marlow,04/01/2026,13:00,8,5,5,3,5,5,5,"Every member of staff was very friendly and professional. The only negative was the layout of the tables upstairs. A nice large space not being used efficiently. A few tables that could sit 4 but had one student at each on their laptops. There is area down one step which could have a long counter along the wall with seats where individuals could sit, freeing up tables for more families/groups. The low coffee table and surrounding chairs and stools looked incredibly uncomfortable to sit and eat at. There should be another couple of small tables and chairs here. 
 It is a very busy shop where more available seating would be well used.",,04/09/25,Thursday,Jake Eckle,05:30,12:00
342637,Marlow,04/01/2026,11:00,1,3,1,4,1,4,1,Have yet to visit a Gail’s where anyone is friendly,,04/09/25,Thursday,Hartlee Openiano,06:00,13:00
342345,Marlow,03/01/2026,10:00,6,2,5,3,4,2,4,,,04/09/25,Thursday,Matthew Reed,08:00,14:30
342095,Marlow,02/01/2026,15:00,8,,5,4,3,4,5,The person who served me was very warm and friendly,,04/09/25,Thursday,Maja Placzkowska,08:49,15:02
341946,Marlow,01/01/2026,11:30,10,5,5,5,5,5,5,,,04/09/25,Thursday,Isabelle Smith,09:06,19:02
350042,Marlow,31/01/2026,11:00,10,,5,,5,5,5,,,04/09/25,Thursday,Elayna Eaton,11:02,16:38
350178,Marlow,31/01/2026,09:30,10,,5,5,5,5,5,The lady serving at the counter.,,04/09/25,Thursday,Nias Lenard-Swales,11:59,19:03
349520,Marlow,29/01/2026,12:00,7,,5,3,3,5,5,"Coeliac had soup lovely no gf bread available 
 1/100 of uk population are coeliac would be lovely if as a bakery you offered it as an option even off wrapped as made off site .",,05/09/25,Friday,Tristen Bayley,05:30,11:00
349217,Marlow,28/01/2026,07:30,10,4,5,5,5,5,4,"It was mine and my colleagues first visit to a Gail’s and the Gail’s team were very helpful with helping us make our mind up on what to get. 
 Best porridge I have tried in a long time",,05/09/25,Friday,Isabelle Smith,05:30,13:00
350526,Marlow,02/02/2026,14:00,8,4,4,,4,3,5,,,05/09/25,Friday,Ellen Cooper,05:30,13:00
350558,Marlow,02/02/2026,12:30,7,3,4,5,3,5,5,,,05/09/25,Friday,Jake Eckle,05:30,13:00
332401,Marlow,30/11/2025,11:00,10,5,5,5,5,5,5,Always an enjoyable experience.,,05/09/25,Friday,Elayna Eaton,07:30,15:00
331757,Marlow,29/11/2025,13:00,5,4,2,4,3,4,3,"No one exceeded , the lady serving seemed disinterested",,05/09/25,Friday,Emily Payne,08:30,15:30
331779,Marlow,29/11/2025,08:30,10,5,5,5,5,5,5,,,05/09/25,Friday,Maja Placzkowska,09:00,17:00
332005,Marlow,29/11/2025,12:00,8,4,4,5,4,4,4,,,05/09/25,Friday,Mya Hanif,12:00,19:00
331436,Marlow,28/11/2025,11:30,0,1,3,1,3,4,1,Did not exceed expectations at all. Specifically asked for 'extra hot' coffee and hot chocolate and both were tepid. The hot chocolate was tiny for over £4.,,05/09/25,Friday,George Starkey,12:00,19:00
331471,Marlow,28/11/2025,09:30,10,3,5,5,5,5,5,"Lovely visit, the pastries are always fresh and delicious. The tea was not that strong unfortunately despite leaving it to steep for a long time.",,06/09/25,Saturday,Jake Eckle,05:30,14:00
331594,Marlow,28/11/2025,15:00,8,,5,5,4,4,5,,,06/09/25,Saturday,Ayako Chan,05:52,13:00
331014,Marlow,27/11/2025,15:00,9,,5,,5,4,5,,,06/09/25,Saturday,Isabelle Smith,06:00,14:00
331015,Marlow,27/11/2025,07:00,10,5,5,5,5,5,5,When I visit Gail’s Marlow the team is always polite and helpful,,06/09/25,Saturday,Robyn Bailey,06:00,14:00
331234,Marlow,27/11/2025,08:30,10,,5,5,5,5,5,,,06/09/25,Saturday,Emily Payne,07:30,16:00
330631,Marlow,26/11/2025,13:30,10,5,5,5,5,5,5,,,06/09/25,Saturday,Eve Garrity,07:30,16:21
330810,Marlow,26/11/2025,13:00,9,5,5,,5,4,5,"Didn't note the name of the person who served us, but he was very friendly.",,06/09/25,Saturday,Tristen Bayley,08:30,19:00
330951,Marlow,26/11/2025,13:00,8,4,5,3,5,4,4,"Cinnamon bun a little dry. 
 The female serving went above and beyond as my QR code didn’t work for a free coffee but she supported by offering a free one regardless - thank you",,06/09/25,Saturday,Mya Hanif,10:00,19:40
330016,Marlow,24/11/2025,10:00,9,5,4,4,5,5,5,,,06/09/25,Saturday,Hartlee Openiano,10:00,17:24
330954,Marlow,24/11/2025,08:30,8,3,4,4,4,4,4,N/a,,06/09/25,Saturday,Ellen Cooper,13:00,19:40
329373,Marlow,23/11/2025,11:00,3,3,2,3,2,3,2,"The queue was long and I was outside the shop for a while
 The spinach wrap was cold 
 I couldn’t load my card to claim my free drink 
 Had to sit outside as no tables were free 
 Overall experience was poor",,07/09/25,Sunday,Jake Eckle,05:30,14:00
329426,Marlow,23/11/2025,11:00,10,5,5,5,5,5,5,,,07/09/25,Sunday,Ayako Chan,05:58,13:10
329582,Marlow,23/11/2025,15:00,6,3,4,4,4,3,2,"We ordered quickly but had to wait a very long time for drinks to be made. There were 4 drinks and some food ordered eating in but several people behind us with takeaway orders got their drinks before us. Also my coffee cup had lip stick on the rim on one side. Experience was ok but not great unfortunately. 
 I often use takeaway service and love the food especially the seeded sourdough bread but first time for eat in experience and won’t rush back unfortunately as it was a bit disappointing",,07/09/25,Sunday,Mya Hanif,06:00,13:00
329702,Marlow,23/11/2025,10:00,10,5,5,5,5,5,5,Best chai latte thank you,,07/09/25,Sunday,Chelsie Barnes,06:00,13:00
329043,Marlow,22/11/2025,08:30,5,4,3,2,2,3,3,No I am afraid not. The service was very mediocre and not helpful.,,07/09/25,Sunday,Tristen Bayley,08:00,18:00
329107,Marlow,22/11/2025,09:00,3,4,2,3,3,4,3,"Cake was dry - asked if the cheese twist could be warmed up, but was snapped at by the staff member who said “of course not!”
 Cheese straw was also dry but would have been salvaged if warmed.",,07/09/25,Sunday,Emily Payne,08:00,16:00
329179,Marlow,22/11/2025,12:30,8,,5,5,4,4,4,,,07/09/25,Sunday,Maja Placzkowska,09:00,18:47
328441,Marlow,21/11/2025,13:15,7,4,4,4,4,3,3,Drinks took too long avd place appeared grubby and tables not cleared,,07/09/25,Sunday,Hartlee Openiano,11:00,18:00
328509,Marlow,21/11/2025,11:30,10,5,5,5,5,5,5,"Yes, the server went above and beyond to make a recommendation as the sandwich I went in for was sold out. Fab choice recommended.",,07/09/25,Sunday,George Starkey,11:55,18:47
328589,Marlow,21/11/2025,13:30,10,5,5,4,5,3,5,,,08/09/25,Monday,Ayako Chan,05:30,13:52
328206,Marlow,20/11/2025,10:00,6,2,5,4,3,4,4,,,08/09/25,Monday,Jake Eckle,05:30,12:00
329800,Marlow,20/11/2025,12:30,8,,4,,4,4,4,,,08/09/25,Monday,Tristen Bayley,05:30,11:00
327292,Marlow,18/11/2025,10:00,3,1,5,1,1,5,3,Trays was so dirty tab water jug and glass was so dirty never want tab water from Gail’s in future,,08/09/25,Monday,Robyn Bailey,08:00,14:30
327338,Marlow,18/11/2025,13:00,3,3,4,3,3,5,4,No,,08/09/25,Monday,Isabelle Smith,09:00,19:00
328017,Marlow,18/11/2025,08:00,10,5,5,5,,5,5,the seating area upstairs was chilly!,,08/09/25,Monday,Emily Payne,09:49,15:17
326850,Marlow,17/11/2025,12:30,7,3,5,,4,4,4,The manager is a delight as always,,08/09/25,Monday,Ellen Cooper,11:00,16:30
327963,Marlow,17/11/2025,10:30,10,4,5,5,5,5,5,"Yes, I didn't bring my phone with the app, so the manager gave me free bread since I found it difficult to redeem my receipt online for points. I came in the next day and used my Gails app. I am open to working for Gails if they up a store in Falmouth.",,08/09/25,Monday,George Starkey,11:30,19:00
326400,Marlow,16/11/2025,14:30,9,5,4,5,5,5,5,Thery were nice,,08/09/25,Monday,Mya Hanif,11:30,12:30
326503,Marlow,16/11/2025,11:30,10,5,5,5,5,5,5,all good,,08/09/25,Monday,Tristen Bayley,11:30,12:30
326600,Marlow,16/11/2025,11:00,10,,4,5,5,5,5,,,09/09/25,Tuesday,Isabelle Smith,05:30,13:00
326662,Marlow,16/11/2025,12:30,7,5,5,5,3,2,5,,,09/09/25,Tuesday,Jake Eckle,05:30,12:00
327992,Marlow,16/11/2025,10:30,9,4,5,4,5,5,5,"There was a young man wjo was over and above but didnt get his name.
 He remembered my name",,09/09/25,Tuesday,Tristen Bayley,05:30,10:30
325738,Marlow,15/11/2025,09:00,10,5,5,3,5,5,5,,,09/09/25,Tuesday,Amy Walduck,07:57,16:38
326018,Marlow,15/11/2025,11:30,10,5,5,5,5,5,5,,,09/09/25,Tuesday,Emily Payne,10:04,15:22
326028,Marlow,15/11/2025,13:00,10,5,5,5,5,5,5,"The Marlow team are consistently happy, smiley and very helpful",,09/09/25,Tuesday,Mya Hanif,10:26,19:09
326080,Marlow,15/11/2025,10:30,8,5,4,5,3,3,5,"Always a pleasant experience from team Marlow, which is where I work!",,09/09/25,Tuesday,George Starkey,11:30,19:00
326294,Marlow,14/11/2025,11:30,8,4,5,4,5,4,3,,,10/09/25,Wednesday,Emily Payne,05:07,12:33
324510,Marlow,13/11/2025,08:00,10,5,5,5,5,5,5,As always this is one of the friendliest branches. There is currently an ongoing issue due to a builder’s mishap and everyone continues to smile and greet customers in a friendly manner with all the extra hustle and bustle going on behind the scenes.,,10/09/25,Wednesday,Ayako Chan,05:32,13:06
325007,Marlow,13/11/2025,11:30,10,5,5,5,5,5,5,"all staff very kind and friendly and helpful, very welcoming",,10/09/25,Wednesday,Matthew Reed,06:00,12:13
325171,Marlow,13/11/2025,11:30,8,,4,4,3,3,4,,,10/09/25,Wednesday,Nias Lenard-Swales,07:59,16:38
325219,Marlow,13/11/2025,10:30,10,5,5,4,5,5,5,,,10/09/25,Wednesday,Callum Radler,09:00,14:30
325400,Marlow,13/11/2025,13:30,8,5,5,3,5,5,4,,,10/09/25,Wednesday,Callum Neal,10:00,15:30
324343,Marlow,11/11/2025,08:30,10,5,5,5,5,5,5,"The whole team exceeds our expectations every time we visit Gails in Marlow. The team included the lovely Izzy, Mya and Callum amongst others.
 A good atmosphere and a busy Bakery too. Always clearing tables and assisting in everyway. Thank you to all.
 Kind and warm regards from Angela too !",,10/09/25,Wednesday,Isabelle Smith,11:30,19:00
323913,Marlow,10/11/2025,11:30,10,,5,,5,5,5,,,10/09/25,Wednesday,Maja Placzkowska,12:00,19:00
325602,Marlow,10/11/2025,10:00,7,3,3,1,3,4,4,N/a,,11/09/25,Thursday,Emily Payne,05:27,12:24
323052,Marlow,09/11/2025,10:30,6,3,4,2,4,4,3,"The croissant I ordered was stale and hard - the bottom of it was slightly soggy yet the top was stale and hard. There was a very long queue and by time we got our coffee it was warm, not hot. Not overly impressed with the experience. This is the 2nd time in a row we have visited and been underwhelmed",,11/09/25,Thursday,Jake Eckle,05:30,13:00
323071,Marlow,09/11/2025,11:15,10,5,5,5,5,5,5,The staff are so friendly at this Marlow branch even when it’s a very busy and buzzing branch,,11/09/25,Thursday,Mya Hanif,05:30,14:00
323086,Marlow,09/11/2025,15:00,10,5,5,5,5,5,4,My only complaint was that when we arrived it was super cosy and warm and warm but halfway through staff decided to jam the front door wide open and turn on the aircon. I got up and closed the door.,,11/09/25,Thursday,Matthew Reed,05:50,13:02
323241,Marlow,09/11/2025,10:30,10,4,5,5,5,4,5,"Christmas bun spectacular, but only managed a mouthful before red kit swooped and took it of to a high branch. He also enjoyed it as he came back looking for more!! :)"
,,11/09/25,Thursday,Maja Placzkowska,07:55,15:31
322173,Marlow,08/11/2025,09:00,10,5,5,5,5,5,5,Tristan and his staff are a well organised team,,11/09/25,Thursday,Callum Radler,09:00,14:30
322513,Marlow,08/11/2025,15:00,5,3,3,3,3,3,3,Coffee in any Gail’s is always not warm enough. Overnight oats were not as flavoursome as usual. Also getting more expensive not sure it matches the quality,,11/09/25,Thursday,Tristen Bayley,09:00,19:00
322519,Marlow,08/11/2025,10:30,2,3,3,2,3,1,2,"The seating area was over run with dirty cups and plates there was empty tables but they were full of dirty plates & cups 
 My husband had porridge and it was so dry and so in appetising I had to ask for warm milk to try and improve it, with this the lady was not very apologetic when i explained what it was for.",,11/09/25,Thursday,Ellen Cooper,09:30,14:30
322590,Marlow,08/11/2025,16:00,8,5,4,5,4,5,5,,,11/09/25,Thursday,Eve Garrity,11:29,16:43
322887,Marlow,08/11/2025,11:00,10,4,4,4,5,4,4,"Liked the colouring activity. Layout of store feels like a bakery, not just a cafe. Drinks good and staff brought to table for us as I was solo with my children - appreciated this! Highchair could have been cleaner, especially the straps.",,11/09/25,Thursday,Hartlee Openiano,14:00,19:00
322938,Marlow,08/11/2025,09:30,10,5,5,5,5,5,5,The whole team were as excellent as ever,,12/09/25,Friday,George Starkey,05:28,13:07
323277,Marlow,08/11/2025,14:00,8,4,3,4,3,2,3,"Only a small thing, no napkin with the sandwiches which I had to go and ask for. And another thing, we sat by the toilet once in the back and every time someone used the toilet they left the door wide open. (why?????) but its not nice when you are sitting there having your nice coffee or food. it might be a good idea to fit a self closing bracket so the door is always closed!! Much more hygienic too!!",,12/09/25,Friday,Jake Eckle,05:30,14:00
322098,Marlow,07/11/2025,12:00,10,,5,5,5,5,5,,,12/09/25,Friday,Maja Placzkowska,05:30,14:00
322138,Marlow,07/11/2025,15:30,10,5,5,5,5,5,5,The young woman who served me is excellent,,12/09/25,Friday,Ellen Cooper,07:30,15:00
321759,Marlow,06/11/2025,14:30,8,4,3,5,3,3,5,,,12/09/25,Friday,Hartlee Openiano,08:00,16:30
321911,Marlow,06/11/2025,16:30,10,5,5,5,5,5,5,The young lady helped me with a great advice to download the app and start using the rewards.,,12/09/25,Friday,Emily Payne,08:49,15:42
321567,Marlow,05/11/2025,14:00,10,5,5,5,5,5,5,Lady who served me was very friendly and helpful,,12/09/25,Friday,Isabelle Smith,09:06,18:59
320605,Marlow,03/11/2025,11:30,10,3,5,4,5,5,5,Very patient when wi fi not working and signal very difficult to get so birthday treat could be got. Also explained now have to purchase a. Item to get treat.,,12/09/25,Friday,Mya Hanif,12:00,19:00
320066,Marlow,02/11/2025,14:30,8,4,4,3,4,3,4,Yes staff very friendly and helpful. The scone I ordered was bit on the dry side assume was baked early this morning. But overall decent stuff.,,13/09/25,Saturday,Jake Eckle,05:30,14:00
320181,Marlow,02/11/2025,11:30,10,5,5,5,5,5,5,The team in Marlow is very nice and always helpful. I can fully recommend this bakery.,,13/09/25,Saturday,Chelsie Barnes,06:00,12:30
320184,Marlow,02/11/2025,12:00,7,4,4,5,3,5,2,,,13/09/25,Saturday,Isabelle Smith,06:00,15:00
320397,Marlow,02/11/2025,12:30,10,5,5,5,5,5,5,"Marlow is notorious for poor Wifi so I wasn't able to access the app and show the girl who served me my free birthday treat. She was lovely, said she could see 'rewards' on my 'card' in my wallet and gave me my free birthday treat, with the coffee I paid for. I had a fruit scone with butter and jam. It was one of the most delicious scones I'd ever tasted. And the butter was so delicious, I actually ate some on its own as if it were a slice of cheese! How good is that?",,13/09/25,Saturday,Maja Placzkowska,06:27,14:09
321424,Marlow,02/11/2025,13:00,2,5,5,5,5,5,1,"Every time I get in, either the App or the internet is not working. What makes me feel like I don't want to come back?",,13/09/25,Saturday,Callum Neal,07:30,16:10
329726,Marlow,02/11/2025,09:30,9,4,4,5,5,5,5,"I found the take-away paper cup for hot drink went wet and soggy/deformed very quickly when served this time. Maybe one-off, but it was more than before. Have you changed your paper cups?",,13/09/25,Saturday,George Starkey,07:59,17:13
319765,Marlow,01/11/2025,11:00,5,3,5,4,5,4,5,Team were great but disappointing to see the bread sizes shrinking and prices rising. I started buying this bread a few years ago. It was £3.75 for a loaf double the size.,,13/09/25,Saturday,Ellen Cooper,08:30,16:30
319882,Marlow,01/11/2025,14:30,8,5,4,3,4,5,4,,,13/09/25,Saturday,Tristen Bayley,09:30,19:00
320418,Marlow,01/11/2025,09:00,7,4,3,2,3,4,3,,,13/09/25,Saturday,Hartlee Openiano,09:59,18:30
320798,Marlow,01/11/2025,13:00,8,4,4,5,3,3,4,,,13/09/25,Saturday,Robyn Bailey,11:30,19:00
320831,Marlow,01/11/2025,08:30,10,,1,1,1,1,1,Always a pleasure to be served,,14/09/25,Sunday,Chelsie Barnes,06:00,13:00
319114,Marlow,30/10/2025,13:30,8,5,5,5,5,5,5,"I paid £14+ for lunch for our two friends and used the app to register the purchase, then soon after went to pay separately for the £24+ I spent on lunch for my partner and myself. The albeit pleasant assistant advised that I could not record that purchase on my app as I needed to wait half an hour between purchases. WHAT! So I lost the extra benefit mentioned on the app for a purchase of over £20! Not impressed!!",,14/09/25,Sunday,Tristen Bayley,06:00,14:00
319132,Marlow,30/10/2025,08:30,8,3,4,,5,4,3,Coffees were not full to the top - upsetting when you spend that much!,,14/09/25,Sunday,Callum Neal,08:00,16:00
319139,Marlow,30/10/2025,11:30,10,,5,,,5,5,,,14/09/25,Sunday,Hartlee Openiano,08:00,15:00
319151,Marlow,30/10/2025,10:30,9,5,5,5,5,5,5,All staff,,14/09/25,Sunday,Mya Hanif,09:00,16:00
318328,Marlow,28/10/2025,11:00,10,5,5,5,5,4,5,,,14/09/25,Sunday,Ellen Cooper,09:59,17:20
317319,Marlow,26/10/2025,12:30,9,5,4,5,4,2,5,Gorgeous drinks and food but the cleanliness always lets it down,,14/09/25,Sunday,Maja Placzkowska,09:59,18:53
317321,Marlow,26/10/2025,12:00,10,,5,5,5,4,4,,,14/09/25,Sunday,George Starkey,12:00,18:48
317701,Marlow,26/10/2025,09:30,10,4,5,5,5,3,5,,,15/09/25,Mon,Mya Hanif,05:30,13:30
316802,Marlow,25/10/2025,10:30,10,5,4,4,4,4,5,"The members of staff were super friendly and polite. The surroundings were clean and well kept, a really enjoyable visit.",,15/09/25,Mon,Robyn Bailey,05:30,13:00
316853,Marlow,25/10/2025,11:30,8,,5,5,5,5,5,"Sorry I didn't catch the name of the young guy who served me but he was v friendly & efficient. Just want to say, any time I visit Marlow Gail's it is a really good experience - even though they are usually v busy they are pleasant, smiley, helpful. Such a contrast to Ruislip (sorry!). I also feel that the fruit scone in Marlow tastes better - I don't know if there is something missing from the Ruislip ones or not as well baked or what but they don't taste the same",,15/09/25,Mon,Jake Eckle,05:30,12:00
317091,Marlow,25/10/2025,11:00,10,5,5,5,5,5,5,"The young man who served us was super friendly and helpful, he always is.",,15/09/25,Mon,Tristen Bayley,07:00,19:00
317131,Marlow,25/10/2025,13:00,9,5,5,5,4,4,5,"Tables are not cleared or that clean as quickly as maybe they should be…… maybe it’s due to not enough staff.
 Stairs are a bit steep for carrying trays etc….",,15/09/25,Mon,Isabelle Smith,08:00,19:00
317575,Marlow,25/10/2025,13:30,5,2,5,,5,5,5,The guy serving was extremely helpful in getting the App on my phone,,15/09/25,Mon,Maja Placzkowska,10:00,17:00
316431,Marlow,24/10/2025,09:00,10,5,5,5,5,5,5,,,15/09/25,Mon,Callum Neal,10:00,15:30
316466,Marlow,24/10/2025,15:30,10,,5,5,5,5,5,,,15/09/25,Mon,Hartlee Openiano,11:30,19:00
316552,Marlow,24/10/2025,09:00,10,5,5,5,5,5,5,"very good service and friendly employees, helpful in everything .. thank you ❤️",,16/09/25,Tue,Tristen Bayley,05:30,13:00
316638,Marlow,24/10/2025,11:00,7,,4,4,4,4,3,Ovens weren't working so very little on sale,,16/09/25,Tue,Emily Payne,05:30,15:30
316650,Marlow,24/10/2025,12:00,8,2,5,5,,5,4,"Team were very friendly, sadly the coffee was disappointing. Not experienced this before and hope for better next time",,16/09/25,Tue,Callum Neal,05:30,14:00
316670,Marlow,24/10/2025,08:30,3,2,3,3,3,2,3,"Often I find the Marlow store tables loaded with used trays and tables not wiped. I've had issues with my tea recently either pot not being full or tea stainer must have a hole as tea leaves fall into my cup. The staff to top up tea pot or replace but I find it all a bit of an inconvenience. They often say they don't have any clean tea pots left and just give a cup instead - I find this extremely frustrating as the cost is the same and I hate just a tea bag in a cup, lazy tea!",,16/09/25,Tue,Ellen Cooper,08:00,16:30
317642,Marlow,24/10/2025,15:00,10,,1,5,5,5,5,I only purchase bread from the bakery .so I am really not able to judge other services.,,16/09/25,Tue,Isabelle Smith,09:00,19:00
315473,Marlow,21/10/2025,09:30,10,4,5,3,5,5,5,My Drink was not very hot. Luke warm,,16/09/25,Tue,Mya Hanif,11:30,19:00
315061,Marlow,20/10/2025,07:00,7,5,3,,3,4,4,,,17/09/25,Wed,Isabelle Smith,05:30,13:00
314472,Marlow,19/10/2025,14:00,9,,5,4,5,5,5,Both staff that served me were very helpful and friendly.,,17/09/25,Wed,Emily Payne,05:30,12:00
314732,Marlow,19/10/2025,12:00,8,4,4,4,4,4,4,,,17/09/25,Wed,Darcy Collins,06:00,14:00
313356,Marlow,17/10/2025,14:30,10,,5,5,5,5,5,"They are all very friendly and helpful when I visit, and I love your sweet treats",,17/09/25,Wed,Ellen Cooper,08:00,16:30
313358,Marlow,17/10/2025,08:30,9,4,4,5,5,4,4,"I sat upstairs to have my coffee and scone. The music that was played through the speakers was quite intrusive - both the volume and the type of music. This was not what I was expecting, based on my numerous previous visits. Normally the music is much more in the background.",,17/09/25,Wed,Tristen Bayley,09:00,19:00
313467,Marlow,17/10/2025,15:30,10,5,5,5,5,5,5,,,17/09/25,Wed,Callum Neal,10:00,15:30
313474,Marlow,17/10/2025,11:00,9,,4,,3,4,5,,,17/09/25,Wed,Mya Hanif,11:30,19:00
313642,Marlow,17/10/2025,10:30,10,,5,5,5,5,5,,,18/09/25,Thu,Mya Hanif,05:30,14:00
313710,Marlow,17/10/2025,12:30,10,,5,,5,5,5,,,18/09/25,Thu,Jake Eckle,05:30,12:00
313839,Marlow,17/10/2025,08:00,10,5,5,,,5,5,,,18/09/25,Thu,Darcy Collins,06:00,13:00
312512,Marlow,15/10/2025,14:30,10,5,5,5,5,5,5,It was nice that the person who made my drink new my name and made a good hot chocolate. The staff in the Marlow Gails are always very welcoming and polite when you enter the store and when you are being served.,,18/09/25,Thu,Maja Placzkowska,08:00,19:00
312936,Marlow,15/10/2025,16:30,9,5,3,5,3,4,4,,,18/09/25,Thu,Ellen Cooper,09:00,16:30
311658,Marlow,14/10/2025,07:00,9,5,5,5,5,5,5,They were all very helpful,,18/09/25,Thu,Emily Payne,09:30,15:30
312259,Marlow,14/10/2025,09:00,10,5,5,5,5,4,5,"The team are all, always, extremely friendly and helpful. However, sometimes when they are busy the tables upstairs are not cleared quickly. People should be encouraged to clear their own tables to one side. A slot for trays might help?",,18/09/25,Thu,George Starkey,11:30,19:00
312277,Marlow,14/10/2025,12:30,8,5,5,5,5,5,5,,,19/09/25,Fri,Maja Placzkowska,05:30,11:00
308902,Marlow,12/10/2025,12:00,10,5,5,5,5,5,5,,,19/09/25,Fri,Darcy Collins,05:30,13:00
309136,Marlow,12/10/2025,13:00,9,4,5,,5,4,5,"Coffee could have been slightly hotter, but thats probably just my preference. Once of the upholstered chairs at our table upstairs was a little grubby. Otherwise always a lovely visit with good coffee",,19/09/25,Fri,Jake Eckle,05:30,13:30
309188,Marlow,12/10/2025,11:00,7,5,5,5,5,5,5,,,19/09/25,Fri,Ellen Cooper,07:00,15:00
309240,Marlow,12/10/2025,11:00,8,5,5,5,5,5,5,,,19/09/25,Fri,Hartlee Openiano,08:00,17:00
309353,Marlow,12/10/2025,13:30,8,5,5,5,5,5,3,The lady behind the counter didn't seem to notice me and served the lady behind me in the queue. A bit odd,,19/09/25,Fri,Emily Payne,08:30,16:00
308765,Marlow,11/10/2025,13:30,6,4,5,4,4,3,5,"Just to make sure the tables are cleaned before the next person eats there. My husband and I like Gail’s but now we have decided to limit our visits to Gail’s as we are finding it very expensive in comparison to some other cafes. The sandwiches are very very expensive and some of the tiny cakes or tiny salmon roll are far too expensive for the size. For 2 coffees and two pastries cost us £19. So we thought about it and although we like Gail’s and the staff, we will limit or visits.",,19/09/25,Fri,Isabelle Smith,09:30,19:00
308991,Marlow,11/10/2025,09:00,9,5,5,4,4,4,4,Barista. He couldnt prononce my name and i thought the coffee he announced was for me. Approached and he said he couldnt pronounced my name and he s very happy to make a new one. I was quite happy with the nice gesture right away without even asking,,19/09/25,Fri,George Starkey,11:00,19:00
309397,Marlow,11/10/2025,13:00,10,5,5,5,5,5,5,"Just in general, the Marlow team are always super friendly and helpful",,20/09/25,Sat,Callum Neal,05:30,12:30
308274,Marlow,10/10/2025,14:00,9,3,5,4,5,5,5,,,20/09/25,Sat,Tristen Bayley,06:00,14:00
308014,Marlow,09/10/2025,11:00,8,1,5,5,5,4,5,"I keep feeding this back. As a tea drinker your tea is awful. It’s either the leaves, the pot (which doesn’t allow leaves to brew properly) or the amount you put in but essentially by the time it’s brewed it is cold. I’d come more often, as a tea drinker who doesn’t drink coffee, if the tea were better. I only come for the food.",,20/09/25,Sat,Isabelle Smith,06:00,13:00
311966,Marlow,09/10/2025,15:00,8,,5,5,5,5,5,,,20/09/25,Sat,Jake Eckle,06:30,14:30
307423,Marlow,08/10/2025,15:00,8,5,4,4,4,4,4,,,20/09/25,Sat,Ellen Cooper,07:30,14:30
307490,Marlow,08/10/2025,08:30,8,4,5,4,5,5,5,,,20/09/25,Sat,Robyn Bailey,08:00,13:00
307606,Marlow,08/10/2025,12:00,8,3,5,5,5,5,5,It was the first time I had tried your matcha latte and sorry to say I didn’t like it as much as my own at home. Will be going back to my oat milk latte.,,20/09/25,Sat,George Starkey,09:00,18:00
306813,Marlow,06/10/2025,09:30,10,5,5,5,5,4,5,,,20/09/25,Sat,Hartlee Openiano,10:00,18:00
305241,Marlow,05/10/2025,10:00,10,5,5,5,5,5,5,They are great,,20/09/25,Sat,Emily Payne,11:00,16:30
305609,Marlow,05/10/2025,10:00,10,5,5,5,5,4,5,"Normally, in the Marlow branch, every member of staff is friendly and forthcoming. I will try get names but a lot of the staff are welcoming.",,20/09/25,Sat,Maja Placzkowska,12:00,19:00
305628,Marlow,05/10/2025,11:30,10,5,5,5,5,5,5,Polite friendly and efficient members of staff,,20/09/25,Sat,Chelsie Barnes,12:30,19:00
305239,Marlow,04/10/2025,10:30,9,5,5,5,5,4,5,,,21/09/25,Sun,Jake Eckle,05:30,14:00
304706,Marlow,03/10/2025,14:30,10,5,5,5,5,5,5,,,21/09/25,Sun,Mya Hanif,06:00,13:00
305009,Marlow,03/10/2025,13:30,6,2,5,3,4,5,5,Drink not hot enough,,21/09/25,Sun,Robyn Bailey,06:00,13:30
304316,Marlow,02/10/2025,16:00,10,5,5,5,5,5,5,All members are great and very kind.,,21/09/25,Sun,Tristen Bayley,08:00,13:30
304388,Marlow,02/10/2025,08:00,10,5,5,5,5,5,5,There is no where I would rather go for hot drinks and bakery. Every visit at any branch is always delicious,,21/09/25,Sun,Callum Neal,08:00,16:00
304557,Marlow,02/10/2025,15:00,10,5,4,5,4,4,5,No.,,21/09/25,Sun,Amy Walduck,08:30,17:00
304568,Marlow,02/10/2025,08:30,10,5,5,5,5,5,5,Another great visit with a lovely Gail's team. Great food and coffees,,21/09/25,Sun,Maja Placzkowska,10:00,19:00
305294,Marlow,01/10/2025,10:00,9,5,5,5,5,5,5,,,21/09/25,Sun,Hartlee Openiano,10:00,16:00
303714,Marlow,30/09/2025,10:00,8,,5,,5,5,5,,,21/09/25,Sun,George Starkey,11:30,19:00
303209,Marlow,29/09/2025,07:30,10,5,5,5,5,5,5,Emily and the whole team were very welcoming.,,22/09/25,Monday,Isabelle Smith,05:25,14:19
303263,Marlow,29/09/2025,15:30,5,2,4,2,4,3,5,,,22/09/25,Monday,Jake Eckle,05:30,12:00
303330,Marlow,29/09/2025,13:00,10,5,5,5,5,5,5,No ty,,22/09/25,Monday,Robyn Bailey,06:26,13:05
303496,Marlow,29/09/2025,13:30,10,,5,5,5,5,5,As usual the staff were very helpful,,22/09/25,Monday,Tristen Bayley,08:00,19:00
304061,Marlow,29/09/2025,13:00,9,3,5,3,3,5,5,,,22/09/25,Monday,Ellen Cooper,08:00,16:30
302860,Marlow,28/09/2025,15:00,9,5,5,5,5,2,5,,,22/09/25,Monday,Callum Neal,10:00,15:30
302879,Marlow,28/09/2025,11:00,10,5,5,5,5,5,5,Polite and helpful as always,,22/09/25,Monday,Mya Hanif,11:28,19:16
302928,Marlow,28/09/2025,14:00,8,5,5,3,5,4,5,"N/A - no food ordered, just coffee",,23/09/25,Tuesday,Isabelle Smith,05:34,13:21
302570,Marlow,27/09/2025,10:00,8,,4,4,4,4,4,,,23/09/25,Tuesday,Jake Eckle,05:30,12:00
303486,Marlow,27/09/2025,13:30,10,,4,5,5,5,5,N/a,,23/09/25,Tuesday,Tristen Bayley,06:00,13:00
302200,Marlow,26/09/2025,10:30,8,,5,5,5,4,5,,,23/09/25,Tuesday,Ellen Cooper,08:00,16:30
302233,Marlow,26/09/2025,14:30,7,5,5,5,3,4,5,"It was very busy , with very few empty tables to sit at. There were at least 4 customers working on tablets who looked as though they were spending a lot of time in Gail’s",,23/09/25,Tuesday,Mya Hanif,08:59,18:33
301617,Marlow,25/09/2025,11:30,10,,5,5,5,5,5,,,23/09/25,Tuesday,Emily Payne,10:00,15:30
301727,Marlow,25/09/2025,11:30,7,5,5,,5,4,5,,,23/09/25,Tuesday,George Starkey,11:24,18:46
301743,Marlow,25/09/2025,10:30,9,5,5,5,5,4,5,,,24/09/25,Wednesday,Tristen Bayley,05:30,13:00
301790,Marlow,25/09/2025,12:00,9,5,5,5,5,5,5,The ambience is a little bleak in this store the back room feels like a cafeteria,,24/09/25,Wednesday,Jake Eckle,05:30,12:00
301801,Marlow,25/09/2025,10:00,10,5,5,5,5,5,5,,,24/09/25,Wednesday,Ellen Cooper,05:30,13:30
301810,Marlow,25/09/2025,11:00,10,5,5,5,5,5,5,Guy who made the toast was very friendly,,24/09/25,Wednesday,Darcy Collins,07:00,16:30
301344,Marlow,24/09/2025,10:30,9,3,5,5,5,4,5,"I went in to claim my 79 birthday free coffee, only to find the coffee machine had broken down. I was surprised there was no back up procedure to give customers a coffee of some sort. No wonder the cafe was not full like it usually is. 
 I’m a regular visitor and although the downstairs toilet is always clean, it is very odd that the toilet flushes whilst I am still seated (this will give you a laugh). Also the tap has a mind of its own and goes on and off at random, so I have to be lucky to catch it. This is not a joke, just a reality. Finally I really like Gail’s. Kate",,24/09/25,Wednesday,Isabelle Smith,09:00,19:00
301396,Marlow,24/09/2025,12:30,10,,5,5,5,5,5,Yes all the staff in Gail’s Marlow are always smiling,,24/09/25,Wednesday,Emily Payne,10:00,15:30
300949,Marlow,23/09/2025,11:30,10,5,5,5,5,5,5,"Both the members of staff that I interacted with yesterday were helpful, polite, and friendly. Thank You.",,24/09/25,Wednesday,Mya Hanif,11:36,18:58
301182,Marlow,23/09/2025,11:00,10,5,5,,5,5,5,all good!,,25/09/25,Thursday,Jake Eckle,05:00,12:00
300097,Marlow,21/09/2025,11:30,10,,5,5,5,5,5,,,25/09/25,Thursday,Tristen Bayley,05:30,13:00
300131,Marlow,21/09/2025,15:30,10,5,5,5,5,5,5,Helpful team shout out in particular to Amy,,25/09/25,Thursday,George Starkey,05:54,13:44
300355,Marlow,21/09/2025,13:30,10,4,5,,4,5,4,,,25/09/25,Thursday,Maja Placzkowska,07:54,19:14
300369,Marlow,21/09/2025,16:00,9,,5,4,5,5,5,Our cashier was lovely,,25/09/25,Thursday,Hartlee Openiano,09:00,16:30
299820,Marlow,20/09/2025,10:30,8,4,5,4,5,4,5,"It was so busy and the hard surfaces make the acoustics both downstairs and upstairs very challenging and unpleasant. There are children, dogs, people chatting and two ways to improve the sound: introduce some sound barding or pads on the ceilings to absorb the sound so at the hard surfaces, and include otter furnishings downstairs. Also the kitchen door bangs every time it’s opened so there may be a maintenance issue there.",,25/09/25,Thursday,Callum Neal,09:30,15:30
299943,Marlow,20/09/2025,11:00,10,5,5,5,5,5,5,"Fantastic, so friendly and helpful",,25/09/25,Thursday,Darcy Collins,12:03,19:07
299949,Marlow,20/09/2025,09:00,9,5,4,,,4,5,,,25/09/25,Thursday,Tristen Bayley,13:00,14:30
300283,Marlow,20/09/2025,12:00,10,5,5,5,5,5,5,,,26/09/25,Friday,Emily Payne,05:02,13:30
300446,Marlow,20/09/2025,09:00,10,5,5,,5,5,5,,,26/09/25,Friday,Isabelle Smith,05:29,14:05
299280,Marlow,19/09/2025,09:30,10,4,4,4,4,4,4,Team were friendly as usual,,26/09/25,Friday,Ellen Cooper,05:31,13:41
299284,Marlow,19/09/2025,09:00,9,5,4,5,5,4,4,,,26/09/25,Friday,George Starkey,07:00,16:00
299580,Marlow,19/09/2025,09:00,10,5,5,5,5,5,5,"Always so impressed with the team at Gail’s Marlow. Efficient, friendly and the coffee is always perfect. Thank you Tristan and the team",,26/09/25,Friday,Hartlee Openiano,08:00,16:30
298312,Marlow,17/09/2025,11:30,8,4,5,5,5,5,4,The young lady serving me helped me get the app working on my phone,,26/09/25,Friday,Callum Neal,08:30,15:30
298432,Marlow,17/09/2025,11:30,7,4,4,4,4,4,4,,,26/09/25,Friday,Maja Placzkowska,09:00,19:00
298489,Marlow,17/09/2025,11:00,10,5,5,5,5,5,5,,,26/09/25,Friday,Darcy Collins,12:00,19:00
298541,Marlow,17/09/2025,11:00,10,5,5,5,5,4,5,Friendly staff member who served us didn’t catch his name,,27/09/25,Saturday,Callum Neal,05:30,09:00
298575,Marlow,17/09/2025,09:00,10,5,5,5,5,5,5,I had a nice chat with the lady that served me,,27/09/25,Saturday,Mya Hanif,05:56,13:02
298655,Marlow,17/09/2025,08:00,8,5,4,5,3,5,5,,,27/09/25,Saturday,Chelsie Barnes,06:00,14:00
298071,Marlow,16/09/2025,15:30,10,5,5,5,5,5,5,,,27/09/25,Saturday,Darcy Collins,07:00,15:00
298232,Marlow,16/09/2025,12:00,6,2,3,5,,4,3,"Both my friend and I were served Luke warm coffee, had to be replaced, still not up to usual quality. Croissant was very nice, overall disappointing.",,27/09/25,Saturday,Emily Payne,07:39,16:24
298317,Marlow,16/09/2025,15:00,10,5,5,,5,4,5,,,27/09/25,Saturday,Maja Placzkowska,08:00,16:18
298321,Marlow,16/09/2025,13:30,10,5,5,5,5,5,5,,,27/09/25,Saturday,Isabelle Smith,08:53,18:58
298343,Marlow,16/09/2025,14:00,7,,4,5,4,3,3,,,27/09/25,Saturday,Hartlee Openiano,09:56,18:06
298392,Marlow,16/09/2025,07:30,10,5,5,5,5,5,5,,,27/09/25,Saturday,George Starkey,11:30,18:30
298042,Marlow,15/09/2025,13:30,10,5,5,5,5,5,5,,,27/09/25,Saturday,Robyn Bailey,12:00,19:00
297450,Marlow,14/09/2025,11:30,10,5,5,5,5,5,5,,,28/09/25,Sunday,Emily Payne,05:30,13:00
296865,Marlow,13/09/2025,14:30,10,5,5,5,5,4,5,My server was amazing,,28/09/25,Sunday,Tristen Bayley,06:00,10:00
296897,Marlow,13/09/2025,11:00,6,3,4,4,3,5,4,My friend’s drink was a little cold and they remade a hot one for her which was really kind,,28/09/25,Sunday,Ellen Cooper,06:00,12:00
296973,Marlow,13/09/2025,09:00,10,5,5,5,5,5,5,,,28/09/25,Sunday,Mya Hanif,08:00,13:00
297113,Marlow,13/09/2025,09:00,6,5,3,4,3,4,4,Very pricy but very delicious!!,,28/09/25,Sunday,Callum Neal,08:01,15:34
297636,Marlow,13/09/2025,10:30,10,5,5,5,5,5,5,Everyone is always very friendly and it's efficient too. I love my decaf lattes from Gails!,,28/09/25,Sunday,Hartlee Openiano,08:26,16:25
296765,Marlow,12/09/2025,15:30,10,,5,5,5,5,5,Staff are always friendly and cheerful. I love the Windsor team in particular. I travel around a lot so love having an app to collect points in the different shops I go,,28/09/25,Sunday,Maja Placzkowska,08:54,18:42
297185,Marlow,12/09/2025,12:00,8,5,5,5,5,4,4,They where all very helpful,,28/09/25,Sunday,Darcy Collins,10:00,18:57
297958,Marlow,11/09/2025,08:30,8,4,5,4,5,4,4,,,28/09/25,Sunday,Robyn Bailey,10:59,18:40
295731,Marlow,10/09/2025,14:00,6,5,4,4,5,4,5,"The team are great. The bakery needs to sort out its WiFi as there’s always a delay with people connecting and paying and tills are often down. As a separate point, there’s often a lot of chat about people coming to Gail’s less because of the continuous price rise since opening",,29/09/25,Monday,Mya Hanif,05:30,13:00
295820,Marlow,10/09/2025,12:00,5,4,3,1,3,3,3,,,29/09/25,Monday,Emily Payne,05:34,13:06
295576,Marlow,09/09/2025,14:00,10,5,5,5,5,5,5,Always reliably good,,29/09/25,Monday,Robyn Bailey,06:00,14:00
295108,Marlow,08/09/2025,10:00,10,,5,5,5,5,5,,,29/09/25,Monday,Tristen Bayley,08:00,19:00
295285,Marlow,08/09/2025,13:30,10,5,5,5,5,5,5,All the team were welcoming and friendly,,29/09/25,Monday,Darcy Collins,08:30,16:30
294598,Marlow,07/09/2025,09:30,9,5,5,,5,5,5,As expected and friendly,,29/09/25,Monday,Hartlee Openiano,09:54,19:00
294625,Marlow,07/09/2025,10:30,8,,5,,5,5,3,Not enough staff serving,,29/09/25,Monday,Callum Neal,10:02,15:10
294911,Marlow,07/09/2025,09:00,10,5,5,5,5,5,5,,,30/09/25,Tuesday,Emily Payne,05:25,15:00
294231,Marlow,06/09/2025,08:00,9,5,5,5,4,4,4,,,30/09/25,Tuesday,Callum Neal,05:46,14:00
294264,Marlow,06/09/2025,09:30,5,3,3,4,3,3,3,,,30/09/25,Tuesday,Mya Hanif,05:58,12:44
294360,Marlow,06/09/2025,13:00,9,3,5,4,4,5,4,It was efficient and friendly,,30/09/25,Tuesday,Ellen Cooper,07:57,15:47
294539,Marlow,06/09/2025,14:30,10,5,5,5,5,4,5,The manager of the store. He was super friendly and dealt with an issue promptly,,30/09/25,Tuesday,George Starkey,09:00,18:36
293780,Marlow,05/09/2025,08:00,10,5,5,5,5,5,5,,,30/09/25,Tuesday,Tristen Bayley,10:00,18:00
293914,Marlow,05/09/2025,12:00,10,5,5,5,5,5,5,"The blueberry muffin was delicious as always. Not too sweet. Beautiful crumb on top adding some texture. 
 
 Staff very friendly and efficient. App worked well!",,30/09/25,Tuesday,Isabelle Smith,10:00,18:00
293941,Marlow,05/09/2025,09:00,10,5,5,5,5,5,5,,,30/09/25,Tuesday,Maja Placzkowska,10:56,18:36
293682,Marlow,04/09/2025,08:30,10,5,5,5,5,5,5,Harley was absolutely fantastic. She is such a lovely person and always makes an effort to be friendly to everyone,,01/10/25,Wednesday,Callum Neal,05:08,14:52
293796,Marlow,04/09/2025,11:30,3,1,5,5,5,4,5,Serving Flat White in a handleless cup is very awkward. The cup was so hot I dropped it on my way to the table.,,01/10/25,Wednesday,Isabelle Smith,05:30,14:00
293357,Marlow,03/09/2025,13:30,7,4,4,4,3,4,4,,,01/10/25,Wednesday,Tristen Bayley,06:00,09:00
293448,Marlow,03/09/2025,14:30,10,5,5,5,5,5,5,The young guy that served me was lovely. Greeted me with a hello and a smile as soon as I walked in. Lovely bakery!,,01/10/25,Wednesday,George Starkey,08:00,12:50
293535,Marlow,03/09/2025,12:00,10,,5,,5,5,5,,,01/10/25,Wednesday,Ellen Cooper,08:54,16:31
295110,Marlow,03/09/2025,10:00,10,3,3,5,3,4,5,Please please change your tea!! I don’t drink coffee and your tea or the way you brew it is the worst tea anywhere. But I continue to drink it because I like the food so much.,,01/10/25,Wednesday,Maja Placzkowska,11:27,18:35
292782,Marlow,02/09/2025,09:00,10,,5,5,5,5,5,,,01/10/25,Wednesday,Mya Hanif,12:04,18:35
292762,Marlow,01/09/2025,16:00,9,1,1,1,1,1,1,The only blueberry muffin left had quite a big chunk missing. I would not have taken that down or offered to give it away to customers.,,02/10/25,Thursday,Emily Payne,05:09,12:30
292813,Marlow,01/09/2025,10:30,8,5,5,5,5,3,4,,,02/10/25,Thursday,Maja Placzkowska,05:30,13:30
293017,Marlow,01/09/2025,08:30,10,5,5,5,5,5,5,"The whole team are brilliant and always are. Mya and Yuan were smiling and happy. They are always ready to help out and to catch up with my wife Angela.
 Thank you for having such a great team at Marlow.",,02/10/25,Thursday,George Starkey,05:57,13:11
340077,Marlow,01/09/2025,09:30,10,5,5,5,5,5,5,All the team in your Marlow Gails are always very polite and welcoming.,,02/10/25,Thursday,Hartlee Openiano,08:00,16:30
296795,Marlow,13/09/2025,15:30,7,,5,5,,,,No,,02/10/25,Thursday,Isabelle Smith,08:56,18:44
297941,Marlow,15/09/2025,09:30,7,,4,4,,,,"Yes, it was great!",,02/10/25,Thursday,Callum Neal,09:30,15:30
300862,Marlow,20/09/2025,12:30,10,,5,5,,,,"Yes, it was great!",,02/10/25,Thursday,Darcy Collins,12:00,18:44
326958,Marlow,17/11/2025,10:30,10,,5,,,,,"Yes, it was great!",,03/10/25,Friday,Jake Eckle,05:00,13:00
311831,Marlow,13/10/2025,13:00,10,3,5,5,,,,"Yes, it was great!",,03/10/25,Friday,Darcy Collins,05:25,13:39
326539,Marlow,16/11/2025,09:00,2,,4,5,,,,No,,03/10/25,Friday,Maja Placzkowska,05:30,13:07
330621,Marlow,26/11/2025,13:30,8,5,5,3,,,,"Yes, it was great!",,03/10/25,Friday,Hartlee Openiano,07:30,15:00
341738,Marlow,30/12/2025,11:00,9,5,4,4,3,5,5,Out of stock of hot chocolate (?!) But offered alternative of cocoa which was very nice,,03/10/25,Friday,Ellen Cooper,07:57,09:58
341687,Marlow,28/12/2025,13:30,8,3,4,4,4,4,4,Na,,03/10/25,Friday,Emily Payne,08:25,15:40
341184,Marlow,27/12/2025,10:30,8,3,5,4,3,4,5,,,03/10/25,Friday,Isabelle Smith,10:02,18:40
341333,Marlow,27/12/2025,14:00,8,5,5,4,4,4,4,,,03/10/25,Friday,George Starkey,12:00,18:39
340628,Marlow,23/12/2025,08:00,8,4,4,2,4,4,4,"Really disappointed that, for the second day in a row, there were no fruit scones available when I visited.",,03/10/25,Friday,Ellen Cooper,12:09,17:04
340676,Marlow,23/12/2025,11:00,10,,4,5,5,4,5,They’re always very friendly and quick to help!,,04/10/25,Saturday,Jake Eckle,05:30,14:00
340830,Marlow,23/12/2025,08:00,10,5,5,5,5,3,5,"We have enjoyed our breakfast 
 Crockery could of been a bit cleaner 
 The space upstairs was warm but otherwise we will come again",,04/10/25,Saturday,Isabelle Smith,05:51,14:07
340618,Marlow,22/12/2025,13:00,8,4,4,4,3,4,4,,,04/10/25,Saturday,Robyn Bailey,05:53,13:03
340474,Marlow,21/12/2025,13:00,4,3,4,4,4,4,3,No potato and rosemary bread was available,,04/10/25,Saturday,George Starkey,07:30,14:30
340294,Marlow,20/12/2025,11:00,10,5,5,5,5,5,5,Fantastic Team in Marlow 10/10,,04/10/25,Saturday,Emily Payne,07:35,16:08
340009,Marlow,18/12/2025,14:00,10,5,5,5,5,5,5,,,04/10/25,Saturday,Hartlee Openiano,08:00,16:00
339501,Marlow,17/12/2025,11:00,10,5,5,5,5,5,5,,,04/10/25,Saturday,Chelsie Barnes,09:00,17:00
339519,Marlow,17/12/2025,10:00,8,5,4,4,4,2,4,"We love Gail’s and the coffee and food is fantastic. However, we don’t feel the cleanliness of the toilet is in line with the rest of the experience that Gail’s offers.",,04/10/25,Saturday,Ayako Chan,10:00,19:00
339713,Marlow,17/12/2025,08:30,10,5,5,,5,5,5,Always my favourite Gail’s. Very well run.,,04/10/25,Saturday,Mya Hanif,11:00,19:00
339714,Marlow,17/12/2025,08:30,5,3,3,,3,2,4,It was quiet but tables weren’t cleared. Handdryer broken in bathroom but no paper towels so you had to dry hands on loo roll. Bench seating also very uncomfortable and plug sockets are covered by the benches so not useable. This branch doesn’t seem up to the usual Gail’s standards like those in Henley or Reading,,04/10/25,Saturday,Ellen Cooper,13:00,19:00
338908,Marlow,16/12/2025,09:00,10,5,5,5,5,5,5,The Marlow team consistently exceed my expectations in their friendliness and eagerness to be helpful. It took one visit for the lovely Tristan to remember my name and drink order. I travel a fair amount for work and Marlow is a home away from home for me. I know when I go in there I will be taken care of and well looked after by every single member of the team.,,05/10/25,Sunday,Jake Eckle,05:30,13:00
339076,Marlow,16/12/2025,11:30,8,4,5,5,5,3,5,,,05/10/25,Sunday,Ellen Cooper,06:00,13:00
339119,Marlow,16/12/2025,11:00,10,,5,5,5,5,5,,,05/10/25,Sunday,Ayako Chan,06:00,14:30
338748,Marlow,15/12/2025,13:00,10,,5,5,5,5,5,,,05/10/25,Sunday,Callum Neal,08:00,15:32
338805,Marlow,15/12/2025,11:00,10,5,5,5,5,3,5,,,05/10/25,Sunday,Hartlee Openiano,08:00,17:00
338912,Marlow,15/12/2025,11:00,10,5,5,5,5,5,5,"Every person in the Marlow team exceed our expectations, as it is our very favourite Gails. As we were leaving the Bakery yesterday Izzie said she had something for us......and it was lovely 'Gails' Christmas card.. Such a lovely, kind thought. Thank you so much",,05/10/25,Sunday,Maja Placzkowska,09:00,19:00
339994,Marlow,15/12/2025,14:00,10,5,5,5,5,5,5,No,,05/10/25,Sunday,Robyn Bailey,09:00,17:00
338327,Marlow,14/12/2025,17:30,10,5,5,5,5,5,5,Delicious dark hot chocolate,,05/10/25,Sunday,Mya Hanif,10:57,18:47
337844,Marlow,13/12/2025,09:30,8,3,4,,,4,4,,,06/10/25,Monday,Jake Eckle,05:30,12:00
337931,Marlow,13/12/2025,13:30,8,4,4,5,4,4,4,Great selection of good but a bit pricey.,,06/10/25,Monday,Isabelle Smith,05:30,14:00
338132,Marlow,13/12/2025,09:30,9,5,5,5,5,5,5,,,06/10/25,Monday,Ayako Chan,05:54,13:02
337455,Marlow,12/12/2025,13:00,10,5,5,5,5,4,5,,,06/10/25,Monday,Darcy Collins,08:00,16:30
337311,Marlow,11/12/2025,13:00,10,,5,,5,5,5,The team were lovely and reassuring about the new 2kg bags of beans. Very knowledge about local roasting etc,,06/10/25,Monday,Maja Placzkowska,09:21,09:22
336701,Marlow,10/12/2025,14:00,8,,5,4,5,4,4,,,06/10/25,Monday,Maja Placzkowska,09:22,19:00
336715,Marlow,10/12/2025,13:00,9,5,4,5,3,4,5,,,06/10/25,Monday,Callum Neal,10:01,15:10
336142,Marlow,09/12/2025,08:00,10,5,5,5,5,5,5,Please could you let the barista know (female in her 20’s) that my flat white was exceptional,,06/10/25,Monday,Mya Hanif,12:00,19:00
335872,Marlow,08/12/2025,08:30,10,5,1,5,5,5,5,,,07/10/25,Tuesday,Emily Payne,05:23,12:10
335966,Marlow,08/12/2025,13:00,10,5,5,5,5,4,5,,,07/10/25,Tuesday,Isabelle Smith,05:30,14:00
335550,Marlow,07/12/2025,13:00,7,3,3,5,3,5,3,"The lady at the till was fab but the lady making my coffee spilt my coffee as she gave it to me, didn’t even notice, and then seemed annoyed at me when I asked for a tissue, despite it being her that spilt it!! Not very polite at all",,07/10/25,Tuesday,Ayako Chan,06:00,13:00
334859,Marlow,06/12/2025,11:30,4,4,3,3,3,2,2,"Sorry this all sounds like negative feedback but the “eat in” experience in Marlow was pretty poor. My app didn’t work (no WiFi connection), my server didn’t smile and none of the tables upstairs were clean. Also the area feels a bit clinical and could do with some artwork in the walls!",,07/10/25,Tuesday,Darcy Collins,08:01,16:23
334944,Marlow,06/12/2025,10:00,10,5,5,5,5,5,5,Very friendly staff at time of visit,,07/10/25,Tuesday,Maja Placzkowska,09:27,18:45
335065,Marlow,06/12/2025,09:30,7,4,4,4,3,2,4,,,07/10/25,Tuesday,Callum Neal,10:02,15:00
335609,Marlow,06/12/2025,10:00,10,5,5,5,5,5,5,,,07/10/25,Tuesday,Mya Hanif,12:05,18:45
334300,Marlow,05/12/2025,12:00,10,5,5,5,5,5,5,"The marlow team are always incredibly polite, positive and friendly.",,08/10/25,Wednesday,Mya Hanif,05:23,12:59
334338,Marlow,05/12/2025,11:00,10,5,5,5,5,5,5,,,08/10/25,Wednesday,Emily Payne,05:24,12:16
334520,Marlow,05/12/2025,13:30,10,5,5,5,5,5,5,,,08/10/25,Wednesday,Isabelle Smith,05:30,13:30
334523,Marlow,05/12/2025,16:00,9,5,5,5,5,5,5,,,08/10/25,Wednesday,Ellen Cooper,08:00,16:30
334577,Marlow,05/12/2025,13:30,10,5,5,5,5,5,5,,,08/10/25,Wednesday,Callum Neal,10:00,15:02
334602,Marlow,05/12/2025,09:30,7,3,5,4,5,5,5,Has your coffee changed? Flat white lacking normal chocolatey sweetness,,08/10/25,Wednesday,Maja Placzkowska,10:57,18:40
334186,Marlow,04/12/2025,11:00,10,5,5,5,5,5,5,,,08/10/25,Wednesday,Darcy Collins,12:01,18:41
334222,Marlow,04/12/2025,14:00,10,5,5,4,5,4,5,,,09/10/25,Thursday,Mya Hanif,05:25,13:44
334356,Marlow,04/12/2025,07:30,8,5,5,5,5,5,5,"I would be the happiest Gail’s core customer IF only Gail’s catered more to vegan customers. 
 Vegan items can be eaten by anyone, including non-vegans. With inclusivity, climate goals and animal cruelty all being more important subjects than ever, it is hard to understand why large cafe chains like Gail’s, who proudly caters quality food to communities would leave these goals behind for profit. It is saddening and worrying, as progress seems impossible if no one innovates and we’re still suck in BAU in 2025.
 
 I visit Gail’s regularly, and I’ve eaten so many tahini bites (the only vegan cake option), I also feel personally unseen, besides all the bigger issues that should drive business innovation and taking a leadership role in eliminating, meat, dairy, plastic, toxins, processed food as much as possible, and teach people how to have a wonderful time with delicious food without compromising on our future and health.",,09/10/25,Thursday,Jake Eckle,05:30,12:00
333497,Marlow,03/12/2025,12:00,10,5,5,5,5,5,5,,,09/10/25,Thursday,Maja Placzkowska,06:00,13:00
333976,Marlow,03/12/2025,13:30,10,3,5,5,5,5,5,Your people are (almost) always very helpful and friendly. I mostly only buy sourdough bread but occasionally something else to take out.,,09/10/25,Thursday,Ellen Cooper,07:58,17:05
333100,Marlow,02/12/2025,11:30,7,5,5,4,,2,1,I find regularly that you cant get a seat. On Monday upstairs was 4 tables each occupied by 1 male adult on each on their laptops. 2 tables downstairs the same so impossible to sit and enjoy lunch.,,09/10/25,Thursday,Emily Payne,09:25,09:26
333382,Marlow,02/12/2025,12:00,7,3,4,4,3,4,4,,,09/10/25,Thursday,Emily Payne,09:26,15:34
332877,Marlow,01/12/2025,08:30,10,,4,5,5,5,5,,,09/10/25,Thursday,Tristen Bayley,09:30,19:00
340810,Marlow,23/12/2025,14:30,5,,3,3,,,,No,,09/10/25,Thursday,George Starkey,11:54,18:45
,,,,,,,,,,,,,10/10/25,Friday,Jake Eckle,05:30,13:00
,,,,,,,,,,,,,10/10/25,Friday,Maja Placzkowska,05:30,10:00
,,,,,,,,,,,,,10/10/25,Friday,Tristen Bayley,05:30,13:30
,,,,,,,,,,,,,10/10/25,Friday,Ayako Chan,06:00,13:00
,,,,,,,,,,,,,10/10/25,Friday,Ellen Cooper,07:29,15:18
,,,,,,,,,,,,,10/10/25,Friday,Emily Payne,08:27,15:48
,,,,,,,,,,,,,10/10/25,Friday,Darcy Collins,08:30,16:30
,,,,,,,,,,,,,10/10/25,Friday,Isabelle Smith,09:00,19:00
,,,,,,,,,,,,,10/10/25,Friday,George Starkey,11:57,18:51
,,,,,,,,,,,,,10/10/25,Friday,Tristen Bayley,14:00,15:00
,,,,,,,,,,,,,11/10/25,Saturday,Jake Eckle,05:30,14:00
,,,,,,,,,,,,,11/10/25,Saturday,Mya Hanif,06:00,13:00
,,,,,,,,,,,,,11/10/25,Saturday,Tristen Bayley,06:00,13:30
,,,,,,,,,,,,,11/10/25,Saturday,Callum Neal,06:01,13:37
,,,,,,,,,,,,,11/10/25,Saturday,Emily Payne,07:30,16:00
,,,,,,,,,,,,,11/10/25,Saturday,Robyn Bailey,08:00,14:30
,,,,,,,,,,,,,11/10/25,Saturday,Isabelle Smith,08:30,16:30
,,,,,,,,,,,,,11/10/25,Saturday,Chelsie Barnes,10:00,17:00
,,,,,,,,,,,,,11/10/25,Saturday,George Starkey,10:00,17:30
,,,,,,,,,,,,,11/10/25,Saturday,Ayako Chan,12:57,19:02
,,,,,,,,,,,,,11/10/25,Saturday,Hartlee Openiano,12:58,18:47
,,,,,,,,,,,,,11/10/25,Saturday,Ellen Cooper,13:30,19:00
,,,,,,,,,,,,,12/10/25,Sunday,Jake Eckle,05:30,14:30
,,,,,,,,,,,,,12/10/25,Sunday,Amy Walduck,05:57,14:06
,,,,,,,,,,,,,12/10/25,Sunday,Tristen Bayley,06:00,15:00
,,,,,,,,,,,,,12/10/25,Sunday,Callum Neal,08:00,16:00
,,,,,,,,,,,,,12/10/25,Sunday,Hartlee Openiano,08:00,17:00
,,,,,,,,,,,,,12/10/25,Sunday,George Starkey,08:24,18:49
,,,,,,,,,,,,,12/10/25,Sunday,Ayako Chan,11:00,19:00
,,,,,,,,,,,,,13/10/25,Monday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,13/10/25,Monday,Mya Hanif,05:30,13:45
,,,,,,,,,,,,,13/10/25,Monday,Robyn Bailey,05:46,13:06
,,,,,,,,,,,,,13/10/25,Monday,Isabelle Smith,08:00,19:00
,,,,,,,,,,,,,13/10/25,Monday,Tristen Bayley,09:30,19:00
,,,,,,,,,,,,,13/10/25,Monday,Callum Neal,10:00,15:07
,,,,,,,,,,,,,13/10/25,Monday,Hartlee Openiano,11:30,16:30
,,,,,,,,,,,,,14/10/25,Tuesday,Isabelle Smith,05:28,13:32
,,,,,,,,,,,,,14/10/25,Tuesday,Emily Payne,05:41,12:16
,,,,,,,,,,,,,14/10/25,Tuesday,Amy Walduck,05:54,13:01
,,,,,,,,,,,,,14/10/25,Tuesday,Tristen Bayley,08:00,19:00
,,,,,,,,,,,,,14/10/25,Tuesday,Mya Hanif,08:25,16:29
,,,,,,,,,,,,,14/10/25,Tuesday,Callum Neal,10:01,15:11
,,,,,,,,,,,,,14/10/25,Tuesday,Darcy Collins,11:30,19:00
,,,,,,,,,,,,,15/10/25,Wednesday,Isabelle Smith,05:30,14:00
,,,,,,,,,,,,,15/10/25,Wednesday,Emily Payne,05:32,12:19
,,,,,,,,,,,,,15/10/25,Wednesday,Ellen Cooper,06:00,14:00
,,,,,,,,,,,,,15/10/25,Wednesday,Darcy Collins,08:00,16:30
,,,,,,,,,,,,,15/10/25,Wednesday,Tristen Bayley,09:30,19:00
,,,,,,,,,,,,,15/10/25,Wednesday,Callum Neal,10:00,15:20
,,,,,,,,,,,,,15/10/25,Wednesday,Mya Hanif,11:40,18:58
,,,,,,,,,,,,,16/10/25,Thursday,Maja Placzkowska,05:29,14:05
,,,,,,,,,,,,,16/10/25,Thursday,Callum Neal,05:31,12:50
,,,,,,,,,,,,,16/10/25,Thursday,Darcy Collins,06:00,13:00
,,,,,,,,,,,,,16/10/25,Thursday,Ellen Cooper,07:56,16:38
,,,,,,,,,,,,,16/10/25,Thursday,Jake Eckle,09:00,15:30
,,,,,,,,,,,,,16/10/25,Thursday,George Starkey,09:26,18:34
,,,,,,,,,,,,,16/10/25,Thursday,Ayako Chan,11:29,18:36
,,,,,,,,,,,,,17/10/25,Friday,Maja Placzkowska,05:30,13:30
,,,,,,,,,,,,,17/10/25,Friday,Isabelle Smith,05:30,13:00
,,,,,,,,,,,,,17/10/25,Friday,Callum Neal,05:30,13:00
,,,,,,,,,,,,,17/10/25,Friday,Ellen Cooper,07:33,14:36
,,,,,,,,,,,,,17/10/25,Friday,Jake Eckle,08:00,15:30
,,,,,,,,,,,,,17/10/25,Friday,George Starkey,09:08,18:58
,,,,,,,,,,,,,17/10/25,Friday,Hartlee Openiano,10:00,16:30
,,,,,,,,,,,,,17/10/25,Friday,Ayako Chan,12:00,19:00
,,,,,,,,,,,,,18/10/25,Saturday,Jake Eckle,05:30,14:00
,,,,,,,,,,,,,18/10/25,Saturday,Ellen Cooper,06:00,11:03
,,,,,,,,,,,,,18/10/25,Saturday,Isabelle Smith,06:00,14:30
,,,,,,,,,,,,,18/10/25,Saturday,Ayako Chan,07:29,14:18
,,,,,,,,,,,,,18/10/25,Saturday,Emily Payne,07:30,16:54
,,,,,,,,,,,,,18/10/25,Saturday,Robyn Bailey,08:00,16:30
,,,,,,,,,,,,,18/10/25,Saturday,Maja Placzkowska,08:30,19:00
,,,,,,,,,,,,,18/10/25,Saturday,Hartlee Openiano,09:30,15:00
,,,,,,,,,,,,,18/10/25,Saturday,George Starkey,11:30,18:08
,,,,,,,,,,,,,18/10/25,Saturday,Tristen Bayley,14:00,19:00
,,,,,,,,,,,,,19/10/25,Sunday,Jake Eckle,05:30,14:00
,,,,,,,,,,,,,19/10/25,Sunday,Ayako Chan,06:00,14:00
,,,,,,,,,,,,,19/10/25,Sunday,Chelsie Barnes,06:30,13:00
,,,,,,,,,,,,,19/10/25,Sunday,Tristen Bayley,08:00,15:30
,,,,,,,,,,,,,19/10/25,Sunday,Emily Payne,08:01,16:12
,,,,,,,,,,,,,19/10/25,Sunday,Maja Placzkowska,08:30,18:40
,,,,,,,,,,,,,19/10/25,Sunday,Mya Hanif,09:30,17:00
,,,,,,,,,,,,,19/10/25,Sunday,Hartlee Openiano,12:00,17:00
,,,,,,,,,,,,,19/10/25,Sunday,George Starkey,12:59,18:46
,,,,,,,,,,,,,19/10/25,Sunday,Tristen Bayley,15:30,16:30
,,,,,,,,,,,,,20/10/25,Monday,Callum Neal,05:11,12:12
,,,,,,,,,,,,,20/10/25,Monday,Isabelle Smith,05:30,13:00
,,,,,,,,,,,,,20/10/25,Monday,Ellen Cooper,06:00,14:00
,,,,,,,,,,,,,20/10/25,Monday,Tristen Bayley,08:00,19:00
,,,,,,,,,,,,,20/10/25,Monday,Mya Hanif,09:30,19:00
,,,,,,,,,,,,,20/10/25,Monday,Emily Payne,09:47,15:55
,,,,,,,,,,,,,20/10/25,Monday,Robyn Bailey,11:59,16:30
,,,,,,,,,,,,,21/10/25,Tuesday,Mya Hanif,05:26,12:45
,,,,,,,,,,,,,21/10/25,Tuesday,Emily Payne,05:29,12:17
,,,,,,,,,,,,,21/10/25,Tuesday,Amy Walduck,05:59,14:09
,,,,,,,,,,,,,21/10/25,Tuesday,Isabelle Smith,08:00,19:00
,,,,,,,,,,,,,21/10/25,Tuesday,Ellen Cooper,09:30,16:30
,,,,,,,,,,,,,21/10/25,Tuesday,Callum Neal,10:00,15:00
,,,,,,,,,,,,,21/10/25,Tuesday,George Starkey,11:25,18:48
,,,,,,,,,,,,,22/10/25,Wednesday,Mya Hanif,05:27,12:45
,,,,,,,,,,,,,22/10/25,Wednesday,Jake Eckle,05:30,13:00
,,,,,,,,,,,,,22/10/25,Wednesday,Tristen Bayley,06:00,09:30
,,,,,,,,,,,,,22/10/25,Wednesday,Darcy Collins,08:00,16:39
,,,,,,,,,,,,,22/10/25,Wednesday,Isabelle Smith,09:00,16:00
,,,,,,,,,,,,,22/10/25,Wednesday,Ayako Chan,09:28,18:40
,,,,,,,,,,,,,22/10/25,Wednesday,Robyn Bailey,09:30,14:00
,,,,,,,,,,,,,22/10/25,Wednesday,Emily Payne,09:48,14:40
,,,,,,,,,,,,,22/10/25,Wednesday,George Starkey,11:22,18:32
,,,,,,,,,,,,,23/10/25,Thursday,Maja Placzkowska,05:28,14:34
,,,,,,,,,,,,,23/10/25,Thursday,Mya Hanif,05:27,12:40
,,,,,,,,,,,,,23/10/25,Thursday,Darcy Collins,06:00,12:00
,,,,,,,,,,,,,23/10/25,Thursday,Tristen Bayley,08:00,19:00
,,,,,,,,,,,,,23/10/25,Thursday,Hartlee Openiano,09:30,16:30
,,,,,,,,,,,,,23/10/25,Thursday,Ayako Chan,11:31,18:13
,,,,,,,,,,,,,24/10/25,Friday,Maja Placzkowska,05:28,12:55
,,,,,,,,,,,,,24/10/25,Friday,Callum Neal,05:30,13:30
,,,,,,,,,,,,,24/10/25,Friday,Ayako Chan,05:32,14:00
,,,,,,,,,,,,,24/10/25,Friday,Hartlee Openiano,07:30,13:00
,,,,,,,,,,,,,24/10/25,Friday,Ellen Cooper,08:00,16:30
,,,,,,,,,,,,,24/10/25,Friday,Isabelle Smith,09:00,19:00
,,,,,,,,,,,,,24/10/25,Friday,George Starkey,13:03,18:31
,,,,,,,,,,,,,25/10/25,Saturday,Jake Eckle,05:30,14:00
,,,,,,,,,,,,,25/10/25,Saturday,George Starkey,05:54,14:32
,,,,,,,,,,,,,25/10/25,Saturday,Tristen Bayley,06:00,13:00
,,,,,,,,,,,,,25/10/25,Saturday,Ellen Cooper,07:30,16:00
,,,,,,,,,,,,,25/10/25,Saturday,Callum Neal,07:30,16:15
,,,,,,,,,,,,,25/10/25,Saturday,Hartlee Openiano,07:59,17:09
,,,,,,,,,,,,,25/10/25,Saturday,Maja Placzkowska,09:04,18:30
,,,,,,,,,,,,,25/10/25,Saturday,Isabelle Smith,09:30,19:00
,,,,,,,,,,,,,25/10/25,Saturday,Ayako Chan,09:56,18:33
,,,,,,,,,,,,,26/10/25,Sunday,Jake Eckle,05:30,14:30
,,,,,,,,,,,,,26/10/25,Sunday,Ayako Chan,06:00,13:10
,,,,,,,,,,,,,26/10/25,Sunday,Ellen Cooper,06:30,13:00
,,,,,,,,,,,,,26/10/25,Sunday,Callum Neal,08:00,16:00
,,,,,,,,,,,,,26/10/25,Sunday,George Starkey,08:00,14:14
,,,,,,,,,,,,,26/10/25,Sunday,Maja Placzkowska,08:57,18:39
,,,,,,,,,,,,,26/10/25,Sunday,Tristen Bayley,10:00,19:00
,,,,,,,,,,,,,26/10/25,Sunday,Chelsie Barnes,11:00,17:39
,,,,,,,,,,,,,26/10/25,Sunday,Hartlee Openiano,11:57,18:41
,,,,,,,,,,,,,27/10/25,Monday,Isabelle Smith,05:30,14:00
,,,,,,,,,,,,,27/10/25,Monday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,27/10/25,Monday,Ellen Cooper,05:57,13:09
,,,,,,,,,,,,,27/10/25,Monday,Mya Hanif,08:00,16:30
,,,,,,,,,,,,,27/10/25,Monday,Tristen Bayley,10:00,19:00
,,,,,,,,,,,,,27/10/25,Monday,Callum Neal,10:00,15:30
,,,,,,,,,,,,,27/10/25,Monday,Darcy Collins,11:30,19:00
,,,,,,,,,,,,,28/10/25,Tuesday,Isabelle Smith,05:30,14:00
,,,,,,,,,,,,,28/10/25,Tuesday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,28/10/25,Tuesday,Ellen Cooper,06:00,13:00
,,,,,,,,,,,,,28/10/25,Tuesday,Amy Walduck,07:56,17:13
,,,,,,,,,,,,,28/10/25,Tuesday,Tristen Bayley,09:30,19:00
,,,,,,,,,,,,,28/10/25,Tuesday,Callum Neal,10:00,15:10
,,,,,,,,,,,,,28/10/25,Tuesday,Tanya Low,11:20,12:00
,,,,,,,,,,,,,28/10/25,Tuesday,Darcy Collins,11:30,19:00
,,,,,,,,,,,,,29/10/25,Wednesday,Emily Payne,05:10,12:10
,,,,,,,,,,,,,29/10/25,Wednesday,Tristen Bayley,05:30,13:00
,,,,,,,,,,,,,29/10/25,Wednesday,Ellen Cooper,06:00,14:00
,,,,,,,,,,,,,29/10/25,Wednesday,Mya Hanif,08:00,16:30
,,,,,,,,,,,,,29/10/25,Wednesday,Ayako Chan,09:29,18:29
,,,,,,,,,,,,,29/10/25,Wednesday,Callum Neal,10:00,15:30
,,,,,,,,,,,,,29/10/25,Wednesday,Maja Placzkowska,11:24,18:29
,,,,,,,,,,,,,30/10/25,Thursday,Emily Payne,05:17,12:19
,,,,,,,,,,,,,30/10/25,Thursday,Maja Placzkowska,05:30,14:00
,,,,,,,,,,,,,30/10/25,Thursday,Ellen Cooper,06:02,12:51
,,,,,,,,,,,,,30/10/25,Thursday,Hartlee Openiano,07:58,16:36
,,,,,,,,,,,,,30/10/25,Thursday,Isabelle Smith,09:30,19:00
,,,,,,,,,,,,,30/10/25,Thursday,Mya Hanif,09:30,19:00
,,,,,,,,,,,,,30/10/25,Thursday,Callum Neal,10:00,15:30
,,,,,,,,,,,,,31/10/25,Friday,Emily Payne,05:11,13:57
,,,,,,,,,,,,,31/10/25,Friday,Isabelle Smith,05:28,15:35
,,,,,,,,,,,,,31/10/25,Friday,Maja Placzkowska,05:30,13:00
,,,,,,,,,,,,,31/10/25,Friday,Hartlee Openiano,08:30,16:30
,,,,,,,,,,,,,31/10/25,Friday,Jake Eckle,08:30,16:00
,,,,,,,,,,,,,31/10/25,Friday,Tanya Low,09:00,09:34
,,,,,,,,,,,,,31/10/25,Friday,Tanya Low,09:34,16:32
,,,,,,,,,,,,,31/10/25,Friday,Ayako Chan,10:00,18:53
,,,,,,,,,,,,,31/10/25,Friday,Darcy Collins,11:30,18:53
,,,,,,,,,,,,,01/11/25,Saturday,Jake Eckle,05:30,14:00
,,,,,,,,,,,,,01/11/25,Saturday,Chelsie Barnes,06:00,13:00
,,,,,,,,,,,,,01/11/25,Saturday,Isabelle Smith,07:17,13:38
,,,,,,,,,,,,,01/11/25,Saturday,Emily Payne,07:23,15:56
,,,,,,,,,,,,,01/11/25,Saturday,Ayako Chan,07:30,16:00
,,,,,,,,,,,,,01/11/25,Saturday,Callum Neal,08:02,17:10
,,,,,,,,,,,,,01/11/25,Saturday,Maja Placzkowska,09:27,18:49
,,,,,,,,,,,,,01/11/25,Saturday,Hartlee Openiano,10:00,19:00
,,,,,,,,,,,,,01/11/25,Saturday,Darcy Collins,10:02,18:52
,,,,,,,,,,,,,02/11/25,Sunday,Jake Eckle,05:30,14:00
,,,,,,,,,,,,,02/11/25,Sunday,Ayako Chan,06:00,15:00
,,,,,,,,,,,,,02/11/25,Sunday,Ellen Cooper,06:30,14:00
,,,,,,,,,,,,,02/11/25,Sunday,Emily Payne,07:54,15:06
,,,,,,,,,,,,,02/11/25,Sunday,Hartlee Openiano,08:00,17:00
,,,,,,,,,,,,,02/11/25,Sunday,Maja Placzkowska,08:55,18:24
,,,,,,,,,,,,,02/11/25,Sunday,Mya Hanif,09:29,18:24
,,,,,,,,,,,,,02/11/25,Sunday,Darcy Collins,11:58,18:26
,,,,,,,,,,,,,03/11/25,Monday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,03/11/25,Monday,Ayako Chan,05:30,13:00
,,,,,,,,,,,,,03/11/25,Monday,Darcy Collins,06:01,14:13
,,,,,,,,,,,,,03/11/25,Monday,Isabelle Smith,08:00,16:30
,,,,,,,,,,,,,03/11/25,Monday,Mya Hanif,09:29,18:38
,,,,,,,,,,,,,03/11/25,Monday,Callum Neal,10:00,15:30
,,,,,,,,,,,,,03/11/25,Monday,Hartlee Openiano,11:30,18:38
,,,,,,,,,,,,,04/11/25,Tuesday,Mya Hanif,05:30,14:00
,,,,,,,,,,,,,04/11/25,Tuesday,Emily Payne,05:38,12:05
,,,,,,,,,,,,,04/11/25,Tuesday,George Starkey,06:00,13:00
,,,,,,,,,,,,,04/11/25,Tuesday,Amy Walduck,08:00,16:30
,,,,,,,,,,,,,04/11/25,Tuesday,Isabelle Smith,09:30,19:00
,,,,,,,,,,,,,04/11/25,Tuesday,Callum Neal,10:00,15:30
,,,,,,,,,,,,,04/11/25,Tuesday,Ayako Chan,11:02,18:36
,,,,,,,,,,,,,05/11/25,Wednesday,Callum Neal,05:30,12:00
,,,,,,,,,,,,,05/11/25,Wednesday,Maja Placzkowska,05:30,13:00
,,,,,,,,,,,,,05/11/25,Wednesday,Ellen Cooper,06:00,14:00
,,,,,,,,,,,,,05/11/25,Wednesday,Isabelle Smith,07:24,16:06
,,,,,,,,,,,,,05/11/25,Wednesday,Mya Hanif,09:47,18:47
,,,,,,,,,,,,,05/11/25,Wednesday,Emily Payne,10:00,15:17
,,,,,,,,,,,,,05/11/25,Wednesday,George Starkey,11:59,18:48
,,,,,,,,,,,,,06/11/25,Thursday,Emily Payne,05:28,12:27
,,,,,,,,,,,,,06/11/25,Thursday,Mya Hanif,05:30,12:00
,,,,,,,,,,,,,06/11/25,Thursday,Darcy Collins,06:00,14:02
,,,,,,,,,,,,,06/11/25,Thursday,Ellen Cooper,07:58,16:31
,,,,,,,,,,,,,06/11/25,Thursday,Maja Placzkowska,08:56,18:53
,,,,,,,,,,,,,06/11/25,Thursday,Jake Eckle,09:30,15:30
,,,,,,,,,,,,,06/11/25,Thursday,George Starkey,11:07,18:54
,,,,,,,,,,,,,07/11/25,Friday,Jake Eckle,05:30,13:00
,,,,,,,,,,,,,07/11/25,Friday,Maja Placzkowska,05:30,13:00
,,,,,,,,,,,,,07/11/25,Friday,Ellen Cooper,07:00,15:00
,,,,,,,,,,,,,07/11/25,Friday,Emily Payne,08:21,15:21
,,,,,,,,,,,,,07/11/25,Friday,Hartlee Openiano,08:27,17:12
,,,,,,,,,,,,,07/11/25,Friday,Isabelle Smith,10:00,19:00
,,,,,,,,,,,,,07/11/25,Friday,Tanya Low,11:01,18:49
,,,,,,,,,,,,,07/11/25,Friday,George Starkey,06:00,14:00
,,,,,,,,,,,,,08/11/25,Saturday,Jake Eckle,05:30,14:30
,,,,,,,,,,,,,08/11/25,Saturday,Isabelle Smith,06:00,13:00
,,,,,,,,,,,,,08/11/25,Saturday,Robyn Bailey,06:00,14:00
,,,,,,,,,,,,,08/11/25,Saturday,Emily Payne,07:00,12:00
,,,,,,,,,,,,,08/11/25,Saturday,Ayako Chan,07:30,15:30
,,,,,,,,,,,,,08/11/25,Saturday,Ellen Cooper,08:00,16:00
,,,,,,,,,,,,,08/11/25,Saturday,George Starkey,08:30,18:00
,,,,,,,,,,,,,08/11/25,Saturday,Callum Neal,10:30,17:00
,,,,,,,,,,,,,08/11/25,Saturday,Maja Placzkowska,11:05,18:35
,,,,,,,,,,,,,08/11/25,Saturday,Hartlee Openiano,13:30,18:35
,,,,,,,,,,,,,09/11/25,Sunday,Jake Eckle,05:30,14:00
,,,,,,,,,,,,,09/11/25,Sunday,Maja Placzkowska,05:57,15:12
,,,,,,,,,,,,,09/11/25,Sunday,Robyn Bailey,06:30,14:30
,,,,,,,,,,,,,09/11/25,Sunday,Callum Neal,07:30,16:00
,,,,,,,,,,,,,09/11/25,Sunday,Ellen Cooper,08:00,17:00
,,,,,,,,,,,,,09/11/25,Sunday,Ayako Chan,09:00,18:50
,,,,,,,,,,,,,09/11/25,Sunday,Hartlee Openiano,10:00,18:50
,,,,,,,,,,,,,09/11/25,Sunday,George Starkey,10:40,17:30
,,,,,,,,,,,,,10/11/25,Monday,Ayako Chan,05:30,13:00
,,,,,,,,,,,,,10/11/25,Monday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,10/11/25,Monday,Robyn Bailey,06:26,12:01
,,,,,,,,,,,,,10/11/25,Monday,Isabelle Smith,08:00,16:00
,,,,,,,,,,,,,10/11/25,Monday,Maja Placzkowska,09:29,18:10
,,,,,,,,,,,,,10/11/25,Monday,Mya Hanif,11:56,18:10
,,,,,,,,,,,,,10/11/25,Monday,Callum Neal,12:00,14:30
,,,,,,,,,,,,,11/11/25,Tuesday,Emily Payne,10:00,14:14
,,,,,,,,,,,,,11/11/25,Tuesday,Callum Neal,05:30,12:00
,,,,,,,,,,,,,11/11/25,Tuesday,Isabelle Smith,05:30,12:30
,,,,,,,,,,,,,11/11/25,Tuesday,Ellen Cooper,08:00,15:45
,,,,,,,,,,,,,11/11/25,Tuesday,Tristen Bayley,09:00,17:00
,,,,,,,,,,,,,11/11/25,Tuesday,Mya Hanif,06:00,13:45
,,,,,,,,,,,,,11/11/25,Tuesday,Ayako Chan,10:01,18:24
,,,,,,,,,,,,,11/11/25,Tuesday,Darcy Collins,11:30,18:24
,,,,,,,,,,,,,12/11/25,Wednesday,Ayako Chan,05:29,13:20
,,,,,,,,,,,,,12/11/25,Wednesday,Isabelle Smith,05:30,19:00
,,,,,,,,,,,,,12/11/25,Wednesday,Darcy Collins,06:46,13:44
,,,,,,,,,,,,,12/11/25,Wednesday,Ellen Cooper,08:00,16:30
,,,,,,,,,,,,,12/11/25,Wednesday,Emily Payne,05:30,14:44
,,,,,,,,,,,,,12/11/25,Wednesday,Callum Neal,10:30,14:30
,,,,,,,,,,,,,12/11/25,Wednesday,Hartlee Openiano,11:28,19:18
,,,,,,,,,,,,,12/11/25,Wednesday,George Starkey,11:31,18:37
,,,,,,,,,,,,,13/11/25,Thursday,Tristen Bayley,09:00,19:00
,,,,,,,,,,,,,13/11/25,Thursday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,13/11/25,Thursday,Ayako Chan,05:30,13:20
,,,,,,,,,,,,,13/11/25,Thursday,Mya Hanif,05:30,12:00
,,,,,,,,,,,,,13/11/25,Thursday,Ellen Cooper,06:00,13:00
,,,,,,,,,,,,,13/11/25,Thursday,George Starkey,08:00,16:30
,,,,,,,,,,,,,13/11/25,Thursday,Hartlee Openiano,11:28,19:18
,,,,,,,,,,,,,13/11/25,Thursday,Emily Payne,09:28,15:22
,,,,,,,,,,,,,14/11/25,Friday,Ellen Cooper,05:30,13:30
,,,,,,,,,,,,,14/11/25,Friday,Jake Eckle,05:30,13:00
,,,,,,,,,,,,,14/11/25,Friday,Isabelle Smith,05:30,14:00
,,,,,,,,,,,,,14/11/25,Friday,Amy Walduck,06:29,14:36
,,,,,,,,,,,,,14/11/25,Friday,Tristen Bayley,07:30,19:00
,,,,,,,,,,,,,14/11/25,Friday,Emily Payne,08:30,15:03
,,,,,,,,,,,,,14/11/25,Friday,Ayako Chan,08:54,16:51
,,,,,,,,,,,,,14/11/25,Friday,George Starkey,09:29,18:41
,,,,,,,,,,,,,14/11/25,Friday,Hartlee Openiano,08:00,17:00
,,,,,,,,,,,,,14/11/25,Friday,Tanya Low,11:30,18:40
,,,,,,,,,,,,,15/11/25,Saturday,Jake Eckle,05:30,14:00
,,,,,,,,,,,,,15/11/25,Saturday,Ayako Chan,09:00,17:00
,,,,,,,,,,,,,15/11/25,Saturday,Robyn Bailey,06:00,14:00
,,,,,,,,,,,,,15/11/25,Saturday,Emily Payne,07:30,16:15
,,,,,,,,,,,,,15/11/25,Saturday,Hartlee Openiano,10:00,19:00
,,,,,,,,,,,,,15/11/25,Saturday,Callum Neal,08:30,17:30
,,,,,,,,,,,,,15/11/25,Saturday,George Starkey,11:00,18:45
,,,,,,,,,,,,,15/11/25,Saturday,Tristen Bayley,07:30,19:00
,,,,,,,,,,,,,15/11/25,Saturday,Isabelle Smith,06:00,12:00
,,,,,,,,,,,,,16/11/25,Sunday,Jake Eckle,05:30,14:00
,,,,,,,,,,,,,16/11/25,Sunday,Callum Neal,08:00,16:00
,,,,,,,,,,,,,16/11/25,Sunday,Robyn Bailey,09:00,17:00
,,,,,,,,,,,,,16/11/25,Sunday,George Starkey,09:56,18:24
,,,,,,,,,,,,,16/11/25,Sunday,Chelsie Barnes,10:00,18:00
,,,,,,,,,,,,,16/11/25,Sunday,Amy Walduck,06:30,14:30
,,,,,,,,,,,,,16/11/25,Sunday,Hartlee Openiano,08:00,16:00
,,,,,,,,,,,,,16/11/25,Sunday,Ayako Chan,06:00,14:00
,,,,,,,,,,,,,16/11/25,Sunday,Tristen Bayley,13:00,19:00
,,,,,,,,,,,,,17/11/25,Monday,Isabelle Smith,05:30,13:30
,,,,,,,,,,,,,17/11/25,Monday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,17/11/25,Monday,Robyn Bailey,06:00,14:00
,,,,,,,,,,,,,17/11/25,Monday,Tristen Bayley,08:00,19:00
,,,,,,,,,,,,,17/11/25,Monday,Mya Hanif,09:30,16:30
,,,,,,,,,,,,,17/11/25,Monday,Callum Neal,10:00,15:30
,,,,,,,,,,,,,17/11/25,Monday,Hartlee Openiano,11:30,19:00
,,,,,,,,,,,,,18/11/25,Tuesday,Callum Neal,05:30,12:00
,,,,,,,,,,,,,18/11/25,Tuesday,Tristen Bayley,05:30,13:00
,,,,,,,,,,,,,18/11/25,Tuesday,Ayako Chan,06:00,14:00
,,,,,,,,,,,,,18/11/25,Tuesday,Ellen Cooper,07:55,16:17
,,,,,,,,,,,,,18/11/25,Tuesday,Isabelle Smith,09:30,19:00
,,,,,,,,,,,,,18/11/25,Tuesday,Emily Payne,10:00,14:52
,,,,,,,,,,,,,18/11/25,Tuesday,Mya Hanif,11:29,18:49
,,,,,,,,,,,,,19/11/25,Wednesday,Callum Neal,05:30,12:00
,,,,,,,,,,,,,19/11/25,Wednesday,Mya Hanif,05:30,13:40
,,,,,,,,,,,,,19/11/25,Wednesday,Maja Placzkowska,05:58,15:00
,,,,,,,,,,,,,19/11/25,Wednesday,Tristen Bayley,08:00,16:30
,,,,,,,,,,,,,19/11/25,Wednesday,Isabelle Smith,09:30,19:00
,,,,,,,,,,,,,19/11/25,Wednesday,Ayako Chan,11:32,18:46
,,,,,,,,,,,,,20/11/25,Thursday,Ayako Chan,05:23,13:29
,,,,,,,,,,,,,20/11/25,Thursday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,20/11/25,Thursday,Ellen Cooper,05:58,14:02
,,,,,,,,,,,,,20/11/25,Thursday,Maja Placzkowska,09:00,19:00
,,,,,,,,,,,,,20/11/25,Thursday,Emily Payne,09:25,15:07
,,,,,,,,,,,,,20/11/25,Thursday,Hartlee Openiano,10:30,19:00
,,,,,,,,,,,,,20/11/25,Thursday,Tristen Bayley,11:30,17:00
,,,,,,,,,,,,,21/11/25,Friday,Ellen Cooper,05:30,13:30
,,,,,,,,,,,,,21/11/25,Friday,Jake Eckle,05:30,13:00
,,,,,,,,,,,,,21/11/25,Friday,Maja Placzkowska,05:30,13:00
,,,,,,,,,,,,,21/11/25,Friday,Tristen Bayley,07:30,12:00
,,,,,,,,,,,,,21/11/25,Friday,Hartlee Openiano,08:00,16:30
,,,,,,,,,,,,,21/11/25,Friday,Emily Payne,08:28,16:04
,,,,,,,,,,,,,21/11/25,Friday,Isabelle Smith,09:30,19:00
,,,,,,,,,,,,,21/11/25,Friday,Ayako Chan,12:32,18:43
,,,,,,,,,,,,,22/11/25,Saturday,Jake Eckle,05:30,14:00
,,,,,,,,,,,,,22/11/25,Saturday,Mya Hanif,05:56,09:36
,,,,,,,,,,,,,22/11/25,Saturday,Ellen Cooper,06:00,13:30
,,,,,,,,,,,,,22/11/25,Saturday,Amy Walduck,06:27,14:09
,,,,,,,,,,,,,22/11/25,Saturday,Isabelle Smith,07:30,16:00
,,,,,,,,,,,,,22/11/25,Saturday,Emily Payne,07:34,16:13
,,,,,,,,,,,,,22/11/25,Saturday,Callum Neal,08:30,15:00
,,,,,,,,,,,,,22/11/25,Saturday,Hartlee Openiano,09:30,16:30
,,,,,,,,,,,,,22/11/25,Saturday,Maja Placzkowska,10:29,18:52
,,,,,,,,,,,,,22/11/25,Saturday,Ayako Chan,11:00,18:51
,,,,,,,,,,,,,22/11/25,Saturday,Robyn Bailey,12:54,18:44
,,,,,,,,,,,,,23/11/25,Sunday,Jake Eckle,05:30,13:30
,,,,,,,,,,,,,23/11/25,Sunday,Tristen Bayley,06:00,16:00
,,,,,,,,,,,,,23/11/25,Sunday,Ellen Cooper,06:30,14:00
,,,,,,,,,,,,,23/11/25,Sunday,Callum Neal,07:30,16:00
,,,,,,,,,,,,,23/11/25,Sunday,Robyn Bailey,07:54,08:58
,,,,,,,,,,,,,23/11/25,Sunday,Chelsie Barnes,08:00,16:00
,,,,,,,,,,,,,23/11/25,Sunday,Maja Placzkowska,09:04,18:35
,,,,,,,,,,,,,23/11/25,Sunday,Hartlee Openiano,09:57,18:35
,,,,,,,,,,,,,24/11/25,Monday,Tristen Bayley,05:00,12:00
,,,,,,,,,,,,,24/11/25,Monday,Jake Eckle,05:30,13:00
,,,,,,,,,,,,,24/11/25,Monday,Ayako Chan,06:30,14:00
,,,,,,,,,,,,,24/11/25,Monday,Ellen Cooper,07:57,16:39
,,,,,,,,,,,,,24/11/25,Monday,Isabelle Smith,09:30,19:00
,,,,,,,,,,,,,24/11/25,Monday,Maja Placzkowska,10:00,15:30
,,,,,,,,,,,,,24/11/25,Monday,Robyn Bailey,11:21,19:00
,,,,,,,,,,,,,25/11/25,Tuesday,Maja Placzkowska,05:27,14:45
,,,,,,,,,,,,,25/11/25,Tuesday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,25/11/25,Tuesday,Mya Hanif,05:54,14:02
,,,,,,,,,,,,,25/11/25,Tuesday,Amy Walduck,07:55,15:57
,,,,,,,,,,,,,25/11/25,Tuesday,Isabelle Smith,09:25,19:06
,,,,,,,,,,,,,25/11/25,Tuesday,Emily Payne,10:00,15:38
,,,,,,,,,,,,,25/11/25,Tuesday,Tristen Bayley,11:30,19:00
,,,,,,,,,,,,,26/11/25,Wednesday,Isabelle Smith,05:27,13:04
,,,,,,,,,,,,,26/11/25,Wednesday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,26/11/25,Wednesday,Ayako Chan,06:02,14:05
,,,,,,,,,,,,,26/11/25,Wednesday,Mya Hanif,08:27,16:30
,,,,,,,,,,,,,26/11/25,Wednesday,Tristen Bayley,09:30,19:00
,,,,,,,,,,,,,26/11/25,Wednesday,Callum Neal,10:00,15:30
,,,,,,,,,,,,,26/11/25,Wednesday,Hartlee Openiano,11:24,19:06
,,,,,,,,,,,,,27/11/25,Thursday,Callum Neal,05:19,12:24
,,,,,,,,,,,,,27/11/25,Thursday,Mya Hanif,05:30,13:00
,,,,,,,,,,,,,27/11/25,Thursday,Chelsie Barnes,06:00,14:00
,,,,,,,,,,,,,27/11/25,Thursday,George Starkey,08:12,16:29
,,,,,,,,,,,,,27/11/25,Thursday,Emily Payne,09:28,15:09
,,,,,,,,,,,,,27/11/25,Thursday,Tristen Bayley,09:30,19:00
,,,,,,,,,,,,,27/11/25,Thursday,Hartlee Openiano,11:30,19:00
,,,,,,,,,,,,,28/11/25,Friday,Ellen Cooper,05:28,13:08
,,,,,,,,,,,,,28/11/25,Friday,Isabelle Smith,05:30,14:00
,,,,,,,,,,,,,28/11/25,Friday,Callum Neal,05:30,13:00
,,,,,,,,,,,,,28/11/25,Friday,Hartlee Openiano,07:29,16:14
,,,,,,,,,,,,,28/11/25,Friday,Mya Hanif,08:00,16:30
,,,,,,,,,,,,,28/11/25,Friday,Emily Payne,08:39,15:48
,,,,,,,,,,,,,28/11/25,Friday,George Starkey,09:30,19:00
,,,,,,,,,,,,,28/11/25,Friday,Tristen Bayley,11:30,19:00
,,,,,,,,,,,,,29/11/25,Saturday,Emily Payne,05:18,14:31
,,,,,,,,,,,,,29/11/25,Saturday,Tristen Bayley,06:00,09:00
,,,,,,,,,,,,,29/11/25,Saturday,Isabelle Smith,06:00,14:00
,,,,,,,,,,,,,29/11/25,Saturday,Hartlee Openiano,07:30,15:00
,,,,,,,,,,,,,29/11/25,Saturday,Callum Neal,07:30,16:30
,,,,,,,,,,,,,29/11/25,Saturday,George Starkey,08:00,16:00
,,,,,,,,,,,,,29/11/25,Saturday,Robyn Bailey,09:00,17:00
,,,,,,,,,,,,,29/11/25,Saturday,Ayako Chan,09:58,18:39
,,,,,,,,,,,,,29/11/25,Saturday,Mya Hanif,11:00,18:39
,,,,,,,,,,,,,29/11/25,Saturday,Ellen Cooper,11:55,18:39
,,,,,,,,,,,,,30/11/25,Sunday,Emily Payne,05:30,14:00
,,,,,,,,,,,,,30/11/25,Sunday,Ayako Chan,06:00,14:00
,,,,,,,,,,,,,30/11/25,Sunday,Ellen Cooper,06:30,14:00
,,,,,,,,,,,,,30/11/25,Sunday,Mya Hanif,08:00,15:00
,,,,,,,,,,,,,30/11/25,Sunday,Callum Neal,08:00,16:00
,,,,,,,,,,,,,30/11/25,Sunday,Chelsie Barnes,09:00,16:00
,,,,,,,,,,,,,30/11/25,Sunday,Maja Placzkowska,09:22,18:35
,,,,,,,,,,,,,30/11/25,Sunday,Hartlee Openiano,10:23,18:32
,,,,,,,,,,,,,30/11/25,Sunday,Robyn Bailey,11:00,17:00
,,,,,,,,,,,,,01/12/25,Monday,Isabelle Smith,05:28,14:14
,,,,,,,,,,,,,01/12/25,Monday,Callum Neal,05:30,12:00
,,,,,,,,,,,,,01/12/25,Monday,Robyn Bailey,05:49,14:04
,,,,,,,,,,,,,01/12/25,Monday,George Starkey,08:00,17:00
,,,,,,,,,,,,,01/12/25,Monday,Maja Placzkowska,09:30,18:29
,,,,,,,,,,,,,01/12/25,Monday,Emily Payne,09:58,15:06
,,,,,,,,,,,,,01/12/25,Monday,Ayako Chan,11:02,18:29
,,,,,,,,,,,,,02/12/25,Tuesday,Emily Payne,05:08,12:04
,,,,,,,,,,,,,02/12/25,Tuesday,Maja Placzkowska,05:30,14:00
,,,,,,,,,,,,,02/12/25,Tuesday,Ellen Cooper,06:00,14:00
,,,,,,,,,,,,,02/12/25,Tuesday,Isabelle Smith,08:00,19:00
,,,,,,,,,,,,,02/12/25,Tuesday,George Starkey,09:30,17:00
,,,,,,,,,,,,,02/12/25,Tuesday,Callum Neal,10:00,15:30
,,,,,,,,,,,,,02/12/25,Tuesday,Hartlee Openiano,11:23,18:57
,,,,,,,,,,,,,03/12/25,Wednesday,Tristen Bayley,05:30,14:00
,,,,,,,,,,,,,03/12/25,Wednesday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,03/12/25,Wednesday,Ellen Cooper,06:00,14:00
,,,,,,,,,,,,,03/12/25,Wednesday,Zoe Ziaullah,08:00,17:00
,,,,,,,,,,,,,03/12/25,Wednesday,Isabelle Smith,09:23,19:17
,,,,,,,,,,,,,03/12/25,Wednesday,Callum Neal,10:01,15:19
,,,,,,,,,,,,,03/12/25,Wednesday,George Starkey,10:59,18:25
,,,,,,,,,,,,,04/12/25,Thursday,Isabelle Smith,05:16,14:07
,,,,,,,,,,,,,04/12/25,Thursday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,04/12/25,Thursday,Ellen Cooper,06:00,14:00
,,,,,,,,,,,,,04/12/25,Thursday,Tristen Bayley,08:00,19:00
,,,,,,,,,,,,,04/12/25,Thursday,Emily Payne,09:27,15:23
,,,,,,,,,,,,,04/12/25,Thursday,Zoe Ziaullah,09:30,17:00
,,,,,,,,,,,,,04/12/25,Thursday,Hartlee Openiano,11:00,19:00
,,,,,,,,,,,,,05/12/25,Friday,Maja Placzkowska,05:27,13:14
,,,,,,,,,,,,,05/12/25,Friday,Jake Eckle,05:30,13:00
,,,,,,,,,,,,,05/12/25,Friday,Ellen Cooper,05:54,13:04
,,,,,,,,,,,,,05/12/25,Friday,Hartlee Openiano,07:27,15:09
,,,,,,,,,,,,,05/12/25,Friday,Tristen Bayley,08:30,19:00
,,,,,,,,,,,,,05/12/25,Friday,Emily Payne,08:39,15:37
,,,,,,,,,,,,,05/12/25,Friday,George Starkey,09:22,16:58
,,,,,,,,,,,,,05/12/25,Friday,Mya Hanif,10:59,18:44
,,,,,,,,,,,,,06/12/25,Saturday,Jake Eckle,05:30,14:00
,,,,,,,,,,,,,06/12/25,Saturday,Tristen Bayley,06:00,14:00
,,,,,,,,,,,,,06/12/25,Saturday,Mya Hanif,06:00,14:00
,,,,,,,,,,,,,06/12/25,Saturday,Robyn Bailey,07:21,15:02
,,,,,,,,,,,,,06/12/25,Saturday,Callum Neal,08:00,16:01
,,,,,,,,,,,,,06/12/25,Saturday,Chelsie Barnes,08:00,17:00
,,,,,,,,,,,,,06/12/25,Saturday,Amy Walduck,08:00,16:30
,,,,,,,,,,,,,06/12/25,Saturday,Zoe Ziaullah,09:00,18:00
,,,,,,,,,,,,,06/12/25,Saturday,Hartlee Openiano,09:56,18:40
,,,,,,,,,,,,,06/12/25,Saturday,Maja Placzkowska,11:27,18:52
,,,,,,,,,,,,,06/12/25,Saturday,George Starkey,12:00,19:00
,,,,,,,,,,,,,06/12/25,Saturday,Tristen Bayley,14:00,15:00
,,,,,,,,,,,,,07/12/25,Sunday,Jake Eckle,05:30,14:00
,,,,,,,,,,,,,07/12/25,Sunday,Isabelle Smith,06:00,13:30
,,,,,,,,,,,,,07/12/25,Sunday,Zoe Ziaullah,06:30,13:30
,,,,,,,,,,,,,07/12/25,Sunday,Callum Neal,08:29,15:32
,,,,,,,,,,,,,07/12/25,Sunday,Chelsie Barnes,09:00,15:00
,,,,,,,,,,,,,07/12/25,Sunday,Hartlee Openiano,09:30,17:00
,,,,,,,,,,,,,07/12/25,Sunday,Sofia Ziaullah,10:15,10:30
,,,,,,,,,,,,,07/12/25,Sunday,Maja Placzkowska,10:38,18:39
,,,,,,,,,,,,,07/12/25,Sunday,Mya Hanif,11:59,18:27
,,,,,,,,,,,,,08/12/25,Monday,Emily Payne,05:08,12:04
,,,,,,,,,,,,,08/12/25,Monday,Isabelle Smith,05:30,14:00
,,,,,,,,,,,,,08/12/25,Monday,Robyn Bailey,06:09,14:02
,,,,,,,,,,,,,08/12/25,Monday,Maja Placzkowska,08:00,16:30
,,,,,,,,,,,,,08/12/25,Monday,Mya Hanif,09:30,18:34
,,,,,,,,,,,,,08/12/25,Monday,Callum Neal,09:58,14:59
,,,,,,,,,,,,,08/12/25,Monday,Hartlee Openiano,10:57,18:34
,,,,,,,,,,,,,09/12/25,Tuesday,Emily Payne,05:00,12:00
,,,,,,,,,,,,,09/12/25,Tuesday,Isabelle Smith,05:30,10:00
,,,,,,,,,,,,,09/12/25,Tuesday,Mya Hanif,06:00,14:00
,,,,,,,,,,,,,09/12/25,Tuesday,Ellen Cooper,09:25,16:07
,,,,,,,,,,,,,09/12/25,Tuesday,Maja Placzkowska,09:57,17:45
,,,,,,,,,,,,,09/12/25,Tuesday,Callum Neal,10:00,14:57
,,,,,,,,,,,,,09/12/25,Tuesday,Hartlee Openiano,10:56,17:28
,,,,,,,,,,,,,10/12/25,Wednesday,Maja Placzkowska,05:21,13:02
,,,,,,,,,,,,,10/12/25,Wednesday,Zoe Ziaullah,08:00,15:30
,,,,,,,,,,,,,10/12/25,Wednesday,Tristen Bayley,08:00,19:00
,,,,,,,,,,,,,10/12/25,Wednesday,Ellen Cooper,09:24,16:28
,,,,,,,,,,,,,10/12/25,Wednesday,Emily Payne,10:29,15:19
,,,,,,,,,,,,,11/12/25,Thursday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,11/12/25,Thursday,Tristen Bayley,05:30,14:00
,,,,,,,,,,,,,11/12/25,Thursday,Chelsie Barnes,06:00,13:00
,,,,,,,,,,,,,11/12/25,Thursday,Ellen Cooper,06:00,13:00
,,,,,,,,,,,,,11/12/25,Thursday,Emily Payne,09:30,15:30
,,,,,,,,,,,,,11/12/25,Thursday,Isabelle Smith,09:38,18:47
,,,,,,,,,,,,,11/12/25,Thursday,George Starkey,11:30,18:34
,,,,,,,,,,,,,11/12/25,Thursday,Zoe Ziaullah,11:30,19:00
,,,,,,,,,,,,,12/12/25,Friday,Jake Eckle,05:30,13:00
,,,,,,,,,,,,,12/12/25,Friday,Tristen Bayley,05:30,14:00
,,,,,,,,,,,,,12/12/25,Friday,Zoe Ziaullah,06:00,13:00
,,,,,,,,,,,,,12/12/25,Friday,Chelsie Barnes,08:00,16:30
,,,,,,,,,,,,,12/12/25,Friday,George Starkey,08:37,17:01
,,,,,,,,,,,,,12/12/25,Friday,Isabelle Smith,09:00,19:00
,,,,,,,,,,,,,12/12/25,Friday,Callum Neal,09:30,15:04
,,,,,,,,,,,,,12/12/25,Friday,Hartlee Openiano,11:27,18:50
,,,,,,,,,,,,,13/12/25,Saturday,Jake Eckle,05:30,13:30
,,,,,,,,,,,,,13/12/25,Saturday,Isabelle Smith,06:00,14:00
,,,,,,,,,,,,,13/12/25,Saturday,Mya Hanif,06:00,13:00
,,,,,,,,,,,,,13/12/25,Saturday,Zoe Ziaullah,06:00,13:00
,,,,,,,,,,,,,13/12/25,Saturday,George Starkey,06:30,13:00
,,,,,,,,,,,,,13/12/25,Saturday,Hartlee Openiano,07:26,15:42
,,,,,,,,,,,,,13/12/25,Saturday,Chelsie Barnes,07:30,14:30
,,,,,,,,,,,,,13/12/25,Saturday,Tristen Bayley,08:00,19:00
,,,,,,,,,,,,,13/12/25,Saturday,Robyn Bailey,09:30,16:00
,,,,,,,,,,,,,13/12/25,Saturday,Callum Neal,09:32,15:30
,,,,,,,,,,,,,13/12/25,Saturday,Ellen Cooper,12:00,18:00
,,,,,,,,,,,,,13/12/25,Saturday,Maja Placzkowska,12:00,19:00
,,,,,,,,,,,,,14/12/25,Sunday,Jake Eckle,05:30,14:00
,,,,,,,,,,,,,14/12/25,Sunday,Callum Neal,08:30,17:00
,,,,,,,,,,,,,14/12/25,Sunday,Zoe Ziaullah,08:30,15:30
,,,,,,,,,,,,,14/12/25,Sunday,Chelsie Barnes,09:45,17:30
,,,,,,,,,,,,,14/12/25,Sunday,Hartlee Openiano,09:58,16:52
,,,,,,,,,,,,,14/12/25,Sunday,George Starkey,10:00,18:25
,,,,,,,,,,,,,14/12/25,Sunday,Emily Payne,10:30,16:17
,,,,,,,,,,,,,14/12/25,Sunday,Maja Placzkowska,10:58,18:48
,,,,,,,,,,,,,15/12/2025,Monday,Isabelle Smith,05:30,13:30
,,,,,,,,,,,,,15/12/2025,Monday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,15/12/2025,Monday,Robyn Bailey,06:00,13:00
,,,,,,,,,,,,,15/12/2025,Monday,Tristen Bayley,08:00,19:00
,,,,,,,,,,,,,15/12/2025,Monday,Zoe Ziaullah,09:00,12:00
,,,,,,,,,,,,,15/12/2025,Monday,Callum Neal,09:28,15:26
,,,,,,,,,,,,,15/12/2025,Monday,George Starkey,10:07,17:02
,,,,,,,,,,,,,15/12/2025,Monday,Hartlee Openiano,12:00,19:00
,,,,,,,,,,,,,16/12/2025,Tuesday,Isabelle Smith,05:30,14:00
,,,,,,,,,,,,,16/12/2025,Tuesday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,16/12/2025,Tuesday,Tristen Bayley,08:00,19:00
,,,,,,,,,,,,,16/12/2025,Tuesday,Amy Walduck,08:56,17:39
,,,,,,,,,,,,,16/12/2025,Tuesday,Callum Neal,09:29,15:28
,,,,,,,,,,,,,16/12/2025,Tuesday,Hartlee Openiano,09:56,16:13
,,,,,,,,,,,,,16/12/2025,Tuesday,Zoe Ziaullah,12:00,19:00
,,,,,,,,,,,,,17/12/2025,Wednesday,Callum Neal,05:25,12:08
,,,,,,,,,,,,,17/12/2025,Wednesday,Tristen Bayley,05:30,13:00
,,,,,,,,,,,,,17/12/2025,Wednesday,Mya Hanif,06:00,13:00
,,,,,,,,,,,,,17/12/2025,Wednesday,Chelsie Barnes,06:00,14:00
,,,,,,,,,,,,,17/12/2025,Wednesday,Zoe Ziaullah,08:00,15:50
,,,,,,,,,,,,,17/12/2025,Wednesday,Isabelle Smith,09:00,19:00
,,,,,,,,,,,,,17/12/2025,Wednesday,Emily Payne,09:29,15:30
,,,,,,,,,,,,,17/12/2025,Wednesday,Callum Radler,10:00,17:00
,,,,,,,,,,,,,18/12/2025,Thursday,Maja Placzkowska,05:20,14:00
,,,,,,,,,,,,,18/12/2025,Thursday,Chelsie Barnes,06:00,13:00
,,,,,,,,,,,,,18/12/2025,Thursday,Isabelle Smith,08:00,19:00
,,,,,,,,,,,,,18/12/2025,Thursday,Emily Payne,09:28,15:44
,,,,,,,,,,,,,18/12/2025,Thursday,Callum Neal,09:29,12:13
,,,,,,,,,,,,,18/12/2025,Thursday,Matthew Reed,10:00,16:00
,,,,,,,,,,,,,18/12/2025,Thursday,Callum Radler,12:00,17:00
,,,,,,,,,,,,,18/12/2025,Thursday,Mya Hanif,12:00,19:00
,,,,,,,,,,,,,19/12/2025,Friday,Isabelle Smith,05:29,12:38
,,,,,,,,,,,,,19/12/2025,Friday,Jake Eckle,05:30,14:00
,,,,,,,,,,,,,19/12/2025,Friday,Elayna Eaton,07:30,14:00
,,,,,,,,,,,,,19/12/2025,Friday,Emily Payne,08:29,16:28
,,,,,,,,,,,,,19/12/2025,Friday,Matthew Reed,08:30,16:00
,,,,,,,,,,,,,19/12/2025,Friday,Maja Placzkowska,08:57,18:48
,,,,,,,,,,,,,19/12/2025,Friday,Mya Hanif,08:58,18:51
,,,,,,,,,,,,,19/12/2025,Friday,George Starkey,10:00,18:30
,,,,,,,,,,,,,19/12/2025,Friday,Hartlee Openiano,10:52,18:02
,,,,,,,,,,,,,20/12/2025,Saturday,Maja Placzkowska,05:48,14:30
,,,,,,,,,,,,,20/12/2025,Saturday,Jake Eckle,05:30,13:00
,,,,,,,,,,,,,20/12/2025,Saturday,Robyn Bailey,05:53,12:01
,,,,,,,,,,,,,20/12/2025,Saturday,Mya Hanif,05:57,13:41
,,,,,,,,,,,,,20/12/2025,Saturday,Callum Neal,07:30,14:14
,,,,,,,,,,,,,20/12/2025,Saturday,Matthew Reed,07:30,14:00
,,,,,,,,,,,,,20/12/2025,Saturday,George Starkey,07:59,16:41
,,,,,,,,,,,,,20/12/2025,Saturday,Hartlee Openiano,08:30,13:00
,,,,,,,,,,,,,20/12/2025,Saturday,Elayna Eaton,10:00,16:00
,,,,,,,,,,,,,20/12/2025,Saturday,Eve Garrity,10:00,16:00
,,,,,,,,,,,,,20/12/2025,Saturday,Emily Payne,10:11,16:47
,,,,,,,,,,,,,20/12/2025,Saturday,Chelsie Barnes,11:00,19:20
,,,,,,,,,,,,,20/12/2025,Saturday,Sofia Ziaullah,12:00,18:00
,,,,,,,,,,,,,20/12/2025,Saturday,Tristen Bayley,13:00,19:00
,,,,,,,,,,,,,20/12/2025,Saturday,Zoe Ziaullah,13:00,19:20
,,,,,,,,,,,,,21/12/2025,Sunday,Jake Eckle,05:30,14:00
,,,,,,,,,,,,,21/12/2025,Sunday,Tristen Bayley,06:00,13:00
,,,,,,,,,,,,,21/12/2025,Sunday,George Starkey,06:30,14:00
,,,,,,,,,,,,,21/12/2025,Sunday,Emily Payne,08:00,17:00
,,,,,,,,,,,,,21/12/2025,Sunday,Hartlee Openiano,08:00,14:30
,,,,,,,,,,,,,21/12/2025,Sunday,Maja Placzkowska,09:00,18:35
,,,,,,,,,,,,,21/12/2025,Sunday,Chelsie Barnes,09:13,15:02
,,,,,,,,,,,,,21/12/2025,Sunday,Elayna Eaton,10:00,17:00
,,,,,,,,,,,,,21/12/2025,Sunday,Eve Garrity,12:00,18:00
,,,,,,,,,,,,,21/12/2025,Sunday,Zoe Ziaullah,12:00,18:35
,,,,,,,,,,,,,22/12/25,Monday,Jake Eckle,05:00,14:00
,,,,,,,,,,,,,22/12/25,Monday,Tristen Bayley,05:30,14:00
,,,,,,,,,,,,,22/12/25,Monday,Robyn Bailey,06:00,13:30
,,,,,,,,,,,,,22/12/25,Monday,Mya Hanif,07:27,14:01
,,,,,,,,,,,,,22/12/25,Monday,Emily Payne,07:30,16:30
,,,,,,,,,,,,,22/12/25,Monday,Ayako Chan,08:30,15:00
,,,,,,,,,,,,,22/12/25,Monday,Isabelle Smith,09:00,19:00
,,,,,,,,,,,,,22/12/25,Monday,Zoe Ziaullah,10:00,18:00
,,,,,,,,,,,,,22/12/25,Monday,Sofia Ziaullah,11:00,16:30
,,,,,,,,,,,,,22/12/25,Monday,George Starkey,11:36,18:53
,,,,,,,,,,,,,22/12/25,Monday,Hartlee Openiano,12:00,12:30
,,,,,,,,,,,,,23/12/25,Tuesday,Jake Eckle,05:00,14:30
,,,,,,,,,,,,,23/12/25,Tuesday,Isabelle Smith,05:20,13:01
,,,,,,,,,,,,,23/12/25,Tuesday,Mya Hanif,06:00,13:30
,,,,,,,,,,,,,23/12/25,Tuesday,Callum Neal,07:30,16:30
,,,,,,,,,,,,,23/12/25,Tuesday,Sofia Ziaullah,07:30,13:00
,,,,,,,,,,,,,23/12/25,Tuesday,George Starkey,08:00,15:00
,,,,,,,,,,,,,23/12/25,Tuesday,Elayna Eaton,09:30,16:30
,,,,,,,,,,,,,23/12/25,Tuesday,Zoe Ziaullah,10:00,17:30
,,,,,,,,,,,,,23/12/25,Tuesday,Tristen Bayley,11:00,19:00
,,,,,,,,,,,,,23/12/25,Tuesday,Ayako Chan,11:00,19:00
,,,,,,,,,,,,,23/12/25,Tuesday,Lucy Howitt,12:00,19:00
,,,,,,,,,,,,,24/12/25,Wednesday,Emily Payne,04:50,14:30
,,,,,,,,,,,,,24/12/25,Wednesday,Mya Hanif,04:54,13:30
,,,,,,,,,,,,,24/12/25,Wednesday,Isabelle Smith,05:00,13:30
,,,,,,,,,,,,,24/12/25,Wednesday,Callum Radler,05:30,13:30
,,,,,,,,,,,,,24/12/25,Wednesday,Callum Neal,07:30,16:30
,,,,,,,,,,,,,24/12/25,Wednesday,Matthew Reed,08:00,16:30
,,,,,,,,,,,,,24/12/25,Wednesday,Tristen Bayley,09:00,18:30
,,,,,,,,,,,,,24/12/25,Wednesday,Ayako Chan,09:00,18:30
,,,,,,,,,,,,,24/12/25,Wednesday,Eve Garrity,09:00,17:30
,,,,,,,,,,,,,24/12/25,Wednesday,Nias Lenard-Swales,09:00,17:30
,,,,,,,,,,,,,24/12/25,Wednesday,George Starkey,11:10,17:00
,,,,,,,,,,,,,24/12/25,Wednesday,Lucy Howitt,12:00,18:30
,,,,,,,,,,,,,26/12/25,Friday,Callum Neal,05:43,14:04
,,,,,,,,,,,,,26/12/25,Friday,Tristen Bayley,06:30,14:00
,,,,,,,,,,,,,26/12/25,Friday,Mya Hanif,06:53,13:59
,,,,,,,,,,,,,26/12/25,Friday,Elayna Eaton,08:00,14:30
,,,,,,,,,,,,,26/12/25,Friday,Emily Payne,08:36,16:05
,,,,,,,,,,,,,26/12/25,Friday,Nias Lenard-Swales,09:00,17:00
,,,,,,,,,,,,,26/12/25,Friday,Maja Placzkowska,09:21,18:30
,,,,,,,,,,,,,26/12/25,Friday,George Starkey,09:55,18:14
,,,,,,,,,,,,,26/12/25,Friday,Matthew Reed,10:00,18:00
,,,,,,,,,,,,,27/12/25,Saturday,Emily Payne,05:30,14:00
,,,,,,,,,,,,,27/12/25,Saturday,Maja Placzkowska,05:37,14:02
,,,,,,,,,,,,,27/12/25,Saturday,George Starkey,06:00,13:00
,,,,,,,,,,,,,27/12/25,Saturday,Robyn Bailey,07:30,15:00
,,,,,,,,,,,,,27/12/25,Saturday,Callum Neal,07:32,16:06
,,,,,,,,,,,,,27/12/25,Saturday,Callum Radler,08:30,16:00
,,,,,,,,,,,,,27/12/25,Saturday,Elayna Eaton,09:30,17:00
,,,,,,,,,,,,,27/12/25,Saturday,Tristen Bayley,10:00,19:00
,,,,,,,,,,,,,27/12/25,Saturday,Matthew Reed,10:00,18:00
,,,,,,,,,,,,,27/12/25,Saturday,Zoe Ziaullah,11:00,19:00
,,,,,,,,,,,,,28/12/25,Sunday,Emily Payne,05:30,13:30
,,,,,,,,,,,,,28/12/25,Sunday,Ayako Chan,05:58,13:06
,,,,,,,,,,,,,28/12/25,Sunday,Lucy Howitt,06:30,13:00
,,,,,,,,,,,,,28/12/25,Sunday,Callum Neal,08:00,16:00
,,,,,,,,,,,,,28/12/25,Sunday,Elayna Eaton,08:00,15:00
,,,,,,,,,,,,,28/12/25,Sunday,Sofia Ziaullah,09:20,16:00
,,,,,,,,,,,,,28/12/25,Sunday,Maja Placzkowska,09:56,18:26
,,,,,,,,,,,,,28/12/25,Sunday,Robyn Bailey,10:00,17:00
,,,,,,,,,,,,,28/12/25,Sunday,Chelsie Barnes,10:01,17:33
,,,,,,,,,,,,,28/12/25,Sunday,Zoe Ziaullah,13:00,18:26
,,,,,,,,,,,,,29/12/25,Monday,Emily Payne,05:30,13:00
,,,,,,,,,,,,,29/12/25,Monday,Ayako Chan,05:30,13:00
,,,,,,,,,,,,,29/12/25,Monday,Elayna Eaton,06:00,14:00
,,,,,,,,,,,,,29/12/25,Monday,Robyn Bailey,08:00,15:00
,,,,,,,,,,,,,29/12/25,Monday,Callum Neal,09:00,16:00
,,,,,,,,,,,,,29/12/25,Monday,Lucy Howitt,09:30,16:30
,,,,,,,,,,,,,29/12/25,Monday,George Starkey,10:00,19:00
,,,,,,,,,,,,,29/12/25,Monday,Tristen Bayley,12:00,19:00
,,,,,,,,,,,,,30/12/25,Tuesday,Emily Payne,05:30,13:00
,,,,,,,,,,,,,30/12/25,Tuesday,Tristen Bayley,05:30,13:00
,,,,,,,,,,,,,30/12/25,Tuesday,Lucy Howitt,06:00,14:00
,,,,,,,,,,,,,30/12/25,Tuesday,Eve Garrity,08:00,15:00
,,,,,,,,,,,,,30/12/25,Tuesday,Maja Placzkowska,09:00,16:00
,,,,,,,,,,,,,30/12/25,Tuesday,Nias Lenard-Swales,09:30,16:30
,,,,,,,,,,,,,30/12/25,Tuesday,George Starkey,10:00,19:00
,,,,,,,,,,,,,30/12/25,Tuesday,Ayako Chan,12:00,19:00
,,,,,,,,,,,,,31/12/25,Wednesday,Jake Eckle,05:30,13:00
,,,,,,,,,,,,,31/12/25,Wednesday,Tristen Bayley,05:30,13:30
,,,,,,,,,,,,,31/12/25,Wednesday,Matthew Reed,06:00,14:00
,,,,,,,,,,,,,31/12/25,Wednesday,Callum Radler,08:00,15:00
,,,,,,,,,,,,,31/12/25,Wednesday,Maja Placzkowska,09:00,16:00
,,,,,,,,,,,,,31/12/25,Wednesday,Nias Lenard-Swales,09:30,16:30
,,,,,,,,,,,,,31/12/25,Wednesday,Zoe Ziaullah,10:00,19:00
,,,,,,,,,,,,,31/12/25,Wednesday,Ayako Chan,12:00,19:00
,,,,,,,,,,,,,31/12/25,Wednesday,Callum Neal,13:00,14:00
,,,,,,,,,,,,,01/01/26,Thursday,Jake Eckle,06:00,13:00
,,,,,,,,,,,,,01/01/26,Thursday,Ayako Chan,06:30,13:00
,,,,,,,,,,,,,01/01/26,Thursday,Ellen Cooper,07:00,14:00
,,,,,,,,,,,,,01/01/26,Thursday,Lucy Howitt,08:00,15:00
,,,,,,,,,,,,,01/01/26,Thursday,Callum Neal,09:00,16:00
,,,,,,,,,,,,,01/01/26,Thursday,Nias Lenard-Swales,09:30,16:00
,,,,,,,,,,,,,01/01/26,Thursday,Zoe Ziaullah,10:00,19:00
,,,,,,,,,,,,,01/01/26,Thursday,Eve Garrity,12:00,17:00
,,,,,,,,,,,,,01/01/26,Thursday,Maja Placzkowska,12:00,19:00
,,,,,,,,,,,,,02/01/26,Friday,Jake Eckle,05:30,13:00
,,,,,,,,,,,,,02/01/26,Friday,Ayako Chan,05:30,14:00
,,,,,,,,,,,,,02/01/26,Friday,Hartlee Openiano,07:30,15:00
,,,,,,,,,,,,,02/01/26,Friday,Callum Neal,08:30,15:30
,,,,,,,,,,,,,02/01/26,Friday,Eve Garrity,09:00,17:00
,,,,,,,,,,,,,02/01/26,Friday,Isabelle Smith,10:30,19:00
,,,,,,,,,,,,,02/01/26,Friday,Ellen Cooper,12:00,19:00
,,,,,,,,,,,,,03/01/26,Saturday,Jake Eckle,05:30,14:00
,,,,,,,,,,,,,03/01/26,Saturday,Chelsie Barnes,06:00,13:00
,,,,,,,,,,,,,03/01/26,Saturday,Maja Placzkowska,06:00,13:00
,,,,,,,,,,,,,03/01/26,Saturday,Zoe Ziaullah,06:00,14:00
,,,,,,,,,,,,,03/01/26,Saturday,Callum Neal,07:30,16:00
,,,,,,,,,,,,,03/01/26,Saturday,Robyn Bailey,07:30,15:00
,,,,,,,,,,,,,03/01/26,Saturday,Nias Lenard-Swales,08:00,15:00
,,,,,,,,,,,,,03/01/26,Saturday,Isabelle Smith,09:30,19:00
,,,,,,,,,,,,,03/01/26,Saturday,Ellen Cooper,10:00,17:00
,,,,,,,,,,,,,03/01/26,Saturday,Hartlee Openiano,12:00,19:00
,,,,,,,,,,,,,04/01/26,Sunday,Jake Eckle,05:30,13:30
,,,,,,,,,,,,,04/01/26,Sunday,Isabelle Smith,06:00,14:00
,,,,,,,,,,,,,04/01/26,Sunday,Ellen Cooper,06:30,14:00
,,,,,,,,,,,,,04/01/26,Sunday,Callum Neal,08:00,16:00
,,,,,,,,,,,,,04/01/26,Sunday,Hartlee Openiano,08:00,17:00
,,,,,,,,,,,,,04/01/26,Sunday,Eve Garrity,09:00,18:00
,,,,,,,,,,,,,04/01/26,Sunday,Maja Placzkowska,10:00,19:00
,,,,,,,,,,,,,4/1/26,Sunday,Zoe Ziaullah,10:00,19:00
,,,,,,,,,,,,,04/01/26,Sunday,Chelsie Barnes,12:00,18:00
,,,,,,,,,,,,,05/01/2026,Monday,Ayako Chan,05:30,13:00
,,,,,,,,,,,,,05/01/2026,Monday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,05/01/2026,Monday,Hartlee Openiano,05:55,14:07
,,,,,,,,,,,,,05/01/2026,Monday,Ellen Cooper,07:54,16:01
,,,,,,,,,,,,,05/01/2026,Monday,Isabelle Smith,09:30,19:00
,,,,,,,,,,,,,05/01/2026,Monday,Callum Neal,10:01,14:53
,,,,,,,,,,,,,05/01/2026,Monday,Zoe Ziaullah,12:00,19:00
,,,,,,,,,,,,,06/01/2026,Tuesday,Callum Radler,05:30,12:00
,,,,,,,,,,,,,06/01/2026,Tuesday,Isabelle Smith,05:32,14:19
,,,,,,,,,,,,,06/01/2026,Tuesday,Ellen Cooper,06:00,13:00
,,,,,,,,,,,,,06/01/2026,Tuesday,Lucy Howitt,08:00,16:00
,,,,,,,,,,,,,06/01/2026,Tuesday,Ayako Chan,09:34,18:47
,,,,,,,,,,,,,06/01/2026,Tuesday,Emily Payne,10:00,15:30
,,,,,,,,,,,,,06/01/2026,Tuesday,Zoe Ziaullah,12:00,18:47
,,,,,,,,,,,,,07/01/2026,Wednesday,Emily Payne,05:17,12:18
,,,,,,,,,,,,,07/01/2026,Wednesday,Ayako Chan,05:31,12:41
,,,,,,,,,,,,,07/01/2026,Wednesday,Zoe Ziaullah,06:00,14:00
,,,,,,,,,,,,,07/01/2026,Wednesday,Matthew Reed,08:00,16:30
,,,,,,,,,,,,,07/01/2026,Wednesday,Mya Hanif,09:30,18:56
,,,,,,,,,,,,,07/01/2026,Wednesday,Callum Neal,09:58,15:23
,,,,,,,,,,,,,07/01/2026,Wednesday,Hartlee Openiano,12:00,19:00
,,,,,,,,,,,,,08/01/2026,Thursday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,08/01/2026,Thursday,Mya Hanif,05:30,13:00
,,,,,,,,,,,,,08/01/2026,Thursday,Chelsie Barnes,06:00,14:00
,,,,,,,,,,,,,08/01/2026,Thursday,Isabelle Smith,08:00,19:00
,,,,,,,,,,,,,08/01/2026,Thursday,Callum Radler,09:30,16:30
,,,,,,,,,,,,,08/01/2026,Thursday,Emily Payne,10:00,15:30
,,,,,,,,,,,,,08/01/2026,Thursday,Zoe Ziaullah,10:00,18:46
,,,,,,,,,,,,,08/01/2026,Thursday,Hartlee Openiano,12:00,19:00
,,,,,,,,,,,,,09/01/2026,Friday,Isabelle Smith,05:30,14:00
,,,,,,,,,,,,,09/01/2026,Friday,Jake Eckle,05:30,13:00
,,,,,,,,,,,,,09/01/2026,Friday,Chelsie Barnes,06:00,13:00
,,,,,,,,,,,,,09/01/2026,Friday,Ellen Cooper,07:30,15:00
,,,,,,,,,,,,,09/01/2026,Friday,Emily Payne,08:17,15:15
,,,,,,,,,,,,,09/01/2026,Friday,Mya Hanif,10:00,19:00
,,,,,,,,,,,,,09/01/2026,Friday,Zoe Ziaullah,10:00,18:37
,,,,,,,,,,,,,09/01/2026,Friday,Hartlee Openiano,12:00,19:00
,,,,,,,,,,,,,09/01/2026,Friday,Ayako Chan,13:01,18:46
,,,,,,,,,,,,,10/01/2026,Saturday,Jake Eckle,05:30,14:00
,,,,,,,,,,,,,10/01/2026,Saturday,Isabelle Smith,06:00,13:30
,,,,,,,,,,,,,10/01/2026,Saturday,Tristen Bayley,06:00,13:00
,,,,,,,,,,,,,10/01/2026,Saturday,Amy Walduck,07:30,16:00
,,,,,,,,,,,,,10/01/2026,Saturday,Emily Payne,07:43,13:16
,,,,,,,,,,,,,10/01/2026,Saturday,Nias Lenard-Swales,08:30,16:00
,,,,,,,,,,,,,10/01/2026,Saturday,Sofia Ziaullah,08:30,16:30
,,,,,,,,,,,,,10/01/2026,Saturday,Eve Garrity,10:00,18:30
,,,,,,,,,,,,,10/01/2026,Saturday,Callum Neal,10:31,16:20
,,,,,,,,,,,,,10/01/2026,Saturday,Mya Hanif,12:59,18:37
,,,,,,,,,,,,,11/01/2026,Sunday,Jake Eckle,05:30,13:30
,,,,,,,,,,,,,11/01/2026,Sunday,Tristen Bayley,06:00,14:00
,,,,,,,,,,,,,11/01/2026,Sunday,Ellen Cooper,06:30,13:00
,,,,,,,,,,,,,11/01/2026,Sunday,Sofia Ziaullah,07:30,16:15
,,,,,,,,,,,,,11/01/2026,Sunday,Callum Radler,07:31,15:56
,,,,,,,,,,,,,11/01/2026,Sunday,Chelsie Barnes,09:00,15:00
,,,,,,,,,,,,,11/01/2026,Sunday,Nias Lenard-Swales,10:00,17:00
,,,,,,,,,,,,,12/01/2026,Monday,Mya Hanif,05:30,14:00
,,,,,,,,,,,,,12/1/26,Monday,Callum Neal,05:30,15:00
,,,,,,,,,,,,,12/01/2026,Monday,Robyn Bailey,06:00,13:00
,,,,,,,,,,,,,12/01/2026,Monday,Chelsie Barnes,08:00,16:00
,,,,,,,,,,,,,12/1/26,Monday,Isabelle Smith,09:30,19:00
,,,,,,,,,,,,,12/01/2026,Monday,Zoe Ziaullah,12:00,19:00
,,,,,,,,,,,,,13/01/2026,Tuesday,Callum Neal,05:30,12:00
,,,,,,,,,,,,,13/1/26,Tuesday,Isabelle Smith,05:30,13:30
,,,,,,,,,,,,,13/01/2026,Tuesday,Chelsie Barnes,06:00,13:00
,,,,,,,,,,,,,13/01/2026,Tuesday,Tristen Bayley,08:00,19:00
,,,,,,,,,,,,,13/1/26,Tuesday,Sofia Ziaullah,09:30,16:00
,,,,,,,,,,,,,13/01/2026,Tuesday,Emily Payne,10:00,15:00
,,,,,,,,,,,,,13/01/2026,Tuesday,Zoe Ziaullah,12:00,19:00
,,,,,,,,,,,,,13/1/26,Tuesday,Isabelle Smith,14:00,16:00
,,,,,,,,,,,,,14/01/2026,Wednesday,Isabelle Smith,05:30,10:00
,,,,,,,,,,,,,14/01/2026,Wednesday,Jake Eckle,05:30,15:00
,,,,,,,,,,,,,14/01/26,Wednesday,Zoe Ziaullah,06:00,13:00
,,,,,,,,,,,,,14/01/2026,Wednesday,Tristen Bayley,08:00,19:00
,,,,,,,,,,,,,14/01/2026,Wednesday,Nias Lenard-Swales,09:30,14:30
,,,,,,,,,,,,,14/01/26,Wednesday,Eve Garrity,10:00,16:00
,,,,,,,,,,,,,14/01/2026,Wednesday,Hartlee Openiano,12:00,19:00
,,,,,,,,,,,,,15/01/2026,Thursday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,15/01/26,Thursday,Ayako Chan,05:30,14:00
,,,,,,,,,,,,,15/01/2026,Thursday,Chelsie Barnes,06:00,13:00
,,,,,,,,,,,,,15/01/2026,Thursday,Tristen Bayley,08:00,19:00
,,,,,,,,,,,,,15/01/26,Thursday,Emily Payne,09:30,15:00
,,,,,,,,,,,,,15/01/2026,Thursday,Zoe Ziaullah,09:30,16:00
,,,,,,,,,,,,,15/01/2026,Thursday,George Starkey,12:00,19:00
,,,,,,,,,,,,,16/01/26,Friday,Jake Eckle,05:30,13:00
,,,,,,,,,,,,,16/01/2026,Friday,Ayako Chan,05:30,13:00
,,,,,,,,,,,,,16/01/2026,Friday,Ellen Cooper,06:00,13:00
,,,,,,,,,,,,,16/01/26,Friday,Hartlee Openiano,07:30,15:00
,,,,,,,,,,,,,16/01/2026,Friday,Isabelle Smith,08:00,19:00
,,,,,,,,,,,,,16/01/2026,Friday,Emily Payne,08:30,15:30
,,,,,,,,,,,,,16/01/26,Friday,Nias Lenard-Swales,09:30,16:30
,,,,,,,,,,,,,16/01/2026,Friday,George Starkey,12:00,19:00
,,,,,,,,,,,,,17/01/2026,Saturday,Jake Eckle,05:30,14:00
,,,,,,,,,,,,,17/01/26,Saturday,Tristen Bayley,06:00,11:00
,,,,,,,,,,,,,17/01/2026,Saturday,Hartlee Openiano,06:00,13:30
,,,,,,,,,,,,,17/01/26,Saturday,Isabelle Smith,07:00,16:30
,,,,,,,,,,,,,17/01/2026,Saturday,Emily Payne,07:30,16:00
,,,,,,,,,,,,,17/01/2026,Saturday,George Starkey,08:30,17:30
,,,,,,,,,,,,,17/01/26,Saturday,Callum Radler,09:30,15:00
,,,,,,,,,,,,,17/01/2026,Saturday,Chelsie Barnes,10:00,19:00
,,,,,,,,,,,,,17/01/2026,Saturday,Ayako Chan,11:00,19:00
,,,,,,,,,,,,,17/01/26,Saturday,Ellen Cooper,13:00,19:00
,,,,,,,,,,,,,18/01/2026,Sunday,Jake Eckle,05:30,13:30
,,,,,,,,,,,,,18/01/2026,Sunday,Tristen Bayley,06:00,13:00
,,,,,,,,,,,,,18/01/2026,Sunday,Amy Walduck,06:00,14:30
,,,,,,,,,,,,,18/01/26,Sunday,Hartlee Openiano,08:00,15:00
,,,,,,,,,,,,,18/01/2026,Sunday,Emily Payne,08:00,16:00
,,,,,,,,,,,,,18/01/2026,Sunday,Callum Radler,09:30,16:00
,,,,,,,,,,,,,18/01/26,Sunday,Ellen Cooper,10:00,17:00
,,,,,,,,,,,,,18/01/2026,Sunday,George Starkey,10:00,19:00
,,,,,,,,,,,,,18/01/2026,Sunday,Ayako Chan,11:00,19:00
,,,,,,,,,,,,,19/01/2026,Monday,Tristen Bayley,05:30,13:00
,,,,,,,,,,,,,19/01/2026,Monday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,19/01/2026,Monday,Chelsie Barnes,06:00,13:00
,,,,,,,,,,,,,19/01/2026,Monday,Isabelle Smith,08:00,19:00
,,,,,,,,,,,,,19/01/2026,Monday,Sofia Ziaullah,09:30,16:00
,,,,,,,,,,,,,19/01/2026,Monday,Emily Payne,09:57,15:13
,,,,,,,,,,,,,19/01/2026,Monday,George Starkey,12:00,18:21
,,,,,,,,,,,,,20/01/2026,Tuesday,Emily Payne,05:11,12:20
,,,,,,,,,,,,,20/01/2026,Tuesday,Isabelle Smith,05:30,14:00
,,,,,,,,,,,,,20/01/2026,Tuesday,Maja Placzkowska,05:57,15:06
,,,,,,,,,,,,,20/01/2026,Tuesday,Nias Lenard-Swales,09:30,16:00
,,,,,,,,,,,,,20/01/2026,Tuesday,George Starkey,11:59,18:24
,,,,,,,,,,,,,21/01/2026,Wednesday,Tristen Bayley,05:30,13:30
,,,,,,,,,,,,,21/01/2026,Wednesday,Emily Payne,05:30,12:00
,,,,,,,,,,,,,21/01/2026,Wednesday,Maja Placzkowska,05:39,15:20
,,,,,,,,,,,,,21/01/2026,Wednesday,Ellen Cooper,08:00,13:00
,,,,,,,,,,,,,21/01/2026,Wednesday,Nias Lenard-Swales,08:00,13:00
,,,,,,,,,,,,,21/01/2026,Wednesday,Mya Hanif,09:31,18:30
,,,,,,,,,,,,,21/01/2026,Wednesday,Callum Radler,09:30,16:00
,,,,,,,,,,,,,21/01/2026,Wednesday,Hartlee Openiano,12:00,18:30
,,,,,,,,,,,,,22/01/2026,Thursday,Tristen Bayley,05:30,13:30
,,,,,,,,,,,,,22/01/2026,Thursday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,22/01/2026,Thursday,George Starkey,06:00,12:45
,,,,,,,,,,,,,22/01/2026,Thursday,Maja Placzkowska,09:00,15:21
,,,,,,,,,,,,,22/01/2026,Thursday,Hartlee Openiano,09:26,18:30
,,,,,,,,,,,,,22/01/2026,Thursday,Nias Lenard-Swales,09:30,16:00
,,,,,,,,,,,,,22/01/2026,Thursday,Ayako Chan,11:56,18:31
,,,,,,,,,,,,,23/01/2026,Friday,Ayako Chan,05:29,12:54
,,,,,,,,,,,,,23/01/2026,Friday,Jake Eckle,05:30,13:00
,,,,,,,,,,,,,23/01/2026,Friday,Ellen Cooper,06:00,14:00
,,,,,,,,,,,,,23/01/2026,Friday,Chelsie Barnes,07:30,15:00
,,,,,,,,,,,,,23/01/2026,Friday,Maja Placzkowska,08:26,15:48
,,,,,,,,,,,,,23/01/2026,Friday,Callum Radler,08:30,16:30
,,,,,,,,,,,,,23/01/2026,Friday,George Starkey,09:59,18:31
,,,,,,,,,,,,,23/01/2026,Friday,Hartlee Openiano,11:58,18:31
,,,,,,,,,,,,,24/01/2026,Saturday,Jake Eckle,05:30,14:00
,,,,,,,,,,,,,24/01/2026,Saturday,Ayako Chan,05:40,12:59
,,,,,,,,,,,,,24/01/2026,Saturday,Chelsie Barnes,05:57,13:15
,,,,,,,,,,,,,24/01/2026,Saturday,Mya Hanif,07:30,11:30
,,,,,,,,,,,,,24/01/2026,Saturday,Emily Payne,07:30,16:00
,,,,,,,,,,,,,24/01/2026,Saturday,Sofia Ziaullah,08:30,15:30
,,,,,,,,,,,,,24/01/2026,Saturday,Ellen Cooper,09:00,16:30
,,,,,,,,,,,,,24/01/2026,Saturday,Hartlee Openiano,09:30,17:00
,,,,,,,,,,,,,24/01/2026,Saturday,Maja Placzkowska,10:00,18:17
,,,,,,,,,,,,,24/01/2026,Saturday,Nias Lenard-Swales,13:00,18:00
,,,,,,,,,,,,,25/01/2026,Sunday,Jake Eckle,05:30,13:30
,,,,,,,,,,,,,25/01/2026,Sunday,Tristen Bayley,06:00,13:30
,,,,,,,,,,,,,25/01/2026,Sunday,George Starkey,06:00,13:00
,,,,,,,,,,,,,25/01/2026,Sunday,Emily Payne,08:00,16:00
,,,,,,,,,,,,,25/01/2026,Sunday,Amy Walduck,08:00,16:30
,,,,,,,,,,,,,25/01/2026,Sunday,Chelsie Barnes,09:00,10:00
,,,,,,,,,,,,,25/01/2026,Sunday,Ayako Chan,09:59,18:25
,,,,,,,,,,,,,25/01/2026,Sunday,Hartlee Openiano,11:00,17:00
,,,,,,,,,,,,,25/01/2026,Sunday,Ellen Cooper,11:52,18:25
,,,,,,,,,,,,,25/01/2026,Sunday,Mya Hanif,12:11,18:15
,,,,,,,,,,,,,26/01/2026,Monday,Tristen Bayley,05:30,13:30
,,,,,,,,,,,,,26/01/2026,Monday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,26/01/2026,Monday,Ayako Chan,06:00,13:00
,,,,,,,,,,,,,26/01/26,Monday,Ellen Cooper,08:00,16:00
,,,,,,,,,,,,,26/01/2026,Monday,George Starkey,09:30,19:00
,,,,,,,,,,,,,26/01/2026,Monday,Emily Payne,10:00,15:30
,,,,,,,,,,,,,26/01/26,Monday,Mya Hanif,12:00,19:00
,,,,,,,,,,,,,27/01/2026,Tuesday,Tristen Bayley,05:30,13:00
,,,,,,,,,,,,,27/01/2026,Tuesday,Zoe Subramanian,05:30,13:00
,,,,,,,,,,,,,27/01/2026,Tuesday,Mya Hanif,05:30,13:00
,,,,,,,,,,,,,27/01/26,Tuesday,Emily Payne,05:30,12:30
,,,,,,,,,,,,,27/01/2026,Tuesday,Nias Lenard-Swales,08:30,16:00
,,,,,,,,,,,,,27/01/2026,Tuesday,Maja Placzkowska,10:00,15:00
,,,,,,,,,,,,,27/01/26,Tuesday,George Starkey,10:00,19:00
,,,,,,,,,,,,,27/01/2026,Tuesday,Ayako Chan,12:00,19:00
,,,,,,,,,,,,,27/01/2026,Tuesday,Tristen Bayley,15:30,16:30
,,,,,,,,,,,,,28/01/26,Wednesday,Maja Placzkowska,05:30,09:30
,,,,,,,,,,,,,28/01/2026,Wednesday,Ayako Chan,05:30,13:00
,,,,,,,,,,,,,28/01/2026,Wednesday,Emily Payne,05:30,12:00
,,,,,,,,,,,,,28/01/26,Wednesday,Chelsie Barnes,08:30,13:30
,,,,,,,,,,,,,28/01/26,Wednesday,Nias Lenard-Swales,09:30,16:00
,,,,,,,,,,,,,28/01/2026,Wednesday,Maja Placzkowska,10:00,15:00
,,,,,,,,,,,,,28/01/2026,Wednesday,George Starkey,10:00,19:00
,,,,,,,,,,,,,28/01/26,Wednesday,Tristen Bayley,13:00,16:30
,,,,,,,,,,,,,28/01/2026,Wednesday,Mya Hanif,13:00,19:00
,,,,,,,,,,,,,29/01/2026,Thursday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,29/01/26,Thursday,Ayako Chan,05:30,13:00
,,,,,,,,,,,,,29/01/2026,Thursday,George Starkey,07:00,13:30
,,,,,,,,,,,,,29/01/26,Thursday,Hartlee Openiano,08:30,16:00
,,,,,,,,,,,,,29/01/2026,Thursday,Emily Payne,09:30,15:00
,,,,,,,,,,,,,29/01/2026,Thursday,Maja Placzkowska,10:00,19:00
,,,,,,,,,,,,,29/01/26,Thursday,Zoe Ziaullah,13:00,19:00
,,,,,,,,,,,,,29/01/2026,Thursday,Tristen Bayley,16:00,17:00
,,,,,,,,,,,,,30/01/2026,Friday,Tristen Bayley,05:30,13:00
,,,,,,,,,,,,,30/01/26,Friday,Jake Eckle,05:30,13:00
,,,,,,,,,,,,,30/01/2026,Friday,George Starkey,06:00,13:00
,,,,,,,,,,,,,30/01/2026,Friday,Hartlee Openiano,07:30,12:00
,,,,,,,,,,,,,30/01/26,Friday,Ellen Cooper,08:30,15:00
,,,,,,,,,,,,,30/01/2026,Friday,Emily Payne,08:30,15:00
,,,,,,,,,,,,,30/01/2026,Friday,Zoe Ziaullah,09:30,19:00
,,,,,,,,,,,,,30/01/26,Friday,Maja Placzkowska,12:00,19:00
,,,,,,,,,,,,,31/01/2026,Saturday,Jake Eckle,05:30,14:30
,,,,,,,,,,,,,31/01/2026,Saturday,Tristen Bayley,06:00,11:00
,,,,,,,,,,,,,31/01/26,Saturday,Mya Hanif,06:00,13:00
,,,,,,,,,,,,,31/01/2026,Saturday,Robyn Bailey,07:30,15:00
,,,,,,,,,,,,,31/01/2026,Saturday,Callum Neal,07:30,16:00
,,,,,,,,,,,,,31/01/26,Saturday,Zoe Ziaullah,08:30,16:00
,,,,,,,,,,,,,31/01/2026,Saturday,Hartlee Openiano,09:30,17:00
,,,,,,,,,,,,,31/01/2026,Saturday,Chelsie Barnes,11:00,17:00
,,,,,,,,,,,,,31/01/26,Saturday,Ellen Cooper,11:00,19:00
,,,,,,,,,,,,,31/01/2026,Saturday,Tristen Bayley,11:00,13:00
,,,,,,,,,,,,,31/01/2026,Saturday,Maja Placzkowska,11:30,19:00
,,,,,,,,,,,,,01/02/26,Sunday,Jake Eckle,05:30,13:30
,,,,,,,,,,,,,01/02/2026,Sunday,Tristen Bayley,06:00,13:00
,,,,,,,,,,,,,01/02/2026,Sunday,Zoe Ziaullah,07:30,15:30
,,,,,,,,,,,,,01/02/26,Sunday,Callum Neal,08:00,16:00
,,,,,,,,,,,,,01/02/2026,Sunday,Chelsie Barnes,10:00,18:00
,,,,,,,,,,,,,01/02/2026,Sunday,Mya Hanif,10:30,19:00
,,,,,,,,,,,,,01/02/26,Sunday,Hartlee Openiano,11:00,18:00
,,,,,,,,,,,,,01/02/2026,Sunday,Ellen Cooper,13:00,19:00
,,,,,,,,,,,,,02/02/2026,Monday,Isabelle Smith,05:30,13:00
,,,,,,,,,,,,,02/02/2026,Monday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,02/02/2026,Monday,Robyn Bailey,06:00,14:00
,,,,,,,,,,,,,02/02/26,Monday,Tristen Bayley,08:00,19:00
,,,,,,,,,,,,,02/02/2026,Monday,Chelsie Barnes,09:30,17:00
,,,,,,,,,,,,,02/02/2026,Monday,Callum Neal,10:00,15:00
,,,,,,,,,,,,,02/02/2026,Monday,Zoe Subramanian,12:00,19:00
,,,,,,,,,,,,,03/02/2026,Tuesday,Emily Payne,05:30,12:00
,,,,,,,,,,,,,03/02/2026,Tuesday,Maja Placzkowska,05:30,13:00
,,,,,,,,,,,,,03/02/2026,Tuesday,Chelsie Barnes,06:00,14:00
,,,,,,,,,,,,,03/02/2026,Tuesday,Isabelle Smith,08:00,19:00
,,,,,,,,,,,,,03/02/2026,Tuesday,Mya Hanif,09:30,16:00
,,,,,,,,,,,,,03/02/2026,Tuesday,Tristen Bayley,10:00,16:30
,,,,,,,,,,,,,03/02/2026,Tuesday,Callum Neal,10:00,15:00
,,,,,,,,,,,,,03/02/2026,Tuesday,Ellen Cooper,12:00,19:00
,,,,,,,,,,,,,04/02/2026,Wednesday,Emily Payne,05:30,12:00
,,,,,,,,,,,,,04/02/2026,Wednesday,Maja Placzkowska,05:30,13:00
,,,,,,,,,,,,,04/02/2026,Wednesday,Hartlee Openiano,06:00,14:00
,,,,,,,,,,,,,04/02/2026,Wednesday,Zoe Ziaullah,08:00,16:00
,,,,,,,,,,,,,04/02/2026,Wednesday,Mya Hanif,09:30,19:00
,,,,,,,,,,,,,04/02/2026,Wednesday,Callum Neal,10:00,15:00
,,,,,,,,,,,,,04/02/2026,Wednesday,Ellen Cooper,12:00,19:00
,,,,,,,,,,,,,05/02/2026,Thursday,Isabelle Smith,05:30,13:00
,,,,,,,,,,,,,05/02/2026,Thursday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,05/02/2026,Thursday,Hartlee Openiano,06:00,14:00
,,,,,,,,,,,,,05/02/2026,Thursday,Ellen Cooper,08:00,16:00
,,,,,,,,,,,,,05/02/2026,Thursday,Emily Payne,09:30,15:00
,,,,,,,,,,,,,05/02/2026,Thursday,Maja Placzkowska,09:30,19:00
,,,,,,,,,,,,,05/02/2026,Thursday,Zoe Ziaullah,12:00,19:00
,,,,,,,,,,,,,06/02/2026,Friday,Isabelle Smith,05:30,14:00
,,,,,,,,,,,,,06/02/2026,Friday,Jake Eckle,05:30,13:00
,,,,,,,,,,,,,06/02/2026,Friday,Hartlee Openiano,06:00,13:00
,,,,,,,,,,,,,06/02/2026,Friday,Zoe Ziaullah,07:30,15:00
,,,,,,,,,,,,,06/02/2026,Friday,Emily Payne,08:30,15:30
,,,,,,,,,,,,,06/02/2026,Friday,Chelsie Barnes,10:00,19:00
,,,,,,,,,,,,,06/02/2026,Friday,Maja Placzkowska,12:00,19:00
,,,,,,,,,,,,,06/02/2026,Friday,Isabelle Smith,13:00,15:00
,,,,,,,,,,,,,06/02/2026,Friday,Zoe Subramanian,08:30,16:00
,,,,,,,,,,,,,07/02/2026,Saturday,Jake Eckle,05:30,14:00
,,,,,,,,,,,,,07/02/2026,Saturday,Mya Hanif,06:00,13:00
,,,,,,,,,,,,,07/02/2026,Saturday,Emily Payne,06:30,13:00
,,,,,,,,,,,,,07/02/2026,Saturday,Zoe Ziaullah,07:30,14:30
,,,,,,,,,,,,,07/02/2026,Saturday,Robyn Bailey,08:30,15:30
,,,,,,,,,,,,,07/02/2026,Saturday,Zoe Subramanian,06:00,12:00
,,,,,,,,,,,,,07/02/2026,Saturday,Hartlee Openiano,09:30,16:30
,,,,,,,,,,,,,07/02/2026,Saturday,Isabelle Smith,10:30,19:00
,,,,,,,,,,,,,07/02/2026,Saturday,Callum Neal,10:30,16:00
,,,,,,,,,,,,,07/02/2026,Saturday,Ellen Cooper,12:00,19:00
,,,,,,,,,,,,,07/02/2026,Saturday,Chelsie Barnes,13:00,19:00
,,,,,,,,,,,,,08/02/2026,Sunday,Jake Eckle,05:30,13:30
,,,,,,,,,,,,,08/02/2026,Sunday,Mya Hanif,06:00,13:00
,,,,,,,,,,,,,08/02/2026,Sunday,Chelsie Barnes,06:30,13:00
,,,,,,,,,,,,,08/02/2026,Sunday,Callum Neal,08:00,16:00
,,,,,,,,,,,,,08/02/2026,Sunday,Zoe Ziaullah,08:00,15:00
,,,,,,,,,,,,,08/02/2026,Sunday,Amy Walduck,08:30,17:00
,,,,,,,,,,,,,08/02/2026,Sunday,Zoe Subramanian,09:00,16:00
,,,,,,,,,,,,,08/02/2026,Sunday,Maja Placzkowska,11:00,19:00
,,,,,,,,,,,,,08/02/26,Sunday,Hartlee Openiano,13:00,19:00
,,,,,,,,,,,,,09/02/26,Monday,Emily Payne,05:30,12:00
,,,,,,,,,,,,,09/02/26,Monday,Isabelle Smith,05:30,14:00
,,,,,,,,,,,,,09/02/26,Monday,Robyn Bailey,06:00,13:00
,,,,,,,,,,,,,09/02/26,Monday,Chelsie Barnes,08:00,16:00
,,,,,,,,,,,,,09/02/26,Monday,Mya Hanif,09:30,19:00
,,,,,,,,,,,,,09/02/26,Monday,Callum Neal,10:00,15:00
,,,,,,,,,,,,,09/02/26,Monday,Zoe Ziaullah,12:00,19:00
,,,,,,,,,,,,,10/02/26,Tuesday,Isabelle Smith,05:30,14:00
,,,,,,,,,,,,,10/02/26,Tuesday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,10/02/26,Tuesday,Zoe Ziaullah,06:00,13:00
,,,,,,,,,,,,,10/02/26,Tuesday,Ellen Cooper,08:00,16:00
,,,,,,,,,,,,,10/02/26,Tuesday,Tristen Bayley,09:30,19:00
,,,,,,,,,,,,,10/02/26,Tuesday,Callum Neal,10:00,15:00
,,,,,,,,,,,,,10/02/26,Tuesday,Mya Hanif,12:00,19:00
,,,,,,,,,,,,,11/02/26,Wednesday,Jake Eckle,05:30,12:00
,,,,,,,,,,,,,11/02/26,Wednesday,Maja Placzkowska,05:30,14:00
,,,,,,,,,,,,,11/02/26,Wednesday,Robyn Bailey,06:00,13:00
,,,,,,,,,,,,,11/02/26,Wednesday,Zoe Ziaullah,08:00,16:00
,,,,,,,,,,,,,11/02/26,Wednesday,Tristen Bayley,09:30,19:00
,,,,,,,,,,,,,11/02/26,Wednesday,Callum Neal,10:00,15:00`;
