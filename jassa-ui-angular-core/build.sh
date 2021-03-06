#!/bin/bash
set -e

npm install
source ./build.conf

# !! WARNING: We delete the source folder as we assume its a dist folder anyway !!!
rm -rf "$sourceFolder"

grunt


git clone git@github.com:GeoKnow/Jassa-UI-Angular-Bower.git "$targetFolder" || true
( cd "$targetFolder" && git pull )

#rm -rf "$targetFolder"
#mkdir -p "$targetFolder"

cp bower.json "$targetFolder"
cp css/jassa-ui-angular.css "$targetFolder"

for source in `cd "$sourceFolder" && ls -1`; do
    target=`echo "$source" | sed -r 's|-[0-9.]+(-SNAPSHOT)?||g'`
 
    cp -v "$sourceFolder/$source" "$targetFolder/$target"
done


