#script to extract fields and isolate null and blank ones

import json

all_fields = []

null_fields = []

blank_fields = []

with open("dataset.json") as file:
    data = json.load(file)

for i in data:
    for key in i:
        if key not in all_fields:
            all_fields.append(key)
        if (key=="") and (key not in blank_fields) :
            blank_fields.append(key)

for i in data:
    for a_f in all_fields:
        if (a_f not in i) and (a_f not in null_fields) :
            null_fields.append(a_f)

print(len(all_fields), all_fields)
print(len(null_fields), null_fields)
print(blank_fields)