from app.models import db, Reservation


def seed_reservations():
    one = Reservation(user_id=1, venue_id=1, reservation_date='2021-02-01', reservation_time="17:00", party_size=2, duration=1)
    # 2 = Reservation(user_id=2, venue_id=4, reservation_date=2/2/2021, reservation_time="18:00", party_size=4, duration=2)
    # 3 = Reservation(user_id=2, venue_id=5, reservation_date=2/3/2021, reservation_time="19:00", party_size=2, duration=1)
    # 4 = Reservation(user_id=3, venue_id=6, reservation_date=2/4/2021, reservation_time="20:00", party_size=2, duration=1.5)
    # 5 = Reservation(user_id=3, venue_id=7, reservation_date=2/5/2021, reservation_time="21:00", party_size=2, duration=3)
    # 6 = Reservation(user_id=4, venue_id=8, reservation_date="2/6/2021", reservation_time="22:00", party_size=4, duration=2)
    # 7 = Reservation(user_id=4, venue_id=9, reservation_date="2/7/2021", reservation_time="23:00", party_size=4, duration=1)
    # 8 = Reservation(user_id=5, venue_id=1, reservation_date="2/8/2021", reservation_time="17:00", party_size=4, duration=2)
    # 9 = Reservation(user_id=5, venue_id=2, reservation_date="2/9/2021", reservation_time="18:00", party_size=2, duration=1)
    # 10 = Reservation(user_id=6, venue_id=3, reservation_date="2/10/2021", reservation_time="19:00", party_size=2, duration=3)
    # 11 = Reservation(user_id=6, venue_id=4, reservation_date="2/11/2021", reservation_time="20:00", party_size=4, duration=2.5)
    # 12 = Reservation(user_id=7, venue_id=5, reservation_date="2/12/2021", reservation_time="21:00", party_size=6, duration=1)
    # 13 = Reservation(user_id=8, venue_id=6, reservation_date="2/13/2021", reservation_time="22:00", party_size=6, duration=0.5)
    # 14 = Reservation(user_id=8, venue_id=7, reservation_date="2/14/2021", reservation_time="23:00", party_size=8, duration=1)
    # 15 = Reservation(user_id=9, venue_id=8, reservation_date="2/15/2021", reservation_time="17:00", party_size=4, duration=2.5)
    # 16 = Reservation(user_id=9, venue_id=9, reservation_date="2/16/2021", reservation_time="18:00", party_size=4, duration=2)
    # 17 = Reservation(user_id=10, venue_id=10, reservation_date="2/17/2021", reservation_time="19:00", party_size=2, duration=3)
    # 18 = Reservation(user_id=10, venue_id=11, reservation_date="2/18/2021", reservation_time="20:00", party_size=2, duration=1)
    # 19 = Reservation(user_id=11, venue_id=12, reservation_date="2/19/2021", reservation_time="21:00", party_size=4, duration=2.5)
    # 20 = Reservation(user_id=11, venue_id=13, reservation_date="2/20/2021", reservation_time="22:00", party_size=4, duration=1)
    # 21 = Reservation(user_id=12, venue_id=14, reservation_date="2/21/2021", reservation_time="23:00", party_size=6, duration=2)
    # 22 = Reservation(user_id=12, venue_id=15, reservation_date="2/22/2021", reservation_time="17:00", party_size=4, duration=1.5)
    # 23 = Reservation(user_id=13, venue_id=16, reservation_date="2/23/2021", reservation_time="18:00", party_size=2, duration=0.5)
    # 24 = Reservation(user_id=13, venue_id=17, reservation_date="2/24/2021", reservation_time="19:00", party_size=2, duration=1.5)
    # 25 = Reservation(user_id=14, venue_id=18, reservation_date="2/25/2021", reservation_time="20:00", party_size=4, duration=1)
    # 26 = Reservation(user_id=14, venue_id=19, reservation_date="2/26/2021", reservation_time="21:00", party_size=2, duration=2)
    # 27 = Reservation(user_id=15, venue_id=20, reservation_date="2/27/2021", reservation_time="22:00", party_size=2, duration=1)
    # 28 = Reservation(user_id=15, venue_id=21, reservation_date="2/28/2021", reservation_time="23:00", party_size=4, duration=3)
    # 29 = Reservation(user_id=16, venue_id=22, reservation_date="3/1/2021", reservation_time="17:00", party_size=6, duration=2.5)
    # 30 = Reservation(user_id=16, venue_id=23, reservation_date="3/2/2021", reservation_time="18:00", party_size=8, duration=1.5)
    # 31 = Reservation(user_id=17, venue_id=24, reservation_date="3/3/2021", reservation_time="19:00", party_size=2, duration=1)
    # 32 = Reservation(user_id=17, venue_id=25, reservation_date="3/4/2021", reservation_time="20:00", party_size=2, duration=2)
    # 33 = Reservation(user_id=18, venue_id=26, reservation_date="3/5/2021", reservation_time="21:00", party_size=4, duration=3)
    # 34 = Reservation(user_id=18, venue_id=1, reservation_date="3/6/2021", reservation_time="22:00", party_size=4, duration=2)
    # 35 = Reservation(user_id=19, venue_id=2, reservation_date="3/7/2021", reservation_time="23:00", party_size=8, duration=1)
    # 36 = Reservation(user_id=19, venue_id=3, reservation_date="3/8/2021", reservation_time="17:00", party_size=8, duration=3)
    # 37 = Reservation(user_id=20, venue_id=4, reservation_date="3/9/2021", reservation_time="18:00", party_size=2, duration=2.5)
    # 38 = Reservation(user_id=20, venue_id=5, reservation_date="3/10/2021", reservation_time="19:00", party_size=2, duration=1)
    # 39 = Reservation(user_id=21, venue_id=6, reservation_date="3/11/2021", reservation_time="20:00", party_size=2, duration=1.5)
    # 40 = Reservation(user_id=21, venue_id=7, reservation_date="3/12/2021", reservation_time="21:00", party_size=2, duration=3)
    # 41 = Reservation(user_id=22, venue_id=8, reservation_date="3/13/2021", reservation_time="22:00", party_size=4, duration=2)
    # 42 = Reservation(user_id=22, venue_id=9, reservation_date="3/14/2021", reservation_time="23:00", party_size=4, duration=1.5)
    # 43 = Reservation(user_id=23, venue_id=10, reservation_date="3/15/2021", reservation_time="17:00", party_size=2, duration=1)
    # 44 = Reservation(user_id=23, venue_id=11, reservation_date="3/16/2021", reservation_time="18:00", party_size=8, duration=3)
    # 45 = Reservation(user_id=24, venue_id=12, reservation_date="3/17/2021", reservation_time="19:00", party_size=6, duration=2)
    # 46 = Reservation(user_id=24, venue_id=13, reservation_date="3/18/2021", reservation_time="20:00", party_size=4, duration=0.5)
    # 47 = Reservation(user_id=25, venue_id=14, reservation_date="3/19/2021", reservation_time="21:00", party_size=2, duration=1)
    # 48 = Reservation(user_id=25, venue_id=15, reservation_date="3/20/2021", reservation_time="22:00", party_size=2, duration=1)
    # 49 = Reservation(user_id=26, venue_id=16, reservation_date="3/21/2021", reservation_time="23:00", party_size=4, duration=2)
    # 50 = Reservation(user_id=26, venue_id=17, reservation_date="3/22/2021", reservation_time="17:00", party_size=2, duration=2)
    # 51 = Reservation(user_id=27, venue_id=18, reservation_date="3/23/2021", reservation_time="18:00", party_size=2, duration=1.5)
    # 52 = Reservation(user_id=27, venue_id=19, reservation_date="3/24/2021", reservation_time="19:00", party_size=2, duration=1.5)
    # 53 = Reservation(user_id=28, venue_id=20, reservation_date="3/25/2021", reservation_time="20:00", party_size=2, duration=0.5)
    # 54 = Reservation(user_id=28, venue_id=21, reservation_date="3/26/2021", reservation_time="21:00", party_size=4, duration=1)
    # 55 = Reservation(user_id=29, venue_id=22, reservation_date="3/27/2021", reservation_time="22:00", party_size=4, duration=1)
    # 56 = Reservation(user_id=29, venue_id=23, reservation_date="3/28/2021", reservation_time="23:00", party_size=4, duration=2)
    # 57 = Reservation(user_id=30, venue_id=24, reservation_date="3/29/2021", reservation_time="17:00", party_size=2, duration=2)
    # 58 = Reservation(user_id=30, venue_id=25, reservation_date="3/30/2021", reservation_time="18:00", party_size=6, duration=3)
    # 59 = Reservation(user_id=31, venue_id=26, reservation_date="3/31/2021", reservation_time="19:00", party_size=2, duration=2)
    # 60 = Reservation(user_id=31, venue_id=1, reservation_date="4/1/2021", reservation_time="20:00", party_size=4, duration=1)
    # 61 = Reservation(user_id=32, venue_id=2, reservation_date="4/2/2021", reservation_time="21:00", party_size=2, duration=1)
    # 62 = Reservation(user_id=32, venue_id=3, reservation_date="4/3/2021", reservation_time="22:00", party_size=2, duration=1.5)
    # 63 = Reservation(user_id=33, venue_id=4, reservation_date="4/4/2021", reservation_time="23:00", party_size=4, duration=0.5)
    # 64 = Reservation(user_id=33, venue_id=5, reservation_date="4/5/2021", reservation_time="17:00", party_size=4, duration=1)
    # 65 = Reservation(user_id=34, venue_id=6, reservation_date="4/6/2021", reservation_time="18:00", party_size=2, duration=1)

    db.session.add(one)
    # db.session.add(2)
    # db.session.add(3)
    # db.session.add(4)
    # db.session.add(5)
    # db.session.add(6)
    # db.session.add(7)
    # db.session.add(8)
    # db.session.add(9)
    # db.session.add(10)
    # db.session.add(11)
    # db.session.add(12)
    # db.session.add(13)
    # db.session.add(14)
    # db.session.add(15)
    # db.session.add(16)
    # db.session.add(17)
    # db.session.add(18)
    # db.session.add(19)
    # db.session.add(20)
    # db.session.add(21)
    # db.session.add(22)
    # db.session.add(23)
    # db.session.add(24)
    # db.session.add(25)
    # db.session.add(26)
    # db.session.add(27)
    # db.session.add(28)
    # db.session.add(29)
    # db.session.add(30)
    # db.session.add(31)
    # db.session.add(32)
    # db.session.add(33)
    # db.session.add(34)
    # db.session.add(35)
    # db.session.add(36)
    # db.session.add(37)
    # db.session.add(38)
    # db.session.add(39)
    # db.session.add(40)
    # db.session.add(41)
    # db.session.add(42)
    # db.session.add(43)
    # db.session.add(44)
    # db.session.add(45)
    # db.session.add(46)
    # db.session.add(47)
    # db.session.add(48)
    # db.session.add(49)
    # db.session.add(50)
    # db.session.add(51)
    # db.session.add(52)
    # db.session.add(53)
    # db.session.add(54)
    # db.session.add(55)
    # db.session.add(56)
    # db.session.add(57)
    # db.session.add(58)
    # db.session.add(59)
    # db.session.add(60)
    # db.session.add(61)
    # db.session.add(62)
    # db.session.add(63)
    # db.session.add(64)
    # db.session.add(65)

    db.session.commit()


def undo_reservations():
    db.session.execute('TRUNCATE reservations RESTART IDENTITY CASCADE;')
    db.session.commit()
