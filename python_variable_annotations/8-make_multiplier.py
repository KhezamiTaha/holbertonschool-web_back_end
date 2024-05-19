#!/usr/bin/env python3
''' 8-make_multiplier.py vaiable annotations '''

from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """ function that multiplies a float by the given multiplier."""
    def multiplier_function(value: float) -> float:
        return value * multiplier
    return multiplier_function
