#!/usr/bin/env python3
"""
DB module
"""

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session
from sqlalchemy.exc import InvalidRequestError
from sqlalchemy.orm.exc import NoResultFound
from user import Base, User


class DB:
    """DB class"""

    def __init__(self) -> None:
        """Initialize a new DB instance"""
        self._engine = create_engine("sqlite:///a.db", echo=False)
        Base.metadata.drop_all(self._engine)
        Base.metadata.create_all(self._engine)
        self.__session = None

    @property
    def _session(self) -> Session:
        """Memoized session object"""
        if self.__session is None:
            DBSession = sessionmaker(bind=self._engine)
            self.__session = DBSession()
        return self.__session

    def add_user(self, email: str, hashed_password: str) -> User:
        """Add a new user to the database and return the User object"""
        user = User(email=email, hashed_password=hashed_password)
        self._session.add(user)
        self._session.commit()
        return user

    def find_user_by(self, **kwargs) -> User:
        """Find the first user that matches the given criteria.

        Raises:
            NoResultFound: If no user matches the query.
            InvalidRequestError: If the query is invalid.
        """
        if not kwargs:
            raise InvalidRequestError("No arguments provided")

        valid_columns = {column.key for column in User.__table__.columns}

        # Vérifier si les colonnes demandées existent dans la table
        for key in kwargs.keys():
            if key not in valid_columns:
                raise InvalidRequestError(f"Invalid column: {key}")

        # Cherche l'utilisateur correspondant
        query = self._session.query(User).filter_by(**kwargs).first()

        if query is None:
            raise NoResultFound("No user found matching the criteria")

        return query

    def update_user(self, user_id: int, **kwargs) -> None:
        """Update the user's attributes"""
        user = self.find_user_by(id=user_id)

        for key, value in kwargs.items():
            if key in User.__table__.columns:
                setattr(user, key, value)
            else:
                raise ValueError(f"Invalid column: {key}")

        self._session.commit()
