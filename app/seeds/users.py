from app.models import db, User
from werkzeug.security import generate_password_hash

# Adds a demo user, you can add other users here if you want


def seed_users():
    pw = generate_password_hash("password")

    DemoUser = User(first_name="Demo",
                    last_name="User",
                    username="demouser",
                    profile_img="",
                    email="demo-user@demodata.com",
                    hashed_password=pw)
    DemoLovato = User(first_name="Demo",
                      last_name="Lovato",
                      username="demolovato",
                      profile_img="",
                      email="demo@mcdemoface.com",
                      hashed_password=pw)
    DemoMoore = User(first_name="Demo",
                     last_name="Moore",
                     username="demomoore",
                     profile_img="",
                     email="demomoore@mcdemoface.com",
                     hashed_password=pw)
    AdamSandler = User(first_name="Adam",
                       last_name="Sandler",
                       username="HappyMadison",
                       profile_img="",
                       email="adamsandler@hollywood.com",
                       hashed_password=pw)
    AmyAdams = User(first_name="Amy",
                    last_name="Adams",
                    username="AmyAdams",
                    profile_img="",
                    email="amyadams@hollywoodstar.com",
                    hashed_password=pw)
    AngelinaJolie = User(first_name="Angelina",
                         last_name="Jolie",
                         username="Angelina",
                         profile_img="",
                         email="angelinajolie@hollywoodstar.com",
                         hashed_password=pw)
    ArnoldSchwarzenegger = User(first_name="Arnold",
                                last_name="Schwarzenegger",
                                username="GetToDaChoppa",
                                profile_img="",
                                email="arnoldschwarzenegger@hollywoodstar.com",
                                hashed_password=pw)
    BenAffleck = User(first_name="Ben",
                      last_name="Affleck",
                      username="ILoveMattDamon",
                      profile_img="",
                      email="benaffleck@hollywoodstar.com",
                      hashed_password=pw)
    BenedictCumberbatch = User(first_name="Benedict",
                               last_name="Cumberbatch",
                               username="NotJustSherlock",
                               profile_img="",
                               email="benedictcumberbatch@hollywoodstar.com",
                               hashed_password=pw)
    BobRoss = User(first_name="Bob",
                   last_name="Ross",
                   username="bobross",
                   profile_img="https://www.ccplonline.org/wp-content/uploads/2020/09/Art-History-Snapshot-Bob-Ross-Cover-Photo.png",
                   email="demo-user@demodata.com",
                   hashed_password=pw)
    BruceWillis = User(first_name="Bruce",
                       last_name="Willis",
                       username="YipeeKiYay",
                       profile_img="",
                       email="brucewillis@hollywoodstar.com",
                       hashed_password=pw)
    BryanCranston = User(first_name="Bryan",
                         last_name="Cranston",
                         username="WalterWhite",
                         profile_img="",
                         email="bryancranston@hollywoodstar.com",
                         hashed_password=pw)
    ChanningTatum = User(first_name="Channing",
                         last_name="Tatum",
                         username="ChanChan",
                         profile_img="",
                         email="channingtatum@hollywoodstar.com",
                         hashed_password=pw)
    CharlizeTheron = User(first_name="Charlize",
                          last_name="Theron",
                          username="CharlizeTheron",
                          profile_img="",
                          email="charlizetheron@hollywoodstar.com",
                          hashed_password=pw)
    ChrisHemsworth = User(first_name="Chris",
                          last_name="Hemsworth",
                          username="Thooooor",
                          profile_img="",
                          email="chrishemsworth@hollywoodstar.com",
                          hashed_password=pw)
    ChrisPine = User(first_name="Chris",
                     last_name="Pine",
                     username="ImTheCaptainNow",
                     profile_img="",
                     email="chrispine@hollywoodstar.com",
                     hashed_password=pw)
    ChrisPratt = User(first_name="Chris",
                      last_name="Pratt",
                      username="MonkeyBoy",
                      profile_img="",
                      email="chrispratt@hollywoodstar.com",
                      hashed_password=pw)
    ChristopherWalken = User(first_name="Christopher",
                             last_name="Walken",
                             username="LotsaCommas",
                             profile_img="",
                             email="christopherwalken@hollywoodstar.com",
                             hashed_password=pw)
    DenzelWashington = User(first_name="Denzel",
                            last_name="Washington",
                            username="DenzelWash",
                            profile_img="",
                            email="denzelwashington@hollywoodstar.com",
                            hashed_password=pw)
    DonCheadle = User(first_name="Don",
                      last_name="Cheadle",
                      username="TheCheadle",
                      profile_img="",
                      email="doncheadle@hollywoodstar.com",
                      hashed_password=pw)
    DrewBarrymore = User(first_name="Drew",
                         last_name="Barrymore",
                         username="NotBarryless",
                         profile_img="",
                         email="drewbarrymore@hollywoodstar.com",
                         hashed_password=pw)
    DustinHoffman = User(first_name="Dustin",
                         last_name="Hoffman",
                         username="Dustin",
                         profile_img="",
                         email="dustinhoffman@hollywoodstar.com",
                         hashed_password=pw)
    DwayneJohnson = User(first_name="Dwayne",
                         last_name="Johnson",
                         username="SmellMyCooking",
                         profile_img="",
                         email="dwaynejohnson@hollywoodstar.com",
                         hashed_password=pw)
    ElliotPage = User(first_name="Elliot",
                      last_name="Page",
                      username="LivingAsMyself",
                      profile_img="",
                      email="elliotpage@hollywoodstar.com",
                      hashed_password=pw)
    EmilyBlunt = User(first_name="Emily",
                      last_name="Blunt",
                      username="EmilyBlunt",
                      profile_img="",
                      email="emilyblunt@hollywoodstar.com",
                      hashed_password=pw)
    EmmaThompson = User(first_name="Emma",
                        last_name="Thompson",
                        username="EmmaThompson",
                        profile_img="",
                        email="emmathompson@hollywoodstar.com",
                        hashed_password=pw)
    EmmaWatson = User(first_name="Emma",
                      last_name="Watson",
                      username="EmmaWatson",
                      profile_img="",
                      email="emmawatson@hollywoodstar.com",
                      hashed_password=pw)
    GeorgeClooney = User(first_name="George",
                         last_name="Clooney",
                         username="Georgie",
                         profile_img="",
                         email="georgeclooney@hollywoodstar.com",
                         hashed_password=pw)
    IanMcKellen = User(first_name="Ian",
                       last_name="McKellen",
                       username="ThatsSirToYou",
                       profile_img="",
                       email="ianmckellen@hollywoodstar.com",
                       hashed_password=pw)
    JackyChan = User(first_name="Jacky",
                     last_name="Chan",
                     username="KingFuMaster",
                     profile_img="",
                     email="jackychan@hollywoodstar.com",
                     hashed_password=pw)
    JamesMcAvoy = User(first_name="James",
                       last_name="McAvoy",
                       username="OGTumnus",
                       profile_img="",
                       email="jamesmcavoy@hollywoodstar.com",
                       hashed_password=pw)
    JenniferAniston = User(first_name="Jennifer",
                           last_name="Aniston",
                           username="Rachem",
                           profile_img="",
                           email="jenniferaniston@hollywoodstar.com",
                           hashed_password=pw)
    JenniferLawrence = User(first_name="Jennifer",
                            last_name="Lawrence",
                            username="JLaw",
                            profile_img="",
                            email="jenniferlawrence@hollywoodstar.com",
                            hashed_password=pw)
    JohnKrasinski = User(first_name="John",
                         last_name="Krasinski",
                         username="Krazyski",
                         profile_img="",
                         email="johnkrasinski@hollywoodstar.com",
                         hashed_password=pw)
    JohnnyDepp = User(first_name="Johnny",
                      last_name="Depp",
                      username="jdepp",
                      profile_img="",
                      email="johnnydepp@hollywoodstar.com",
                      hashed_password=pw)
    KateBeckinsale = User(first_name="Kate",
                          last_name="Beckinsale",
                          username="PrankerSupreme",
                          profile_img="",
                          email="katebeckinsale@hollywoodstar.com",
                          hashed_password=pw)
    KeanuReeves = User(first_name="Keanu",
                       last_name="Reeves",
                       username="Neo",
                       profile_img="",
                       email="keanureeves@hollywoodstar.com",
                       hashed_password=pw)
    KenJeong = User(first_name="Ken",
                    last_name="Jeong",
                    username="NoReallyImADoctor",
                    profile_img="",
                    email="kenjeong@hollywoodstar.com",
                    hashed_password=pw)
    LeornadoDiCaprio = User(first_name="Leornado",
                            last_name="DiCaprio",
                            username="DeeeCaprio",
                            profile_img="",
                            email="leaornadodicaprio@hollywoodstar.com",
                            hashed_password=pw)
    LiamNeeson = User(first_name="Liam",
                      last_name="Neeson",
                      username="LiamNissan",
                      profile_img="",
                      email="liamneeson@hollywoodstar.com",
                      hashed_password=pw)
    MattDamon = User(first_name="Matt",
                     last_name="Damon",
                     username="DemApples",
                     profile_img="",
                     email="mattdamon@hollywoodstar.com",
                     hashed_password=pw)
    MerylStreep = User(first_name="Meryl",
                       last_name="Streep",
                       username="MerylStreep",
                       profile_img="",
                       email="merylstreep@hollywoodstar.com",
                       hashed_password=pw)
    MichelleYeoh = User(first_name="Michelle",
                        last_name="Yeoh",
                        username="MichelleYeoh",
                        profile_img="",
                        email="michelleyeoh@hollywoodstar.com",
                        hashed_password=pw)
    MorganFreeman = User(first_name="Morgan",
                         last_name="Freeman",
                         username="VoiceOfGod",
                         profile_img="",
                         email="morganfreeman@hollywoodstar.com",
                         hashed_password=pw)
    NicoleKidman = User(first_name="Nicole",
                        last_name="Kidman",
                        username="NicoleKidman",
                        profile_img="",
                        email="nicolekidman@hollywoodstar.com",
                        hashed_password=pw)
    PaulRudd = User(first_name="Paul",
                    last_name="Rudd",
                    username="Ruddy",
                    profile_img="",
                    email="paulrudd@hollywoodstar.com",
                    hashed_password=pw)
    RandallPark = User(first_name="Randall",
                       last_name="Park",
                       username="AsianJim",
                       profile_img="",
                       email="randallpark@hollywoodstar.com",
                       hashed_password=pw)
    RobertDeNiro = User(first_name="Robert",
                        last_name="De Niro",

                        profile_img="",
                        email="robertdeniro@hollywoodstar.com",
                        hashed_password=pw)
    RobertDowneyJr = User(first_name="Robert",
                          last_name="Downey Jr.",
                          username="RealIronMan",
                          profile_img="",
                          email="robertdowneyjr@hollywoodstar.com",
                          hashed_password=pw)
    RyanGosling = User(first_name="Ryan",
                       last_name="Gosling",
                       username="Goosling",
                       profile_img="",
                       email="ryangosling@hollywoodstar.com",
                       hashed_password=pw)
    SamuelLJackson = User(first_name="Samuel",
                          last_name="L. Jackson",
                          username="OneBadMofo",
                          profile_img="",
                          email="samuelljackson@hollywoodstar.com",
                          hashed_password=pw)
    SandraBullock = User(first_name="Sandra",
                         last_name="Bullock",
                         username="SandraBullock",
                         profile_img="",
                         email="sandrabullock@hollywoodstar.com",
                         hashed_password=pw)
    ScarlettJohansson = User(first_name="Scarlett",
                             last_name="Johansson",
                             username="JustCallMeSpider",
                             profile_img="",
                             email="scarlettjohansson@hollywoodstar.com",
                             hashed_password=pw)
    SethRogen = User(first_name="Seth",
                     last_name="Rogen",
                     username="OneFunnyGuy",
                     profile_img="",
                     email="sethrogen@hollywoodstar.com",
                     hashed_password=pw)
    SteveCarell = User(first_name="Steve",
                       last_name="Carell",
                       username="LoveMyMinions",
                       profile_img="",
                       email="stevecarell@hollywoodstar.com",
                       hashed_password=pw)
    TomCruise = User(first_name="Tom",
                     last_name="Cruise",
                     username="Cruiser",
                     profile_img="",
                     email="tomcruise@hollywoodstar.com",
                     hashed_password=pw)
    TomHanks = User(first_name="Tom",
                    last_name="Hanks",
                    username="T.Hanks",
                    profile_img="",
                    email="tomhanks@hollywoodstar.com",
                    hashed_password=pw)
    TomHiddleston = User(first_name="Tom",
                         last_name="Hiddleston",
                         username="BetterThanThor",
                         profile_img="",
                         email="tomhiddleston@hollywoodstar.com",
                         hashed_password=pw)
    VinDiesel = User(first_name="Vin",
                     last_name="Diesel",
                     username="Groooooot",
                     profile_img="",
                     email="vindiesel@hollywoodstar.com",
                     hashed_password=pw)
    WillSmith = User(first_name="Will",
                     last_name="Smith",
                     username="FreshPrince",
                     profile_img="",
                     email="willsmith@hollywoodstar.com",
                     hashed_password=pw)
    ZacEfron = User(first_name="Zac",
                    last_name="Efron",
                    username="NoMoreDisney",
                    profile_img="",
                    email="zacefron@hollywoodstar.com",
                    hashed_password=pw)

    db.session.add(DemoUser)
    db.session.add(DemoLovato)
    db.session.add(DemoMoore)
    db.session.add(AdamSandler)
    db.session.add(AmyAdams)
    db.session.add(AngelinaJolie)
    db.session.add(ArnoldSchwarzenegger)
    db.session.add(BenAffleck)
    db.session.add(BenedictCumberbatch)
    db.session.add(BobRoss)
    db.session.add(BruceWillis)
    db.session.add(BryanCranston)
    db.session.add(ChanningTatum)
    db.session.add(CharlizeTheron)
    db.session.add(ChrisHemsworth)
    db.session.add(ChrisPine)
    db.session.add(ChrisPratt)
    db.session.add(ChristopherWalken)
    db.session.add(DenzelWashington)
    db.session.add(DonCheadle)
    db.session.add(DrewBarrymore)
    db.session.add(DustinHoffman)
    db.session.add(DwayneJohnson)
    db.session.add(ElliotPage)
    db.session.add(EmilyBlunt)
    db.session.add(EmmaThompson)
    db.session.add(EmmaWatson)
    db.session.add(GeorgeClooney)
    db.session.add(IanMcKellen)
    db.session.add(JackyChan)
    db.session.add(JamesMcAvoy)
    db.session.add(JenniferAniston)
    db.session.add(JenniferLawrence)
    db.session.add(JohnKrasinski)
    db.session.add(JohnnyDepp)
    db.session.add(KateBeckinsale)
    db.session.add(KeanuReeves)
    db.session.add(KenJeong)
    db.session.add(LeornadoDiCaprio)
    db.session.add(LiamNeeson)
    db.session.add(MattDamon)
    db.session.add(MerylStreep)
    db.session.add(MichelleYeoh)
    db.session.add(MorganFreeman)
    db.session.add(NicoleKidman)
    db.session.add(PaulRudd)
    db.session.add(RandallPark)
    db.session.add(RobertDeNiro)
    db.session.add(RobertDowneyJr)
    db.session.add(RyanGosling)
    db.session.add(SamuelLJackson)
    db.session.add(SandraBullock)
    db.session.add(ScarlettJohansson)
    db.session.add(SethRogen)
    db.session.add(SteveCarell)
    db.session.add(TomCruise)
    db.session.add(TomHanks)
    db.session.add(TomHiddleston)
    db.session.add(VinDiesel)
    db.session.add(WillSmith)
    db.session.add(ZacEfron)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
