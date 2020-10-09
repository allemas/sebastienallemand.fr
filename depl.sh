#!/bin/bash
echo "Packaging 📦"
eleventy
echo "deployment 🚀"
scp -r _site allema_s@sebastienallemand.fr:/var/www/blog/
