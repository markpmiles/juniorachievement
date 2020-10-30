from rest_framework import serializers
from .models import *


class SchoolsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Schools
        fields = ['id', 'school_name', 'district']

