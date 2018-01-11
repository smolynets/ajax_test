from django.db import models

class Test(models.Model):

	class Meta(object):
		verbose_name = u'Тест'
		verbose_name_plural = u'Тести'

	name = models.CharField(max_length=256, blank=False)
	present_day1 = models.BooleanField(default=False)

	def __str__(self):
		return u'%s' % (self.name)
