# -*- coding: utf-8 -*-
# Generated by Django 1.10.5 on 2017-03-01 18:53
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('info', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ayudante',
            name='aula',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='ayudantetareas',
            name='aula',
            field=models.CharField(max_length=50),
        ),
    ]
