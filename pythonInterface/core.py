#!/usr/bin/env python3
from typing import AnyStr
import requests as rq

class postHandler:
    def __init__(self,url: AnyStr) -> None:
        self.url = url

    def post(self,key,value):
        response = rq.post(f'https://{self.url}/{key}',data={"id":value})
