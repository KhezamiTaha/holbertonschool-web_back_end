#!/usr/bin/env python3
''' 0-basic_async_syntax.py vaiable annotations '''


import random
import asyncio


async def wait_random(max_delay: int = 10) -> int:
    """using await and async"""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
