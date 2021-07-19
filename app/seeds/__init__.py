from flask.cli import AppGroup
from .users import seed_users, undo_users
from .date_types import seed_date_types, undo_date_types
from .venues import seed_venues, undo_venues
from .reservations import seed_reservations, undo_reservations
from .reviews import seed_reviews, undo_reviews
from .favorites import seed_favorites, undo_favorites

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_date_types()
    seed_venues()
    seed_reservations()
    seed_reviews()
    seed_favorites()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_date_types()
    undo_venues()
    undo_reservations()
    undo_reviews()
    undo_favorites()
