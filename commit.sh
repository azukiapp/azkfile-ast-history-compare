#!/bin/bash

if [ "$1" != "" ]; then
  node parseAll.js
  git add .
  git commit -m"$*"
  git push
else

  ESC="\033" # This is the escape sequence
  NO_COLOR="$ESC[0m"
  IRED="$ESC[1;31m" # ANSI color code for intense/bold red
  IGRN="$ESC[1;32m" # ANSI color code for intense/bold green

  echo -e ......................................
  echo -e $IGRN parseAll.js$NO_COLOR
  echo -e ......................................
  echo -e $IRED ERROR: Missing commit message
  echo -e $IRED usage: ./commit.sh \"COMMIT_MESSAGE_GOES_HERE\" $NO_COLOR
  echo -e ......................................

fi
