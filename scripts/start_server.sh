#!/bin/bash

# navigate to app folder
cd /app

# initial startup by running react-script "start", name process "marketing"
npm run build

sudo scp -r /app/build/* /var/www/html/

sudo service nginx restart
