#!/bin/bash

LEN=$(python3 /root/limitoo/limitoo-website/getmysql.py)

echo $LEN

if [[ "$LEN" = "" ]]; then
	
	PIDS=$(ps -ef | grep node | grep -v grep | awk '{print $2}')

	if [ "$PIDS" = "" ]; then
		cd /root/limitoo/limitoo-website
		git pull
		rm -rf public
		/root/.nvm/versions/node/v14.18.1/bin/yarn deploy
	fi
	echo "Gatsby build is runing."
else
	echo "Not build."
fi


