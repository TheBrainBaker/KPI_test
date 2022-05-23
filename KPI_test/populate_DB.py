"""
usage:
python populate_DB.py
python manage.py loaddata out.json
rm out.json
"""

import json
import os

with open("dataset.json") as f:
    data_to_populate_with = json.load(f)

output = []

for (i, row) in enumerate(data_to_populate_with):
    output.append(
        {
            "pk": i+1,
            "model": "KPI_test_rest_api.Investment",
            "fields": row
        }
    )

with open("out.json", "w") as out_f:
    json.dump(output, out_f)