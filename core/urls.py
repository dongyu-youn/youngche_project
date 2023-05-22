from pictures import views as picture_view

from django.urls import path, include
from django.conf.urls.static import static
from django.conf import settings

app_name = "core"

urlpatterns = [
   path("", picture_view.home_pictures , name="picture"),
   path("pictures", picture_view.all_pictures, name="pic_list"),
   path("search/", picture_view.search, name="search"), 
  
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)