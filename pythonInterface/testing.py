#!/usr/bin/env python3
from core import PostHandler

postHandler = PostHandler("localhost:8080")

while True:
    print("")
    atr = input(f"Attribute or exit?\n").lower()
    if atr == "exit": break
    else:
        print("")
        val = input("Value:\n")
        postHandler.post(atr,val)
