
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import *
from .models import *


class SchoolsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Schools.objects.all()
    serializer_class = SchoolsSerializer
    # permission_classes = [permissions.IsAuthenticated]


class PreAssessmentViewset(viewsets.ModelViewSet):
    queryset = Preassessment.objects.all()
    serializer_class = PreAssessmentSerializer

class PostAssessmentViewset(viewsets.ModelViewSet):
    queryset = Postassessment.objects.all()
    serializer_class = PostAssessmentSerializer