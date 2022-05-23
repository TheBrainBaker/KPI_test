from django.contrib import admin
from django.urls import path,include


urlpatterns = [
  path('admin/', admin.site.urls),
  path('', include('KPI_test_rest_api.urls'))
]