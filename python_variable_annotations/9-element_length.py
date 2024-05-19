#!/usr/bin/env python3
''' 9-element_length.py vaiable annotations '''

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """using Iterable and Sequence from typing module"""
    return [(i, len(i)) for i in lst]
