from django.http import HttpResponse, JsonResponse
from django.views.decorators.csrf import csrf_exempt

from rest_framework.parsers import JSONParser

from api.models import Course
from api.serializers import CourseSerializer2

@csrf_exempt
def course_list(request):
  if request.method == "GET":
    courses = Course.objects.all()
    ser = CourseSerializer2(courses, many=True)
    return JsonResponse(ser.data, safe=False)
  elif request.method == "POST":
    data = JSONParser().parse(request)
    ser = CourseSerializer2(data=data)
    if ser.is_valid():
      ser.save()
      return JsonResponse(ser.data, status=201)
    return JsonResponse(ser.errors, status=400)


@csrf_exempt
def course_detail(request, course_id):
  
  try:
    course = Todo.objects.get(pk=course_id)
  except Exception as e:
    return JsonResponse({"error": str(e)}, status=404)

  if request.method == "GET":
    ser = CourseSerializer2(course)
    return JsonResponse(ser.data) 
  elif request.method == "PUT":
    data = JSONParser().parse(request)
    ser = CourseSerializer2(course, data)
    if ser.is_valid():
      ser.save()
      return JsonResponse(ser.data)
  elif request.method == "DELETE":
    course.delete()
    ser = CourseSerializer2(course)
    return JsonResponse(ser.data)