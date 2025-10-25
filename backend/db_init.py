from models import db


def init_db():
	# create tables if they don't exist
	db.create_all()