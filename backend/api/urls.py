from django.urls import path, include

from api import views


urlpatterns = [
   path('courses/', views.course_list),
   path('courses/<int:course_id>/', views.course_detail)
]