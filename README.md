# KPI_test

## Description

Small web app + REST API made with Python Django and React.js to demonstrate my skills to KPI. I didn't turn off debug mode on Django on purpose. On the website, you need to double click on a row to display details and edit it.

## Instalation

For instalation, adapt commands to your setup.

Clone then
```
cd KPI_test
```

### For backend server
Replace pip and python with pip3 and python3 if needed. Replace ```0.0.0.0:8001``` depending on your server config (opened port). Run it in a venv preferably.
```
pip install -r requirements.txt
cd KPI_test
python manage.py runserver 0.0.0.0:8001
```

If you want to generate new data and populate DB just change the dataset.json file and run
```
python populate_DB.py
```

If you need to change model structure, I made a simple script to detect null or empty columns
```
python data_check_script.py
```

### For frontend app
```
cd "web app"
cd kpi_front
npm i
npm run build
```

Then copy the content of ```./build``` folder in kpi_front to your web server. Edit ```./src/index.js``` and change BASE_URL for the root endpoin of your backend server.

## On my website
http://kpi-test.brainbraker.com/
I haven't installed a SSL certificate yet.
