from django.urls import path

from . import views

urlpatterns = [
  path('investments/', views.InvestmentView.as_view()),
  path('investment/<int:id>/', views.InvestmentView.as_view()),
]