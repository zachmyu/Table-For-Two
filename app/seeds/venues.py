from app.models import db, Venue


def seed_venues():
    NewportFunTours = Venue(creator_id=1, name="Newport Fun Tours",
                            date_type_id=1, price=150,
                            description="90-Minute Electric-Boat Rental on Newport Harbor",
                            image_url="https://img.grouponcdn.com/deal/bTMFesdQLRvf94A95sn8/M1-4640x2784/v1/c870x524.webp",
                            phone_number="(949) 675-8433",
                            address="2901 West Coast Highway Suite #160",
                            city="Newport Beach", state="CA", zipcode=92663,
                            operation_hours="9:00 AM–7:00 PM",
                            latitude=33.6201,
                            longitude=117.9256
                            )

    db.session.add(NewportFunTours)
    db.session.commit()
    

def undo_venues():
    db.session.execute('TRUNCATE venues RESTART IDENTITY CASCADE;')
    db.session.commit()