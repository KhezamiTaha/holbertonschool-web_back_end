#!/usr/bin/env python3
''' 0-async_generator.py Async IO '''


import asyncio
import random


async def async_generator():
    """using yield and generators"""
    for _ in range(10):
        await asyncio.sleep(1)
        yield random.uniform(0, 10)
