from django.test import Client, TestCase
from django.urls import reverse


class HomePageViewTests(TestCase):
    def setUp(self):
        self.client = Client()
        self.url = reverse('main:home_page')

    def test_http_get(self):
        response = self.client.get(self.url)
        self.assertEqual(response.status_code, 200)
