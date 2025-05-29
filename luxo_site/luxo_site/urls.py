from django.contrib import admin
from django.urls import path, include
from core import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('produtos/', views.produtos, name='produtos'),
    path('carrinho/adicionar/<int:produto_id>/', views.adicionar_carrinho, name='adicionar_carrinho'),
    path('buscar/', views.buscar, name='buscar'),

]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)