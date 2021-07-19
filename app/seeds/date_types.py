from app.models import db, Date_type


def seed_date_types():
    Romantic = Date_type(type="Romantic")
    Casual = Date_type(type="Casual")
    Scary = Date_type(type="Scary")
    Netflix = Date_type(type="Netflix & Chill")
    Extravagant = Date_type(type="Extravagant")
    Breakup = Date_type(type="Breakup")
    Adventurous = Date_type(type="Adventurous")
    Relaxing = Date_type(type="Relaxing")
    Sporty = Date_type(type="Sporty")
    Delicious = Date_type(type="Delicious")

    db.session.add(Romantic)
    db.session.add(Casual)
    db.session.add(Scary)
    db.session.add(Netflix)
    db.session.add(Extravagant)
    db.session.add(Breakup)
    db.session.add(Adventurous)
    db.session.add(Relaxing)
    db.session.add(Sporty)
    db.session.add(Delicious)

    db.session.commit()


def undo_date_types():
    db.session.execute('TRUNCATE date_types RESTART IDENTITY CASCADE;')
    db.session.commit()
