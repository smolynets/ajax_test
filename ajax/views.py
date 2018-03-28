from django.shortcuts import render
from django.http import JsonResponse
from django.core.urlresolvers import reverse
from .models import *


def test(request):
    test = Test.objects.all()
    session_key = request.session.session_key
    if not session_key:
    	request.session.cycle_key() 
    TestinCart = testinCart.objects.filter(session_key=session_key)
    print session_key
    return render(request, 'test.html', locals())



def adding(request):
    return_dict = dict()
    session_key = request.session.session_key
    if not session_key:
    	request.session.cycle_key() 	
    fl = request.POST.get('name', '').strip()
    print (fl)
    data = {}
    data['name'] = fl
    data['session_key'] = session_key
    ts = testinCart(**data)
    ts.save()
    return JsonResponse(return_dict)    
