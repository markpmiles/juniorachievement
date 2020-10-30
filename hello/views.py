from django.shortcuts import render

from django.http import HttpResponseServerError
from rest_framework import serializers, status
from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework.decorators import action
from .models import Preassessment, Postassessment


# def hello(request):
#     return HttpResponse("Hello, Junior Achievement!")


class PreAssessmentSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Preassessment
        url = serializers.HyperlinkedIdentityField(
            view_name='preassessment',
            lookup_field='id'
        )
        fields = ('id', 'last_name', 'birth_date', 'class_grade', 'teacher', 'school',
                  'previous_participation', 'q01_answer', 'q01_score', 'q02_answer', 'q02_score',
                  'q03_answer', 'q03_score', 'q04_answer', 'q04_score', 'q05_answer', 'q05_score',
                  'q06_answer', 'q06_score', 'q07_answer', 'q07_score', 'q08_answer', 'q08_score',
                  'q09_answer', 'q09_score', 'q10_answer', 'q10_score', 'q11_answer', 'q11_score',
                  'q12_answer', 'q12_score', 'q13_answer', 'q13_score', 'q14_answer', 'q14_score',
                  'q15_answer', 'q15_score', 'q16_answer', 'q16_score', 'q17_answer', 'q17_score',
                  'q18_answer', 'q18_score', 'q19_answer', 'q19_score', 'q20_answer', 'q20_score',
                  'q21_answer', 'q21_score', 'q22_answer', 'q22_score', 'q23_answer', 'q23_score',
                  'q24_answer', 'q24_score', 'q25_answer', 'q25_score', 'q26_answer', 'q26_score',
                  'q27_answer', 'q27_score', 'q28_answer', 'q28_score', 'q29_answer', 'q29_score',
                  'q30_answer', 'q30_score', 'q31_answer', 'q31_score', 'q32_answer', 'q32_score')


class PreAssessmentViewset(ViewSet):
    def create(self, request):

        pre_assessment = Preassessment.objects.create(
            last_name=request.data['last_name'],
            birth_date=request.data['birth_date'],
            class_grade=request.data['class_grade'],
            teacher=request.data['teacher'],
            school=request.data['school'],
            previous_participation=request.data['previous_participation'],
            q01_answer=request.data['q01_answer'],
            q01_score=request.data['q01_score'],
            q02_answer=request.data['q02_answer'],
            q02_score=request.data['q02_score'],
            q03_answer=request.data['q03_answer'],
            q03_score=request.data['q03_score'],
            q04_answer=request.data['q04_answer'],
            q04_score=request.data['q04_score'],
            q05_answer=request.data['q05_answer'],
            q05_score=request.data['q05_score'],
            q06_answer=request.data['q06_answer'],
            q06_score=request.data['q06_score'],
            q07_answer=request.data['q07_answer'],
            q07_score=request.data['q07_score'],
            q08_answer=request.data['q08_answer'],
            q08_score=request.data['q08_score'],
            q09_answer=request.data['q09_answer'],
            q09_score=request.data['q09_score'],
            q10_answer=request.data['q10_answer'],
            q10_score=request.data['q10_score'],
            q11_answer=request.data['q11_answer'],
            q11_score=request.data['q11_score'],
            q12_answer=request.data['q12_answer'],
            q12_score=request.data['q12_score'],
            q13_answer=request.data['q13_answer'],
            q13_score=request.data['q13_score'],
            q14_answer=request.data['q14_answer'],
            q14_score=request.data['q14_score'],
            q15_answer=request.data['q15_answer'],
            q15_score=request.data['q15_score'],
            q16_answer=request.data['q16_answer'],
            q16_score=request.data['q16_score'],
            q17_answer=request.data['q17_answer'],
            q17_score=request.data['q17_score'],
            q18_answer=request.data['q18_answer'],
            q18_score=request.data['q18_score'],
            q19_answer=request.data['q19_answer'],
            q19_score=request.data['q19_score'],
            q20_answer=request.data['q20_answer'],
            q20_score=request.data['q20_score'],
            q21_answer=request.data['q21_answer'],
            q21_score=request.data['q21_score'],
            q22_answer=request.data['q22_answer'],
            q22_score=request.data['q22_score'],
            q23_answer=request.data['q23_answer'],
            q23_score=request.data['q23_score'],
            q24_answer=request.data['q24_answer'],
            q24_score=request.data['q24_score'],
            q25_answer=request.data['q25_answer'],
            q25_score=request.data['q25_score'],
            q26_answer=request.data['q26_answer'],
            q26_score=request.data['q26_score'],
            q27_answer=request.data['q27_answer'],
            q27_score=request.data['q27_score'],
            q28_answer=request.data['q28_answer'],
            q28_score=request.data['q28_score'],
            q29_answer=request.data['q29_answer'],
            q29_score=request.data['q29_score'],
            q30_answer=request.data['q30_answer'],
            q30_score=request.data['q30_score'],
            q31_answer=request.data['q31_answer'],
            q31_score=request.data['q31_score'],
            q32_answer=request.data['q32_answer'],
            q32_score=request.data['q32_score'],
        )

        return Response({}, status.HTTP_204_NO_CONTENT)

    def list(self, request):

        preassessments = Preassessment.objects.all()
        serializer = PreAssessmentSerializer(
            preassessments, many=True, context={'request': request})
        return Response(serializer.data)


class PostAssessmentSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Postassessment
        url = serializers.HyperlinkedIdentityField(
            view_name='postassessment',
            lookup_field='id'
        )
        fields = ('id', 'last_name', 'birth_date', 'class_grade', 'teacher', 'school',
                  'previous_participation', 'q01_answer', 'q01_score', 'q02_answer', 'q02_score',
                  'q03_answer', 'q03_score', 'q04_answer', 'q04_score', 'q05_answer', 'q05_score',
                  'q06_answer', 'q06_score', 'q07_answer', 'q07_score', 'q08_answer', 'q08_score',
                  'q09_answer', 'q09_score', 'q10_answer', 'q10_score', 'q11_answer', 'q11_score',
                  'q12_answer', 'q12_score', 'q13_answer', 'q13_score', 'q14_answer', 'q14_score',
                  'q15_answer', 'q15_score', 'q16_answer', 'q16_score', 'q17_answer', 'q17_score',
                  'q18_answer', 'q18_score', 'q19_answer', 'q19_score', 'q20_answer', 'q20_score',
                  'q21_answer', 'q21_score', 'q22_answer', 'q22_score', 'q23_answer', 'q23_score',
                  'q24_answer', 'q24_score', 'q25_answer', 'q25_score', 'q26_answer', 'q26_score',
                  'q27_answer', 'q27_score', 'q28_answer', 'q28_score', 'q29_answer', 'q29_score',
                  'q30_answer', 'q30_score', 'q31_answer', 'q31_score', 'q32_answer', 'q32_score',
                  'q33_answer', 'q33_score', 'q34_answer', 'q34_score', 'q35_answer', 'q35_score',)


class PostAssessmentViewset(ViewSet):
    def create(self, request):

        pre_assessment = Preassessment.objects.create(
            last_name=request.data['last_name'],
            birth_date=request.data['birth_date'],
            class_grade=request.data['class_grade'],
            teacher=request.data['teacher'],
            school=request.data['school'],
            previous_participation=request.data['previous_participation'],
            q01_answer=request.data['q01_answer'],
            q01_score=request.data['q01_score'],
            q02_answer=request.data['q02_answer'],
            q02_score=request.data['q02_score'],
            q03_answer=request.data['q03_answer'],
            q03_score=request.data['q03_score'],
            q04_answer=request.data['q04_answer'],
            q04_score=request.data['q04_score'],
            q05_answer=request.data['q05_answer'],
            q05_score=request.data['q05_score'],
            q06_answer=request.data['q06_answer'],
            q06_score=request.data['q06_score'],
            q07_answer=request.data['q07_answer'],
            q07_score=request.data['q07_score'],
            q08_answer=request.data['q08_answer'],
            q08_score=request.data['q08_score'],
            q09_answer=request.data['q09_answer'],
            q09_score=request.data['q09_score'],
            q10_answer=request.data['q10_answer'],
            q10_score=request.data['q10_score'],
            q11_answer=request.data['q11_answer'],
            q11_score=request.data['q11_score'],
            q12_answer=request.data['q12_answer'],
            q12_score=request.data['q12_score'],
            q13_answer=request.data['q13_answer'],
            q13_score=request.data['q13_score'],
            q14_answer=request.data['q14_answer'],
            q14_score=request.data['q14_score'],
            q15_answer=request.data['q15_answer'],
            q15_score=request.data['q15_score'],
            q16_answer=request.data['q16_answer'],
            q16_score=request.data['q16_score'],
            q17_answer=request.data['q17_answer'],
            q17_score=request.data['q17_score'],
            q18_answer=request.data['q18_answer'],
            q18_score=request.data['q18_score'],
            q19_answer=request.data['q19_answer'],
            q19_score=request.data['q19_score'],
            q20_answer=request.data['q20_answer'],
            q20_score=request.data['q20_score'],
            q21_answer=request.data['q21_answer'],
            q21_score=request.data['q21_score'],
            q22_answer=request.data['q22_answer'],
            q22_score=request.data['q22_score'],
            q23_answer=request.data['q23_answer'],
            q23_score=request.data['q23_score'],
            q24_answer=request.data['q24_answer'],
            q24_score=request.data['q24_score'],
            q25_answer=request.data['q25_answer'],
            q25_score=request.data['q25_score'],
            q26_answer=request.data['q26_answer'],
            q26_score=request.data['q26_score'],
            q27_answer=request.data['q27_answer'],
            q27_score=request.data['q27_score'],
            q28_answer=request.data['q28_answer'],
            q28_score=request.data['q28_score'],
            q29_answer=request.data['q29_answer'],
            q29_score=request.data['q29_score'],
            q30_answer=request.data['q30_answer'],
            q30_score=request.data['q30_score'],
            q31_answer=request.data['q31_answer'],
            q31_score=request.data['q31_score'],
            q32_answer=request.data['q32_answer'],
            q32_score=request.data['q32_score'],
            q33_answer=request.data['q33_answer'],
            q33_score=request.data['q33_score'],
            q34_answer=request.data['q34_answer'],
            q34_score=request.data['q34_score'],
            q35_answer=request.data['q35_answer'],
            q35_score=request.data['q35_score'],
        )

        return Response({}, status.HTTP_204_NO_CONTENT)

    def list(self, request):

        postassessments = Postassessment.objects.all()
        serializer = PostAssessmentSerializer(
            postassessments, many=True, context={'request': request})
        return Response(serializer.data)
