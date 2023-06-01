from django.http import HttpResponse
from .models import Work
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.contrib.auth.decorators import user_passes_test
from django.contrib.auth import logout


def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth_login(request, user)
            if request.POST.get('remember-me'):
                request.session.set_expiry(1209600)
            return redirect('cabinet')
        else:
            messages.error(request, 'Неправильный логин и/или пароль')
            return render(request, 'main/login.html', {
                'alert': True
            })
    return render(request, 'main/login.html')


@login_required(login_url='login')
def cabinet(request):
    current_user = request.user
    context = {
        'user_first_name': current_user.first_name,
        'user_last_name': current_user.last_name
    }
    return render(request, 'main/cabinet.html', context)


@login_required(login_url='login')
def cabinetworker(request):
    jobs = Work.objects.all()
    return render(request, 'main/cabinetworker.html',  {'jobs': jobs})


def is_accountant(user):
    return user.groups.filter(name='Бухгалтер').exists()


@login_required(login_url='login')
@user_passes_test(is_accountant, login_url='cabinet')
def cabinetaccountant(request):
    return HttpResponse("<h4>Accountant<h4>")


def is_manager(user):
    return user.groups.filter(name='Руководитель').exists()


@login_required(login_url='login')
@user_passes_test(is_manager, login_url='cabinet')
def cabinetmanager(request):
    return HttpResponse("<h4>Manager<h4>")


def about(request):
    return render(request, 'main/about.html')


def logout_view(request):
    logout(request)
    return redirect('login')
