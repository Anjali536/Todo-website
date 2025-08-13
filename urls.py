from django.urls import path
import apiApp.views as v

urlpatterns = [
    path('login/', v.login, name='login'),
    path('create_user/', v.create_user, name='create_user'),
    path('create_todo/', v.create_todo, name='create_todo'),
    path('intial_call/', v.intial_call, name='intial_call'),
    path('completed/', v.completed, name='completed'),
    path('in_progress/', v.in_progress, name='in_progress'),
    path('archived/', v.archived, name='archived'),
    path('completed_task/', v.completed_task, name='completed_task'),
    path('archived_task/', v.archived_task, name='archived_task'),
    path('delete_task/', v.delete_task, name='delete_task'),
    path('update_task/', v.update_task, name='update_task'),
]