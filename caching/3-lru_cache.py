#!/usr/bin/python3
""" 3-Iru_cache """

from base_caching import BaseCaching


class LRUCache(BaseCaching):
    """ LRU caching system """
    def __init__(self):
        """ Constructor """
        super().__init__()
        self.order = []

    def put(self, key, item):
        """ Add an item in the cache """
        if key and item:
            if key in self.cache_data:
                self.order.remove(key)
            elif len(self.cache_data) >= BaseCaching.MAX_ITEMS:
                discard = self.order.pop(0)
                del self.cache_data[discard]
                print("DISCARD:", discard)
            self.order.append(key)
            self.cache_data[key] = item

    def get(self, key):
        """ Get an item by key """
        if key in self.cache_data:
            self.order.remove(key)
            self.order.append(key)
            return self.cache_data[key]
        return None
