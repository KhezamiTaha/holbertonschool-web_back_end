#!/usr/bin/env python3
''' 4-tasks.py Async IO '''


import asyncio
from typing import List
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    ''' 1-concurrent_coroutines.py Async IO '''
    tasks = [task_wait_random(max_delay) for _ in range(n)]
    delays = []
    for completed_task in asyncio.as_completed(tasks):
        result = await completed_task
        delays.append(result)
    return delays
