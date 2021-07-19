from app.models import db, Reservation
from datetime import datetime


def seed_reservations():
    num1 = Reservation(user_id=1, venue_id=1, reservation_datetime=datetime(
        2021, 7, 16, 17, 30), party_size=2, duration=1)
    num2 = Reservation(user_id=2, venue_id=4, reservation_datetime=datetime(
        2021, 7, 17, 18, 30), party_size=4, duration=2)
    num3 = Reservation(user_id=2, venue_id=5, reservation_datetime=datetime(
        2021, 7, 18, 19, 30), party_size=2, duration=1)
    num4 = Reservation(user_id=3, venue_id=6, reservation_datetime=datetime(
        2021, 7, 19, 20, 30), party_size=2, duration=1.5)
    num5 = Reservation(user_id=3, venue_id=7, reservation_datetime=datetime(
        2021, 7, 20, 21, 30), party_size=2, duration=3)
    num6 = Reservation(user_id=4, venue_id=8, reservation_datetime=datetime(
        2021, 7, 21, 22, 30), party_size=4, duration=2)
    num7 = Reservation(user_id=4, venue_id=9, reservation_datetime=datetime(
        2021, 7, 22, 17, 00), party_size=4, duration=1)
    num8 = Reservation(user_id=5, venue_id=1, reservation_datetime=datetime(
        2021, 7, 23, 18, 00), party_size=4, duration=2)
    num9 = Reservation(user_id=5, venue_id=2, reservation_datetime=datetime(
        2021, 7, 24, 19, 00), party_size=2, duration=1)
    num10 = Reservation(user_id=6, venue_id=3, reservation_datetime=datetime(
        2021, 7, 25, 20, 00), party_size=2, duration=3)
    num11 = Reservation(user_id=6, venue_id=4, reservation_datetime=datetime(
        2021, 7, 26, 21, 00), party_size=4, duration=2.5)
    num12 = Reservation(user_id=7, venue_id=5, reservation_datetime=datetime(
        2021, 7, 27, 22, 00), party_size=6, duration=1)
    num13 = Reservation(user_id=8, venue_id=6, reservation_datetime=datetime(
        2021, 7, 28, 17, 30), party_size=6, duration=0.5)
    num14 = Reservation(user_id=8, venue_id=7, reservation_datetime=datetime(
        2021, 7, 29, 18, 30), party_size=8, duration=1)
    num15 = Reservation(user_id=9, venue_id=8, reservation_datetime=datetime(
        2021, 7, 30, 19, 30), party_size=4, duration=2.5)
    num16 = Reservation(user_id=9, venue_id=9, reservation_datetime=datetime(
        2021, 7, 31, 20, 30), party_size=4, duration=2)
    num17 = Reservation(user_id=10, venue_id=10, reservation_datetime=datetime(
        2021, 8, 1, 21, 30), party_size=2, duration=3)
    num18 = Reservation(user_id=10, venue_id=11, reservation_datetime=datetime(
        2021, 8, 2, 22, 30), party_size=2, duration=1)
    num19 = Reservation(user_id=11, venue_id=12, reservation_datetime=datetime(
        2021, 8, 3, 17, 00), party_size=4, duration=2.5)
    num20 = Reservation(user_id=11, venue_id=13, reservation_datetime=datetime(
        2021, 8, 4, 18, 00), party_size=4, duration=1)
    num21 = Reservation(user_id=12, venue_id=14, reservation_datetime=datetime(
        2021, 8, 5, 19, 00), party_size=6, duration=2)
    num22 = Reservation(user_id=12, venue_id=15, reservation_datetime=datetime(
        2021, 8, 6, 20, 00), party_size=4, duration=1.5)
    num23 = Reservation(user_id=13, venue_id=16, reservation_datetime=datetime(
        2021, 8, 7, 21, 00), party_size=2, duration=0.5)
    num24 = Reservation(user_id=13, venue_id=17, reservation_datetime=datetime(
        2021, 8, 8, 22, 00), party_size=2, duration=1.5)
    num25 = Reservation(user_id=14, venue_id=18, reservation_datetime=datetime(
        2021, 8, 9, 17, 30), party_size=4, duration=1)
    num26 = Reservation(user_id=14, venue_id=19, reservation_datetime=datetime(
        2021, 8, 10, 18, 30), party_size=2, duration=2)
    num27 = Reservation(user_id=15, venue_id=20, reservation_datetime=datetime(
        2021, 8, 11, 19, 30), party_size=2, duration=1)
    num28 = Reservation(user_id=15, venue_id=21, reservation_datetime=datetime(
        2021, 8, 12, 20, 30), party_size=4, duration=3)
    num29 = Reservation(user_id=16, venue_id=22, reservation_datetime=datetime(
        2021, 8, 13, 21, 30), party_size=6, duration=2.5)
    num30 = Reservation(user_id=16, venue_id=23, reservation_datetime=datetime(
        2021, 8, 14, 22, 30), party_size=8, duration=1.5)
    num31 = Reservation(user_id=17, venue_id=24, reservation_datetime=datetime(
        2021, 8, 15, 17, 00), party_size=2, duration=1)
    num32 = Reservation(user_id=17, venue_id=25, reservation_datetime=datetime(
        2021, 8, 16, 18, 00), party_size=2, duration=2)
    num33 = Reservation(user_id=18, venue_id=26, reservation_datetime=datetime(
        2021, 8, 17, 19, 00), party_size=4, duration=3)
    num34 = Reservation(user_id=18, venue_id=1, reservation_datetime=datetime(
        2021, 8, 18, 20, 00), party_size=4, duration=2)
    num35 = Reservation(user_id=19, venue_id=2, reservation_datetime=datetime(
        2021, 8, 19, 21, 00), party_size=8, duration=1)
    num36 = Reservation(user_id=19, venue_id=3, reservation_datetime=datetime(
        2021, 8, 20, 22, 00), party_size=8, duration=3)
    num37 = Reservation(user_id=20, venue_id=4, reservation_datetime=datetime(
        2021, 8, 21, 17, 30), party_size=2, duration=2.5)
    num38 = Reservation(user_id=20, venue_id=5, reservation_datetime=datetime(
        2021, 8, 22, 18, 30), party_size=2, duration=1)
    num39 = Reservation(user_id=21, venue_id=6, reservation_datetime=datetime(
        2021, 8, 23, 19, 30), party_size=2, duration=1.5)
    num40 = Reservation(user_id=21, venue_id=7, reservation_datetime=datetime(
        2021, 8, 24, 20, 30), party_size=2, duration=3)
    num41 = Reservation(user_id=22, venue_id=8, reservation_datetime=datetime(
        2021, 8, 25, 21, 30), party_size=4, duration=2)
    num42 = Reservation(user_id=22, venue_id=9, reservation_datetime=datetime(
        2021, 8, 26, 22, 30), party_size=4, duration=1.5)
    num43 = Reservation(user_id=23, venue_id=10, reservation_datetime=datetime(
        2021, 8, 27, 17, 00), party_size=2, duration=1)
    num44 = Reservation(user_id=23, venue_id=11, reservation_datetime=datetime(
        2021, 8, 28, 18, 00), party_size=8, duration=3)
    num45 = Reservation(user_id=24, venue_id=12, reservation_datetime=datetime(
        2021, 8, 29, 19, 00), party_size=6, duration=2)
    num46 = Reservation(user_id=24, venue_id=13, reservation_datetime=datetime(
        2021, 8, 30, 20, 00), party_size=4, duration=0.5)
    num47 = Reservation(user_id=25, venue_id=14, reservation_datetime=datetime(
        2021, 8, 31, 21, 00), party_size=2, duration=1)
    num48 = Reservation(user_id=25, venue_id=15, reservation_datetime=datetime(
        2021, 9, 1, 22, 00), party_size=2, duration=1)
    num49 = Reservation(user_id=26, venue_id=16, reservation_datetime=datetime(
        2021, 9, 2, 17, 30), party_size=4, duration=2)
    num50 = Reservation(user_id=26, venue_id=17, reservation_datetime=datetime(
        2021, 9, 3, 18, 30), party_size=2, duration=2)
    num51 = Reservation(user_id=27, venue_id=18, reservation_datetime=datetime(
        2021, 9, 4, 19, 30), party_size=2, duration=1.5)
    num52 = Reservation(user_id=27, venue_id=19, reservation_datetime=datetime(
        2021, 9, 5, 20, 30), party_size=2, duration=1.5)
    num53 = Reservation(user_id=28, venue_id=20, reservation_datetime=datetime(
        2021, 9, 6, 21, 30), party_size=2, duration=0.5)
    num54 = Reservation(user_id=28, venue_id=21, reservation_datetime=datetime(
        2021, 9, 7, 22, 30), party_size=4, duration=1)
    num55 = Reservation(user_id=29, venue_id=22, reservation_datetime=datetime(
        2021, 9, 8, 17, 00), party_size=4, duration=1)
    num56 = Reservation(user_id=29, venue_id=23, reservation_datetime=datetime(
        2021, 9, 9, 18, 00), party_size=4, duration=2)
    num57 = Reservation(user_id=30, venue_id=24, reservation_datetime=datetime(
        2021, 9, 10, 19, 00), party_size=2, duration=2)
    num58 = Reservation(user_id=30, venue_id=25, reservation_datetime=datetime(
        2021, 9, 11, 20, 00), party_size=6, duration=3)
    num59 = Reservation(user_id=31, venue_id=26, reservation_datetime=datetime(
        2021, 9, 12, 21, 00), party_size=2, duration=2)
    num60 = Reservation(user_id=31, venue_id=1, reservation_datetime=datetime(
        2021, 9, 13, 22, 00), party_size=4, duration=1)
    num61 = Reservation(user_id=32, venue_id=2, reservation_datetime=datetime(
        2021, 9, 14, 17, 30), party_size=2, duration=1)
    num62 = Reservation(user_id=32, venue_id=3, reservation_datetime=datetime(
        2021, 9, 15, 18, 30), party_size=2, duration=1.5)
    num63 = Reservation(user_id=33, venue_id=4, reservation_datetime=datetime(
        2021, 9, 16, 19, 30), party_size=4, duration=0.5)
    num64 = Reservation(user_id=33, venue_id=5, reservation_datetime=datetime(
        2021, 9, 17, 20, 30), party_size=4, duration=1)
    num65 = Reservation(user_id=34, venue_id=6, reservation_datetime=datetime(
        2021, 9, 18, 21, 30), party_size=2, duration=1)
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

    db.session.commit()


def undo_reservations():
    db.session.execute('TRUNCATE reservations RESTART IDENTITY CASCADE;')
    db.session.commit()
