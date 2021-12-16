# postHandler
Because HTTP is hard, and I don't want  you to suffer :)

This code is designed to work with the server for the HAB project. I mean, you can use it if you want, but like... why.

## Installation
Ensure that the package `requests` is installed on your system, or in a virtual environment.
```
pip install requests
```

Then download the `core.py` file and place it in your project directory. You can do so by using the following command in the terminal, while in the correct directory.
```sh
curl -LJO https://raw.githubusercontent.com/frex-e/HABServer/master/pythonInterface/core.py
```

## Usage
Import the package, then define the postHandler object. (Hehe)
Pass the url/address of the server into the object.
(I think the best way of handling this is using a environment variable. $URL or something like that because the server url is going to change constantly, and that way we only need to define it once it change for each system and various python scripts would use it.)
```python
from core import postHandler

pH = postHandler("URL/ADDRESS")
```

Then, when you want to store a piece of data, use:
```python
pH.post("attribute","value")
```
(obviously replace with actual attributes and values)

Its important to note that sending the same attribute twice will overwrite the value (though it will still be logged for epic graphs) so having a set naming scheme for each sensor will be important
