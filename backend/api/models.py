from django.db import models

class Course(models.Model):
  name = models.CharField(max_length=100)
  description = models.CharField(max_length=5000)
  numOfStudents = models.CharField(max_length=3)
  oldPrice = models.CharField(max_length=5)
  newPrice = models.CharField(max_length=5)

  def __str__(self):
  	return self.name