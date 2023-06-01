from django.urls import path
from . import views
from django.contrib.auth.decorators import login_required
from django.contrib.auth.views import LogoutView


urlpatterns = [
    path('', views.login, name='login'),
    path('cabinet', login_required(views.cabinet, login_url='login'), name='cabinet'),
    path('cabinet/worker', login_required(views.cabinetworker, login_url='login'), name='cabinetworker'),
    path('about', views.about, name='about'),
    path('cabinet/accountant', views.cabinetaccountant),
    path('cabinet/manager', views.cabinetmanager),
    path('logout/', LogoutView.as_view(next_page='login'), name='logout'),
]

