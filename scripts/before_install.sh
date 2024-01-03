#!/bin/bash

# navigate to app folder
cd /app

# install node and npm
sudo apt update -y
curl -s https://deb.nodesource.com/setup_18.x | sudo bash
sudo apt install nodejs -y
sudo apt install npm -y
