from app.models import db, Review


def seed_reviews():
    num1 = Review(user_id=1, venue_id=1, title="Lovely boat ride!",
                  body="We had a great time on our 90 trip. The boat was great, the employees very friendly. We enjoyed a fun happy hour with friends cruising around the harbor", rating=5)
    num2 = Review(user_id=1, venue_id=2, title="Great Massage!",
                  body="Was staying at a nearby hotel for business and was good location with super flexible for open options. Myra G. Did a great job helping my stressmelt away. Great massage and super friendly!", rating=5)
    num3 = Review(user_id=1, venue_id=3, title="Scam aware!!", body="Sounds like a scam! they took a group out to the ocean knowing it was not a good weather day for seeing whales or anything else. A few minutes later came back to the docks and gave a voucher to everyone for a next trip. Guess what? another group was just being loaded on our boat and I will bet they also got a voucher a few minutes later. NOT A RELIABLE COMPANY.", rating=1)
    num4 = Review(user_id=2, venue_id=4, title="Best Sauna!",
                  body="AMAZING! I can’t say anything bad about this place! My bf and I really enjoyed the two person sauna. We watched Netflix while getting our health on and sweating out our toxins! What are you waiting for?! Go here immediately!", rating=5)
    num5 = Review(user_id=2, venue_id=5, title="Ehh..It's ok", body="It’s a good deal. Just not the best studio I’ve been to. The bikes to the shoes. The instructor I’ve had was very passionate and friendly. They have these sharp disco lights that hit you and are very busy and distracting whereas other studios just use color lights for the entire room not add on disco lights. Of course some people like that as it creates atmosphere and if you do then you’ll love it", rating=4)
    num6 = Review(user_id=3, venue_id=6, title="Yummy Food", body="My boyfriend and I had lunch here. The service was great. My boyfriend had a blackened salmon salad and enjoyed it very much. I had the medallions of filet mignon. The meat was mealy and covered with some type of sauce that wasn’t very good. The sides of mashed potatoes and green beans were good. The ice teA was excellent.", rating=3)
    num7 = Review(user_id=3, venue_id=7, title="Bad service",
                  body="Massage was ok, but when I went to tip her $5. She got pushed off and told me to give her $15. And she was adamant and blocked the door I thought I would have to fight my way out so I gave her more money. To hell with that place.", rating=1)
    num8 = Review(user_id=4, venue_id=8, title="Fun", body="This is such a fun place! Only complaint was that there were some kids being mean and obnoxious in the dodgeball area - a fistfight nearly broke out - and there were no workers around. Most of the kids were with a camp group, so there were chaperones, however the chaperones were handling things horribly and only making things worse! Otherwise super fun place and the staff is great with kids.", rating=4)
    num9 = Review(user_id=4, venue_id=9, title="Awesome!",
                  body="Super friendly staff! We were worried about extra charges for returning the boards a tad bit late, but they were laid back & let it slide.", rating=5)
    num10 = Review(user_id=5, venue_id=1, title="Rude...", body="I had one good experience here back in March. However, it seems like they just hired new staff that are rude and unprofessional. Make sure you read the fine print before signing. I thought this was a good deal but it’s not after all the fees they try to charge you. A classic bait and switch. We left a small mess on the boat and we offered to clean it but instead they just fined us.", rating=1)
    num11 = Review(user_id=5, venue_id=2, title="Good Couples Massage",
                   body="When my husband and I go on vacation we enjoy getting couples massages, so while in downtown Houston recently we decided to book one here. It was a very nice massage! Our massage therapists were Jennifer and Mayra. We appreciate what a great job they did!", rating=4)
    num12 = Review(user_id=6, venue_id=3, title="Disappointed...", body="We arrived ready to go whale watching and waited. Someone came and told us to go to another dock and take a different boat. When we tried to board a half hour later we were told that are tickets wouldn’t work. After a wait they came back to tell us that no one had coordinated the group of twenty or so but they would let us on. Very frustrating.", rating=3)
    num13 = Review(user_id=6, venue_id=4, title="Amazing!", body="I bought the 2 halotherapies package & booked an appointment. I added their current in house special of 5 infrared sauna sessions for $59 so my visit was an infrared session followed by the halotherapy. Wow!! 1st of all Diana who was working at the time was the kindest & most helpful person. The infrared sauna was amazing & the halotherapy cleared up my sinuses!The Body Lab is fabulous!", rating=5)
    num14 = Review(user_id=7, venue_id=5, title="Great Value", body="Great value, very well run, and they let you go at your own pace. I’m a clutz, old, and not in shape and I’ve made it through two classes this week, despite my limitations. Most people there are totally killing the workout. But, regardless of what your level is, it’s a great workout.", rating=5)
    num15 = Review(user_id=8, venue_id=6, title="Best Prime Ribs!",
                   body="The host and servers are all friendly and accommodate the customer. The big draw is their prime rib of beef. Slow cooked and full of flavor. It is accompanied by vegetables and smooth horse radish. The interior is adorned with English styledwoodwork and tapestries.", rating=5)
    num16 = Review(user_id=8, venue_id=7, title="Good massage but rude", body="Massage was good. They were running late but at least called giving heads up so we could come in half an hour later. The only disappointment that there was no 'Thank You' following a tip. I gave $19 for the 2 ladies but received no thank you. They should have better manners and say it even if it was $5.", rating=4)
    num17 = Review(user_id=9, venue_id=8, title="Tons of fun",	body="Best indoor trampoline place we have visited so far.Many interesting 'ninja warrior' obstacles courses that can be extremely challenging.Small but fun parkour area.Basketball courts for single or even two player games, couple of large dodgeball arenas, climbing walls and more.Clean and modern party rooms.Staff was professional and friendly.Great exercise for kids and adults.", 	rating=5	)
    num18 = Review(user_id=9, venue_id=9, title="The best!", body="HANDS DOWN 10/10! We had nothing but a great experience. The 4 pm time we went out was the perfect golden hour and not too many people were on the water. Parking at the beach is not only very congested in the summer but expensive. So that fact they have a free parking area is So radical. The guys who helped us were very friendly and chill. They helped explain how to kayak to the members in our party who had never been. They were also helpful with getting us in the kayaks. The kayaks themselves were very clean and well taken care of!", rating=5)
    num19 = Review(user_id=10, venue_id=10, title="Sales Pitchy", body="Decent wines included in tour and nice location. The tour was honestly mostly spent on a sales pitch for their wine club and wedding location though, they didn’t even really go into anything about production methods or the vines. There are better tours out there", rating=3)
    num20 = Review(user_id=10, venue_id=11, title="Good and scary!",
                   body="This was the best scariest experience ever!! We almost didn't escape but were able to get out at the last minute. Would definitely recommend!", rating=5)
    num21 = Review(user_id=11, venue_id=12, title="Bad management", body="Management supposedly has a 10 PM quiet rule but they do not enforce it. Groups gather around the fire pit and carry on loudly until the gas is finally shut off at 11 PM. The first floor rooms have communal patios so the second floor is the way to go for a little privacy. The food at the golf course next door is excellent.", rating=3)
    num22 = Review(user_id=11, venue_id=13, title="Horrible...", body="Be prepared to pay $52.00 extra after the initial booking fee. $8 for parking and $43.80 for the resort fee. Pay attention to what you’re signing at the front desk. None of this was explained to me and it was my fault for not looking. I was exhausted from driving 4 hrs and just wanted my mini vacation to begin. Overall the hotel appears to be recently remodeled and the pool and jacuzzi are nice.", rating=3)
    num23 = Review(user_id=12, venue_id=14, title="Bait and switch",
                   body="Booked and paid for river view king room when checked in they did not have our room available and provided us with a standard room. And said there's nothing they can do. Got a decent room but not what we expected at all...", rating=2)
    num24 = Review(user_id=12, venue_id=15, title="Romantic!", body="Our guide Leti was very knowledgeable about the island and its history. Leti was very patient with us an answered all of our questions. This package was for a super romantic private tour, as well as a picnic on a private beach. This gave us the opportunity to see the island without being in a bus full of people, as well as a lovely preset picnic mean with wine and other foods, as well as providing a staff to take pictures of the moment. My fiance loved it!!", rating=5)
    num25 = Review(user_id=13, venue_id=16, title="Very fun!", body="What a fun experience! Our greeter was friendly & cheerful. Parking was easy & they even had coffee waiting. It was a beautiful ride over the orchards of Temecula! Our greeter took lots of pictures. The balloon operator, Ryan, was delightful & extremely knowledgeable about the area. and the sunrise was magical! It was a ride I will treasure forever!", rating=5)
    num26 = Review(user_id=13, venue_id=17, title="Best!!!",
                   body="I really wanted my girlfriend to break up with me, so I took her to this place as a surprise. She broke up with me right after!! Definitely worth paying the price just to get rid of her!", rating=5)
    num27 = Review(user_id=14, venue_id=18, title="Could be better", body="For the price, which doesn't even include food, I feel like it wasn't worth it. I could probably have found a free park elsewhere and purchased better accessories for less. The only pro is that it was set up for us, so we didn't have to bring anything. Pretty good service though, so added a few stars for that", rating=3)
    num28 = Review(user_id=14, venue_id=19, title="Kinda boring",
                   body="'Challenge' consisted of things like 'find a bus and take a picture'. 'Find a convenience store and take a picture'. No problem solving, just find certain types of thing. Mildly interesting but not exactly exciting.", rating=3)
    num29 = Review(user_id=15, venue_id=20, title="Great history lessons",
                   body="It was great learning about the city even in the freezing rain. The extended tour is a must-do! The grave yards were beautiful and yet chiling. A lot of great history in Boston Commons.", rating=5)
    num30 = Review(user_id=15, venue_id=21, title="Love it!", body="I love these paint nights and my husband and o are satisfied with our artwork, however this specific picture was not taught to mimic what we signed up for. We painted the dahlia but the colors were much darker and the lighting in the restaurant was poor. We still had fun together celebrating our anniversary, which is why I’m giving it a 4.", rating=4)
    num31 = Review(user_id=16, venue_id=22, title="Find another one!", body="My mom and I went to Dallas Tandem Skydiving on April 20, 2019. There was little direction beforehand, so we had to call and make sure we were bringing everything that we needed to. If you want to get in contact with them, make sure you have enough time because you will be on the phone waiting on one of their reps to answer for the LONGEST time. And I feel like they only have one rep based off the wait time... Anyway... We finally figured out what we needed to bring. DONT buy the VIP pass-- it's not worth the money and we got in within an hour and a half to do our jump. You'll pay extra and still be in the same spot!!! Also, make sure they have multiple people that can do tandem and do the video. We get there only to find out that only ONE instructor is certified to do the video, so I didn't get a video of my first jump :(", rating=3)
    num32 = Review(user_id=16, venue_id=23, title="Disgusting...",
                   body="A guy brought me here on our first date. Who even brings a first date to a place like this?? I vented my anger by smashing the hell out of the room though, enjoyable experience otherwise", rating=4)
    num33 = Review(user_id=17, venue_id=24, title="Not a good deal",
                   body="It’s a cool place but this really isn’t the best deal. Still have to pay $25 for paintballs. We went a few times each time we never use all the paintballs we buy even though we have some left over from a previous visit they still make us pay for more.", rating=2)
    num34 = Review(user_id=17, venue_id=25, title="Good experience!", body="It was a good experience. However the helicopter trip was less than expected. It lasted for about 15mins. Also, no one told us about the champagne (which came with the package) I asked for it and by they time they gave it to us, we had to leave running because the tour bus almost left without us. Please be more organized!", rating=4)
    num35 = Review(user_id=18, venue_id=26, title="Scummy", body="Great experience. The tour guides treated us well. Treated us food. Everything went smooth until we got back and found out we were charged for 'atv damages'. There were no damages. Theres a small warning sign somewhere at their headquarters that they expect people to see. The bikes are pretty old anyway so take pictures if you have to. The people are looking for any slippery way to hustle you. Be careful.", rating=2)
    num36 = Review(user_id=18, venue_id=1, title="A bit rude", body="Not a bad experience on the boat but staff is a little rude. I'm sure most people find this company via Groupon. They say to call 72 hours ahead but never pick up. I went in person to make a resie for a week in advance and was told to call 72 hours ahead but they are booked solid for 2 weeks. HUH? After pressing, I got a resie. Don't expect a premium time with your Groupon. I'm sure those are for full paying guests.", rating=3)
    num37 = Review(user_id=19, venue_id=27, title="So much fun!", body="I did the Dash in Atlanta with my husband and kids, and we had a great time! We know the city fairly well, but this took us to some spots we hadn't seen before, so I really like that you can see some things that are off the usual tourist path. The trivia and photo challenges add a lot of fun! It was a good amount of walking, so pick a day with a nice weather forecast.", rating=5)
    num38 = Review(user_id=19, venue_id=3, title="Fabulous", body="Hey, so this experience was absolutely fabulous. One point Id like to say tough is that when you pay the ticket on groupon you will also have to pay more on the website for fuel fees.... I would have like this written before I purchase the tickets.", rating=4)
    num39 = Review(user_id=20, venue_id=4, title="Clean and wonderful!", body="Really liked how clean the sauna was and how there is a private space of your own where you can set your things down and be comfortable. There is a huge tv with Netflix and various apps that you can operate if you didn’t bring anything to read. The front office attendant was very polite and helpful. The bathroom and shower area leave much to be desired. I think they’d be better off to hire a crew", rating=4)
    num40 = Review(user_id=20, venue_id=5, title="Incredibly energizing", body="Wow! This place is incredibly energizing. After my first class I didn’t want to go back because I realized how out of shape I was but slowly after taking more classes, I really enjoy the workout and cardio benefits. Music is so fun to bike 2 the beat! Very well run and clean studio. Staff is very friendly and helpful. My favorite teacher is Jill!", rating=5)
    num41 = Review(user_id=21, venue_id=6, title="Rude Manager", body="Dinner and service were fantastic as usual, but the on-site manager doesn't seem to really treat this restaurant like it's a classy place, when we arrived he was on his personal cell phone talking louder than he needed to and it just seemed rude. But I can't gauge a great restaurant by one employee who doesn't know when or how to talk on a cell phone.", rating=4)
    num42 = Review(user_id=21, venue_id=7, title="Not happy", body="I've been coming here for awhile now and the staffs are nice but this last visit I had I wasn't happy at all. Made appointment for both me and my b/f at 2:00pm and it was his first time there and apparently they were some sort of miscommunication with a staff member to where they had us return back at 7:30pm and promised a free treatment in our next visit. Hmmmm! Never got it!!", rating=4)
    num43 = Review(user_id=22, venue_id=8, title="Had a blast!",
                   body="My boyfriend and I had a blast! It was super crowded. Like very crowded, but I did see them turn away people who didn’t reserve their spot. There is a lot of locals there who have monthly memberships so we saw some kids doing pretty amazing tricks!", rating=5)
    num44 = Review(user_id=22, venue_id=9, title="Fast And Friendly!",
                   body="Awesome staff and super easy to check in. I was on the water within 10 minutes!", rating=5)
    num45 = Review(user_id=23, venue_id=10, title="Nice and knowledgeable", body="The tour guy was so nice and knowledgeable with the place and the wine. The place itself was a peaceful and beautiful place, I was just a little disappointed about the cave. I literally thought it would be a real underground cave, especially when they said wear comfortable shoes, made me think we were heading for a nice underground cave walk. But nevertheless; it was a great experience.", rating=4)
    num46 = Review(user_id=23, venue_id=11, title="Scary!",
                   body="Wow this was almost too scary for my girlfriend... We have been a big fan of the Saw franchise though, so it was totally enjoyable. We also got a souvenior for free. Definitely worth it!", rating=5)
    num47 = Review(user_id=24, venue_id=12, title="Beautiful and relaxing", body="The Lakehouse was beautiful, relaxing and perfect for a weekend away. I wish we had booked more days! The ameneties were fantastic. The staff was welcoming and very helpful! Word to the wise, if you want to go to Decoy at Dockside for dinner, make a reservation. We were disappointed that they weren't taking any more walk ins when we went!", rating=5)
    num48 = Review(user_id=24, venue_id=13, title="Amazing",
                   body="Amazing retro hotel - lots of Hollywood history!Loved the welcome drinks, live entertainment and delicious breakfast. Very accommodating hotel staff! Comfortable clean room. Fun getaway! Would love to return again soon!", rating=5)
    num49 = Review(user_id=25, venue_id=14, title="Gross and rude",
                   body="Staff was incredibly rude, rooms were not cleaned, bath water was yellow. Hotel restrooms were really dirty as well as towels, I didn't enjoy my time at all. Alright for a cheap chilling night.", rating=3)
    num50 = Review(user_id=25, venue_id=15, title="Interesting and educational", body="Guides knowledge of island made the trip very interesting and educational! Would definitely recommend taking the tour. However, still felt that this was overpriced for the services provided... If you just get the regular tour, you could have your friends help you take photos and prepare the food instead for a much cheaper price. Almost worth it for a great wedding proposal though!", rating=3)
    num51 = Review(user_id=26, venue_id=16, title="Beware", body="It was what you expected. it was fun the limo bus was interesting and different looking. The wineries were great. There's one thing that's really eating at me. They said that if you gave them $20 that it gets divided between the tour director the bus driver and the winery pourers. Every single winery I asked all the pourers and they all said they never receive a dime. Beware.", rating=4)
    num52 = Review(user_id=26, venue_id=17, title="Awful awful awful", body="Ughhh this is the most afwul place ever! I don't know what my boyfriend was thinking, taking me here... Is this what he is into? The speciments looked like they are still alive and their eyes seem to follow you, do not like this place at all. I broke up with him right after this for even coming up with this disgusting idea...", rating=1)
    num53 = Review(user_id=27, venue_id=18, title="Highly recommended",
                   body="It was a beautiful experience, I recommend for sure! It was a great add on for our vacation in California!", rating=5)
    num54 = Review(user_id=27, venue_id=19, title="Could be better", body="The only suggestion would be a more explicit description of the scavenger hunt. We weren't quite sure what to expect regarding this, but would have dressed as both zombies and hunters if we'd known better. Still, really fun and looking forward to doing it again at another location.", rating=4)
    num55 = Review(user_id=28, venue_id=20, title="Great tour!", body="We went on the tour with Stacy and are very happy with the tour. It was a smaller group about 8 and Stacy covered a lot of history of Salem that we would not have heard about through other museums or exhibits. We appreciated the depth and unique stories told on the tour.", rating=4)
    num56 = Review(user_id=28, venue_id=21, title="A bit cramped but great", body="The venue: although the restaurant wasn't my style, and it was a bit cramped, I enjoyed the friendly service and beverage selection. The teaching: there were some parts that weren't super clear, but the teacher was good at clarifying her points and answering questions. The process: it was fun, and the 3hrs flew by. Somewhat challenging but also empowering. The final product: I suck at painting, but it still looks decent enough to hang. Would I do this again? No. Kind of expensive for a piece of art that didn't turn out so great, despite tremendous effort.", rating=4)
    num57 = Review(user_id=29, venue_id=22, title="Great experience",
                   body="Great experience. Just know that pictures and video are extra. Carry about $90-100 cash if you want pictures or video. They take cards but it's an extra $10. All in all, this was a great experience!", rating=4)
    num58 = Review(user_id=29, venue_id=23, title="What is this??",
                   body="Just watched my boyfriend smash the hell out of this place... he scared me so much, I don't think I want a future with someone like that... Thanks to The Secret Chambers for showing me this side of him before I wasted more time with him!", rating=5)
    num59 = Review(user_id=30, venue_id=24, title="Fun!", body="Super fun day! Better than I expected lol make sure you come prepared!(food, a lot of water and an extra pair of clothes). What made it really fun was that everyone was super into it lol people were on their knees while I was crawling on my stomach to get further into enemy territory haha you can wear whatever you feel comfortable in. I wore jeans and a long sleeve T.", rating=5)
    num60 = Review(user_id=30, venue_id=25, title="A bit short", body="I went for the Grand Canyon helicopter tour with Vince yesterday morning. The flight was so exciting, and the views were amazing. Vince gave a lot of history and facts about the area. He also answered all questions and cracked some jokes. I can’t wait to do another tour with this company and I am back in Vegas. Thanks again!", rating=5)
    num61 = Review(user_id=31, venue_id=26, title="Experience to remember", body="This was most definitely an experience to remember. Riding through the desert is challenging with large rocks and sand but it’s worth it. Our tour guide was so amazing. His name is Shareef and he was was attentive, great instructor, and very knowledgeable about the ride. At one point, I want to give up because the turns scary. All and all it was amazing. Our transporter Bow was amazing as well.", rating=4)
    num62 = Review(user_id=31, venue_id=1, title="Perfect!", body="Had a really great experience, the boat ride was so beautiful and it was a perfect day in newport harbor! we really enjoyed the 90 minute boat ride. the boat staff was very cordial and pleasant, helping us get on and off the boat. the office staff, however, were not very warm and i felt rushed through and talked down to. only downside. attitudes in customer service are such a turn off for me.", rating=4)
    num63 = Review(user_id=32, venue_id=27, title="Cheated me",
                   body="Customer service by phone or mail doesn’t work, I couldn’t play the game. I was charge the total price but I didn’t do the activity. My experience was very disappointed.", rating=1)
    num64 = Review(user_id=32, venue_id=3, title="Absolutely fabulous",
                   body="Hey, so this experience was absolutely fabulous. One point Id like to say tough is that when you pay the ticket on groupon you will also have to pay more on the website for fuel fees.... I would have like this written before I purchase the tickets.", rating=5)
    num65 = Review(user_id=33, venue_id=4, title="It was great!!!", body="I’m glad that I bought and tried their sauna services. I had an awesome experience! The place was easy to find, they have a lot of parking spots available, the business establishment is clean, well maintained, their sauna rooms are very well organized and the staff present is very accommodating, professional and nice. Highly recommended this place and I will be back for sure.", rating=5)
    num66 = Review(user_id=33, venue_id=5, title="Loved this studio", body="Loved this studio. Totally different from other studios I’ve been to, awesome instructors and super helpful staff and friendly people in class. First pair of spin shoes are free rental. Towels provided for class and then ice cold towels with eucalyptus oil are passed out post workout.", rating=5)
    num67 = Review(user_id=34, venue_id=6, title="Friendly staff, good food",
                   body="Friendly staff and servers. The prime rib is their specialty. The lunch portion was cooked to order. It was moist, tender , and full of flavor. The inside décor resembles an English ship from the story of Gulliver and his travels.", rating=5)

    db.session.add(num1)
    db.session.add(num2)
    db.session.add(num3)
    db.session.add(num4)
    db.session.add(num5)
    db.session.add(num6)
    db.session.add(num7)
    db.session.add(num8)
    db.session.add(num9)
    db.session.add(num10)
    db.session.add(num11)
    db.session.add(num12)
    db.session.add(num13)
    db.session.add(num14)
    db.session.add(num15)
    db.session.add(num16)
    db.session.add(num17)
    db.session.add(num18)
    db.session.add(num19)
    db.session.add(num20)
    db.session.add(num21)
    db.session.add(num22)
    db.session.add(num23)
    db.session.add(num24)
    db.session.add(num25)
    db.session.add(num26)
    db.session.add(num27)
    db.session.add(num28)
    db.session.add(num29)
    db.session.add(num30)
    db.session.add(num31)
    db.session.add(num32)
    db.session.add(num33)
    db.session.add(num34)
    db.session.add(num35)
    db.session.add(num36)
    db.session.add(num37)
    db.session.add(num38)
    db.session.add(num39)
    db.session.add(num40)
    db.session.add(num41)
    db.session.add(num42)
    db.session.add(num43)
    db.session.add(num44)
    db.session.add(num45)
    db.session.add(num46)
    db.session.add(num47)
    db.session.add(num48)
    db.session.add(num49)
    db.session.add(num50)
    db.session.add(num51)
    db.session.add(num52)
    db.session.add(num53)
    db.session.add(num54)
    db.session.add(num55)
    db.session.add(num56)
    db.session.add(num57)
    db.session.add(num58)
    db.session.add(num59)
    db.session.add(num60)
    db.session.add(num61)
    db.session.add(num62)
    db.session.add(num63)
    db.session.add(num64)
    db.session.add(num65)
    db.session.add(num66)
    db.session.add(num67)

    db.session.commit()


def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
