from app.models import db, Venue


def seed_venues():

    NewportFunTours = Venue(creator_id=7, name="Newport Fun Tours",
                            date_type_id=7, price=150,
                            description="90-Minute Electric-Boat Rental on Newport Harbor",
                            image_url="https://img.grouponcdn.com/deal/bTMFesdQLRvf94A95sn8/M1-4640x2784/v1/c870x524.webp",
                            phone_number="(949) 675-8433",
                            address="2901 West Coast Highway Suite #160",
                            city="Newport Beach", state="CA", zipcode="92663",
                            operation_hours="9:00 AM–7:00 PM",
                            latitude=33.620255838609026, longitude=-117.925500905021,)
    Sunsetbodyworks = Venue(creator_id=8, name="Sunsetbodyworks Day Spa",
                            date_type_id=5, price=331,
                            description="Couples Massage",
                            image_url="https://cdn.spafinder.com/2015/10/couples-massage-1.jpg",
                            phone_number="(713) 223-5900",
                            address="817 Milam St",
                            city="Houston", state="TX", zipcode="77002",
                            operation_hours="10:00 AM-8:00 PM",
                            latitude=29.758558000158192, longitude=-95.3654791369215,)
    DaveyLockerWhale = Venue(creator_id=1, name="Davey's Locker Whale Watching",
                             date_type_id=7, price=28,
                             description="Participants can admire blue whales, finback whales, humpback whales, dolphins, and other sea creatures in waters near Newport Bay",
                             image_url="https://img.grouponcdn.com/deal/4YhYEvbeBhcx4AJxUd6FsdYFQg6V/4Y-940x564/v1/c870x524.webp",
                             phone_number="(949) 673-1435",
                             address="400 Main Street",
                             city="Newport Beach", state="CA", zipcode="92661",
                             operation_hours="6:00 AM–7:00 PM",
                             latitude=33.60278047968448, longitude=-117.898856235707,)
    TheBodyLab = Venue(creator_id=1, name="The Body Lab",
                       date_type_id=8, price=29,
                       description="Dry infrared heat can help increase circulation and ease pain and stiffness, raise core body temp, help detox on a cellular level",
                       image_url="https://img.grouponcdn.com/deal/3Dm1LzKUsAtP1RfyBQW7jnrPkBjY/3D-700x420/v1/c870x524.webp",
                       phone_number="(714) 516-8844",
                       address="3128 East Chapman Avenue",
                       city="Orange", state="CA", zipcode="92869",
                       operation_hours="10:00 AM–7:00 PM",
                       latitude=33.78782303716802, longitude=-117.820438597004,)
    Bike2thebeat = Venue(creator_id=1, name="Bike2thebeat",
                         date_type_id=9, price=100,
                         description="Experienced instructors lead energetic cycling classes set to the backbeat of dynamic dance music",
                         image_url="https://img.grouponcdn.com/bynder/4MNMSftT5PqdsX3EWddvfL7JdhVe/4M-2048x1229/v1/c870x524.webp",
                         phone_number="(949) 783-9181",
                         address="2779 El Camino Real",
                         city="Tustin", state="CA", zipcode="92782",
                         operation_hours="5:30 AM–8:00 PM",
                         latitude=33.72704356832726, longitude=-117.793392289645,)
    GulliversPrimeRibs = Venue(creator_id=2, name="Gulliver’s Prime Ribs of Beef",
                               date_type_id=10, price=45,
                               description="Diners can enjoy prime rib as well as classic steaks and other American dishes made from hand-selected ingredients",
                               image_url="https://img.grouponcdn.com/deal/4EUdzNhpStSgHbyjn7PWqSFkCz4S/4E-700x420/v1/c870x524.webp",
                               phone_number="(949) 833-8411",
                               address="18482 MacArthur Boulevard",
                               city="Irvine", state="CA", zipcode="92612",
                               operation_hours="11:30 AM–3:00 PM; 5:00 PM–9:00 PM",
                               latitude=33.67970281550026, longitude=-117.85861872034125,)
    NatureSpaMassage = Venue(creator_id=2, name="Nature Spa & Massage",
                             date_type_id=8, price=140,
                             description="Clients are pampered with a Swedish massage, which can help them relax as well as reduce muscle tension",
                             image_url="https://img.grouponcdn.com/bynder/H5kwJHxCyTfvBMA3xg6PPjD8XGm/H5-2048x1229/v1/c870x524.webp",
                             phone_number="(714) 941-9434",
                             address="507 North Tustin Street",
                             city="Orange", state="CA", zipcode="92867",
                             operation_hours="10:00 AM–8:00 PM",
                             latitude=33.795704129373505, longitude=-117.835212466321,)
    DEFYTrampolinePark = Venue(creator_id=3, name="DEFY Trampoline Park",
                               date_type_id=7, price=52,
                               description="Guests enjoy over 35 trampolines, ninja warrior–style course, stunt fall, parkour inspired obstacle courses, extreme dodgeball, and more",
                               image_url="https://img.grouponcdn.com/deal/2FbbWov6kt6xwt8RWV3WwURmxVr4/2F-564x376/v1/c870x524.webp",
                               phone_number="(949) 445-1340",
                               address="25222 El Paseo Road",
                               city="Mission Viejo", state="CA", zipcode="92691",
                               operation_hours="9:00 AM-9:00 PM",
                               latitude=33.59450367130331, longitude=-117.673686351049,)
    PaddleBoardNewportBeach = Venue(creator_id=3, name="Paddle Board Newport Beach",
                                    date_type_id=9, price=60,
                                    description="Watersports-lovers rent standup paddleboards or kayaks from a surf shop located just steps away from the beach",
                                    image_url="https://img.grouponcdn.com/deal/aNtfBdKpudSd535kdFbe/y9-2048x1229/v1/c870x524.webp",
                                    phone_number="(949) 396-4580",
                                    address="1500 West Balboa Boulevard",
                                    city="Newport Beach", state="CA", zipcode="92663",
                                    operation_hours="10:00 AM–6:00 PM",
                                    latitude=33.60742191787686, longitude=-117.920918335705,)
    OakMountainWinery = Venue(creator_id=4, name="Oak Mountain Winery",
                              date_type_id=10, price=104,
                              description="Tour a winery and 104-foot undergound cave while sampling 6 different wines, enjoying a tray with meats and cheeses afterwards",
                              image_url="https://img.grouponcdn.com/deal/H7hQ1bX6wCxkXGz9d29DxEXBx1f/H7-1000x600/v1/c870x524.webp",
                              phone_number="(951) 699-9102",
                              address="36522 Via Verde",
                              city="Temecula", state="CA", zipcode="92592",
                              operation_hours="11:30 AM–2:00 PM",
                              latitude=33.51884544957567, longitude=-117.022479235735,)
    TheOfficialSAWEscape = Venue(creator_id=4, name="The Official SAW Escape",
                                 date_type_id=3, price=124,
                                 description="Guests take part in a bone-chilling escape scenario based on the popular Saw movie franchise",
                                 image_url="https://img.grouponcdn.com/deal/24BAvNMAiZfYiyLNZ6mJMtTarHbX/24-700x420/v1/c870x524.webp",
                                 phone_number="(702) 333-0770",
                                 address="2121 Industrial Road Suite 101",
                                 city="Las Vegas", state="NV", zipcode="89102",
                                 operation_hours="5:00 PM–11:00 PM",
                                 latitude=36.14707577275431, longitude=-115.162275865496,)
    LakehouseHotel = Venue(creator_id=5, name="Lakehouse Hotel & Resort",
                           date_type_id=1, price=309,
                           description="The 4-star Lakehouse Hotel & Resort is right on the edge of Lake San Marcos, a picturesque setting that begs to be explored. You can take one of the resort’s kayaks or standup paddleboards out on the lake, or just sit in a colorful lounge chair and fish. You can also play championship golf on a Harry Rainville–designed course or settle the score at the tennis court. Stay for two in a pool-view studio",
                           image_url="https://img.grouponcdn.com/deal/ntrmjUgGSGgBQmnGjto3/Y5-960x576/v1/c870x524.webp",
                           phone_number="(877) 526-2671",
                           address="1025 La Bonita Dr",
                           city="San Marcos", state="CA", zipcode="92078",
                           operation_hours="Open 24 Hours",
                           latitude=33.124957720628814, longitude=-117.208023697226,)
    IndianWellsResortHotel = Venue(creator_id=5, name="Indian Wells Resort Hotel",
                                   date_type_id=8, price=55,
                                   description="Though it experienced a lull at the turn of the century, the greater Palm Springs area has emerged once again as a vacation hot spot. The sun shines roughly 350 days a year here, so the abundant hiking trails and designer golf courses stay open all year. Luxury spas and boutique shops fill Palm Springs’s glitzy downtown area, which is surrounded by chic mid-century hotels and elaborate, Mediterranean-inspired villas.",
                                   image_url="https://img.grouponcdn.com/deal/htZ946S7XbifKA7WGMes/Lu-960x582/v1/c870x524.webp",
                                   phone_number="(800) 248-3220",
                                   address="76661 Hwy 111",
                                   city="Indian Wells", state="CA", zipcode="92210",
                                   operation_hours="6:30 AM–10:00 PM",
                                   latitude=33.72108746047759, longitude=-116.32743463566719,)
    EdgewaterCasinoResort = Venue(creator_id=6, name="Edgewater Casino Resort",
                                  date_type_id=4, price=28,
                                  description="Edgewater Casino Resort’s 40,000-square-foot gaming floor has something for every type guest. They can try a hand at the coin-free slots—featuring 400 penny machines—or roll the dice at tables for blackjack and roulette. And with daily entertainment and activities, including comedy nights and a grand buffet for breakfast and dinner, guests can enjoy the comforts of the resort all day and night.",
                                  image_url="https://img.grouponcdn.com/deal/2AJpm9Sh6MSph3EYFyDGt13RmTAt/2A-1500x900/v1/c870x524.webp",
                                  phone_number="(702) 298-2453",
                                  address="2020 S. Casino Drive Laughlin",
                                  city="Laughlin", state="NV", zipcode="89029",
                                  operation_hours="Open 24 Hours",
                                  latitude=35.161498254534365, longitude=-114.571374735169,)
    AvalonRomanticEscapePackage = Venue(creator_id=6, name="Avalon Romantic Escape Package",
                                        date_type_id=5, price=670,
                                        description="Up to two hour package includes: - An expert to plan every detail -Curbside pick-up from your chosen location -Sightseeing excursion to a picturesque location which is pre set with table and chairs -Champagne/mimosa (or your favorite beverage) -Picnic lunch or charcuterie board or other favorite small bites -PLUS an extra team member to take pictures with your phone or camera of the special moment!",
                                        image_url="https://img.grouponcdn.com/pwa_test/3djwuk4TnVjs2Tti4LwkRf7qyruX/3d-669x446/v1/c870x524.webp",
                                        phone_number="(310) 510-8575",
                                        address="118 Metropole Ave #2351",
                                        city="Avalon", state="CA", zipcode="90704",
                                        operation_hours="10:00 AM–8:00 PM",
                                        latitude=33.34374584198917, longitude=-118.326783766473,)
    UncorkedTours = Venue(creator_id=7, name="Uncorked Tours",
                          date_type_id=5, price=498,
                          description="Sip champagne aloft your sunrise balloon flight for 45-60 minutes, or tour 3 wineries for wine tastings in a limo coach! Photos are included",
                          image_url="https://img.grouponcdn.com/deal/m6Sfa9z3yXtV3KpwrCAw/A8-2794x1676/v1/c870x524.webp",
                          phone_number="(888) 400-7641",
                          address="34225 Rancho California Road",
                          city="Temecula", state="CA", zipcode="92591",
                          operation_hours="10:30 AM–6:30 PM",
                          latitude=33.52769256714973, longitude=-117.0655680510721,)
    ConroeTaxidermyTours = Venue(creator_id=8, name="Conroe Taxidermy Tours",
                                 date_type_id=6, price=30,
                                 description="Mike thas always had a passion for wildlife and the outdoors. It was this passion that led him to create Conroe Taxidermy LP in 1972. What began as a way to scrape together a few extra dollars has grown to the largest taxidermy facility in the southern U.S. and one of the biggest in the nation. Now, a family business with his sons Michael, Travis and Barret, Mike attributes their business’ growth to hard work, attention to detail, and craftmanship.",
                                 image_url="https://www.conroetaxidermy.com/wp-content/uploads/2015/06/slide03.jpg",
                                 phone_number="(281) 367-2745",
                                 address="11845 Clark Lane",
                                 city="Conroe", state="TX", zipcode="77385",
                                 operation_hours="8:00 AM–5:00 PM",
                                 latitude=30.193651830263, longitude=-95.40017042145229,)
    PerfectDayPicnics = Venue(creator_id=8, name="Perfect Day Picnics",
                              date_type_id=2, price=130,
                              description="Couples can show up to a Lux Pop up Picnic and enjoy a fun, relaxing, intimate activity . Perfect for Date night. Includes comfy pillows and throw blankets, chalkboard with a custom message, one picnic basket, two wine glasses, and food tray (food not included but can be added on for an additional cost)",
                              image_url="https://img.grouponcdn.com/deal/DhaxttuHSSLePt6ebxCkiybKyNk/Dh-1440x864/v1/c870x524.webp",
                              phone_number="(323) 282-8014",
                              address="3501 Valley Blvd",
                              city="Los Angeles", state="CA", zipcode="90031",
                              operation_hours="9:00 AM-8:00 PM",
                              latitude=34.06585133888286, longitude=-118.19915282021014,)
    ZombieScavengers = Venue(creator_id=9, name="Zombie Scavengers",
                             date_type_id=7, price=40,
                             description="Survival Scavenger Hunt by Zombie Scavengers turns cities across Canada and the United States into hunting grounds of the undead. But instead of sending hoards of brain-hungry zombies into the streets, it thrusts players into the role of survivors, who must forage for shelter and supplies as part of their mobile scavenger hunt. The game is family friendly, no actual zombies are involved in the scavenger hunt.",
                             image_url="https://img.grouponcdn.com/deal/3bEJHj5uG6NVZoKGu3cWSMEzDLjW/3b-1920x1152/v1/c870x524.webp",
                             phone_number="(843) 212-6741",
                             address="1101 North 1st Street",
                             city="Abilene", state="TX", zipcode="79601",
                             operation_hours="11:00 AM–5:00 PM",
                             latitude=32.449262497224765, longitude=-99.7345461360882,)
    GhostTourBoston = Venue(creator_id=9, name="Death and Dying Ghost Tour in Boston",
                            date_type_id=3, price=60,
                            description="The Death and Dying Ghost Tour is not only the only ghost tour in Boston meant for adults only, it is also the most unique. We use Boston's haunted locations to tell the story of death in colonial America. If you're looking for an amazing, through-provoking Ghost Tour, this is the one you want.",
                            image_url="https://img.grouponcdn.com/pwa_test/ozJgQPXx5trGZiwcGoVdRJqkWQx/oz-669x446/v1/c870x524.webp",
                            phone_number="(855) 999-9026",
                            address="24 Beacon St",
                            city="Boston", state="MA", zipcode="02133",
                            operation_hours="9:00 PM-10:30 PM",
                            latitude=42.35879097892251, longitude=-71.06380303236465,)
    PaintingVino = Venue(creator_id=10, name="Painting & Vino",
                         date_type_id=1, price=180,
                         description="Founded in 2011, as one of the pioneers in the 'Paint and Sip' industry, Painting & Vino. Grab some drinks and munchies and learn to paint a different work of art during each session. Whether its a picture of the teacher’s own design or a classic work by artists such as Matisse and Picasso, the instructors go over the paintings step-by-step so even those who have never painted before will understand the process.",
                         image_url="https://img.grouponcdn.com/deal/3Y4a1fXFYzuhRoHbbgGVmMiAM7Zs/3Y-700x420/v1/c870x524.webp",
                         phone_number="(855) 410-8330",
                         address="317 S Broadway",
                         city="Los Angeles", state="CA", zipcode="90013",
                         operation_hours="9:00 AM-10:30 PM",
                         latitude=34.05101613272441, longitude=-118.24928452021523,)
    DallasTandemSkydiving = Venue(creator_id=10, name="Dallas Tandem Skydiving",
                                  date_type_id=7, price=300,
                                  description="Tethered to an instructor, skydivers free-fall at up to 120 miles per hour before floating to earth",
                                  image_url="https://img.grouponcdn.com/iam/26G6WvGk256szN7Yj7VRu7eNBNea/26-2048x1229/v1/c870x524.webp",
                                  phone_number="(214) 838-0111",
                                  address="100 Airport Dr",
                                  city="Ennis", state="TX", zipcode="75119",
                                  operation_hours="6:30 AM-8:00 PM",
                                  latitude=32.324242657947, longitude=-96.66415425146856,)
    TheSecretChambers = Venue(creator_id=11, name="The Secret Chambers",
                              date_type_id=6, price=80,
                              description="Guests let out their inner Hulk as they smash and break items by throwing them at the wall, using a hammer or baseball bat",
                              image_url="https://img.grouponcdn.com/deal/3szkLuySxuqsxtxzYPJZxRN5JXrQ/3s-2048x1229/v1/c870x524.webp",
                              phone_number="(817) 857-3555",
                              address="513 Alta Mere Drive",
                              city="Fort Worth", state="TX", zipcode="76114",
                              operation_hours="2:30 PM–10:00 PM",
                              latitude=32.75198710307635, longitude=-97.43048946666924,)
    CombatPaintballPark = Venue(creator_id=11, name="Combat Paintball Park",
                                date_type_id=9, price=70,
                                description="Paintball is a fun game that allows the players to compete against one another in a friendly match",
                                image_url="https://img.grouponcdn.com/deal/4RGwf3UEyPi52RiB9eeEDSq1pH2F/4R-1226x736/v1/c870x524.webp",
                                phone_number="(800) 289-3199",
                                address="31050 Charlie Canyon Rd",
                                city="Castaic", state="CA", zipcode="91384",
                                operation_hours="9:00 AM–4:00 PM",
                                latitude=34.48687753438457, longitude=-118.603654966085,)
    GrandCanyonHelicopterTours = Venue(creator_id=12, name="Grand Canyon Helicopter Tours",
                                       date_type_id=5, price=198,
                                       description="Passenger can enjoy great aerial views of Las Vegas, hovering over some of the city’s most noteworthy sites",
                                       image_url="https://img.grouponcdn.com/deal/2us97R6rtafYkp8DRLhZ6zLjPKpe/2u-1500x900/v1/c870x524.webp",
                                       phone_number="(702) 565-7827",
                                       address="5596 Haven Street",
                                       city="Las Vegas", state="NV", zipcode="89119",
                                       operation_hours="7:00 AM–10:00 PM",
                                       latitude=36.08802290124628, longitude=-115.16682565017776,)
    SunBuggyFunRentals = Venue(creator_id=12, name="SunBuggy Fun Rentals",
                               date_type_id=7, price=500,
                               description="ATV Tour on a Medium-sized Semi-Auto ATV",
                               image_url="https://img.grouponcdn.com/metro_draft_service/2fWa7xXGUntx65b644BMzNCJvWF8/2f-2080x1560/v1/c870x524.webp",
                               phone_number="(702) 644-2855",
                               address="6925 Speedway Blvd Unit C-106",
                               city="Las Vegas", state="NV", zipcode="89115",
                               operation_hours="7:00 AM–7:00 PM",
                               latitude=36.27829768842449, longitude=-115.02040515010852,)
    CrazyDash = Venue(creator_id=13, name="Crazy Dash",
                      date_type_id=2, price=40,
                      description="Performing silly tasks and hunting for checkpoints around the city brings adventure and family-friendly fun",
                      image_url="https://img.grouponcdn.com/deal/3xGcA45T789r5AKRZGkG9CVorWsh/3x-700x420/v1/c870x524.webp",
                      phone_number="(843) 256-6747",
                      address="240 South Water Street",
                      city="Henderson", state="NV", zipcode="89015",
                      operation_hours="Open 24 Hours",
                      latitude=36.02985127580803, longitude=-114.982412450198,)

    db.session.add(NewportFunTours)
    db.session.add(Sunsetbodyworks)
    db.session.add(DaveyLockerWhale)
    db.session.add(TheBodyLab)
    db.session.add(Bike2thebeat)
    db.session.add(GulliversPrimeRibs)
    db.session.add(NatureSpaMassage)
    db.session.add(DEFYTrampolinePark)
    db.session.add(PaddleBoardNewportBeach)
    db.session.add(OakMountainWinery)
    db.session.add(TheOfficialSAWEscape)
    db.session.add(LakehouseHotel)
    db.session.add(IndianWellsResortHotel)
    db.session.add(EdgewaterCasinoResort)
    db.session.add(AvalonRomanticEscapePackage)
    db.session.add(UncorkedTours)
    db.session.add(ConroeTaxidermyTours)
    db.session.add(PerfectDayPicnics)
    db.session.add(ZombieScavengers)
    db.session.add(GhostTourBoston)
    db.session.add(PaintingVino)
    db.session.add(DallasTandemSkydiving)
    db.session.add(TheSecretChambers)
    db.session.add(CombatPaintballPark)
    db.session.add(GrandCanyonHelicopterTours)
    db.session.add(SunBuggyFunRentals)
    db.session.add(CrazyDash)

    db.session.commit()


def undo_venues():
    db.session.execute('TRUNCATE venues RESTART IDENTITY CASCADE;')
    db.session.commit()
