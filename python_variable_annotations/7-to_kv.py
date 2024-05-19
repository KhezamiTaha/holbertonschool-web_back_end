#!/usr/bin/env python3
''' 7-to_kv.py vaiable annotations '''

from typing import Tuple, Union


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Using Tuple and Union"""
    return (k, v**2)
