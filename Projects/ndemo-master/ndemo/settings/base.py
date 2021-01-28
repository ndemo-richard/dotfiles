from ndemo.settings.common import *

SECRET_KEY = 'l6ypqe5be68n@b40+(9yo0!0e9j*o-8(+2)^^mg173*cy=tybn'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['127.0.0.1']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}
