#!/bin/bash
var=`cat version.txt`
echo $var | awk -F. -v OFS=. 'NF==1{print ++$NF}; NF>1{$NF=sprintf("%0*d", length($NF), ($NF+1)); print}' > version.txt

ooo
o



