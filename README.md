## Learn Jest ##

Go through the entire repo, it will show you step by step the relative ways of testing the application.

I've been so out of touch with modern javascript, this is a journey for me to start picking up the paces again.

## tl;dr information ##

printing coverage for CI:
```json
{
    "test": "jest src",
    "coverage": "jest --collectCoverageFrom=src/**.js --coverageDirectory=./src/coverage --coverage src"
}
```