from rest_framework.authtoken import views as auth_views
urlpatterns = patterns('',
    url(r'^api-token-auth/', auth_views.obtain_auth_token),
)
