## What is Jest and why use it? ##

Jest is an open source project maintained by Facebook. Primarily, its strength lies in testing React code althought not limited to that. It can test any javascript code. Here are it's core competencies:

- fast
- perform snapshot testing(although no terribly important to our needs as we run a canvas based architecture).
- opinionated, provides everything out of the box. Which is great for us as we need to just get going.

## Installation ##

Add jest as a package dev dependency.

Jest is now a devDependency and we want to add a npm script to run the node_module of jest:
```json
{
    "scripts": {
        "test": "jest"
    }
}
```

## References ##

A good [article](https://flaviocopes.com/jest/#introduction-to-jest) about the introduction into jest.