git add .
git commit -am 'HEROKU DEPLOYMENT'
git push heroku master
# heroku ps:scale web=1
# heroku open
# heroku logs --source app --tail