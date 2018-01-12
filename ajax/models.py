# -*- coding: utf-8 -*-
from django.db import models

class Test(models.Model):

	class Meta(object):
		verbose_name = u'Тест'
		verbose_name_plural = u'Тести'

	name = models.CharField(max_length=256, blank=False)

	def __str__(self):
		return u'%s' % (self.name)


class testinCart(models.Model):
	name = models.CharField(max_length=256, blank=False)

	class Meta(object):
		verbose_name = u'Кошик'
		verbose_name_plural = u'кошики'

	def __str__(self):
		return u'%s' % (self.name)


