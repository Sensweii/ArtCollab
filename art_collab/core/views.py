from django.views.generic import TemplateView

from logos.models import Logo


class HomeView(TemplateView):
    """View for home page."""
    template_name = 'homepage.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        logo_queryset = Logo.objects.all()
        context['logos'] = list(
            logo_queryset.values('id', 'author_id', 'name', 'image'))
        return context
