#!/usr/bin/env python3
from core import PostHandler

postHandler = PostHandler("localhost:8080")

postHandler.post("alitude",100)
