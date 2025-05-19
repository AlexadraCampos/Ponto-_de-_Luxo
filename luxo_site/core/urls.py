# core/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name = 'index'),
    path('produtos/', views.produtos, name='produtos'),
    path('contato/', views.contato, name='contato'),
    
]



