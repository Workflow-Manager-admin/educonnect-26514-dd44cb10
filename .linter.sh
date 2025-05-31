#!/bin/bash
cd /home/kavia/workspace/code-generation/educonnect-26514-dd44cb10/educonnect
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

