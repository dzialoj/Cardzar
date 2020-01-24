from django.http import HttpResponse
import datetime

def index(request):
    now = datetime.datetime.now()
    msg = f'today is {now}'
    return HttpResponse(msg, content_type='text/plain')

def test(request):
    return HttpResponse('wowow it worked')