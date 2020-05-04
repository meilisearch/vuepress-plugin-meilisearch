#!/bin/sh

file='package.json'

# Checking if current tag matches the package version
current_tag=$(echo $GITHUB_REF | tr -d 'refs/tags/v')
file_tag=$(grep '"version":' $file | cut -d ':' -f 2- | tr -d ' ' | tr -d '"' | tr -d ',')
if [ "$current_tag" != "$file_tag" ]; then
  echo "Error: the current tag does not match the version in package file(s)."
  echo "$file: expected $current_tag - got $file_tag"
  exit 1
fi

echo 'OK'
exit 0
