import matplotlib.pyplot as plt
import os
from django.conf import settings

def save_plot(filename):
    if not os.path.exists(settings.MEDIA_ROOT):
        os.makedirs(settings.MEDIA_ROOT)
    
    file_path = os.path.join(settings.MEDIA_ROOT, filename)
    plt.savefig(file_path)
    plt.close()
    return os.path.join(settings.MEDIA_URL, filename).replace('\\', '/')
