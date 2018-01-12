from django.shortcuts import render
from django.http import JsonResponse
from .models import *


def test(request):
    test = Test.objects.all()
    session_key = request.session.session_key
    print (session_key)    

    return render(request, 'test.html', locals())



def adding(request):
    return_dict = dict()
    data = request.POST
    test_name = data.get("name")
    session_key = request.session.session_key
    fl = request.POST.get('name', '').strip()
    data = {}
    data['name'] = fl
    ts = testinCart(**data)
    ts.save()

    
    

    return JsonResponse(return_dict)    
