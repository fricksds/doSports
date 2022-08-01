#!/bin/bash

pasteProject=${PWD}
ECHO $pasteProject
pasteTarget=\\target\\dosports-0.0.1-SNAPSHOT.jar

java -jar $pasteProject$pasteTarget fully.qualified.package.Application