from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import BgrconnectorViewSet

router = DefaultRouter()
router.register("bgrconnector", BgrconnectorViewSet, basename="bgrconnector")

urlpatterns = [
    path("connectors/", include(router.urls)),
]
