from rest_framework import serializers

from api.models import Course


class CourseSerializer(serializers.Serializer):
  id = serializers.IntegerField(read_only=True)
  name = serializers.CharField(required=True)
  description = serializers.CharField(required=True)
  numOfStudents = serializers.CharField(required=True)
  oldPrice = serializers.CharField(required=True)
  newPrice = serializers.CharField(required=True)

  def create(self, validated_data):
    return Course.objects.create(**validated_data)
  
  def update(self, instance, validated_data ):
    instance.name = validated_data.get('name', instance.name)
    instance.description = validated_data.get('description', instance.description)
    instance.numOfStudents = validated_data.get('numOfStudents', numOfStudents)
    instance.oldPrice = validated_data.get('oldPrice', instance.oldPrice)
    instance.newPrice = validated_data.get('newPrice', instance.newPrice)
    instance.save()
    return instance

class CourseSerializer2(serializers.ModelSerializer):
  
  class Meta:
    model = Course
    fields = "__all__"
# fields = ('id', 'title', 'created_at')