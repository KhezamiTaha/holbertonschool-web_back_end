#!/usr/bin/env python3
''' 10-update_topics.py NoSQL '''


def update_topics(mongo_collection, name, topics):
    """
    Update all topics of a school document  based on the name.
    """
    mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )
