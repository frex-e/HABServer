#!/usr/bin/env python3
# Import libraries
from typing import AnyStr
import requests as rq

# Define response codes
codes = {
    404:"Not Found",
}

class PostHandler:
    def __init__(self,url: AnyStr) -> None:
        self.url = url

    def post(self,key:AnyStr,value) -> bool:
        # Creates post requests
        try:
            response = rq.post(f'http://{self.url}/post/{key}',json={"value":value},timeout=0.1)

        # Checks for timeout
        except rq.exceptions.Timeout:
            print("HTTP POST ERROR: Request Timeout")
            return False

        # Prints the other kinds of errors just in case
        except Exception as e:
            print(f'HTTP POST ERROR: {e}')
            return False

        if response.status_code == 200:
            return True
        elif response.status_code in codes.keys():
            print(f"HTTP POST ERROR: {response.status_code} {codes[response.status_code]}")
            return False
        else:
            print(f"HTTP POST ERROR: Status Code {response.status_code}")
            return False
